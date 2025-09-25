"use client"
import { useConversation } from "@/shared/useContext/conversationContext"

export default function CardConversation() {
    const { conversation } = useConversation();
    return (
        <section className="flex flex-1 flex-col gap-9 p-6 overflow-y-auto">
            {conversation.map((item, index) => (
                <div key={index} className={`flex flex-col gap-3 ${item.role === "user" ? "self-end items-end" : "self-start items-start"} `}>
                    <div className={`flex flex-col gap-1 px-6 py-2 ${item.role === "user" ? "bg-blue-500 text-white rounded-4xl" : ""} `}>
                        <span className="text-sm">{item.content}</span>
                    </div>
                    {item.role === "user" && 
                        <div className={`flex flex-row gap-1 items-end`}>
                            <span className="text-[12px] font-bold">{item.role === "user" ? "Você" : "GPT"}</span>
                            <span className="text-[10px]">{item.time.toLocaleTimeString().slice(0, 5)}</span>
                        </div>
                    }
                </div>
            ))}

        </section>
    )
}