"use client";

import { useTheme } from "@/shared/useContext/themeContext";
import { Box, Modal } from "@mui/material";
import { Brain, CircleQuestionMark, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import ButtonDefault from "../button-default/button-default";

export default function MenuTop() {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

    return (
        <div className="flex flex-col justify-center items-center bg-[var(--background)] h-[100px] w-full shadow-lg sticky top-0 left-0">
            <section className="flex flex-row items-center justify-between px-8 py-6 w-full containtment">
                <div className="flex flex-row items-center justify-center gap-4">
                    <Brain size={30}/>
                    <h1 className="text-2xl font-bold">DocAI</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <div title='Ajuda' onClick={() => setOpen(true)}>
                        <CircleQuestionMark size={30}/>
                    </div>
                    <div className="hover:cursor-pointer hover:scale-110 hover:animate-bounce" onClick={toggleTheme}>
                    {theme === "dark" ? <Sun size={30} /> : <Moon size={30} />}
                    </div>
                </div>
            </section>

            <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[var(--background)] border-0 shadow-2xl rounded-2xl p-6 w-7/8 lg:w-1/2 focus:outline-none flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Bem-vindo ao DocAI!</h1>
                    <span>O DocAI é um assistente inteligente projetado para facilitar a interação com documentos. Com ele, você pode:</span>
                    <ul className="flex flex-col gap-1">
                        <li>•	Fazer perguntas sobre qualquer documento PDF carregado, obtendo respostas rápidas e precisas.</li>
                        <li>•	Explorar informações importantes sem precisar ler o documento inteiro.</li>
                        <li>•	Ganhar produtividade ao organizar e acessar conteúdo relevante em segundos.</li>
                    </ul>
                    <ButtonDefault onClick={() => setOpen(false)}>Ok</ButtonDefault>
                </Box>
            </Modal>
        </div>
    );
}