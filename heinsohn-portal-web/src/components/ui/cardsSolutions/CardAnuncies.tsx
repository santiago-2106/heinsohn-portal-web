import { dataCard } from "../../data/financiera/DataFinanciera"

import Card from "./Card"

interface cardPropsInformation {
  title: string
  description?: string 
  cards?: dataCard[]
  cols?: number
  bottomText?: string 
  bottomBtn?: string  
}

export default function CardAnuncies({ 
  title, 
  description, 
  cards = [], 
  cols = 2,
  bottomText,
  bottomBtn
}: cardPropsInformation) {

  const gridCols = cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

  return (
    <section className='bg-white py-8 sm:py-12 md:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 md:-px-8 lg:px-12 xl:px-48 '>
        
        <div className='mb-8 sm:mb-10 md:mb-12 text-center'>
            <h2 className='text-3xl sm:text-3xl md:text-4xl text-gray-900 font-light mb-6 px-4'>
              {title}
            </h2>
            {description && (
              <p className="mx-auto max-w-4xl text-base text-gray-600 leading-relaxed px-4">
                {description}
              </p>
            )}
        </div>

        <section className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 ${gridCols}`}>
            {
              cards.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
        </section>

        {(bottomText || bottomBtn) && (
          <div className="mt-16 text-center">
            {bottomText && (
              <p className="mx-auto max-w-4xl text-base text-gray-600 leading-relaxed mb-8 px-4">
                {bottomText}
              </p>
            )}
            
            {bottomBtn && (
              <a 
                href="/contacto"
                className="inline-block bg-[#111827] text-white text-sm font-medium py-4 px-8 rounded-full hover:bg-gray-900 transition-colors shadow-lg"
              >
                {bottomBtn}
              </a>
            )}
          </div>
        )}

      </div>
    </section>
  )
}