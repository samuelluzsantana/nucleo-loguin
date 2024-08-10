import telaSistema from '@/assets/telaSistema.png'
import Button from '@/components/Button'

export default function Seguimentos() {
  return (
    <div className='seguimentos z-10 mt-[-8em] min-h-[45em] bg-loguin-blue py-16 text-white'>
      <div className='container mx-auto mt-8 px-4 md:px-9'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='text-seguimentos mb-12 md:mb-0 md:w-1/2'>
            <h3 className='mb-6 text-center text-3xl font-bold md:text-5xl'>
              Para todos os portes e
              <span className='relative inline-block'>
                seguimentos
                <span className='absolute bottom-0 left-0 h-1 w-full bg-loguin-red'></span>
              </span>
            </h3>
            <p className='mb-6 text-center text-lg'>Gestão inteligente é para todos.</p>
            <p className='mb-8 text-center text-base md:text-lg'>
              Nosso sistema comporta gráficas de todos os tamanhos e setores, gerando
              sempre os melhores resultados.
            </p>
          </div>

          <div className='md:ml-[5em] md:w-1/2'>
            <img
              src={telaSistema}
              alt='captura de tela do programa da gráfica inteligente rodando de fundo'
              className='mx-auto h-auto w-full max-w-md md:max-w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
