

export async function uploadPDF(filePath: string) {

    const res = await fetch(`/api/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: filePath})
    });

    if (!res.ok) throw new Error("Erro ao enviar o PDF");
    return res.json();
}