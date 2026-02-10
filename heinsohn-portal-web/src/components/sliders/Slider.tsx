'use client'

import { cardSlider1 } from '../data/dataSlider'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export default function Slider() {
  return (
    <>
    <section className='bg-linear-to-tr from-blue-800 to-blue-300 flex items-center min-h-screen pt-20'>
      <div className='px-4 mx-auto sm:max-w-3xs md:max-w-4xl lg:max-w-60 xl:max-w-9/12'>
        
        <Swiper 
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1280: { slidesPerView: 2.5 }
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          spaceBetween={30} 
        >
          {cardSlider1.map(item => (
            <SwiperSlide 
              className='bg-white border border-neutral-400 p-12 rounded-[10px] flex flex-col items-center' 
              key={item.id}
            >
              {/* Imagenes carrusel */}
              <div className='max-w-max mx-auto mb-6'>
                <Image 
                  src={item.img} 
                  alt='img' 
                  width={150} 
                  height={150} 
                  className='rounded-full object-cover'
                />
              </div>
              
              {/* Contenido carrusel */}
              <div className='text-center'>
                <h4 className='text-3xl font-semibold mb-4'>{item.title}</h4>
                <p className='mb-4'>{item.description}</p>
                <a href="#" className='text-blue-700 font-medium hover:underline'>{item.btn}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación botones */}
        <div className='flex items-center justify-center mt-8 gap-5'>
          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer prev-btn'>
            d
          </button>
          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer next-btn'>
            i
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
