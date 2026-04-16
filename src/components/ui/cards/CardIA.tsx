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
    <div className="grid-cols-1 max-w-5xl mx-auto gap-10 p-4 ">
    <article className="flex flex-col border border-border-ui bg-bg-card-2 p-8 md:p-12 shadow-sm mb-8 w-full max-w-5xl mx-auto transition-colors duration-300 h-full">
      
      {/* Icono */}
      <div className="material-symbols-rounded mb-6 text-text-title" style={{fontSize:"48px"}}>{icon}</div>

      {/* Título principal de la carta */}
      <h3 className="mb-6 text-lg md:text-2xl font-light">
        {title}
      </h3>

      {/* Descripción principal */}
      <div className="mb-8 text-sm md:text-base leading-relaxed text-text-body">
        {description}
      </div>

      {/* Listas (Beneficios, Entregables, etc.) */}
      {lists && lists.length > 0 && (
        <div className="flex flex-col gap-8 mb-8">
          {lists.map((list, listIndex) => {
            const isHighlighted = list.variant === "highlighted";
            
            return (
              <div 
                key={listIndex} 
                className={isHighlighted ? "border-t border-border-ui pt-8" : ""}
              >
                {list.title && (
                  <h4 
                    className={`mb-4 text-lg md:text-xl ${
                      isHighlighted 
                        ? "font-light text-text-body" 
                        : "font-medium text-text-title"
                    }`}
                  >
                    {list.title}
                  </h4>
                )}
                
                {/* AQUI ESTA LA CORRECCIÓN: Agregamos pl-4 (padding left) para mover toda la lista a la derecha */}
                <ul className="space-y-3 pl-4 md:pl-5">
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-text-body gap-4">
                      {list.type === "bullet" ? (

                        // Viñeta: Puntito rojo muy pequeñito (h-1 w-1)
                        
                        // Ajuste visual del puntito rojo para que quede alineado con el texto
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-accent"></span>

                      ) : (
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

      {/* Espaciador para empujar el botón al final */}
     

      {/* Texto de cierre (Footer de la carta) */}
      {footerText && (
        <div className="border-t border-border-ui pt-8 mb-8">
          <p className="mb-4 text-sm md:text-base leading-relaxed text-text-body mt-2">
            {footerText}
          </p>
        </div>
      )}

      {/* Botón de acción */}
      <div className={btnHasBorder ? "border-t border-border-ui pt-8" : ""}>
        <a
          href={btnHref}
          className="inline-flex items-start md:items-center gap-3 text-sm font-bold group text-text-title hover:opacity-80 transition-opacity w-full whitespace-normal break-words"
        >
          <span>{btnText}</span>

          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1 shrink-0">
            →
          </span>
        </a>
    </div>
    </article>
    </div>
  );
}