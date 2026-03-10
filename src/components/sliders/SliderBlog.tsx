'use client'

import { cardSlider1 } from '../../data/share/slider'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TextComponent from '../ui/typography/TextComponent'

export default function Slider({data}: any) {
  return (
    <section className="py-12 md:py-16">
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
          {data.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row  items-stretch">

                {/* Imagen lado izquierda carrusel*/}
                <div className="hidden md:flex md:w-1/3 bg-bg-card-2 border border-border-ui items-center justify-center">
                  <Image
                    src="/img/slider-imgs.png"
                    alt="decor"
                    width={400}    
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 bg-bg-card-2 border border-border-ui">
                  {/* Imagenes del carrusel */}
                  <div className="relative h-56 md:h-80 w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover brightness-90 grayscale-100"
                    />
                  </div>
                  {/* Contenido carrusel */}
                  <div className="text-text-title flex flex-col gap-4 p-6">
                    <h4 className=" font-medium ">
                      {item.title}
                    </h4>

                    <p className="text-text-body font-light leading-6.5">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-text-body transition-transform hover:translate-x-1"
                    >
                      {item.btn}
                      <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegacion bootnes */}
        <div className="flex items-center justify-end-safe gap-4 mt-10">
          <button className="prev-btn h-10 w-10 rounded-full border border-border-ui flex items-center justify-center hover:cursor-pointer hover:bg-gray-400 transition">
            <ArrowCircleLeftIcon fontSize="small" />
          </button>

          <div className="custom-pagination static w-auto! gap-2" />

          <button className="next-btn h-10 w-10 rounded-full border border-border-ui flex items-center justify-center hover:cursor-pointer hover:bg-gray-400 transform">
            <ArrowCircleRightIcon fontSize="small" />
          </button>
        </div>

      </div>
    </section>
  )
}
