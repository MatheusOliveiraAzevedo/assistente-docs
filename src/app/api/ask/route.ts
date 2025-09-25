import OpenAI from "openai";

const client = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
});

export async function POST(req: Request) {
    const { question, docText } = await req.json();

    const completion = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [
            { role: "system", content: "Você é um assistente que responde apenas com base no docmento fornecido."},
            { role: "user", content: `Documento: ${docText}\n\nPergunta: ${question}` }
        ]
    })

    return Response.json({ answer: completion.choices[0].message.content })
}