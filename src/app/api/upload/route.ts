// @ts-expect-error: pdf-parse não fornece tipagem oficial em TS
import pdf from "pdf-parse/lib/pdf-parse.js";
import { NextResponse } from 'next/server';
export const runtime = "nodejs";


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
    
        if (!file) {
            return new Response('No file uploaded', { status: 400 });
        }
    
        const arrayBuffer = await file.arrayBuffer();
        
        const buffer = Buffer.from(arrayBuffer);
    
        const data = await pdf(buffer)
    
        return NextResponse.json({
            text: data.text,
            pages: data.numPages,
            info: data.info
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Erro desconhecido" }, { status: 500 });
    }
}