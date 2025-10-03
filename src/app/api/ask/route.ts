import { encodingForModel, TiktokenModel } from "js-tiktoken";
import OpenAI from "openai";

const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const modelOpenAI = "gpt-4o-mini"
let tokensAll
let tokensAllOld

function truncateTextTokens(text: string, model: TiktokenModel = modelOpenAI, maxTokens = 5000) {
    const enc = encodingForModel(model);
    const tokens = enc.encode(text);
    tokensAllOld = tokens

    if (tokens.length <= maxTokens) return text;
    const truncatedTokens = tokens.slice(0, maxTokens);
    tokensAll = truncatedTokens
    return enc.decode(truncatedTokens);
}

export async function POST(req: Request) {

    try {
        let { question, docText } = await req.json();
        const oldDoc = docText.length

        docText = truncateTextTokens(docText);

        const response = await openAi.chat.completions.create({
            model: modelOpenAI,
            messages: [
                {
                    role: "system",
                    content: "Você é um assistente que responde apenas com base no documento fornecido."
                },
                {
                    role: "user",
                    content: `Documento: \n${docText}\n\nPergunta: ${question}`
                }
            ],
            temperature: 0.5,
            max_tokens: 512
        })

        return new Response(JSON.stringify({ answer: response.choices[0].message?.content || "Não encontrei uma resposta.", tokens: tokensAll.length, tokensOld: tokensAllOld.length, doc: docText.length, oldDoc: oldDoc }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Erro ao conectar ao servidor" }), { status: 500 });
    }
}