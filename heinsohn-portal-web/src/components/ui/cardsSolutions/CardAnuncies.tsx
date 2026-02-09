import { dataCard } from "../../data/dataCard"
import Card from "./Card"


interface cardPropsInformation {
  title: string
  cards?: dataCard[]
}


export default function CardAnuncies({ title, cards = [] }: cardPropsInformation) {
  return (
    <section className='bg-white py-8 sm:py-12 md:py-16'>
      <div  className='mx-auto max-w-7xl px-4 sm:px-6 md:-px-8 lg:px-12 xl:px-48 '>
        <div className='mb-8 sm:mb-10 md:mb-12 text-center'>
            <h2 className='text-3xl sm:text-3xl md:text-4xl px-4'>{title}</h2>
        </div>
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2'>
            {
              cards.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
        </section>

       
      </div>
    </section>
  )
}
