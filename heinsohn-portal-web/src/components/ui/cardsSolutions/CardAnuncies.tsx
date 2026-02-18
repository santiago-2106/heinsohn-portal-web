import React from "react"
import Card from "./Card"
import { cardPropsInformation } from "../../types/typeCardAnuncies";

export default function CardAnuncies({ 
  title, 
  description, 
  cards = [], 
  cols = 2,
  bottomText,
  bottomBtn
}: cardPropsInformation) {

  // Lógica para columnas.
  const gridCols = cols === 1 ? 'grid-cols-1 max-w-7xl mx-auto gap-10' 
  : cols === 3 ? 'lg:grid-cols-3 gap-6'
  : 'lg:grid-cols-2 gap-8';

  return (
    <section className='bg-white py-8 sm:py-12 md:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 md:-px-8 lg:px-12 xl:px-48'>
        
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

        <section className={`grid ${gridCols}`}>
            {
              /* Al ser universal, pasamos todas las props con {...card} */
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