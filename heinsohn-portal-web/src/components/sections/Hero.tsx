import React from 'react';
import Link from 'next/link';
import bgImage from '../../img/diseno-figuras.png';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroProps {
  title: string;
  description: string | React.ReactNode;//Agregue react.node  para que acepte diferentes tipos de contenido y sean renderizables
  buttonText: string;
  breadcrumb: BreadcrumbItem[];
}

export default function Hero({ title, description, buttonText, breadcrumb }: HeroProps) {
  return (
    <section className="bg-white pt-12 md:pt-20">
      <div className="mx-auto max-w-5xl px-8 md:px-12 pb-12 md:pb-20">
        <div className="flex flex-col items-start w-full">
          
          {/* 1. BREADCRUMB */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> 
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Home</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight />
                {item.href ? (
                  <Link href={item.href} className="hover:text-black transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-800">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <br />
          <div className="mb-8 flex flex-wrap items-center gap-3">
            
            <div className=" px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <span className="text-[#E30613] font-bold text-sm">+</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                40 años de experiencia
              </span>
            </div>
            <div className=" px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <span className="text-[#000000] font-bold text-sm">|</span>
              <span className="text-[#E30613] font-bold text-sm">+</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                1.200 clientes en LATAM {/*TOCA CAMBIAR A PROPS */}
              </span>
            </div>

          </div>

          {/* 3. TÍTULO */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight mb-8 leading-tight uppercase">
            {title}
          </h1>

          {/* 4. DESCRIPCIÓN */}
          <p className="text-xl md:text-3xl font-light text-slate-600 max-w-3xl mb-12 leading-tight">
            {description}
          </p>

          {/* 5. BOTONES */}
          <div className="w-full flex items-center justify-between">
            <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full transition-all hover:bg-gray-800 shadow-sm hover:shadow-md">
              <span className="font-medium">{buttonText}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>

            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 6. IMAGEN INFERIOR */}
      <div className="w-full">
        <img 
          src={bgImage.src} 
          alt="Diseño geométrico" 
          className="w-full h-48 md:h-[300px] object-cover object-bottom block" 
        />
      </div>
    </section>
  );
}

function ChevronRight() {
  return (
    <svg className="w-3 h-3 text-[#E30613]" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}