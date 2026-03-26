import React, { ReactNode } from "react";
import Card from "../../../ui/cards/Card";
import CardGrid from "../../../layout/grids/CardGrid";
import { cardPropsInformation } from "../../../../types/typeCardAnuncies";

type ExtendedProps = Omit<cardPropsInformation, "title" | "description"> & {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topBadge?: ReactNode;

  topBadge?: string;
  // Añadimos esta propiedad opcional para controlar la alineación a futuro
  alignHeader?: "left" | "center"; 

};

export default function CardAnuncies({
  title,
  description,
  cards = [],
  cols = 2,
  bottomText,
  bottomBtn,
  topBadge,
  alignHeader = "center", // Si no se le pasa nada, por defecto centra (no rompe otras vistas)
}: ExtendedProps) {
  
  // Condicionamos las clases dependiendo de lo que se elija
  const alignClass = alignHeader === "left" ? "text-left items-start" : "text-center items-center";
  const descClass = alignHeader === "left" ? "w-full" : "mx-auto max-w-3xl";

  return (
    <section className="bg-bg-main py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-24">
        
        {/* ENCABEZADO DE LA SECCIÓN (Ahora es flexible) */}
        <div className={`mb-12 flex flex-col ${alignClass}`}>
          {topBadge && (
            <span className="block w-max bg-text-title text-bg-main text-[11px] font-bold px-4 py-1.5 tracking-wide mb-6">
              {topBadge}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6 w-full">
            {title}
          </h2>

          {description && (
            <div className={`text-base text-text-body leading-relaxed ${descClass}`}>
              {description}
            </div>
          )}
        </div>

        {/* GRILLA DE TARJETAS */}
        <CardGrid columns={cols}>
          {cards.map((card: any, index: number) => {
            return (
              <div key={index} className={`relative h-full ${card.colSpan || ""}`}>
                
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