import pc1 from '@/assets/pc1.png'

export default function Seguimentos() {
  // const isMobile = window.innerWidth < 700

  return (
    <>
      <div className='seguimentos z-10 h-[55em] bg-loguin-blue text-white md:flex md:items-center'>
        <div className='aling flex flex-col items-center md:w-[100%] md:flex-row md:justify-evenly'>
          <div className='text-seguimentos mt-[10em] flex w-full flex-col items-center text-center md:w-[50em]'>
            <h3 className='text-3xl font-bold md:text-6xl'>
              Para todos os portes e
              <span className='relative ml-2 inline-block h-[2.7rem] md:h-[4.5rem]'>
                <span className="after:absolute after:bottom-0 after:left-0 after:inline-block after:h-1 after:w-full after:bg-loguin-red after:content-['']"></span>
                seguimentos
              </span>
            </h3>
            <p className='mt-8 text-sm font-normal md:text-[1.5rem]'>
              Gestão inteligente é para todos.
            </p>

            <p className='text text-1xl mx-8 mt-4 hidden text-center font-normal md:mt-8 md:block md:w-[40rem] md:text-[1.2rem]'>
              Independentemente do tamanho ou segmento, nosso sistema é adaptável,
              garantindo resultados excelentes para gráficas de todos os perfis.
            </p>
          </div>

          <div className='imagem-pc z-[1] flex md:relative md:right-12 md:top-8'>
            <img
              src={pc1}
              alt='Imagem de um computador estilizado 3D com o programa da gráfica inteligente rodando de fundo'
              className='h-80 w-80 object-contain md:h-[40rem] md:w-[40rem]'
            />
          </div>

          <p className='text text-1xl z-[2] mx-8 mt-4 text-center font-normal md:relative md:hidden'>
            Independentemente do tamanho ou segmento, nosso sistema é adaptável,
            garantindo resultados excelentes para gráficas de todos os perfis.
          </p>
        </div>
      </div>
    </>
  )
}
