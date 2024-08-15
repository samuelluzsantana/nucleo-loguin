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
      <div className='mt-[12em] h-[55em] bg-loguin-red px-8 text-white md:h-[35em] md:px-[5em]'>
        <div className='foto flex flex-col justify-center md:flex-row md:justify-evenly'>
          <div className='mt-[-4em] flex content-center items-center md:mt-[5em] md:h-full lg:mr-[3em]'>
            <img src={mulher} className='' alt='Mulher trabalhando em uma gráfica' />
          </div>

          <div className='segmentos-textos flex flex-col items-center text-center md:mt-[4em] md:w-[35rem]'>
            <h3 className='mt-8 text-2xl font-bold uppercase md:text-3xl'>
              Segmentos Gráficos
            </h3>
            <p className='mt-8 text-center text-sm font-normal md:text-[1.5rem]'>
              O <strong>GI-Gráfica Inteligente</strong> pode ser aplicado a todos os
              segmentos da indústria gráfica tornando os processos mais simples, fáceis e
              rápidos.
            </p>

            <ul className='disc ml-12 mt-6 list-disc text-left text-xl md:ml-0'>
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
