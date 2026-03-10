import React from "react";
import { IACardProps } from "@/src/types/typeIA";

export default function CardIA({
  icon,
  title,
  description,
  lists,
  footerText,
  btnText,
  btnHasBorder,
  btnHref = "#",
}: IACardProps) {
  return (
    <article className="flex flex-col border border-border-ui bg-bg-card-2 p-8 md:p-12 shadow-sm mb-8 w-full max-w-5xl mx-auto transition-colors duration-300 h-full">
      
      {/* Icono */}
      <div className="mb-6 text-text-title">{icon}</div>

      {/* Título principal */}
      <h3 className="mb-6 text-2xl md:text-3xl font-light text-text-title">
        {title}
      </h3>

      {/* Descripción */}
      <div className="mb-8 text-text-body leading-relaxed">
        {description}
      </div>

      {/* Listas (Beneficios, Entregables) */}
      {lists && lists.length > 0 && (
        <div className="flex flex-col gap-8 mb-8">
          {lists.map((list, listIndex) => {
            const isHighlighted = list.variant === "highlighted";
            
            return (
              <div 
                key={listIndex} 
                // Si es "highlighted", le pone la línea arriba y un padding
                className={isHighlighted ? "border-t border-border-ui pt-8" : ""}
              >
                {list.title && (
                  <h4 
                    className={`mb-4 ${
                      isHighlighted 
                        ? "text-xl md:text-2xl font-light text-text-body" // Texto grande y delgado
                        : "font-semibold text-text-title"                 // Texto pequeño y negrita
                    }`}
                  >
                    {list.title}
                  </h4>
                )}
                
                <ul className="space-y-3">
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-text-body gap-3">
                      {list.type === "bullet" ? (
                        // Viñeta: Puntito rojo muy pequeñito (h-1 w-1)
                        <span className="mt-2.5 h-1 w-1 flex shrink-0 rounded-full bg-brand-accent"></span>
                      ) : (
                        // Viñeta: Número rojo
                        <span className="text-brand-accent font-medium">
                          {itemIndex + 1}.
                        </span>
                      )}
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Empuja el contenido hacia abajo */}
      <div className="flex grow"></div>

      {/* Texto de cierre (con su línea arriba) */}
      {footerText && (
        <div className="border-t border-border-ui pt-8 mb-8">
          <p className="text-text-body leading-relaxed">
            {footerText}
          </p>
        </div>
      )}

      {/* Botón final (con línea arriba opcional) */}
      <div className={btnHasBorder ? "border-t border-border-ui pt-8" : ""}>
        <a
          href={btnHref}
          className="inline-flex items-center gap-3 text-sm font-bold group text-text-title hover:opacity-80 transition-opacity w-max"
        >
          <span>{btnText}</span>
          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}