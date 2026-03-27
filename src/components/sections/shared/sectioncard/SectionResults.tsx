import React from "react";
import Link from "next/link";

// --- INTERFACES DE PROPS ---
export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface MainStatItem {
  icon: React.ReactNode;
  title: string;
  prefix: string;
  number: string;
  text: string;
}

export interface CardResultsProps {
  title: string | React.ReactNode;
  mainStat: MainStatItem;
  benefits: BenefitItem[];
  button: {
    text: string;
    href: string;
  };
}

export default function CardResults({ title, mainStat, benefits, button }: CardResultsProps) {
  return (
    <section className="bg-bg-main py-16 sm:py-20 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO PRINCIPAL */}
        <h2 className="mb-16 text-center text-3xl font-light text-text-title sm:text-4xl md:text-5xl leading-tight">
          {title}
        </h2>

        <div className="border border-border-ui bg-bg-card-2 grid grid-cols-1 lg:grid-cols-12 transition-colors duration-300">
          
          {/* ========================================== */}
          {/* COLUMNA IZQUIERDA: Experiencia Comprobada  */}
          {/* ========================================== */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border-ui">
            <div className="h-full flex flex-col p-10 lg:p-12">
              <div className="mt-auto pt-24 lg:pt-40">
                
                {/* Ícono y Título de la estadística */}
                <div>
                  <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>
                    {mainStat.icon}
                  </span>
                  <h3 className="text-2xl font-normal text-text-title">
                    {mainStat.title}
                  </h3>
                </div>
                
                {/* Número Grande */}
                <div className="flex items-start mb-3">
                  <span className="text-brand-accent text-6xl md:text-7xl font-light leading-none mr-1 mt-2">
                    {mainStat.prefix}
                  </span>
                  <span className="text-text-title text-8xl md:text-9xl font-normal leading-none tracking-tight">
                    {mainStat.number}
                  </span>
                </div>
                
                {/* Descripción del número */}
                <p className="text-text-body text-lg font-light leading-relaxed max-w-xs mt-4">
                  {mainStat.text}
                </p>

              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* COLUMNA DERECHA: Tarjetas de Beneficios  */}
          {/* ========================================== */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 md:p-10 flex flex-col items-start hover:bg-bg-menu-hover transition-colors duration-300
                  ${index === 0 ? "border-b md:border-r border-border-ui" : ""}
                  ${index === 1 ? "border-b border-border-ui" : ""}
                  ${index === 2 ? "border-b md:border-b-0 md:border-r border-border-ui" : ""}
                `}
              >
                <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>
                  {item.icon}
                </span>
                <h3 className="text-lg font-normal text-text-title mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÓN INFERIOR */}
        <div className="mt-16 flex justify-center">
          <Link
            href={button.href}
            className="bg-text-title text-bg-main text-base font-medium py-4 px-10 rounded-full hover:opacity-80 transition-opacity shadow-lg"
          >
            {button.text}
          </Link>
        </div>
        
      </div>
    </section>
  );
}