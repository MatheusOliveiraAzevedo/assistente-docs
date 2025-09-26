"use client"
import { useConversation } from "@/shared/useContext/conversationContext"
import { CircleAlert, FileText, TriangleAlert } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CardConversation() {
    const { conversation } = useConversation();
    const endOfMessages = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endOfMessages.current?.scrollIntoView({ behavior: "smooth"});
    }, [conversation]);

    return (
        <section className="flex flex-1 flex-col gap-9 p-6 overflow-y-auto">
            {conversation.map((item, index) => (
                <div key={index} className={`flex ${item.role === "error" || item.role === "warning" || item.role === "attachment" ? "flex.row" : "flex-col"} gap-3 ${item.role === "user" ? "self-end items-end" : "self-start items-center"} `}>
                    <div className={`flex flex-col gap-1 px-6 py-2 ${item.role === "user" ? "bg-blue-500 text-white rounded-4xl" : item.role === "error" ? "bg-red-500/10 text-red-400 rounded-4xl" : item.role === "warning" ? "bg-yellow-500/10 text-yellow-600 rounded-4xl" : item.role === "attachment" ? "bg-green-500/10 text-green-600 rounded-lg" :""} `}>
                        <span className="text-sm">{item.content}</span>
                    </div>
                    {item.role === "error" && 
                        <CircleAlert className="text-red-400"/>
                    }
                    {item.role === "warning" && 
                        <TriangleAlert className="text-yellow-600"/>
                    }
                    {item.role === "attachment" && 
                        <FileText className="text-green-600"/>
                    }
                    {item.role === "user" && 
                        <div className={`flex flex-row gap-1 items-end`}>
                            <span className="text-[12px] font-bold">{item.role === "user" ? "Você" : "GPT"}</span>
                            <span className="text-[10px]">{item.time.toLocaleTimeString().slice(0, 5)}</span>
                        </div>
                    }
                </div>
            ))}
            <div ref={endOfMessages}/>
        </section>
    )
}