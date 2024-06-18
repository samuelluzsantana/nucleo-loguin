import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// styles
import 'swiper/css'
import 'swiper/css/pagination'

// assets/images
import robson from '@/assets/pfp/robson.png'
import ricardo from '@/assets/pfp/ricardo.png'
import sidney from '@/assets/pfp/sidney.png'
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Depoimentos() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const depoimentos = [
    {
      nome: 'Sidney Anversa Victor',
      usuario: '@ABIGRAF\n@CONGRAF',
      foto: sidney,
      linkedin: '#',
      site: '#',
      depoimento:
        'Desde os anos 90, o Sistema GI_Gráfica Inteligente possui a gestão total da Congraf, desde orçamentos, pedidos, consulta ao estoque, requisições de compras, controle de produção, administração dos tempos de processos e de toda a produção, entregas e notas fiscais.',
    },
    {
      nome: 'Ricardo Cruz',
      usuario: '@Ricargraf',
      foto: ricardo,
      linkedin: '#',
      site: '#',
      depoimento:
        '“O GI_Gráfica é moderno, fácil de operar, importantíssimo nas horas boas e nas horas não muito boas”.',
    },
    {
      nome: 'Robson Lopes Ribeiro',
      usuario: '@Skygraf',
      foto: robson,
      linkedin: '#',
      site: '#',
      depoimento:
        '“A atualização tecnológica é uma de nossas principais preocupações. Estamos atualizando continuamente.\n\nO Núcleo Loguin, com seu ERP GI-Gráfica Inteligente tem sido um dos nossos principais parceiros nessa jornada”',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className='h-[55em] bg-white px-8 text-loguin-blue md:h-[35em] md:px-[12em]'>
        <div className='titulo-depoimentos mt-[10em] text-center md:text-left'>
          <h3 className='text-2xl font-bold md:text-3xl'>Depoimentos</h3>
          <p className='mt-2 text-sm font-normal md:text-[1.5rem]'>
            A força dos nossos parceiros, quem usa recomenda.
          </p>
        </div>

        <div className='cards-depoimentos'>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={isMobile ? 'auto' : 3}
            centeredSlides={true}
            loop={true}
            className='cards-swipers mt-8 py-[2em]'
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          >
            {depoimentos.map((dep, index) => (
              <SwiperSlide key={index} className={`flex items-center`}>
                <div
                  className={`h-[24em] w-full rounded-lg border bg-white p-4 md:h-[15em] md:w-[30em] ${activeIndex === index ? 'border-[2.4px] border-zinc-300' : 'z-0'} `}
                >
                  <div className='mb-4 flex items-center justify-between'>
                    <div className='flex items-center'>
                      <img
                        src={dep.foto}
                        alt={`foto de perfil do ${dep.nome} da empresa ${dep.usuario}`}
                        className='mr-4 h-12 w-12 rounded-md'
                      />
                      <div>
                        <h5 className='font-bold text-gray-900'>{dep.nome}</h5>
                        <span className='text-sm font-normal text-blue-700'>
                          {dep.usuario}
                        </span>
                      </div>
                    </div>
                    <div className='flex space-x-2'>
                      <a
                        href={dep.linkedin}
                        className='text-gray-400 hover:text-blue-700'
                      >
                        <span className='sr-only'>LinkedIn</span>
                        <FaLinkedin className='h-6 w-6' />
                      </a>
                      <a href={dep.site} className='text-gray-400 hover:text-blue-700'>
                        <span className='sr-only'>Site</span>
                        <FaGithub className='h-6 w-6' />
                      </a>
                    </div>
                  </div>
                  <p className='text-gray-600'>{dep.depoimento}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
