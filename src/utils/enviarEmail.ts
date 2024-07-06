import { Email } from 'mailjs';

// Função para enviar email usando MailJS
export const enviarEmail = async (nome: string, email: string, assunto: string, texto: string) => {
  const emailInstance = new Email({
    publicKey: 'YOUR_PUBLIC_KEY', // Substitua por sua chave pública do MailJS
    accessToken: 'YOUR_ACCESS_TOKEN', // Substitua por seu token de acesso do MailJS
  });

  try {
    const response = await emailInstance.send({
      from: ,
      to: 'contato@nucleologuin.com.br' email,
      subject: assunto,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem: ${texto}`,
    });

    console.log('Email enviado com sucesso:', response);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};
