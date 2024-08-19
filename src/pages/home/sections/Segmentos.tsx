import mulher from '@/assets/moca-grafica.png'

export default function Segmentos() {
  // const isMobile = window.innerWidth < 700

  const items = [
    'Embalagens',
    'Rótulos e Etiquetas',
    'Impressos promocionais',
    'Livros e Revistas',
    'Cadernos e Apostilas',
    'Envelopes',
    'Comunicação Visual',
  ]

  return (
    <>
      <div className='mt-[12em] h-[55em] bg-loguin-red px-8 text-white lg:h-[35em] lg:px-[5em]'>
        <div className='foto center flex flex-col justify-center lg:flex-row lg:justify-evenly'>
          <div className='mt-[-4em] flex w-full content-center items-center justify-center lg:mr-[0em] lg:mt-[5em] lg:h-full'>
            <img src={mulher} alt='Mulher trabalhando em uma gráfica' />
          </div>

          <div className='segmentos-textos flex w-full flex-col items-center text-center lg:mr-[10em] lg:mt-[4em] lg:w-[35rem]'>
            <h3 className='mt-8 text-2xl font-bold uppercase lg:text-3xl'>
              Segmentos Gráficos
            </h3>
            <p className='mt-8 px-[3em] text-justify text-sm font-normal md:px-[18em] lg:px-0 lg:text-[1.5rem]'>
              O <strong>GI-Gráfica Inteligente</strong> pode ser aplicado a todos os
              segmentos da indústria gráfica tornando os processos mais simples, fáceis e
              rápidos.
            </p>

            <ul className='disc mt-6 list-disc text-left text-xl lg:ml-0'>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
