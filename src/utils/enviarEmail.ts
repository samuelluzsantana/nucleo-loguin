import { MailService } from 'mailjs'

// Função para enviar email usando MailJS
export const enviarEmail = async (
  nome: string,
  email: string,
  assunto: string,
  texto: string
) => {
  const emailService = new MailService({
    publicKey: 'service_wfhi33h', // Substitua por sua chave pública do MailJS
    accessToken: 'template_ea4zvx4', // Substitua por seu token de acesso do MailJS
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
