

export async function uploadPDF(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`/api/upload`, {
        method: "POST",
        body: formData
    });

    if (!res.ok) throw new Error("Erro ao enviar o PDF");
    return res.json();
}