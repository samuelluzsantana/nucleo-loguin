import certificacao from '@/assets/certificacao.png'
import assets from '@/assets/bg/assets2.png'
import Button from '@/components/Button'

export default function ConhecaMais() {
  return (
    <div className='conheca-mais-software z-10 h-[55em] bg-loguin-blue pt-[4em] text-white md:h-[70em] lg:h-[40em] lg:pt-0'>
      <div className='flex h-full w-full flex-col lg:flex-row lg:justify-evenly lg:px-8'>
        <div className='imagem flex w-full flex-col lg:h-full lg:w-[55em] lg:flex-row-reverse lg:items-center'>
          <div className='img-assets flex items-end lg:w-[3em]'>
            <img
              src={assets}
              className='mb-[10em] hidden h-[9em] w-[20em] rotate-0 select-none lg:flex'
              alt='assets de um quadrado vermelho'
            />
          </div>

          <img
            src={certificacao}
            className='w-full object-contain lg:h-[80%] lg:w-auto lg:max-w-[35em]'
            alt='certificação de ferramenta mais utilizada como base das aulas gráficas no SENAI THEOBALDO DE NIGRIS'
          />

          <div className='img-assets flex items-end lg:w-[3em]'>
            <img
              src={assets}
              className='mt-[-2.9em] h-[10em] rotate-90 select-none lg:h-[10em] lg:w-[20em] lg:-rotate-180'
              alt='assets de um quadrado vermelho'
            />
          </div>
        </div>

        <div className='textos-conheca px-8 text-center lg:flex lg:h-full lg:w-[40em] lg:flex-col lg:justify-center'>
          <h3 className='text-2xl font-bold uppercase lg:text-[2rem]'>
            Conheça mais sobre nosso software
          </h3>
          <p className='mt-2 text-sm font-normal lg:text-[1rem]'>
            A implementação de um novo sistema pode parecer complicada, mas não é. Além
            disso, nossa equipe oferece suporte total, do início ao fim.
          </p>
          <div className='button-confira mt-8 flex flex-col items-center'>
            <div className='button-confira mb-8 w-[15em]'>
              <a href='/como-funciona' rel='noopener noreferrer'>
                <Button>Confira</Button>
              </a>
            </div>
          </div>
        </div>

        <div className='img-assets flex w-full justify-end lg:hidden'>
          <img
            src={assets}
            className='h-[5em] rotate-180 select-none brightness-[21] grayscale filter'
            alt='assets de um quadrado branco'
          />
        </div>
      </div>
    </div>
  )
}
