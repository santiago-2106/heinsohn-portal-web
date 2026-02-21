import React from "react"
import Card from "./Card"
import CardGrid from "../CardGrid"
import { cardPropsInformation } from "../../types/typeCardAnuncies";

<<<<<<< HEAD
type ExtendedProps = Omit<cardPropsInformation, 'title' | 'description'> & {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topBadge?: string;
};

export default function CardAnuncies({ 
  title, 
  description, 
  cards = [], 
=======
/**
 * Componente CONTENEDOR (sección): orquesta título, descripción, grid de cards y contenido inferior.
 * Delega la lógica de grillas a CardGrid — las vistas solo deben usar este componente.
 */
export default function CardAnuncies({
  title,
  description,
  cards = [],
>>>>>>> origin/main
  cols = 2,
  bottomText,
  bottomBtn,
  topBadge
}: ExtendedProps) {

<<<<<<< HEAD
  const gridCols =
    cols === 1
      ? 'grid-cols-1 max-w-7xl mx-auto gap-10'
      : cols === 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'grid-cols-1 md:grid-cols-2 gap-6 md:gap-8';

  return (
    <section className='bg-white py-12 md:py-16'>
      <div className='mx-auto max-w-7xl px-6 md:px-12 xl:px-24'>
        
        <div className='mb-12 text-center'>
            
            {topBadge && (
              <span className="block mx-auto w-max bg-[#111827] text-white text-[11px] font-bold px-4 py-1.5 tracking-wide mb-6">
                {topBadge}
              </span>
            )}

            <h2 className='text-3xl md:text-4xl text-gray-900 font-light mb-6'>
              {title}
            </h2>

            {description && (
              <div className="mx-auto max-w-3xl text-base text-gray-600 leading-relaxed">
                {description}
              </div>
            )}
        </div>

        <div className={`grid ${gridCols}`}>
          {
            cards.map((card: any, index: number) => (
              <div key={index} className="relative h-full">
                <Card {...card} />
                
                {card.badgeRight && (
                  <div className="absolute top-6 right-6 border border-gray-200 px-3 py-1 text-[11px] text-gray-500 font-medium bg-white">
                    {card.badgeRight}
                  </div>
                )}
              </div>
            ))
          }
        </div>
=======
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

        <CardGrid columns={cols}>
          {
            cards.map((card, index) => (
              <Card key={index} {...card} />
            ))
          }
        </CardGrid>
>>>>>>> origin/main

        {(bottomText || bottomBtn) && (
          <div className="mt-16 text-center">
            {bottomText && (
              <p className="mx-auto max-w-3xl text-base text-gray-600 leading-relaxed mb-8">
                {bottomText}
              </p>
            )}

            {bottomBtn && (
              <a
                href="/contacto"
                className="inline-block bg-[#111827] text-white text-sm font-medium py-4 px-8 rounded-full hover:bg-gray-900 transition-colors"
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