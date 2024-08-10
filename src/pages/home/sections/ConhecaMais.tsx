import certificacao from '@/assets/certificacao.png'
import assets from '@/assets/bg/assets2.png'
import Button from '@/components/Button'

export default function ConhecaMais() {
  return (
    <div className='conheca-mais-software z-10 h-[60em] bg-loguin-blue pt-[4em] text-white md:h-[40em] md:pt-0'>
      <div className='flex h-full w-full flex-col md:flex-row md:justify-evenly md:px-8'>
        <div className='imagem flex w-full flex-col md:h-full md:w-[55em] md:flex-row-reverse md:items-center'>
          <div className='img-assets flex items-end md:w-[3em]'>
            <img
              src={assets}
              className='mb-[10em] hidden h-[9em] w-[20em] rotate-0 select-none md:flex'
              alt='assets de um quadrado vermelho'
            />
          </div>

          <img
            src={certificacao}
            className='w-full object-contain md:h-[80%] md:w-auto md:max-w-[35em]'
            alt='certificação de ferramenta mais utilizada como base das aulas gráficas no SENAI THEOBALDO DE NIGRIS'
          />

          <div className='img-assets flex items-end md:w-[3em]'>
            <img
              src={assets}
              className='mt-[-2.9em] h-[10em] rotate-90 select-none md:h-[10em] md:w-[20em] md:-rotate-180'
              alt='assets de um quadrado vermelho'
            />
          </div>
        </div>

        <div className='textos-conheca px-8 text-center md:flex md:h-full md:w-[40em] md:flex-col md:justify-center'>
          <h3 className='text-2xl font-bold md:text-[2rem]'>
            Conheça mais sobre nosso software
          </h3>
          <p className='mt-2 text-sm font-normal md:text-[1rem]'>
            A implementação de um novo sistema pode parecer complicada, mas não é. Além
            disso, nossa equipe oferece suporte total, do início ao fim.
          </p>
          <div className='button-confira mt-8'>
            <a href='/como-funciona' rel='noopener noreferrer'>
              <Button>Confira</Button>
            </a>
          </div>
        </div>

        <div className='img-assets flex w-full justify-end md:hidden'>
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
