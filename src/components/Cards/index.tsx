import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function SwipperCards() {
  const isMobile = window.innerWidth < 700
  const swiperRef = useRef(null)

  const conteudo = [
    { titulo: 'ola', descricao: 'yey' },
    { titulo: 'ola', descricao: 'yey' },
    { titulo: 'bem-vindo', descricao: 'xyz' },
    { titulo: 'hello', descricao: 'abc' },
    { titulo: 'hi', descricao: 'def' },
    { titulo: 'greetings', descricao: 'ghi' },
  ]

  return (
    <div className='swiper-container' ref={swiperRef}>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 10 : 30}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {conteudo.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='card h-80 w-80 rounded-lg border border-red-600 bg-white p-4 shadow-lg'>
              <h3 className='mb-2 text-xl font-bold'>{item.titulo}</h3>
              <p className='text-gray-700'>{item.descricao}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
