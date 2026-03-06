'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

interface CarouselSplitItem {
  title: string
  description: string
  image: string
  reverse?: boolean
}

interface CarouselSplitHeroProps {
  items: CarouselSplitItem[]
}

export default function SliderHero({ items }: CarouselSplitHeroProps) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-238 px-10 relative">

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next"
          }}
          pagination={{ clickable: true, el:'.custom-pagination' }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col md:flex-row ${
                  item.reverse ? "md:flex-row-reverse" : ""
                } bg-bg-card-2 border border-border-ui md:h-105`}
              >
                {/* Imagen */}
                <div className="md:max-w-11/12">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-50"
                  />
                </div>

                {/* Texto */}
                <div className="md:w-1/2 flex flex-col justify-center gap-2.5 p-8">
                  <h2 className="font-light text-[32px] md:text-[40px] lg:text-[22px] leading-[100%] text-text-title">
                    {item.title}
                  </h2>

                  <p className="font-light text-[16px] md:text-[18px] lg:text-[16px] leading-7.5 text-text-body">
                    {item.description}
                  </p>

                  <button className="text-brand-accent font-medium flex items-center gap-2 mt-2">
                    Leer más →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación personalizada */}
        <div className="flex items-center justify-end-safe gap-4 mt-8">
          <button className="hero-prev h-12 w-12 flex items-center justify-center rounded-full border border-border-ui bg-bg-card-2 hover:bg-bg-menu-hover transition">
            <ArrowCircleLeftIcon />
          </button>

          <div className="custom-pagination static w-auto! gap-2" />

          <button className="hero-next h-12 w-12 flex items-center justify-center rounded-full border border-border-ui bg-bg-card-2 hover:bg-bg-menu-hover transition">
            <ArrowCircleRightIcon />
          </button>
        </div>

      </div>
    </section>
  )
}