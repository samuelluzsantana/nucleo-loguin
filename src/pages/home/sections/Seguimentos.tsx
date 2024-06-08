import pc1 from '@/assets/pc1.png';

export default function Seguimentos() {
  // const isMobile = window.innerWidth < 700

  return (
    <>
      <div className='seguimentos z-10 h-[55em] bg-loguin-blue  text-white'>
        <div className='aling flex flex-col items-center md:flex-row md:justify-center'>
          <div className='text-seguimentos  w-full flex flex-col items-center text-center mt-[10em] md:w-[50em]'>
            <h3 className='text-3xl font-bold'>
              Para todos os portes eㅤ
              <span className='relative inline-block h-[2.7rem]'>
                <span className="after:bg-loguin-red after:absolute after:h-1 after:w-full after:bottom-0 after:left-0 after:content-[''] after:inline-block"></span>
                seguimentos
              </span>
            </h3>
            <p className='font-normal mt-8 text-sm'>Gestão inteligente é para todos.</p>

            <p className='hidden md:block text text-1xl font-normal mx-8 text-center mt-4'>
              Independentemente do tamanho ou segmento, nosso sistema é adaptável,
              garantindo resultados excelentes para gráficas de todos os perfis.
            </p>
          </div>

          <div className='imagem-pc flex'>
            <img
              src={pc1}
              alt='Imagem de um computador estilizado 3D com o programa da gráfica inteligente rodando de fundo'
              className='w-80 h-80 object-contain'
            />
          </div>

          <p className='text text-1xl font-normal mx-8 text-center mt-4 md:hidden'>
            Independentemente do tamanho ou segmento, nosso sistema é adaptável,
            garantindo resultados excelentes para gráficas de todos os perfis.
          </p>
        </div>
      </div>
    </>
  );
}
