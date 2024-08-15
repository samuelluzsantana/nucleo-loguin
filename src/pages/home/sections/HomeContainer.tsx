import { motion } from 'framer-motion'
// components
import Button from '@/components/Button'
import { FlipWords } from '@/components/ui/flip-words'
// assets
import Background from '@/assets/bg/background.png'
import assets from '@/assets/bg/assets.png'
import assets2 from '@/assets/bg/assets2.png'
// assets/icons
import { PiCaretDownLight } from 'react-icons/pi'

export default function HomeContainer() {
  const words = ['completo', 'rápido', 'pratico', 'moderno']

  const scrollToSection = () => {
    const section = document.getElementById('seguimentos')
    if (section) {
      const yOffset = 40 // Altura de deslocamento
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  return (
    <>
      <img
        src={Background}
        className='relative bottom-[7em] h-[50em] w-full select-none lg:h-[66em]'
        alt='Descrição da Imagem'
      />

      <div className='absolute top-[8em] flex w-full flex-col items-center justify-center text-white lg:items-start'>
        <div className='texto-e-button ml-0 lg:ml-[9em]'>
          <div className='textos-home flex flex-col items-center'>
            <div className='flex w-[7.5em] flex-col justify-start text-[2.5em] font-semibold leading-[1] md:w-[12em] md:text-center lg:w-[9.5em] lg:text-6xl'>
              <div className='flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-normal'>
                <span className='mr-0 md:mr-[1rem] lg:mr-[1rem]'>O mais</span>
                <span className='text-white'>
                  <FlipWords words={words} /> <br />
                </span>
              </div>

              <div className='flex flex-col md:flex-row md:justify-center lg:flex-row lg:justify-normal'>
                <span className='mr-0 md:mr-[1rem] lg:mr-[1rem]'>sistema</span>
                <span className='block lg:hidden'>integrado de</span>
                <span className='hidden lg:block'>integrado</span>
              </div>

              <span className='flex w-full md:justify-center lg:justify-normal'>
                <span className='mr:0 hidden lg:mr-[1rem] lg:block'>de</span> gestão
                gráficas
              </span>
            </div>

            <h2 className='mt-8 w-[20em] text-justify text-sm font-normal md:w-[30em] lg:w-[30em] lg:text-left lg:text-xl'>
              Um sistema moldado conforme suas necessidades, que otimiza todos os
              processos da sua gráfica e conecta de forma inteligente e intuitiva o setor
              comercial, a produção, o controle de suprimentos, o financeiro e o
              faturamento.
            </h2>
          </div>

          <div className='flex w-full justify-center lg:justify-start'>
            <div className='mt-8 w-[15em]'>
              <a href='/como-funciona' rel='noopener noreferrer'>
                <Button>saiba mais</Button>
              </a>
            </div>
          </div>
        </div>

        <div className='assets mt-[1.25em] flex h-full w-full justify-between lg:mt-[5.25em]'>
          <img
            src={assets2}
            className='bottom-[2em] h-[7em] select-none lg:relative lg:bottom-[27em] lg:h-[15em]'
            alt='assests de um quadrado vermelho'
          />

          <img
            src={assets}
            className='bottom-[7em] h-[10em] select-none lg:relative lg:bottom-[10em] lg:h-[35em]'
            alt='assests de um quadrado vermelho'
          />
        </div>

        <div
          className='scroll absolute top-[33em] flex w-full justify-center text-white lg:top-[40em]'
          onClick={scrollToSection}
        >
          <motion.div
            style={{ top: '43em' }}
            animate={{
              y: [0, -20, 0],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            <motion.div className='scroll-assets cursor-pointer'>
              <PiCaretDownLight size={40} className='hidden lg:block' />
              <PiCaretDownLight size={20} className='block lg:hidden' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
