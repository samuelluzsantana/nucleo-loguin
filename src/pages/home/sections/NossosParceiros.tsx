// components
import Button from '@/components/Button'
import { scrollToContato } from '@/utils/scrolltoContato'

export default function NossosParceiros() {
  // const isMobile = window.innerWidth < 700

  return (
    <>
      <div className='relative bottom-[10em] z-10 flex h-[30em] bg-white'>
        <div className='nossos-parceiros-header mt-[10em] flex w-full flex-col items-center'>
          <div className='text-nossos flex flex-col items-center'>
            <h3 className='text-3xl font-bold text-loguin-blue md:text-5xl'>
              Nossos Parceiros
            </h3>
            <p className='text-center font-normal md:mt-2 md:text-2xl'>
              Quem confia, cresce junto: a força dos nossos parceiros
            </p>
          </div>

          <p className='mt-4 w-[20em] text-justify md:w-[40em]'>
            Em nossa jornada, acreditamos que o crescimento é uma jornada compartilhada.
            Nossos parceiros são peças fundamentais nesse processo, confiando em nossa
            visão e colaborando para alcançar o sucesso conjunto. Acreditamos que, ao
            construir relacionamentos sólidos e confiáveis, não apenas fortalecemos nossos
            laços, mas também prosperamos em conjunto. Quem confia, cresce junto.
          </p>

          <div className='mt-8 w-full px-[2em] md:w-[40em]'>
            <div className='mt-8 w-[15em]'>
              <Button onClick={scrollToContato}>saiba mais</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
