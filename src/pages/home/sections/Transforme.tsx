import SwipperCards from '@/components/Cards'

export default function Transforme() {
  // const isMobile = window.innerWidth < 700

  return (
    <>
      <div className='transforme z-10 mt-[8em] h-[55em] px-8 text-loguin-blue md:px-[5em]'>
        <div className='text-transforme-sua-grafica mt-[10em] w-full items-center text-center md:w-full md:text-left'>
          <h3 className='text-2xl font-bold md:text-3xl'>
            Como o Sistema Gráfica Inteligente Eleva o Patamar das Gráficas Expressivas
          </h3>
          <p className='mt-8 text-sm font-normal md:text-[1.5rem]'>
            Transforme sua gráfica em uma potência de produtividade e lucratividade!
          </p>
        </div>

        <div className='cards'>
          <div className='mt-8'>
            <SwipperCards />
          </div>
        </div>
      </div>
    </>
  )
}
