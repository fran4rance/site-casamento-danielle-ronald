// api/upload.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const data = Buffer.concat(chunks);
  const base64Image = data.toString('base64');

  // Aqui você poderia enviar para o ImgBB, Google Drive etc.
  // Neste exemplo, só responde com sucesso para teste
  return res.status(200).json({ message: 'Imagem recebida!', size: data.length });
}
