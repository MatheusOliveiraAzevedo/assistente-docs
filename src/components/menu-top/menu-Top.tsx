"use client";

import { useTheme } from "@/shared/useContext/themeContext";
import { Brain, Moon, Sun } from "lucide-react";

export default function MenuTop() {
    const { theme, toggleTheme } = useTheme();
    return (
        <section className="flex flex-row items-center justify-between px-8 py-6 w-full">
            <div className="flex flex-row items-center justify-center gap-4">
                <Brain size={30}/>
                <h1 className="text-2xl font-bold">DocAI</h1>
            </div>
            <div className="hover:cursor-pointer hover:scale-110 hover:animate-bounce" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={30} /> : <Moon size={30} />}
            </div>
        </section>
    );
}