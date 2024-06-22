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
        'Não, os softwares podem variar significativamente em termos de funcionalidades, integrações, suporte e desempenho. Softwares de primeira linha geralmente oferecem mais recursos avançados e suporte técnico especializado.',
    },
    {
      pergunta:
        'O que os softwares de primeira linha oferecem de vantagem sobre os demais?',
      resposta:
        'Softwares de primeira linha geralmente oferecem melhor suporte técnico, atualizações regulares, integrações avançadas com outros sistemas e funcionalidades personalizáveis que atendem melhor às necessidades específicas do usuário.',
    },
    {
      pergunta: 'O GI me avisa sobre os materiais e insumos a serem usados numa OP?',
      resposta:
        'Sim, um software de Gestão Integrada (GI) pode fornecer alertas e informações detalhadas sobre os materiais e insumos necessários para ordens de produção (OP), facilitando o controle e a gestão de estoques.',
    },
    {
      pergunta: 'Consigo criar padrões de produtos?',
      resposta:
        'Sim, muitos softwares permitem a criação e gerenciamento de padrões de produtos para garantir consistência na produção e facilitar o controle de qualidade.',
    },
    {
      pergunta: 'O GI ‘conversa’ com outros sistemas?',
      resposta:
        'Sim, softwares de GI são projetados para integração com outros sistemas, facilitando a troca de informações entre diferentes departamentos e sistemas dentro de uma organização.',
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

      <div className='absolute top-[15em] z-10 flex w-full flex-col items-center justify-center md:items-start'>
        <div className='texto-header flex h-full w-full flex-col items-start justify-center px-8 text-white md:px-16'>
          <p className='text-2xl md:text-3xl'>Precisa de ajuda?</p>
          <h1 className='mt-4 text-5xl font-semibold md:text-6xl'>Dúvidas Frequentes</h1>
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

        <div className='assets flex w-full flex-col md:h-[30em] md:flex-row md:items-center md:justify-between'>
          <div className='assest1 md:w-[20em]'>
            <img
              src={assets2}
              className='bottom-[2em] h-[7em] select-none md:bottom-[27em] md:h-[8em]'
              alt='assests de um quadrado vermelho'
            />
          </div>

          <div className='texto-assests px-8'>
            <div className='texto text-center text-loguin-blue'>
              <h1 className='mt-4 text-3xl font-semibold'>Ainda com duvida?</h1>
              <p className='text-1xl'>
                Não hesite em entrar em contato conosco. Nossa equipe terá o prazer de
                esclarecer todas as suas dúvidas e fornecer o suporte necessário. Estamos
                aqui para ajudar!
              </p>

              <div className='button-confira my-[2em]'>
                <Button>Enviar Mensagem</Button>
              </div>
            </div>
          </div>

          <div className='assets2 flex w-full justify-end md:h-full md:w-[20em] md:items-end'>
            <img
              src={assets}
              className='bottom-[7em] h-[10em] rotate--90 select-none md:h-[10em]'
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
