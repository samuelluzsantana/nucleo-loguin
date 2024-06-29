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
        <div className='foto flex flex-col justify-evenly md:flex-row'>
          <div className='mt-[-4em] flex content-center items-center md:mr-[3em] md:mt-[5em] md:h-full'>
            <img src={mulher} className='' alt='Mulher trabalhando em uma gráfica' />
          </div>

          <div className='segmentos-textos items-centertext-center flex flex-col md:mt-[4em] md:w-[35rem]'>
            <h3 className='mt-8 text-2xl font-bold md:text-3xl'>Segmentos Gráficos</h3>
            <p className='mt-8 text-sm font-normal md:text-[1.5rem]'>
              O GI_Gráfica Inteligente pode ser aplicado a todos os segmentos da indústria
              gráfica tornando os processos mais simples, fáceis e rápidos.
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
