"use client";

import React from "react";
import Image from "next/image";

interface ChatIAProps {
  data: {
    title: string;
    greeting: string;
    termsPart1: string;
    termsLink1: string;
    termsPart2: string;
    termsLink2: string;
    inputPlaceholder?: string;
  };
}

export default function ChatIAComponent({ data }: ChatIAProps) {
  if (!data) return null;

  return (
    <section className="flex flex-col md:flex-row w-full border border-border-ui h-auto md:h-[800px] lg:h-[850px] overflow-hidden bg-bg-main">
      
      {/* =========================================
          LADO IZQUIERDO: Imagen y Botón Atrás
          (Se eliminó 'border-r border-border-ui' para quitar la línea)
      ========================================= */}
      <div className="relative hidden md:block md:w-[50%] lg:w-[55%] h-full bg-bg-main">
        <Image
          src="/img/diseno-figuras.png" 
          alt="Diseño decorativo"
          fill
          className="object-cover opacity-100"
          priority
        />
        <button 
          onClick={() => window.history.back()}
          className="absolute top-10 right-10 w-11 h-11 bg-black rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
          aria-label="Volver"
        >
          <span className="material-symbols-rounded text-xl font-light">
            arrow_back
          </span>
        </button>
      </div>

      {/* =========================================
          LADO DERECHO: Contenido
      ========================================= */}
      <div className="flex-1 flex flex-col justify-center items-end bg-bg-main p-10 pb-40 md:py-12 md:pb-60 md:pl-16 md:pr-12 lg:pr-20">
        
        {/* Contenedor padre de 650px */}
        <div className="flex flex-col gap-6 w-full max-w-[650px]">
          
          {/* 1. PRIMER CUADRO (TÍTULO) */}
          <div className="w-full max-w-[450px] ml-auto border border-border-ui bg-white p-8 md:p-10 flex justify-end shadow-sm">
            <h2 className="text-3xl md:text-[30px] text-text-title font-light leading-[1.2] text-right whitespace-pre-line">
              {data.title}
            </h2>
          </div>

          {/* Texto de Bienvenida */}
          <p className="text-[13px] md:text-[15px] text-text-body font-light leading-relaxed">
            {data.greeting}
          </p>

          {/* 2. SEGUNDO CUADRO (CHECKBOX) */}
          <div className="w-full max-w-[500px] border border-border-ui p-4 md:p-5 bg-white flex items-start gap-4 shadow-sm">
            <input 
              type="checkbox" 
              className="mt-1 w-[18px] h-[18px] border-gray-300 rounded text-[#D90036] focus:ring-[#D90036] cursor-pointer shrink-0" 
            />
            <p className="text-[12px] md:text-[13px] text-text-body font-light">
              {data.termsPart1}{" "}
              <a href="#" className="text-[#D90036] hover:underline">
                {data.termsLink1}
              </a>{" "}
              {data.termsPart2}{" "}
              <a href="#" className="text-[#D90036] hover:underline">
                {data.termsLink2}
              </a>
            </p>
          </div>

          {/* 3. TERCER CUADRO (INPUT) */}
          <div className="w-full flex items-center gap-3 border border-border-ui rounded-full px-5 py-2.5 bg-white shadow-sm focus-within:border-gray-400 transition-colors mt-2">
            <span className="material-symbols-rounded text-gray-500 font-light text-[18px] shrink-0">
              auto_awesome
            </span>
            
            <input 
              type="text"
              placeholder={data.inputPlaceholder || "|"}
              className="flex-1 bg-transparent border-none focus:outline-none text-text-body text-[14px] placeholder-gray-400"
            />
            
            <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors shrink-0">
              <span className="material-symbols-rounded text-[18px] font-light">
                arrow_upward
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}