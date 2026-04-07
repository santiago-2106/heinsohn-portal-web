import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface CasoExitoSection {
  icon: string;
  title: string;
  description: string;
}

interface CasoExitoDetailProps {
  breadcrumb: BreadcrumbItem[];
  title: string;
  industry: string;
  sections: CasoExitoSection[];
}

export default function CasoExitoDetail({
  breadcrumb,
  title,
  industry,
  sections,
}: CasoExitoDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-12 md:pt-20">
      
      {/* 1. Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-16 text-text-body font-light">
        {breadcrumb.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index === 0 && (
              <span className="material-symbols-rounded text-[18px]">home</span>
            )}
            {index > 0 && (
              <span className="material-symbols-rounded text-[18px] text-text-body/50">chevron_right</span>
            )}
            {item.url ? (
              <Link href={item.url} className="hover:text-[#D90036] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-title">{item.label}</span>
            )}
          </div>
        ))}
      </nav>

      {/* 2. Título Principal */}
      <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light text-text-title leading-tight mb-8">
        {title}
      </h1>

      {/* 3. Etiqueta de Industria */}
      <div className="inline-block border border-border-ui px-4 py-1.5 mb-16">
        <span className="text-sm font-medium text-text-title tracking-wide">
          {industry}
        </span>
      </div>

      {/* 4. Secciones (Misión, Resultado, etc.) */}
      <div className="space-y-12 md:space-y-16 mb-20">
        {sections.map((sec, index) => (
          <div key={index}>
            {/* Encabezado con ícono */}
            <div className="flex items-center gap-4 mb-6">
              <span 
                className="material-symbols-rounded text-text-title font-light shrink-0" 
                style={{ fontSize: "42px" }}
              >
                {sec.icon}
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-text-title">
                {sec.title}
              </h2>
            </div>
            
            {/* Descripción */}
            <p className="text-base lg:text-[17px] text-text-body font-light leading-relaxed max-w-5xl">
              {sec.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}