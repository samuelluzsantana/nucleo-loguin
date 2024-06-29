import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
// assets/icons
import {
  ReceiptDiscount,
  MoneyRecive,
  MoneySend,
  DocumentText,
  ArchiveTick,
  ClipboardText,
} from 'iconsax-react'
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
      titulo: 'COMERCIAL',
      icone: <ReceiptDiscount size={iconSize} variant='Bold' />,
      descricao: [
        'Orçamento',
        'Engenharia de Produto',
        'Pós-Calculo',
        'Proposta Comercial',
        'Vendas Pendentes',
        'Políticas de Preços',
        'Ação da Concorrência',
      ],
    },
    {
      titulo: 'FABRICAÇÃO',
      icone: <MoneyRecive size={iconSize} variant='Bold' />,
      descricao: [
        'Empenho de materiais',
        'Programação por OP',
        'Programação por Máquina',
        'Planejamento PEPS',
        'Planejamento de Entregas',
        'Apontamento Eletrônico',
        'Inspeção de MP',
      ],
    },
    {
      titulo: 'SUPRIMENTOS',
      icone: <ArchiveTick size={iconSize} variant='Bold' />,
      descricao: [
        'Estoque em Elaboração',
        'Cotação de Preços',
        'Quarentena',
        'Estoque de PA e MP',
        'Kardex',
        'Controle de Lotes',
        'Recebimento Monitorado',
      ],
    },
    {
      titulo: 'FINANCEIRO',
      icone: <MoneySend size={iconSize} variant='Bold' />,
      descricao: [
        'Budget',
        'CNBAs Envio/Retorno',
        'Fluxo de Caixa',
        'Conta Corrente',
        'Boleto',
        'Contas a Pagas',
        'Contas a Receber',
      ],
    },
    {
      titulo: 'FATURAMENTO',
      icone: <DocumentText size={iconSize} variant='Bold' />,
      descricao: [
        'Nota Fiscal Eletrônica',
        'Estoque de PA',
        'Comissões de Venda',
        'Logística de Entregas',
        'Pré-Nota',
        'Baixa de Estoques PA',
      ],
    },
    {
      titulo: 'ACESSÓRIOS',
      icone: <ClipboardText size={iconSize} variant='Bold' />,
      descricao: [
        'Gestão Indicadores',
        'Integrador Contábil',
        'Infoweb de PA',
        'Controle Web Produção',
        'Logística Web Entregas',
        'RKW Online',
        'DRE',
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
            <div className='card h-[30em] w-full rounded-lg border bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
