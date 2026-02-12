'use client'

import { cardSlider1 } from '../data/dataSlider'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function Slider() {
  return (
    <>
    <section className='py-8 sm:py-12 md:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12'>
        
        <Swiper 
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1280: { slidesPerView: 2.5 }
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          pagination={{
            clickable:true,
            el: '.custom-pagination'
          }}
          spaceBetween={30}           
        >
          {cardSlider1.map(item => (
            <SwiperSlide 
              className='flex flex-col border border-gray-300 bg-white' 
              key={item.id}
            >
              {/* Imagenes carrusel */}
              <div className='relative h-48 w-full sm:h-56 md:h-80'>
                <Image src={item.img} alt='img' fill className='object-cover'/>
              </div>
              
              {/* Contenido carrusel */}
              <div className='flex flex-col gap-3 p-5 sm:p-6'>
                <h4 className='font-medium text-gray-500'>{item.title}</h4>
                <p className='text-sm leading-relaxed text-gray-500'>{item.description}</p>
                <a href="#" className='mt-auto inline-flex items-center gap-2 text-sm font-medium transition-transform hover:translate-x-1'>{item.btn}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación botones */}
        <div className='flex items-center justify-center '>
          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer prev-btn'>
            <ArrowCircleLeftIcon />
          </button>

          <div className='custom-pagination static w-auto! flex ' />

          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer next-btn'>
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
