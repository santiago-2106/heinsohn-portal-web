import { propsGestionHumana } from "../../../types/typesGestionHumana";
import React from "react";

export default function CardGestionHumana({
  icon,
  title,
  description,
  contenedor,
  btnText,
  badge,
  subTitle,
  items,
}: propsGestionHumana) {
  
  // Verificamos si es la tarjeta del medio (la que tiene el badge) para darle el borde negro
  const isMiddleCard = !!badge;

  return (
    // CONTENEDOR PRINCIPAL: 
    // Padding grande (p-8 md:p-12) para que se vea amplia.
    // Borde negro si es la del medio, borde gris si es la de los lados.
    <article 
      className={`relative flex flex-col bg-bg-card-2 p-8 hover:shadow-lg transition-all duration-300 h-full ${
        isMiddleCard ? "border border-text-title" : "border border-border-ui"
      }`}
    >
      
      {/* 🖤 RECUAZDRO NEGRO SUPERIOR ("Más popular") */}
      {/* ¡CORREGIDO!: top-0 lo coloca 100% por DENTRO de la tarjeta, pegado al techo */}
      {isMiddleCard && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-text-title text-bg-main text-[11px] font-bold px-6 py-2 tracking-wide z-10 whitespace-nowrap">
          {badge}
        </div>
      )}

      {/* Espaciador: Si tiene el recuadro negro, empujamos el ícono un poco más abajo para que no choquen */}
      {isMiddleCard && <div className="mt-4"></div>}

      {/* Icono Principal (Alineado a la izquierda, con margen grande) */}
      <div className="mb-8 text-text-title">{icon}</div>

      {/* Etiqueta / Contenedor ("Para empresas medianas") */}
      {contenedor && (
        <div className="mb-8 self-start border border-border-ui px-5 py-2 text-[12px] text-text-body font-semibold tracking-wide">
          {contenedor}
        </div>
      )}

      {/* Título Principal */}
      <h3 className="mb-6 text-2xl  font-light text-text-title leading-[1.3]">
        {title}
      </h3>

      {/* Subtítulo con ícono de tendencia ("Desde 5 licencias") */}
      {subTitle && (
        <div className="flex items-center gap-3 mb-8 text-[15px] font-bold text-text-title">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          {subTitle}
        </div>
      )}

      {/* Descripción General (Interlineado grande leading-[1.8] para estirar el texto) */}
      <p className="mb-10 text-[15px] md:text-base leading-[1.8] text-text-body font-light">
        {description}
      </p>

      {/* Lista de características (Checks rojos) */}
      {/* gap-5 hace que los ítems estén muy separados hacia abajo, alargando la tarjeta */}
      {items && items.length > 0 && (
        <ul className="mb-14 flex flex-col gap-5">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-[15px] text-text-body font-light leading-relaxed"
            >
              <span className="mt-1.5 shrink-0 text-brand-accent">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Esto empuja el botón inferior siempre hacia el fondo */}
      <div className="flex grow"></div>

      {/* Botón Redondeado Inferior */}
      {btnText && (
        <a
          href="#"
          className="mt-auto flex items-center gap-3 text-[14px] font-bold text-text-body"
        >
          {btnText}
          <span className="text-brand-accent text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      )}
    </article>
  );
}