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
  return (
    <section className="relative flex flex-col border border-border-ui bg-bg-card-2 p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 h-full">
      {/* Etiqueta Negra Superior */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-text-title text-bg-main text-[11px] font-bold px-4 py-1.5 tracking-wide">
          {badge}
        </div>
      )}

      {/* Icono Principal */}
      <div className="mb-6 text-text-title">{icon}</div>

      {/* Etiqueta / Contenedor */}
      {contenedor && (
        <div className="mb-6 self-start border border-border-ui px-4 py-1.5 text-[11px] text-text-body font-semibold tracking-wide">
          {contenedor}
        </div>
      )}

      {/* Título Principal */}
      <h3 className="mb-4 text-2xl font-light text-text-title">{title}</h3>

      {/* Subtítulo con ícono de tendencia */}
      {subTitle && (
        <div className="flex items-center gap-3 mb-6 text-[14px] font-bold text-text-title">
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

      {/* Descripción General */}
      <p className="mb-8 text-sm md:text-base leading-relaxed text-text-body font-light">
        {description}
      </p>

      {/* Lista de características */}
      {items && items.length > 0 && (
        <ul className="mb-10 flex flex-col gap-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-text-body font-light"
            >
              <span className="mt-0.5 shrink-0 text-brand-accent">
                {/* Flecha roja */}
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

      {/* Botón Redondeado Inferior */}
      {btnText && (
        <a
          href="#"
          className="mt-auto group flex items-center justify-between w-max gap-4 border border-border-ui rounded-full px-6 py-2.5 text-sm font-semibold text-text-title hover:border-text-body transition-colors"
        >
          {btnText}
          <span className="text-text-body group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      )}
    </section>
  );
}