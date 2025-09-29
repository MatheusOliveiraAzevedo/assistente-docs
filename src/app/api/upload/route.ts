// @ts-expect-error: pdf-parse não fornece tipagem oficial em TS
import pdf from "pdf-parse/lib/pdf-parse.js";
import { NextResponse } from 'next/server';
import { supabase } from "@/shared/lib/superbaseClient";
export const runtime = "nodejs";


export async function POST(req: Request) {
    try {
        const { path } = await req.json();
    
        if (!path) return new Response('No file uploaded', { status: 400 });
    
        const { data, error } = await supabase.storage
            .from('Docs')
            .download(path);

        if (error) return new Response('No file uploaded ' + error.message, { status: 400 });
        
        const buffer = Buffer.from(await data.arrayBuffer());
    
        const pdfData = await pdf(buffer)

        await supabase.storage
            .from('Docs')
            .remove([path]);
    
        return NextResponse.json({
            text: pdfData.text,
            pages: pdfData.numPages,
            info: pdfData.info
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Erro desconhecido" }, { status: 500 });
    }
}