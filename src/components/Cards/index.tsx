import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// Imagens
import comercial from '@/assets/icones/icones-2/comercial.png'
import acessoria from '@/assets/icones/icones-2/acessoria.png'
import fabricacao from '@/assets/icones/icones-2/fabricacao.png'
import faturamento from '@/assets/icones/icones-2/faturamento.png'
import financeiro from '@/assets/icones/icones-2/financeiro.png'
import suprimentos from '@/assets/icones/icones-2/suprimentos.png'

export default function SwipperCards() {
  const swiperRef = useRef(null)

  const breakpoints = {
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 5 },
  }

  const conteudo = [
    {
      titulo: 'COMERCIAL',
      icone: <img src={comercial} alt='icone comercial' height={100} width={100} />,
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
      icone: <img src={fabricacao} alt='icone fabricação' height={100} width={100} />,
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
      icone: <img src={suprimentos} alt='icone suprimentos' height={100} width={100} />,
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
      icone: <img src={financeiro} alt='icone financeiro' height={100} width={100} />,
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
      icone: <img src={faturamento} alt='icone faturamento' height={100} width={100} />,
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
      icone: <img src={acessoria} alt='icone acessoria' height={100} width={100} />,
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
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {conteudo.map((item, index) => (
          <div
            key={index}
            className='card h-[30em] w-full rounded-lg border bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          >
            <div className='icon flex h-[4em] w-[4em] items-center justify-center rounded-[1em] text-white'>
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
        ))}
      </div>
    </div>
  )
}
