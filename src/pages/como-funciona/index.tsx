import { Helmet } from 'react-helmet'

import Background from '@/assets/bg/3690578.png'
import cores from '@/assets/bg/3690615.png'
import apertomaos from '@/assets/bg/3690627.png'

// components
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// assets
import { MdTrendingUp } from 'react-icons/md'

import { PiGearFineBold } from 'react-icons/pi'

import vendaboamarge from '@/assets/icones/venda-com-boa.png'
import producaobaixocusto from '@/assets/icones/producaobaixocusto.png'
import entregasnoprazo from '@/assets/icones/entregasnoprazo.png'
import desperdicio from '@/assets/icones/desperdicio.png'
import metas from '@/assets/icones/metas.png'
import rapidez from '@/assets/icones/rapidez.png'
import SwipperCards from '@/components/Cards'

export default function ComoFunciona() {
  const pageTitle = 'Como Funciona'

  const icones = [
    {
      icon: <img src={vendaboamarge} alt='icone' height={100} width={100} />,
      title: 'VENDA COM BOA MARGEM',
      description: 'Acompanhamento diário de lucro líquido',
    },
    {
      icon: <img src={producaobaixocusto} alt='icone' height={100} width={100} />,
      title: 'PRODUÇÃO COM BAIXO CUSTO',
      description: 'Confira resultados pelo Pós-Calculo avançado',
    },
    {
      icon: <img src={entregasnoprazo} alt='icone' height={100} width={100} />,
      title: 'ENTREGAS NO PRAZO',
      description: 'Controle de vendas, produção e expedição',
    },
    {
      icon: <img src={desperdicio} alt='icone' height={100} width={100} />,
      title: 'FIM DO DESPERDÍCIO',
      description: 'Combata o desperdício na fonte',
    },
    {
      icon: <img src={metas} alt='icone' height={100} width={100} />,
      title: 'METAS DE TRABALHO BEM DEFINIDAS',
      description: 'Gerenciamento por indicadores',
    },
    {
      icon: <img src={rapidez} alt='icone' height={100} width={100} />,
      title: 'INFORMAÇÃO COM RAPIDEZ',
      description: 'Tudo numa única interface',
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
        alt='Background generico com graficos e estatisticas com um fundo vermelho'
      />

      <div className='absolute top-[15em] z-10 flex w-full flex-col items-center justify-center text-white md:items-start'>
        <div className='flex w-full flex-col'>
          <div className='texto-header h-fulll flex w-full flex-col items-center justify-center px-8 md:px-16'>
            <h1 className='text-center text-5xl font-semibold md:text-6xl'>
              SOLUÇÃO COMPLETA DE GESTÃO PARA GRÁFICAS
            </h1>

            <p className='text-1xl mt-4 text-center md:text-3xl'>
              Otimização de todos os processos internos da empresa em um único software
            </p>
          </div>

          <>
            <div className='o-sistema mt-[20em] w-full px-16 text-loguin-blue'>
              <p className='mt-4 text-center text-3xl font-medium md:mt-[5em] md:text-4xl'>
                <strong>O POR QUE IMPLANTAR SISTEMA</strong>{' '}
                <span className='text-loguin-red'>GI_GRÁFICA INTELIGENTE?</span>
              </p>

              <div className='icones'>
                <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
                  {icones.map((item, index) => (
                    <div
                      key={index}
                      className='flex h-[20em] w-full flex-col items-center justify-center rounded-lg border text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                    >
                      <div className='mr-4'>{item.icon}</div>
                      <div className='px-4'>
                        <h2 className='text-xl font-semibold text-gray-900'>
                          {item.title}
                        </h2>
                        <p className='text-gray-700'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>

          <div className='imagens mt-4 w-full bg-loguin-blue'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2'>
              <div className='h-[35em] w-full bg-red-900'>
                <img
                  src={cores}
                  className='h-[35em] w-full select-none'
                  alt='Pessoa mostrando tabela de cores'
                />
              </div>
              <div className='h-[35em] w-full bg-white'>
                <div className='flex h-full w-full flex-col items-center justify-center px-12'>
                  <PiGearFineBold size={70} className='mb-2 text-3xl text-loguin-red' />
                  <h2 className='mb-4 text-2xl font-semibold text-loguin-blue'>
                    SISTEMA INTEGRADO
                  </h2>

                  <div className='w-full lg:px-8'>
                    <p className='text-justify text-loguin-blue'>
                      Um Sistema Integrado ERP são rotinas pré-determinadas de operações
                      interligadas entre si. Partindo de uma configuração básica e
                      cadastros de dados, criam-se funcionalidades como formação de preço,
                      movimentação de materiais (compra, empenho e uso), registros
                      financeiros e muitas outras funções.
                    </p>

                    <p className='mt-2 text-justify text-loguin-blue'>
                      Como o sistema é integrado, não há redigitação (portanto, sem
                      erros), unindo os dados da produção com a administração.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex w-full flex-col-reverse md:flex-row'>
              <div className='h-[35em] w-full bg-white'>
                <div className='flex h-full w-full flex-col items-center justify-center px-12'>
                  <MdTrendingUp size={70} className='mb-2 text-3xl text-loguin-red' />
                  <h2 className='mb-4 text-2xl font-semibold text-loguin-blue'>
                    AMPLIE SUAS VENDAS
                  </h2>

                  <div className='w-full lg:px-8'>
                    <p className='text-justify text-loguin-blue'>
                      Sua gráfica conseguirá otimizar todo processo interno de todos os
                      departamentos da empresa ao juntá-los num único software, integrando
                      dados e fornecendo relatórios precisos e concisos.
                    </p>

                    <p className='mt-2 text-justify text-loguin-blue'>
                      Ao aprimorar a parte operacional do seu negócio, essa ferramenta
                      permite que o gestor consiga satisfazer seus clientes e ampliar as
                      vendas.
                    </p>
                  </div>
                </div>
              </div>
              <div className='h-[35em] w-full bg-orange-900'>
                <img
                  src={apertomaos}
                  className='h-[35em] w-full select-none'
                  alt='Aperto de mãos'
                />
              </div>
            </div>
          </div>

          <div className='nossos-recurso w-full px-16 text-loguin-blue'>
            <div className='mt-[4em] text-center md:mt-[5em]'>
              <p className='text-3xl font-semibold md:text-4xl'>NOSSOS RECURSOS</p>

              <p className='mt-2 text-lg font-medium'>
                Confira todos os recursos do
                <span className='ml-2 font-bold text-loguin-red'>
                  GI_Gráfica Inteligente
                </span>
              </p>
            </div>

            <div className='icones2'>
              <div className='cards'>
                <div className='mt-8'>
                  <SwipperCards />
                </div>
              </div>
            </div>
          </div>

          <div className='conheca-etapas mt-[4em] flex h-[45em] flex-col items-center justify-center px-8 text-loguin-blue md:h-[35em]'>
            <div className='my-8 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='conheca-as-etapas text-center'>
                <p className='text-2xl font-semibold'>
                  CONHEÇA AS ETAPAS DE CONTRATAÇÃO DAS NOSSAS SOLUÇÕES PARA SUA EMPRESA
                </p>
                <p className='text-md mt-4'>
                  Entenda em três passos simples como vamos te atender:
                </p>
              </div>

              <div className='icones-etapas'>
                <div className='contato'>
                  <p className='font-bold'>
                    <span className='mr-[0.5rem] text-loguin-red'>1.</span> CONTATO
                  </p>
                  <p className='mt-2 text-justify'>
                    No contato inicial, vamos precisar de informações gerais do seu
                    negócio, como porte e segmento. Com isso, vamos agendar uma reunião.
                  </p>
                </div>

                <div className='entendimento mt-4'>
                  <p className='font-bold'>
                    <span className='mr-[0.5rem] text-loguin-red'>2.</span> ENTENDIMENTO
                    DO NEGÓCIO
                  </p>
                  <p className='mt-2 text-justify'>
                    Durante esse processo, vamos entender as suas necessidades e a
                    dinâmica da sua gráfica, para pensar a melhor estratégia de
                    implantação do sistema.
                  </p>
                </div>

                <div className='compra mt-4'>
                  <p className='font-bold'>
                    <span className='mr-[0.5rem] text-loguin-red'>3.</span> COMPRA E
                    IMPLANTAÇÃO
                  </p>
                  <p className='mt-2 text-justify'>
                    Com a contratação, nossa equipe vai cuidar da implantação do sistema,
                    dando total suporte antes, durante e por período acordado após esse
                    processo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
