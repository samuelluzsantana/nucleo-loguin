import icones from '@/assets/bg/3685747.png'

export default function Visao360() {
  return (
    <>
      <div className='seguimentos z-10 mt-[-2em] h-[43em] bg-loguin-blue text-white md:flex md:items-center'>
        <div className='aling flex h-full flex-col items-center pt-8 md:w-[100%] md:flex-row md:justify-evenly'>
          <div className='text-seguimentos flex w-full flex-col items-center px-8 text-center md:mt-3 md:w-[37em]'>
            <h3 className='text-3xl font-bold md:text-5xl'>
              TENHA UMA VISÃO 360º DO SEU NEGÓCIO
            </h3>
            <p className='mt-8 text-base font-normal md:text-lg'>
              Saiba o que está acontecendo com a sua gráfica o tempo todo. Da pré-produção
              ao pós-cálculo, o sistema garante tanto uma visão ampla dos processos quanto
              informações detalhadas, tornando muito mais fácil agir sobre cada etapa.
            </p>
          </div>

          <div className='imagem-pc z-[1] flex md:relative md:right-12 md:mb-12'>
            <img
              src={icones}
              alt='Imagem de um computador estilizado 3D com o programa da gráfica inteligente rodando de fundo'
              className='h-80 w-80 object-contain md:h-[40rem] md:w-[40rem]'
            />
          </div>
        </div>
      </div>
    </>
  )
}
