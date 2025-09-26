"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type LoaderProviderProps = {
    children: ReactNode
}

type LoaderContextType = {
    loadingLoader: boolean,
    setLoadingLoader: Dispatch<SetStateAction<boolean>>
}

const LoaderContext = createContext<LoaderContextType | null>(null)

export function LoaderProvider({ children }: LoaderProviderProps) {
    const [loadingLoader, setLoadingLoader] = useState<boolean>(false);

    return (
        <LoaderContext.Provider value={{ loadingLoader, setLoadingLoader}}>
            {children}
        </LoaderContext.Provider>
    )
}


export function useLoader() {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
}