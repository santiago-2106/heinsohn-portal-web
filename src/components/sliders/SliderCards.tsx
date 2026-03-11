'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { dataCard } from "@/src/types/cardTypes" 
import Card from "../ui/cards/Card"

// Importaciones CSS de Swiper necesarias para que funcione bien
import 'swiper/css'
import 'swiper/css/navigation'

interface cardSilderSwiper {
  title: string
  cards?: dataCard[]
}

export default function SliderSolDigital({ title, cards = [] }: cardSilderSwiper) {
  return (
    <section className="py-8 sm:py-12 md:py-16 w-full bg-bg-main transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Título de la sección */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl text-text-title font-semibold">{title}</h2>
        </div>
        
        {/* Carrusel */}
        <Swiper 
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn'
          }}
          spaceBetween={24}
          className="pb-4" // Un poco de padding abajo para que la sombra no se corte
        >
          {
            cards.map((card, index) => (
              // LA MAGIA ESTÁ AQUÍ: !h-auto y flex fuerzan a que todos los slides tengan la misma altura
              <SwiperSlide 
                key={index} 
                className="!h-auto flex border border-border-ui bg-bg-card-2 transition-shadow duration-300 hover:shadow-md"
              >
                {/* h-full asegura que la carta interna se estire completamente */}
                <div className="w-full h-full flex flex-col">
                  <Card {...card}/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        {/* CONTROLES DE NAVEGACIÓN (Corregidos a la izquierda) */}
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