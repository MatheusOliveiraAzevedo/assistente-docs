"use client";

import { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ButtonDefault from "../button-default/button-default";
import { useConversation } from "@/shared/useContext/conversationContext";
import Spinner from "../spinner/spinner";

export default function InputConversation() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File[] | null>(null);
    const [textFile, setTextFile] = useState<string>("");
    const { setConversation } = useConversation();  
    const [textAreaContent, setTextAreaContent] = useState<string>("");
    const [loadingAI, setLoadingAI] = useState<boolean>(false);
    const [loadingAttachment, setLoadingAttachment] = useState<boolean>(false);
    const sendButton = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingAttachment(true);
        if (event.target.files) {
            const newFile: File[] = Array.from(event.target.files)
            setFile(newFile);

            const formData = new FormData();
            formData.append('file', newFile[0]);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData
            });

            if (!res.ok) {
                const error = await res.text();
                console.error("Erro ao enviar o arquivo",error);
                return;
            }

            const data = await res.json();
            setTextFile(data.text);
        }
        setLoadingAttachment(false);
    }

    const handleSend = async () => {
        if (file && textFile !== "") {
            setLoadingAI(true);
            setConversation(prev => [...prev, { role: "user", content: textAreaContent, time: new Date() }])
            setTextAreaContent("");

            const res = await fetch("/api/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: textAreaContent, docText: textFile })
            })


            if (!res.ok) {
                const error = await res.text();
                console.error("Erro ao enviar o arquivo",error);
                return;
            }

            const { answer } = await res.json();
            console.log("Resposta",answer);
            setConversation(prev => [...prev, { role: "assistant", content: answer, time: new Date() }])
            setLoadingAI(false);
        } else {
            setConversation(prev => [...prev, { role: "assistant", content: 'Envie um documento PDF para que eu possa responder!', time: new Date()}])
        }
    }

    const hendleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendButton.current?.click();
        }
    }

    return (
        <section className="flex h-[170px] flex-col items-center gap-2 justify-center w-full border-2 border-gray-700 rounded-2xl px-3 py-2">
            <div className="flex flex-row items-center justify-center gap-4  w-full">
                <TextareaAutosize onKeyDown={hendleKeyDown} onChange={(e) => setTextAreaContent(e.target.value)} value={textAreaContent} className="flex-1 resize-none p-3 focus:outline-none" minRows={4} maxRows={8} placeholder="Digite sua pergunta..."></TextareaAutosize>
                <div className="flex relative flex-col gap-2 w-[80px] py-3">
                    <ButtonDefault ref={sendButton} size="lg" onClick={handleSend}>
                    {loadingAI ?
                        <Spinner />
                        :
                        "Enviar"
                    }
                        </ButtonDefault>
                    <ButtonDefault size="lg" type="secondary" onClick={handleClick}>Anexo</ButtonDefault>
                    <input className="hidden" type="file" accept=".pdf" ref={fileInputRef} onChange={handleFileChange}/>
                </div>
            </div>
            {loadingAttachment ? <Spinner /> : (file && file.length > 0) && <small className="truncate">{file[0]?.name}</small>}
        </section>
    )
}
