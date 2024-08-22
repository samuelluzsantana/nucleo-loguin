import telaSistema from '@/assets/telaSistema.png'
import Button from '@/components/Button'

export default function Seguimentos() {
  return (
    <div className='seguimentos z-10 mt-[-8em] min-h-[45em] bg-loguin-blue py-16 text-white'>
      <div className='container mx-auto mt-8 px-4 lg:px-9'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='text-seguimentos mb-12 flex flex-col items-center lg:mb-0 lg:w-1/2'>
            <div className='text-seguimentos flex w-full flex-col items-center px-8 text-center md:mt-3 md:w-[37em]'>
              <h3 className='text-3xl font-bold md:text-5xl'>
                PARA TODOS OS PORTES E SEGMENTOS
              </h3>
              <p className='mt-8 text-base font-normal md:text-lg'>
                Gestão inteligente é para todos.
              </p>
              <p className='mt-8 text-justify text-base font-normal md:text-lg'>
                Nosso sistema comporta gráficas de todos os tamanhos e setores, gerando
                sempre os melhores resultados.
              </p>
            </div>

            <div className='mt-8 w-[15em]'>
              <a href='/como-funciona' rel='noopener noreferrer'>
                <Button>saiba mais</Button>
              </a>
            </div>
          </div>

          <div className='lg:ml-[5em] lg:w-1/2'>
            <img
              src={telaSistema}
              alt='captura de tela do programa da gráfica inteligente rodando de fundo'
              className='mx-auto h-auto w-full max-w-md lg:max-w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
