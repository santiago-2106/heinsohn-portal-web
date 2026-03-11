'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

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
          {data && data.map((item: any, index: number) => (
            <SwiperSlide key={item.id || index}>
              <div className="flex flex-col md:flex-row items-stretch">

                {/* Imagen decorativa lado izquierdo */}
                <div className="hidden md:flex md:w-1/3 bg-bg-card-2 border border-border-ui items-center justify-center relative">
                  <Image
                    src="/img/slider-imgs.png"
                    alt="Decoración abstracta blog"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="w-full md:w-2/3 bg-bg-card-2 border border-border-ui flex flex-col">
                  {/* Imagen de la noticia */}
                  <div className="relative h-56 md:h-80 w-full">
                    <Image
                      src={item.img || "/img/noticias-interes.jpg"}
                      alt={`Imagen destacada de ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover brightness-90 grayscale-100"
                    />
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="text-text-title flex flex-col gap-4 p-6 grow">
                    <h4 className="font-medium text-2xl">
                      {item.title}
                    </h4>

                    <p className="text-text-body font-light leading-relaxed">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      aria-label={`Leer artículo completo sobre: ${item.title}`}
                      className="mt-auto inline-flex w-max items-center gap-2 text-sm font-medium text-text-body transition-colors group"
                    >
                      {item.btn || "Leer mas"}
                      <span aria-hidden="true" className="material-symbols-rounded text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controles de Navegación del Carrusel (Accesibilidad agregada) */}
        <div className="flex items-center justify-end gap-4 mt-10">
          <button 
            aria-label="Ver noticia anterior"
            className="prev-btn h-10 w-10 rounded-full border border-border-ui flex items-center justify-center text-text-body hover:cursor-pointer hover:bg-bg-menu-hover hover:text-text-title transition"
          >
            <span aria-hidden="true" className="material-symbols-rounded">chevron_left</span>
          </button>

          <div className="custom-pagination static w-auto! gap-2 flex items-center" />

          <button 
            aria-label="Ver noticia siguiente"
            className="next-btn h-10 w-10 rounded-full border border-border-ui flex items-center justify-center text-text-body hover:cursor-pointer hover:bg-bg-menu-hover hover:text-text-title transition"
          >
            <span aria-hidden="true" className="material-symbols-rounded">chevron_right</span>
          </button>
        </div>

      </div>
    </section>
  )
}