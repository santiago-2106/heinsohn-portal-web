'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { dataCard } from "@/src/types/cardTypes" 
import Card from "../ui/cards/Card"

import 'swiper/css'
import 'swiper/css/navigation'

interface cardSilderSwiper {
  title: string
  cards?: dataCard[]
}

export default function SliderSolDigital({ title, cards = [] }: cardSilderSwiper) {
  return (
    <section className="py-8 sm:py-12 md:py-16 w-full bg-bg-main transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        
        {/* Título alineado a la izquierda para mantener consistencia visual */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl text-text-title font-light">{title}</h2>
        </div>
        
        <Swiper 
          modules={[Navigation]}
          // slidesPerView: "auto" es vital para que respete el ancho fijo de 400px de la UX
          slidesPerView={"auto"}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          spaceBetween={24} // Gap de 24px según UX
          className="pb-4"
        >
          {
            cards.map((card, index) => (
              <SwiperSlide 
                key={index} 
                // UX: Width Fixed (400px), Height Fixed/Fill (322px), Border 1px
                className="w-100! !h-[322px] flex border border-border-ui bg-bg-card-2 transition-shadow duration-300 hover:shadow-md"
              >
                {/* UX: Padding Top/Bottom 32px, Left/Right 24px, Gap 24px */}
                <div className="w-full h-full flex flex-col">
                  <Card {...card}/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        {/* CONTROLES DE NAVEGACIÓN */}
        <div className="flex justify-start gap-4 mt-8">
          <button 
            aria-label="Ver tarjetas anteriores"
            className="prev-btn h-12 w-12 rounded-full border border-border-ui flex items-center justify-center text-text-body bg-bg-card-2 hover:bg-bg-menu-hover hover:text-text-title hover:border-text-title transition-all cursor-pointer"
          >
            <span aria-hidden="true" className="material-symbols-rounded font-light" style={{ fontSize: "28px" }}>
              chevron_left
            </span>
          </button>
          
          <button 
            aria-label="Ver tarjetas siguientes"
            className="next-btn h-12 w-12 rounded-full border border-border-ui flex items-center justify-center text-text-body bg-bg-card-2 hover:bg-bg-menu-hover hover:text-text-title hover:border-text-title transition-all cursor-pointer"
          >
            <span aria-hidden="true" className="material-symbols-rounded font-light" style={{ fontSize: "28px" }}>
              chevron_right
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}