'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import TextComponent from "../ui/typography/TextComponent"

interface CarouselSplitItem {
  title: string
  description: string
  image: string
  reverse?: boolean
  btnTextSlider?: string
}

interface CarouselSplitHeroProps {
  titleHero?: string
  items: CarouselSplitItem[]
}

export default function SliderHero({ titleHero, items }: CarouselSplitHeroProps) {
  return (
    <div>
      <div className="-mb-10 md:-mb-18 ">
        <TextComponent title={titleHero} />
      </div>
      <section className="w-full py-2 flex justify-center">

        <div className="w-full max-w-227 px-4 md:px-0 flex flex-col items-center relative">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            navigation={{
              prevEl: ".hero-prev",
              nextEl: ".hero-next"
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            className="w-full"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""
                    } bg-bg-card-2 border border-border-ui overflow-hidden`}
                >

                  <div className="w-full md:w-145 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-62.5 md:h-84.25 object-cover brightness-50 md:brightness-90 grayscale-75 transition-all duration-500"
                    />
                  </div>

                  <div className="w-full md:w-82.5 md:h-84.25 flex flex-col justify-center gap-2.5 p-8 shrink-0">
                    <h3 className="font-light text-[30px] md:text-lg lg:text-2xl leading-[110%] md:leading-[100%] text-text-title">
                      {item.title}
                    </h3>

                    <p className="font-light text-lg md:text-[18px] lg:text-[16px] leading-relaxed md:leading-7.5 text-text-body">
                      {item.description}
                    </p>

                    <button className="text-text-body font-medium flex items-center gap-2 mt-2 hover:translate-x-1 hover:cursor-pointer group">
                      <span>{item.btnTextSlider}</span>
                      <span className="text-brand-accent transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-end w-full gap-4 mt-8">
            <button className="material-symbols-rounded hero-prev h-12 w-12 flex items-center justify-center rounded-full border border-border-ui bg-bg-card-2 transition-all cursor-pointer">
              arrow_back
            </button>

            <div className="custom-pagination w-fit! flex gap-2" />

            <button className="material-symbols-rounded hero-next h-12 w-12 flex items-center justify-center rounded-full border border-border-ui bg-bg-card-2 transition-all cursor-pointer">
              arrow_forward
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}