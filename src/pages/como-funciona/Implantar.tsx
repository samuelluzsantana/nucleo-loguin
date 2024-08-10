// assets
import {
  MdMonetizationOn,
  MdLocalShipping,
  MdDelete,
  MdTrendingUp,
  MdFlag,
  MdSettings,
} from 'react-icons/md'

import vendaboamarge from '@/assets/icones/venda-com-boa.png'
import producaobaixocusto from '@/assets/icones/producaobaixocusto.png'
import entregasnoprazo from '@/assets/icones/entregasnoprazo.png'
import desperdicio from '@/assets/icones/desperdicio.png'
import metas from '@/assets/icones/metas.png'
import rapidez from '@/assets/icones/rapidez.png'

export default function Implantar({ titulo }: { titulo: string }) {
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
      <div className='o-sistema mt-[12em] w-full px-16 text-loguin-blue'>
        <p className='mt-4 text-3xl font-medium md:mt-[5em] md:text-4xl'>{titulo}</p>

        <div className='icones'>
          <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
            {icones.map((item, index) => (
              <div
                key={index}
                className='flex h-[20em] w-full flex-col items-center justify-center rounded-lg border text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
              >
                <div className='mr-4'>{item.icon}</div>
                <div className='px-4'>
                  <h2 className='text-xl font-semibold text-gray-900'>{item.title}</h2>
                  <p className='text-gray-700'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
