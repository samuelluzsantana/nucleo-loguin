import { MailService } from 'mailjs'

export const enviarEmail = async (
  nome: string,
  email: string,
  assunto: string,
  texto: string
) => {
  const emailService = new MailService({
    publicKey: import.meta.env.VITE_EMAIL_SERVICE_ID, // Substitua pela variável de ambiente
    accessToken: import.meta.env.VITE_TEMPLATE_ID, // Substitua pela variável de ambiente
  })

  try {
    const response = await emailService.sendEmail({
      from: email,
      to: 'contato@nucleologuin.com.br',
      subject: assunto,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem: ${texto}`,
    })

    console.log('Email enviado com sucesso:', response)
  } catch (error) {
    console.error('Erro ao enviar email:', error)
  }
}
