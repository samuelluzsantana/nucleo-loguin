import { Helmet } from 'react-helmet'
import { Accordion, AccordionTab } from 'primereact/accordion'

import Background from '@/assets/bg/new-bg.png'
import assets from '@/assets/bg/assets.png'
import assets2 from '@/assets/bg/assets2.png'

// components
import Header from '@/components/Header'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

export default function Faq() {
  const pageTitle = 'Dúvidas Frequentes'

  // Array de perguntas e respostas
  const duvidas = [
    {
      pergunta: 'Todos os softwares são iguais?',
      resposta:
        'Há pelo menos 3 categorias de softwares. Os mais avançados são os ERPs com funções totalmente integradas entre si, e operam sem perder informações, com muita segurança. Todas as atividades são permitidas por senhas. Etapas ‘fechadas’ só podem ser reabertas com autorização superior.',
    },
    {
      pergunta:
        'O que os softwares de primeira linha oferecem de vantagem sobre os demais?',
      resposta:
        'Informações em tempo real para clientes externos e internos. Agilidade na consulta. Dados seguros, precisos!',
    },
    {
      pergunta: 'Posso diversificar minha produção com o GI_Gráfica Inteligente?',
      resposta:
        'O GI é um ERP de primeira linha e de amplo espectro. Atende a todos os segmentos e processos da indústria gráfica. Aplica-se a gráficas de qualquer porte. Se uma empresa decide investir em novo segmento, qualquer que seja, o GI atende. Se a empresa decide mudar de segmento não precisa mudar de software.',
    },

    {
      pergunta: 'O GI me avisa sobre os materiais e insumos a serem usados numa OP?',
      resposta:
        'Sim, não há perigo de iniciar a produção faltando algum dos componentes que integrem a OP. O orçamento detalhado transforma-se na OP, sem valores (preços e custos) com todas as informações registradas: características do impresso, montagem mais adequada, número de chapas, quantidades de tintas, entre tantas.',
    },

    {
      pergunta: 'Consigo criar padrões de produtos?',
      resposta:
        'O GI dispõe de um gerador de EPs – Engenharia de Produto ou Especificação de Produto, automático que registra a melhor forma de produzir. Para iniciar a produção basta informar as quantidades solicitadas pelo cliente.',
    },
    {
      pergunta: 'O GI ‘conversa’ com outros sistemas?',
      resposta:
        'Sim. ‘Conversa’ com sistemas bancários – envio, remessa e boletos; sistemas contábeis; emissor de NF eletrônica. ',
    },
    {
      pergunta: 'Posso aumentar meu faturamento com ajuda do GI?',
      resposta:
        'O GI ajuda, sim. Facilitando a elaboração e aprovação de orçamentos, gerenciando o PCP para cumprir prazos de entrega, monitorando a fabricação para detectar eventuais desvios ou impropriedades na produção.',
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
        className='relative bottom-[7em] h-[40em] w-full select-none'
        alt='Background genérico com gráficos e estatísticas com um fundo vermelho'
      />

      <div className='absolute top-[15em] z-10 flex w-full flex-col items-center justify-center lg:items-start'>
        <div className='texto-header flex h-full w-full flex-col items-start justify-center px-8 text-white lg:px-16'>
          <p className='text-2xl lg:text-3xl'>Precisa de ajuda?</p>
          <h1 className='mt-4 text-5xl font-semibold uppercase lg:text-6xl'>
            Dúvidas Frequentes
          </h1>
        </div>

        <div className='mt-[20em] w-full p-6'>
          <Accordion className='accordion-custom' multiple>
            {duvidas.map((duvida, index) => (
              <AccordionTab
                className='my-[1em] rounded border'
                key={index}
                header={duvida.pergunta}
              >
                {duvida.resposta}
              </AccordionTab>
            ))}
          </Accordion>
        </div>

        <div className='assets flex w-full flex-col lg:h-[30em] lg:flex-row lg:items-center lg:justify-between'>
          <div className='assest1 lg:w-[20em]'>
            <img
              src={assets2}
              className='bottom-[2em] h-[7em] select-none lg:bottom-[27em] lg:h-[8em]'
              alt='assests de um quadrado vermelho'
            />
          </div>

          <div className='texto-assests px-8'>
            <div className='texto text-center text-loguin-blue'>
              <h1 className='mt-4 text-3xl font-semibold uppercase'>Ainda com duvida?</h1>
              <p className='text-1xl lg:mt-2 lg:px-[15em] lg:text-[1.2rem]'>
                Não hesite em entrar em contato conosco. Nossa equipe terá o prazer de
                esclarecer todas as suas dúvidas e fornecer o suporte necessário. Estamos
                aqui para ajudar!
              </p>

              <div className='button-confira my-[2em] lg:px-[25em]'>
                <a href='/contato' rel='noopener noreferrer'>
                  <Button>Enviar Mensagem</Button>
                </a>
              </div>
            </div>
          </div>

          <div className='assets2 flex w-full justify-end lg:h-full lg:w-[20em] lg:items-end'>
            <img
              src={assets}
              className='bottom-[7em] h-[10em] rotate--90 select-none lg:h-[10em]'
              alt='assests de um quadrado vermelho'
            />
          </div>
        </div>

        <div className='w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}
