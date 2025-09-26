"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = 'dark' | 'light';

type ThemeContextType = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>,
    toggleTheme: () => void
}

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) setTheme(savedTheme);

        document.body.classList.toggle('theme-dark', savedTheme === 'dark');
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('theme-dark', newTheme === 'dark');
    }
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}


