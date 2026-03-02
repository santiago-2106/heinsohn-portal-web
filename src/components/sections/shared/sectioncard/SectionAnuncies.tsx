import React from "react";
import Card from "../../../ui/cards/Card";
import CardGrid from "../../../layout/grids/CardGrid";
import { cardPropsInformation } from "../../../../types/typeCardAnuncies";

type ExtendedProps = Omit<cardPropsInformation, "title" | "description"> & {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topBadge?: string;
};

export default function CardAnuncies({
  title,
  description,
  cards = [],
  cols = 2,
  bottomText,
  bottomBtn,
  topBadge,
}: ExtendedProps) {
  return (
    <section className="bg-bg-main py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-24">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="mb-12 text-center">
          {topBadge && (
            <span className="block mx-auto w-max bg-text-title text-bg-main text-[11px] font-bold px-4 py-1.5 tracking-wide mb-6">
              {topBadge}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6">
            {title}
          </h2>

          {description && (
            <div className="mx-auto max-w-3xl text-base text-text-body leading-relaxed">
              {description}
            </div>
          )}
        </div>

        {/* GRILLA DE TARJETAS (Usando tu CardGrid original) */}
        <CardGrid columns={cols}>
          {cards.map((card: any, index: number) => {
            
            return (
              /* AQUÍ ESTÁ LA SOLUCIÓN:
                 Le pasamos la clase card.colSpan al div padre para que se estire (md:col-span-2).
                 No necesitamos alterar la tarjeta por dentro, el componente Card original ya pone el 05 arriba.
              */
              <div key={index} className={`relative h-full ${card.colSpan || ""}`}>
                
                {/* DISEÑO NORMAL Y ÚNICO PARA TODAS LAS CARDS */}
                <Card {...card} />

                {/* Badge opcional superior derecho */}
                {card.badgeRight && (
                  <div className="absolute top-6 right-6 border border-border-ui px-3 py-1 text-[11px] text-text-body font-medium bg-bg-card-2">
                    {card.badgeRight}
                  </div>
                )}
              </div>
            );
          })}
        </CardGrid>

        {/* BOTÓN O TEXTO INFERIOR */}
        {(bottomText || bottomBtn) && (
          <div className="mt-16 text-center">
            {bottomText && (
              <p className="mx-auto max-w-3xl text-base text-text-body leading-relaxed mb-8">
                {bottomText}
              </p>
            )}

            {bottomBtn && (
              <a
                href="/contacto"
                className="inline-block bg-text-title text-bg-main text-sm font-medium py-4 px-8 rounded-full hover:opacity-80 transition-opacity"
              >
                {bottomBtn}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}