'use client';

import React, { useRef } from 'react';
import Link from 'next/link';

interface SolucionCard {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface CarouselSolucionesProps {
  title: string;
  description: string;
  cards: SolucionCard[];
}

export default function CarouselSoluciones({ title, description, cards }: CarouselSolucionesProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      // Desplaza el ancho de una tarjeta aprox (ajustable)
      const scrollAmount = 400; 
      sliderRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-24">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] text-text-title font-light mb-6">
            {title}
          </h2>
          <p className="text-text-body text-base md:text-[17px] max-w-4xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div className="relative">
          
          {/* Track de tarjetas */}
          <div 
            ref={sliderRef} 
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Oculta la barra de scroll
          >
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[360px] snap-start border border-border-ui p-8 md:p-10 flex flex-col bg-white"
              >
               <span 
  className="material-symbols-rounded mb-6 text-text-title font-light" 
  style={{ fontSize: '45px' }}
>
  {card.icon}
</span>
                <h3 className="text-xl md:text-2xl font-light text-text-title mb-4">
                  {card.title}
                </h3>
                <p className="text-text-body font-light text-[15px] leading-relaxed mb-10 flex-grow">
                  {card.description}
                </p>
                <Link 
                  href={card.linkUrl} 
                  className="text-[#D90036] font-medium text-sm flex items-center gap-2 group w-max"
                >
                  {card.linkText}
                  <span className="material-symbols-rounded text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Controles Inferiores (Alineados a la izquierda) */}
          <div className="flex gap-4 mt-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-full border border-border-ui flex items-center justify-center hover:bg-gray-100 transition-colors text-text-title bg-white"
              aria-label="Anterior"
            >
              <span className="material-symbols-rounded text-xl font-light">arrow_back</span>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-full border border-border-ui flex items-center justify-center hover:bg-gray-100 transition-colors text-text-title bg-white"
              aria-label="Siguiente"
            >
              <span className="material-symbols-rounded text-xl font-light">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}