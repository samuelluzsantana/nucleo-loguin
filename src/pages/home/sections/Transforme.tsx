import SwipperCards from '@/components/Cards'

export default function Transforme() {
  // const isMobile = window.innerWidth < 700

  return (
    <>
      <div className='transforme z-10 mt-[8em] h-[200em] px-8 text-loguin-blue md:h-[80em] md:px-[5em]'>
        <div className='text-transforme-sua-grafica mt-[10em] w-full items-center text-center md:w-full md:text-left'>
          <h3 className='text-center text-2xl font-bold uppercase md:text-3xl'>
            Nossos Recursos
          </h3>
          <p className='mt-2 text-center text-sm font-normal md:text-[1.5rem]'>
            Confira todos os recursos do
            <span className='ml-2 font-bold'>GI_Gráfica Inteligente</span>
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
