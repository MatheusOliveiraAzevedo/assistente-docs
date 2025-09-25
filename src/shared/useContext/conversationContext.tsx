"use client"
import React, { createContext, useContext, useState } from "react";

type RoleType = 'user' | 'assistant'
export type ConversationType = {
    role: RoleType,
    content: string,
    time: Date
}
type ConversarionContextType = {
    conversation: ConversationType[],
    setConversation: React.Dispatch<React.SetStateAction<ConversationType[]>>
}

const ConversarionContext = createContext<ConversarionContextType | undefined>(undefined);

export function ConversationProvider({ children }: any) {
    const [conversation, setConversation] = useState<ConversationType[]>([]);

    return (
        <ConversarionContext.Provider value={{conversation, setConversation}}>
            {children}
        </ConversarionContext.Provider>
    )
}

export function useConversation() {
    const context = useContext(ConversarionContext);
    if (!context) {
        throw new Error('useConversation must be used within a ConversationProvider');
    }
    return context;
}