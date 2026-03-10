import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label?: string;
  href?: string;
}

interface HeroProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode; 
  subtitle?: React.ReactNode;
  buttonText?: string;
  breadcrumb: BreadcrumbItem[];
  showBadges?: boolean;     // <-- INTERRUPTOR 1
  isUppercase?: boolean;    // <-- INTERRUPTOR 2
}

export default function Hero({
  title,
  description,
  subtitle,
  buttonText,
  breadcrumb,
  showBadges = true,      // Se enciende por defecto
  isUppercase = true,     // Se enciende por defecto
}: HeroProps) {
  return (
    <section className="bg-bg-main pt-12 md:pt-20 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-8 md:px-12 pb-12 md:pb-20">
        <div className="flex flex-col items-start w-full">
          
          {/* BREADCRUMB */}
          <nav className="flex items-center gap-2 text-sm text-text-body mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-brand-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight />
                {item.href ? (
                  <Link href={item.href} className="hover:text-brand-accent transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-text-title">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <br />

          {/* BADGES SUPERIORES: Solo se dibujan si el interruptor está encendido */}
          {showBadges && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <span className="text-brand-accent font-bold text-sm">+</span>
                <span className="text-text-body text-sm uppercase tracking-wider font-medium">
                  40 años de experiencia
                </span>
              </div>
              <div className="px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <span className="text-text-title font-bold text-sm">|</span>
                <span className="text-brand-accent font-bold text-sm">+</span>
                <span className="text-text-body text-sm uppercase tracking-wider font-medium">
                  1.200 clientes en LATAM 
                </span>
              </div>
            </div>
          )}

          {/* TÍTULO */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-text-title tracking-tight mb-8 leading-tight uppercase">
            {title}
          </h1>

          <div className="text-xl md:text-4xl font-light text-text-body max-w-4xl mb-12 leading-relaxed">
            {subtitle}
          </div>

          {/* DESCRIPCIÓN (Contenedor div para no romper listas internas) */}
          <div className="text-xl md:text-2xl font-light text-text-body max-w-4xl mb-12 leading-relaxed">
            {description}
          </div>

          {/* BOTONES */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="group flex items-center gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md">
              <span className="font-medium">{buttonText}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-text-title text-bg-main hover:opacity-80 transition-colors shadow-sm hover:shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* IMAGEN INFERIOR */}
      <div className="w-full">
        <img
          src="/img/diseno-figuras.png"
          alt="Diseño geométrico"
          className="w-full h-48 md:h-[300px] object-cover object-bottom block"
        />
      </div>
    </section>
  );
}

function ChevronRight() {
  return (
    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}