'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { dataCard } from "../data/landingTI/dataCard"
import Card from "../ui/cardsSolutions/Card"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


interface cardSilderSwiper {
    title:string
    cards?:dataCard[]
}


export default function SliderSolDigital({title, cards =[]}: cardSilderSwiper) {
  return (
    <section className="py-8 sm:py-12 md:py-16 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
        </div>
        <Swiper 
        modules={[Navigation]}
        breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            1280: {slidesPerView: 3},
        }}
        navigation={{
          prevEl:'.prev-btn',
          nextEl:'.next-btn'
        }}
        spaceBetween={20}
        >
            {
                cards.map((card,index) =>(
                    <SwiperSlide key={index} className=" border border-gray-300 bg-white">
                        <Card {...card}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>

        <div className="flex">
          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer prev-btn'>
            <ArrowCircleLeftIcon />
          </button>
          <button className='bg-white h-12 w-12 flex items-center justify-center rounded hover:bg-neutral-200 active:bg-neutral-100 transition-colors cursor-pointer next-btn'>
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
