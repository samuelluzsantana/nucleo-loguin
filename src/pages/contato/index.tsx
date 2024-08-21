import { Helmet } from 'react-helmet'
import Background from '@/assets/bg/3690578.png'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Call, Sms, Whatsapp } from 'iconsax-react'
import { useRef, useState } from 'react'
import Button from '@/components/Button'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function ContatoPage() {
  const pageTitle = 'Contato'
  const form = useRef()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('') // Novo campo de telefone
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

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        response => {
          console.log('Email enviado com sucesso:', response)
          // Limpar os campos após o envio
          setNome('')
          setEmail('')
          setTelefone('') // Limpar o campo telefone
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
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Header />

      <img
        src={Background}
        className='relative bottom-[7em] h-[40em] w-full select-none'
        alt='Background generico com graficos e estatisticas com um fundo vermelho'
      />

      <div className='absolute top-[15em] z-10 flex w-full flex-col items-center justify-center md:items-start'>
        <div className='texto-header h-fulll flex w-full flex-col items-center justify-center text-white md:px-16'>
          <h1 className='text-5xl font-semibold uppercase md:text-6xl'>Contato</h1>
          <p className='text-1xl mt-4 uppercase md:text-3xl'>Fale Conosco</p>
        </div>

        <div className='o-sistema mt-[12em] flex w-full flex-col items-center px-16 text-loguin-blue md:mb-[10em] md:mt-[25em]'>
          <div className='texto md:w-[30em]'>
            <div className='text-fale-conosoco flex flex-col items-center pt-[10em] md:pt-0'>
              <h3 className='text-3xl font-bold uppercase'>Fale Conosco</h3>
              <p className='mt-4 text-justify font-normal'>
                Se você quer conhecer mais sobre o nosso software ou tem alguma dúvida,
                entre em contato através de um dos nossos canais.
              </p>
            </div>

            <div className='icons md: mt-8 flex w-full flex-col items-start md:items-center'>
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

              <div className='email mt-4 flex w-full items-center hover:text-loguin-red'>
                <Whatsapp size='32' variant='Bold' />
                <a
                  href='https://wa.me/5511995106712?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20*GI_Gr%C3%A1fica%20Inteligente*'
                  target='_blank'
                  className='ml-4 font-medium transition-colors duration-300'
                >
                  +55 11 99510-6712
                </a>
              </div>
            </div>

            <form ref={form} onSubmit={enviarEmail} className='inputs w-full md:w-[40em]'>
              <div className='mt-8 flex flex-col space-y-4 rounded-lg'>
                <input
                  type='text'
                  placeholder='Nome'
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
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
                <div className='button-confira my-[2em] w-[15em]'>
                  <Button type='submit'>Enviar Mensagem</Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}
