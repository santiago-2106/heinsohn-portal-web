"use client";

import React, { useRef, useState } from "react";

interface VentajaCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SliderVentajasProps {
  title: string;
  description: string;
  cards: VentajaCard[];
}

export default function SliderVentajas({ title, description, cards }: SliderVentajasProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // 🔥 ESTADO MÁGICO: Controla cuál carta está activa. Por defecto es la 0 (la primera).
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para mover el carrusel a la izquierda o derecha
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-bg-main py-16 md:py-24 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO CENTRADO */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-light text-text-title mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-[17px] text-text-body font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => {
            // Evaluamos si esta carta en específico es la que está activa
            const isActive = activeIndex === index;

            return (
              <div 
                key={index}
                // Al pasar el mouse, esta carta se vuelve la activa
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-[280px] md:w-[320px] h-[400px] snap-center border p-8 md:p-10 flex flex-col transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive ? "border-text-title bg-bg-card-2" : "border-border-ui bg-transparent"
                }`}
              >
                {/* Contenedor interno que se mueve:
                  Si está activo (isActive), se va para arriba (justify-start).
                  Si está inactivo, se va para abajo (justify-end).
                */}
                <div className={`flex flex-col w-full h-full transition-all duration-500 ${
                  isActive ? "justify-start" : "justify-end"
                }`}>

                  {/* Ícono (Cambia de color y tamaño dependiendo si está activa) */}
                  <div className={`transition-all duration-500 ${
                    isActive 
                      ? "text-brand-accent mb-6 [&>svg]:w-12 [&>svg]:h-12" // Rojo, grande, arriba
                      : "text-text-body mb-4 [&>svg]:w-8 [&>svg]:h-8"      // Gris, pequeño, abajo
                  }`}>
                    {card.icon}
                  </div>

                  {/* Título de la tarjeta */}
                  <h3 className={`font-light leading-snug transition-colors duration-300 ${
                    isActive 
                      ? "text-xl lg:text-2xl text-text-title mb-4" 
                      : "text-lg lg:text-xl text-text-body"
                  }`}>
                    {card.title}
                  </h3>
                  
                  {/* Descripción: Oculta (altura 0, opacidad 0) cuando está inactiva, visible cuando está activa */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-[14px] md:text-[15px] font-light text-text-body leading-relaxed pt-2">
                      {card.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* CONTROLES DE NAVEGACIÓN */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border-ui text-text-body hover:border-text-title hover:text-text-title transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          
          {/* Puntos decorativos dinámicos que cambian según la carta activa */}
          <div className="flex items-center gap-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-4 bg-text-title" : "w-1.5 bg-border-ui hover:bg-text-body"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border-ui text-text-body hover:border-text-title hover:text-text-title transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>

     <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}