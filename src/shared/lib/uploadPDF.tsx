

export async function uploadPDF(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
        method: "POST",
        body: formData
    });

    if (!res.ok) throw new Error("Erro ao enviar o PDF");
    return res.json();
}