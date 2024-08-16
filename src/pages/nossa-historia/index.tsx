import { Helmet } from 'react-helmet'
// components
import Header from '@/components/Header'

// assets
import Background from '@/assets/bg/3689631.png'
import hands from '@/assets/bg/3689694.png'

import pcbg2 from '@/assets/bg/sistemaa.png'

import { MdGroups2, MdModeComment } from 'react-icons/md'

import { FaRocket } from 'react-icons/fa6'
import { BiSolidBinoculars } from 'react-icons/bi'

import { TbStarFilled } from 'react-icons/tb'
import Footer from '@/components/Footer'

export default function NossaHistoria() {
  const pageTitle = 'Nossa Historia'

  const icones = [
    {
      icon: <FaRocket className='mb-2 text-4xl text-loguin-red' />,
      title: 'MISSÃO',
      description:
        'Otimizar todos os processos de nossos clientes com a implementação do nosso sistema de gestão integrada, gerando os melhores resultados em todas as etapas.',
    },
    {
      icon: <BiSolidBinoculars className='mb-2 text-4xl text-loguin-red' />,
      title: 'VISÃO',
      description: 'Ser referência de sistema de gestão integrada na indústria gráfica.',
    },
    {
      icon: <TbStarFilled className='mb-2 text-4xl text-loguin-red' />,
      title: 'VALORES',
      description:
        'Entendimento das necessidades específicas de cada cliente, comunicação simples e direta, melhorias constantes, relações de confiança e parceria.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header />

      <img
        src={Background}
        className='relative bottom-[7em] h-[30em] w-full select-none'
        alt='Background generico com graficos e estatisticas com um fundo vermelho'
      />

      <div className='absolute top-[10em] z-10 flex w-full flex-col items-center justify-center text-white md:items-start'>
        <div className='flex w-full flex-col'>
          <div className='texto-header h-fulll flex w-full items-center justify-center px-8 md:px-16'>
            <h1 className='text-center text-5xl font-semibold uppercase md:text-6xl'>
              Conheça o Núcleo Loguin
            </h1>
          </div>

          <div className='md: mb-[5em] mt-[20em] px-8 md:mb-[10em] md:mt-[30em] md:px-[12em]'>
            <div className='flex flex-col items-center text-loguin-blue'>
              <p className='mb-4 text-center text-2xl font-semibold md:md:text-[2rem] md:text-4xl'>
                <span className='mr-[1rem] text-loguin-red'>PIONEIRISMO</span>
                NA INDÚSTRIA GRÁFICA
              </p>
              <p className='text-justify md:text-[1.4rem]'>
                Iniciamos nossos trabalhos em 1998, sempre ligados à indústria gráfica.
                Fomos pioneiros no uso ERP (do inglês “Enterprise Resource Planning”, ou
                Planejamento de Recursos Empresariais), um sistema de informação que
                integra todos os dados e processos de uma organização em um único sistema.
              </p>
            </div>
          </div>

          <div className='imagens mt-8 w-full bg-loguin-blue'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
              <div className='h-[30em] w-full bg-red-900'>
                <img
                  src={hands}
                  className='h-[30em] w-full select-none'
                  alt='Grafico vermelho'
                />
              </div>
              <div className='h-[30em] w-full bg-loguin-blue'>
                <div className='flex h-full w-full flex-col items-center justify-center px-12'>
                  <MdGroups2 size={70} className='mb-2 text-3xl text-loguin-red' />
                  <h2 className='mb-4 text-2xl font-semibold text-white'>SOBRE NÓS</h2>
                  <p className='w-full text-justify text-white'>
                    Nossa equipe é formada por profissionais altamente qualificados da
                    indústria gráfica e da tecnologia da informação – uma junção que
                    garante um atendimento especializado e experiente.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex w-full flex-col-reverse md:flex-row'>
              <div className='h-[30em] w-full bg-loguin-blue'>
                <div className='flex h-full w-full flex-col items-center justify-center px-12'>
                  <MdModeComment size={70} className='mb-2 text-3xl text-loguin-red' />
                  <h2 className='mb-4 text-2xl font-semibold text-white'>
                    O NÚCLEO LOGUIN
                  </h2>
                  <p className='w-full text-justify text-white'>
                    Os gráficos formam boa parte de nossa equipe. Temos também
                    profissionais de TI, é claro! Juntos gráficos e TIs sabem como
                    funciona uma gráfica e podem ajudar com suporte e customizações!
                  </p>
                </div>
              </div>
              <div className='h-[30em] w-full bg-orange-900'>
                <img
                  src={pcbg2}
                  className='h-[30em] w-full select-none'
                  alt='Tela do PC'
                />
              </div>
            </div>
          </div>

          <div className='icones my-[4em] flex h-[60em] w-full flex-col items-center justify-evenly gap-4 md:h-[20em] md:flex-row md:items-start'>
            {icones.map((item, index) => (
              <div
                key={index}
                className='mb-4 flex h-full w-[10em] flex-col items-center justify-center text-center md:justify-start'
              >
                <div className=''>{item.icon}</div>
                <h2 className='mt-4 text-2xl font-medium text-loguin-blue md:text-3xl'>
                  {item.title}
                </h2>
                <p className='mt-4 text-loguin-blue md:text-[1rem]'>{item.description}</p>
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
