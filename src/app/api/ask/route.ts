import { encodingForModel, TiktokenModel } from "js-tiktoken";
import OpenAI from "openai";

const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const modelOpenAI = "gpt-4o-mini"

function truncateTextTokens(text: string, model: TiktokenModel = modelOpenAI, maxTokens = 5000) {
    const enc = encodingForModel(model);
    const tokens = enc.encode(text);

    if (tokens.length <= maxTokens) return text;
    const truncatedTokens = tokens.slice(0, maxTokens);
    return enc.decode(truncatedTokens);
}

export async function POST(req: Request) {

    try {
        const { question, docText } = await req.json();

        const textEdit = truncateTextTokens(docText);

        const response = await openAi.chat.completions.create({
            model: modelOpenAI,
            messages: [
                {
                    role: "system",
                    content: "Você é um assistente que responde apenas com base no documento fornecido."
                },
                {
                    role: "user",
                    content: `Documento: \n${textEdit}\n\nPergunta: ${question}`
                }
            ],
            temperature: 0.5,
            max_tokens: 512
        })

        return new Response(JSON.stringify({ answer: response.choices[0].message?.content || "Não encontrei uma resposta." }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Erro ao conectar ao servidor" }), { status: 500 });
    }
}