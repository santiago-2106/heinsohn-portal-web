<<<<<<< HEAD
import React from "react"

interface CardProps {
  icon?: React.ReactNode
  title: string | React.ReactNode
  description?: string | React.ReactNode
  btn?: string
  items?: string[]
  alineacion?: string
}

export default function Card({
  icon,
  title,
  description,
  btn,
  items,
  alineacion = 'left'
}: CardProps) {

  const centrar = alineacion === 'center'
  const cleanBtnText = btn ? btn.replace(/->|→/g, '').trim() : ''

  return (
    <div
      className={`
        flex flex-col border border-gray-200 bg-white p-8 md:p-10 
        shadow-sm h-full hover:shadow-md transition-shadow duration-300
        ${centrar ? "items-center text-center" : "items-start text-left"}
      `}
    >
=======
import { dataCard } from "@/src/components/types/cardTypes"

/**
 * Componente PRESENTACIONAL: solo renderiza UI basada en props.
 * NO debe contener lógica de layout/grid — eso es responsabilidad del contenedor (CardAnuncies).
 */
export default function Card({ icon, title, description, btn, items, alineacion = 'left' }: dataCard) {

  const centrar = alineacion === 'center'

  const cleanBtnText = btn ? btn.replace(/->|→/g, '').trim() : '';

  return (
    <div className={`flex flex-col border border-gray-200 bg-white p-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300
      ${centrar ? "items-center text-center" : ""}`}>

      <div className='mb-6 flex h-12 w-12 items-center justify-start text-gray-900'>
        <i className="scale-125">{icon}</i>
      </div>
>>>>>>> origin/main

      {/* ICONO / NÚMERO */}
      {icon && (
        <div className={`
          mb-6 w-full
          ${centrar ? "flex justify-center" : ""}
        `}>
          {icon}
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="mb-4 text-lg md:text-xl font-medium text-gray-900">
        {title}
      </h3>

      {/* DESCRIPCIÓN */}
      {description && (
        <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600">
          {description}
        </p>
      )}

<<<<<<< HEAD
      {/* LISTA DE ITEMS */}
      {items && items.length > 0 && (
        <div className="flex-grow mb-6 w-full">
          <ul className="space-y-3">
=======
      <div className="flex-grow mb-6">
        {items && items.length > 0 && (
          <ul className="space-y-4">
>>>>>>> origin/main
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-start text-sm text-gray-600 ${
                  centrar ? "justify-center text-center" : ""
                }`}
              >
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E30613]"></span>
<<<<<<< HEAD
                <span className="leading-relaxed">
                  {item}
                </span>
=======
                
                <div className="flex flex-col">
                  {/* El subtitulo del punto */}
                  <span className="fonte-semibold text-gray-800 leading-relaxed">{item.titulo}</span>
                  {/* El texto */}
                  <span className="leading-relaxed mt-1 text-gray-800">{item.textos}</span>
                </div>

>>>>>>> origin/main
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BOTÓN */}
      {btn && (
<<<<<<< HEAD
        <a
          href="/"
          className={`
            mt-auto inline-flex gap-2 text-sm font-bold group
            ${centrar ? "justify-center" : "items-center"}
          `}
        >
=======
        <a href="/" className='mt-auto inline-flex items-center gap-2 text-sm font-bold group'>
>>>>>>> origin/main
          <span className="text-gray-900 group-hover:text-black transition-colors">
            {cleanBtnText}
          </span>
          <span className="text-[#E30613] text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      )}

    </div>
  )
}