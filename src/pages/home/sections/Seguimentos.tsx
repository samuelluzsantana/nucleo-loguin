import telaSistema from '@/assets/telaSistema.png'

export default function Seguimentos() {
  return (
    <div className='seguimentos z-10 mt-[-8em] min-h-[45em] bg-loguin-blue py-16 text-white'>
      <div className='container mx-auto mt-8 px-4 lg:px-9'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='text-seguimentos mb-12 lg:mb-0 lg:w-1/2'>
            <h3 className='mb-6 text-center text-3xl font-bold uppercase lg:text-5xl'>
              Para todos os portes e
              <span className='relative ml-[1rem] inline-block'>
                seguimentos
                <span className='absolute bottom-0 left-0 h-1 w-full bg-loguin-red'></span>
              </span>
            </h3>

            <p className='mb-6 text-center text-lg'>Gestão inteligente é para todos.</p>
            <p className='mb-8 text-center text-base lg:text-lg'>
              Nosso sistema comporta gráficas de todos os tamanhos e setores, gerando
              sempre os melhores resultados.
            </p>
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
