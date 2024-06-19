import empresaBgMobile from '@/assets/bg/empresa-bg-mobile.png'
import empresaBgWeb from '@/assets/bg/empresa-bg-web.png'
import Button from '@/components/Button'
import { Call, Sms } from 'iconsax-react'

export default function Contato() {
  const isMobile = window.innerWidth < 700

  return (
    <>
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
              Estamos prontos para responder às suas dúvidas e fornecer informações
              detalhadas sobre o Sistema GI_Gráfica Inteligente. Utilize o formulário
              abaixo ou entre em contato diretamente pelos seguintes meios:
            </p>
          </div>

          <div className='icons md: mt-8 flex w-full flex-col items-start text-white md:flex-row md:items-center'>
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
              type='text'
              placeholder='Nome'
              className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            />
            <textarea
              placeholder='Mensagem'
              className='h-40 w-full resize-none rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-loguin-red'
            ></textarea>
          </div>
          <div className='button-confira mt-[2em]'>
            <Button>Enviar Mensagem</Button>
          </div>
        </div>
      </div>
    </>
  )
}
