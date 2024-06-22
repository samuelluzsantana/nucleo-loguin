import { Helmet } from 'react-helmet'

import Background from '@/assets/bg/3690578.png'
import emailjs from '@emailjs/browser'

// components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Call, Sms } from 'iconsax-react'
import { useState } from 'react'
import Button from '@/components/Button'

// assets

export default function ContatoPage() {
  const pageTitle = 'Contato'

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [texto, setTexto] = useState('')

  // configurar dps
  const enviarEmail = () => {
    // https://www.emailjs.com/
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: nome,
          from_email: email,
          message: texto,
        },
        'YOUR_USER_ID'
      )
      .then(
        result => {
          alert('Email enviado com sucesso!' + result.text)
        },
        error => {
          console.log('Erro ao enviar email:' + error.text)
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
          <h1 className='text-5xl font-semibold md:text-6xl'>Contato</h1>

          <p className='text-1xl mt-4 md:text-3xl'>Fale Conosco</p>
        </div>

        <div className='o-sistema mt-[12em] w-full px-16 text-loguin-blue'>
          <div className='texto md:w-[30em]'>
            <div className='text-fale-conosoco flex flex-col items-center pt-[10em] md:pt-0'>
              <h3 className='text-3xl font-bold'>Fale Conosco</h3>
              <p className='mt-4 text-justify font-normal'>
                Estamos prontos para responder às suas dúvidas e fornecer informações
                detalhadas sobre o Sistema GI_Gráfica Inteligente. Utilize o formulário
                abaixo ou entre em contato diretamente pelos seguintes meios:
              </p>
            </div>

            <div className='icons md: mt-8 flex w-full flex-col items-start md:flex-row md:items-center'>
              <div className='telefone flex w-full items-center hover:text-loguin-red'>
                <Call size='32' variant='Bold' />
                <a
                  href='tel:1126264126'
                  className='ml-4 font-medium transition-colors duration-300'
                >
                  11 2626-4126
                </a>
              </div>

              <div className='email mt-4 flex w-full items-center hover:text-loguin-red md:mt-0'>
                <Sms size='32' variant='Bold' />
                <a
                  href='mailto:contato@nucleologuin.com.br'
                  className='ml-4 font-medium transition-colors duration-300'
                >
                  contato@nucleologuin.com.br
                </a>
              </div>
            </div>
          </div>

          <div className='inputs md:w-[40em]'>
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
              <textarea
                placeholder='Mensagem'
                value={texto}
                onChange={e => setTexto(e.target.value)}
                className='h-40 w-full resize-none rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
              ></textarea>
            </div>

            <div className='button-confira my-[2em]'>
              <Button disabled onClick={enviarEmail}>
                Enviar Mensagem
              </Button>
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
