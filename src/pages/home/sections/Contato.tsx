import empresaBgMobile from '@/assets/bg/empresa-bg-mobile.png'
import empresaBgWeb from '@/assets/bg/empresa-bg-web.png'
import Button from '@/components/Button'
import { Call, Sms, Whatsapp } from 'iconsax-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function Contato() {
  const isMobile = window.innerWidth < 700

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [texto, setTexto] = useState('')
  const [assunto, setAssunto] = useState('')
  const [error, setError] = useState('') // Estado para mensagens de erro

  const formatTelefone = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, '')

    // Format the number
    if (digits.length <= 2) {
      return `(${digits}`
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
    }
  }

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedTelefone = formatTelefone(e.target.value)
    setTelefone(formattedTelefone)
  }

  const enviarEmail = e => {
    e.preventDefault()

    // Verificar se todos os campos estão preenchidos
    if (!nome || !email || !telefone || !assunto || !texto) {
      setError('Por favor, preencha todos os campos.')
      toast.info('Por favor, preencha todos os campos.')

      return
    }

    const templateParams = {
      user_name: nome,
      user_email: email,
      user_telefone: telefone,
      assunto: assunto,
      message: texto,
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      )
      .then(
        response => {
          console.log('Email enviado com sucesso:', response)
          // Limpar os campos após o envio
          setNome('')
          setEmail('')
          setTelefone('')
          setTexto('')
          setAssunto('')
          setError('') // Limpar mensagem de erro

          toast.success('Email enviado com sucesso!')
        },
        error => {
          console.error('Erro ao enviar email:', error)
          toast.error('Não foi possível enviar o email, por favor tente mais tarde.')
        }
      )
  }

  return (
    <div
      className='transforme relative z-[9] mt-[-1em] flex h-[65em] flex-col px-8 md:h-[50em] md:flex-row md:items-center md:justify-evenly md:px-[5em]'
      style={{
        backgroundImage: isMobile ? `url(${empresaBgMobile})` : `url(${empresaBgWeb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='texto md:w-[30em]'>
        <div className='text-fale-conosoco flex flex-col items-center pt-[10em] text-white md:pt-0'>
          <h3 className='text-3xl font-bold'>Fale Conosco</h3>
          <p className='mt-4 text-justify font-normal'>
            Se você quer conhecer mais sobre o nosso software ou tem alguma dúvida, entre
            em contato através de um dos nossos canais.
          </p>
        </div>

        <div className='icons md: mt-8 flex w-full flex-col items-start text-white md:items-center'>
          <div className='telefone flex w-full items-center hover:text-loguin-red'>
            <Call size='32' variant='Bold' />
            <a
              href='tel:1126264126'
              className='ml-4 font-medium transition-colors duration-300'
            >
              +55 11 2626-4126
            </a>
          </div>

          <div className='email mt-4 flex w-full items-center hover:text-loguin-red'>
            <Sms size='32' variant='Bold' />
            <a
              href='mailto:contato@nucleologuin.com.br'
              className='ml-4 font-medium transition-colors duration-300'
            >
              contato@nucleologuin.com.br
            </a>
          </div>

          <div className='whatsapp mt-4 flex w-full items-center hover:text-loguin-red'>
            <Whatsapp size='32' variant='Bold' />
            <a
              href='https://wa.me/5511995106712?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20*GI_Gr%C3%A1fica%20Inteligente*'
              target='_blank'
              className='ml-4 font-medium transition-colors duration-300'
            >
              +55 11 99510-6712
            </a>
          </div>
        </div>
      </div>

      <form className='inputs md:w-[40em]' onSubmit={enviarEmail}>
        <div className='mt-8 flex flex-col space-y-4 rounded-lg'>
          <input
            value={nome}
            type='text'
            placeholder='Nome'
            className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            onChange={e => setNome(e.target.value)}
            name='user_name'
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            name='user_email'
          />

          <input
            type='tel'
            placeholder='Telefone'
            value={telefone}
            onChange={handleTelefoneChange}
            className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            name='user_telefone'
            maxLength={15}
          />

          <input
            type='text'
            placeholder='Assunto'
            value={assunto}
            onChange={e => setAssunto(e.target.value)}
            className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            name='assunto'
          />

          <textarea
            placeholder='Mensagem'
            value={texto}
            onChange={e => setTexto(e.target.value)}
            className='h-40 w-full resize-none rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            name='message'
          ></textarea>

          {/* Mensagem de erro */}
          {error && <p className='text-red-500'>{error}</p>}
        </div>

        <div className='flex w-full justify-center'>
          <div className='button-confira mt-[2em] w-[15em]'>
            <Button type='submit'>Enviar Mensagem</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
