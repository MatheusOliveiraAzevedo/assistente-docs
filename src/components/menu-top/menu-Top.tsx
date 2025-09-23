"use client";

import { useTheme } from "@/shared/useContext/themeContext";
import Image from "next/image";

export default function MenuTop() {
    const { toggleTheme } = useTheme();
    return (
        <section className="flex flex-row items-center justify-between px-8 py-6">
            <div className="flex flex-row items-center justify-center gap-4">
                <Image src="/vercel.svg" alt="Vercel Logo" width={50} height={24} />
                <h1 className="text-2xl font-bold">Assistente Docs</h1>
            </div>
            <button className="text-2xl px-3 py-1 bg-gray-700 rounded-2xl" onClick={toggleTheme}>Alterar tema</button>
        </section>
    );
}