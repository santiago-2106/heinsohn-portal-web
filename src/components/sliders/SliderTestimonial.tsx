'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import CardTestiomanialLandingS from "../sections/shared/sectioncard/CardTestiomanialLandingS"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TextComponent from "../ui/typography/TextComponent"

interface TestimonialItem {
  companyLogo: string
  companyName: string
  name: string
  role: string
  text: string
}

interface TestimonialSliderProps {
  title?: React.ReactNode
  items: TestimonialItem[]
}

export default function SliderTestimonial({ title,items }: TestimonialSliderProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16 w-full">
      <TextComponent title={title} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        <Swiper
          modules={[Navigation, Pagination]}
          centerInsufficientSlides={true} /* <-- Esto centra las cartas cuando son solo 2 */
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next'
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination' // <-- Llama a tus estilos de puntitos alargados
          }}
          spaceBetween={20}
        >

          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-stretch">
              <CardTestiomanialLandingS item={item} />
            </SwiperSlide>
          ))}

        </Swiper>

        {/* CONTROLES EXACTOS A TU IMAGEN (PERO CENTRADOS) */}
        <div className="flex justify-center items-center gap-6 mt-10 w-full">

          {/* Flecha Izquierda */}
          <button className="testimonial-prev h-12 w-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition cursor-pointer">
            <span aria-hidden="true" className="material-symbols-rounded" style={{ fontWeight: 300 }}>arrow_back</span>
          </button>

          {/* Los puntitos (El CSS global de tu proyecto hace que el activo sea alargado) */}
          <div className="custom-pagination !w-auto flex justify-center items-center gap-2" />

          {/* Flecha Derecha */}
          <button className="testimonial-next h-12 w-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition cursor-pointer">
            <span aria-hidden="true" className="material-symbols-rounded" style={{ fontWeight: 300 }}>arrow_forward</span>
          </button>

        </div>

      </div>
    </section>
  )
}