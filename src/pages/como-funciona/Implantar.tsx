// assets
import {
  MdMonetizationOn,
  MdLocalShipping,
  MdDelete,
  MdTrendingUp,
  MdFlag,
  MdSettings,
} from 'react-icons/md'

export default function Implantar() {
  const icones = [
    {
      icon: <MdMonetizationOn size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'VENDA COM BOA MARGEM',
      description: 'Acompanhamento diário de lucro líquido',
    },
    {
      icon: <MdTrendingUp size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'PRODUÇÃO COM BAIXO CUSTO',
      description: 'Confira resultados pelo Pós-Calculo avançado',
    },
    {
      icon: <MdLocalShipping size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'ENTREGAS NO PRAZO',
      description: 'Controle de vendas, produção e expedição',
    },
    {
      icon: <MdDelete size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'FIM DO DESPERDÍCIO',
      description: 'Combata o desperdício na fonte',
    },
    {
      icon: <MdFlag size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'METAS DE TRABALHO BEM DEFINIDAS',
      description: 'Gerenciamento por indicadores',
    },
    {
      icon: <MdSettings size={80} className='mb-2 text-3xl text-loguin-red' />,
      title: 'INFORMAÇÃO COM RAPIDEZ',
      description: 'Tudo numa única interface',
    },
  ]
  return (
    <>
      <div className='o-sistema mt-[12em] w-full px-16 text-loguin-blue'>
        <p className='mt-4 text-3xl font-medium md:mt-[5em] md:text-4xl'>
          Por que implantar o sistema gi_gráfica inteligente?
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
