import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// assets/icons
import { ReceiptDisscount, MoneyRecive, TruckTick, Box } from 'iconsax-react'
// styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function SwipperCards() {
  const swiperRef = useRef(null)

  const iconSize = 30

  const breakpoints = {
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 5 },
  }

  const conteudo = [
    {
      titulo: 'Venda com Boa Margem',
      icone: <ReceiptDisscount size={iconSize} variant='Bold' />,
      descricao: [
        'Acompanhamento diário do lucro líquido',
        'Visão completa dos custos e preços de cada pedido',
        'Definição estratégica de preços para maximizar a lucratividade',
      ],
    },
    {
      titulo: 'Produção com Baixo Custo',
      icone: <MoneyRecive size={iconSize} variant='Bold' />,
      descricao: [
        'Pós-Cálculo avançado para identificar gargalos e otimizar processos.',
        'Controle preciso de materiais e insumos.',
        'Redução drástica do desperdício.',
      ],
    },

    {
      titulo: 'Entregas no Prazo',
      icone: <TruckTick size={iconSize} variant='Bold' />,
      descricao: [
        'Controle total de vendas, produção e expedição',
        'Agendamento inteligente de tarefas e prazos.',
        'Visão em tempo real do status de cada pedido',
      ],
    },
    {
      titulo: 'Fim do Desperdício',
      icone: <Box size={iconSize} variant='Bold' />,
      descricao: [
        'Combate ao desperdício na fonte com ferramentas avançadas.',
        'Controle rigoroso de materiais e insumos.',
        'Otimização dos processos de produção.',
      ],
    },
    {
      titulo: 'Venda com Boa Margem',
      icone: <ReceiptDisscount size={iconSize} variant='Bold' />,
      descricao: [
        'Acompanhamento diário do lucro líquido',
        'Visão completa dos custos e preços de cada pedido',
        'Definição estratégica de preços para maximizar a lucratividade',
      ],
    },
  ]

  return (
    <div className='swiper-container' ref={swiperRef}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className='cards-swippers'
      >
        {conteudo.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='card h-[25em] w-full rounded-lg border bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <div className='icon flex h-[4em] w-[4em] items-center justify-center rounded-[1em] bg-loguin-red text-white'>
                {item.icone}
              </div>

              <div className='descricao-cards mt-7 text-loguin-blue'>
                <h3 className='mb-2 text-xl font-bold'>{item.titulo}</h3>
                {Array.isArray(item.descricao) ? (
                  <ul className='list-disc pl-5'>
                    {item.descricao.map((itemDesc, idx) => (
                      <li key={idx}>{itemDesc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='font-bold'>{item.descricao}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
