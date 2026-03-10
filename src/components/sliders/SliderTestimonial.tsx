'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import CardTestiomanialLandingS from "../sections/shared/sectioncard/CardTestiomanialLandingS"



interface TestimonialItem {
  companyLogo: string
  companyName: string
  name: string
  role: string
  text: string
}

interface TestimonialSliderProps {
  items: TestimonialItem[]
}

export default function SliderTestimonial({ items }: TestimonialSliderProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 w-full">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
         breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next'
          }}
          spaceBetween={20}
        >

          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-stretch ">
              <CardTestiomanialLandingS item={item} />
            </SwiperSlide>
          ))}

        </Swiper>

        {/* navegacin botones */}
        <div className="flex justify-center items-center gap-6 mt-8">

          <button className="testimonial-prev h-12 w-12 flex items-center justify-center rounded-full border border-border-ui hover:bg-gray-100">
            <ArrowCircleLeftIcon />
          </button>
        <div className="custom-pagination static w-auto! gap-2" />
          <button className="testimonial-next h-12 w-12 flex items-center justify-center rounded-full border border-border-ui hover:bg-gray-100">
            <ArrowCircleRightIcon />
          </button>

        </div>

      </div>

    </section>
  )
}