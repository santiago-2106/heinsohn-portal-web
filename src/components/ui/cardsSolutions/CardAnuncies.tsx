import React from "react"
import Card from "./Card"
import CardGrid from "../CardGrid"
import { cardPropsInformation } from "../../types/typeCardAnuncies";

type ExtendedProps = Omit<cardPropsInformation, 'title' | 'description'> & {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topBadge?: string;
};

/**
 * Componente CONTENEDOR (sección): orquesta título, descripción, grid de cards y contenido inferior.
 * Delega la lógica de grillas a CardGrid — las vistas solo deben usar este componente.
 */
export default function CardAnuncies({
  title,
  description,
  cards = [],
  cols = 2,
  bottomText,
  bottomBtn,
  topBadge
}: ExtendedProps) {

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

        <CardGrid columns={cols}>
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
        </CardGrid>

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