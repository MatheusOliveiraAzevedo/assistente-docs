"use client"
import React, { createContext, ReactNode, useContext, useState } from "react";

type RoleType = 'user' | 'assistant' | 'error' | 'warning' | 'attachment'
export type ConversationType = {
    role: RoleType,
    content: string,
    time: Date
}
type ConversarionContextType = {
    conversation: ConversationType[],
    setConversation: React.Dispatch<React.SetStateAction<ConversationType[]>>
}

type ConversationProviderProps = {
    children: ReactNode
}

const ConversarionContext = createContext<ConversarionContextType | undefined>(undefined);

export function ConversationProvider({ children }: ConversationProviderProps) {
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