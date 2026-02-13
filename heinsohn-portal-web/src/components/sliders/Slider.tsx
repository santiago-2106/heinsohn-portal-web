'use client'

import { cardSlider1 } from '../data/dataSlider'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TextComponent from '../ui/textsComponent/TextComponent'

export default function Slider() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <TextComponent title='Blog Destacado' />
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          centeredSlides
          slidesPerView={1}
          
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination'
          }}
        >
          {cardSlider1.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* Imagen lado izquierda carrusel*/}
                <div className="hidden md:flex md:w-1/3 bg-[#f5f5f5] items-center justify-center">
                  <img
                    src="https://giffiles.alphacoders.com/220/220033.gif"
                    alt="decor"
                    className="w-36"
                  />
                </div>
                <div className="w-full md:w-2/3 bg-white border border-gray-200">
                  {/* Imagenes del carrusel */}
                  <div className="relative h-56 md:h-80 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Contenido carrusel */}
                  <div className="flex flex-col gap-4 p-6">
                    <h4 className="text-lg md:text-xl font-medium text-gray-700">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-black transition-transform hover:translate-x-1"
                    >
                      {item.btn}
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegacion bootnes */}
        <div className="flex items-center justify-end-safe gap-4 mt-10">
          <button className="prev-btn h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:cursor-pointer hover:bg-gray-400 transition">
            <ArrowCircleLeftIcon fontSize="small" />
          </button>

          <div className="custom-pagination static w-auto! gap-2" />

          <button className="next-btn h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:cursor-pointer hover:bg-gray-400 transform">
            <ArrowCircleRightIcon fontSize="small" />
          </button>
        </div>

      </div>
    </section>
  )
}
