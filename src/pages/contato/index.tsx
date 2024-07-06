import { Helmet } from 'react-helmet'
import Background from '@/assets/bg/3690578.png'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Call, Sms, Whatsapp } from 'iconsax-react'
import { useState } from 'react'
import Button from '@/components/Button'
import { enviarEmail } from '@/utils/enviarEmail'

export default function ContatoPage() {
  const pageTitle = 'Contato'

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [texto, setTexto] = useState('')
  const [assunto, setAssunto] = useState('')

  const handleEnviarEmail = async () => {
    await enviarEmail(nome, email, assunto, texto)
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
          <h1 className='text-5xl font-semibold md:text-6xl'>Contato</h1>
          <p className='text-1xl mt-4 md:text-3xl'>Fale Conosco</p>
        </div>

        <div className='o-sistema mt-[12em] flex w-full flex-col items-center px-16 text-loguin-blue md:mb-[10em] md:mt-[25em]'>
          <div className='texto md:w-[30em]'>
            <div className='text-fale-conosoco flex flex-col items-center pt-[10em] md:pt-0'>
              <h3 className='text-3xl font-bold'>Fale Conosco</h3>
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
                  href='https://wa.me/5511995106712?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20*GI_Gr%C3%A1fica%20Inteligente*'
                  target='_blank'
                  className='ml-4 font-medium transition-colors duration-300'
                >
                  +55 11 995106712
                </a>
              </div>
            </div>
          </div>

          <div className='inputs w-full md:w-[40em]'>
            <div className='mt-8 flex flex-col space-y-4 rounded-lg'>
              <input
                value={nome}
                type='text'
                placeholder='Nome'
                className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
                onChange={e => setNome(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
              />

              <input
                type='text'
                placeholder='Assunto'
                value={assunto}
                onChange={e => setAssunto(e.target.value)}
                className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
              />

              <textarea
                placeholder='Mensagem'
                value={texto}
                onChange={e => setTexto(e.target.value)}
                className='h-40 w-full resize-none rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
              ></textarea>
            </div>

            <div className='button-confira my-[2em]'>
              <Button onClick={handleEnviarEmail}>Enviar Mensagem</Button>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}
