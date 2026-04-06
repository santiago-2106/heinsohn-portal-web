import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import HeroSvg from "@/src/components/svgs/HeroSvg";

interface BreadcrumbItem {
  label?: string;
  href?: string;
}

export interface BadgeItem {
  prefix?: string;
  highlight?: string;
  text: string;
}

interface HeroProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  breadcrumb?: BreadcrumbItem[]; // Hacemos opcional la prop entera por seguridad
  badges?: BadgeItem[];
  isUppercase?: boolean;
  showImage?: boolean; 
}

export default function Hero({
  title,
  description,
  subtitle,
  buttonText,
  breadcrumb = [], // Si no viene, es un array vacío (evita el error .map)
  badges,
  isUppercase = false,
  showImage = true, 
}: HeroProps) {
  return (
    <section className="bg-bg-main pt-12 md:pt-20 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-8 md:px-12 pb-12 md:pb-20">
        <div className="flex flex-col items-start w-full">
          
          {/* BREADCRUMB */}
          <nav
            aria-label="Miga de pan"
            className="flex items-center gap-2 text-sm text-text-body mb-8"
          >
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-brand-accent transition-colors"
              aria-label="Ir a la página de inicio"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-medium text-text-title"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* BADGES */}
          {badges && badges.length > 0 && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {badges.map((badge, index) => (
                <React.Fragment key={index}>
                  <div className="px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                    {badge.prefix && (
                      <span className="text-brand-accent font-bold text-sm">
                        {badge.prefix}
                      </span>
                    )}
                    <span className="text-text-body text-sm uppercase tracking-wider font-medium">
                      {badge.highlight && (
                        <span className="text-brand-accent">
                          {badge.highlight}{" "}
                        </span>
                      )}
                      {badge.text}
                    </span>
                  </div>
                  {index < badges.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-text-title font-bold text-sm"
                    >
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* TÍTULO */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-light text-text-title tracking-tight mb-8 leading-tight ${isUppercase ? "uppercase" : ""}`}
          >
            {title}
          </h1>

          {/* SUBTÍTULO */}
          {subtitle && (
            <div className="text-xl md:text-4xl font-light text-text-body max-w-4xl mb-12 leading-relaxed">
              {subtitle}
            </div>
          )}

          {/* DESCRIPCIÓN */}
          <div className="text-lg md:text-xl font-light text-text-body max-w-5xl mb-12 leading-relaxed">
            {description}
          </div>

          {/* BOTONES */}
          {buttonText && (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                className="group flex items-center gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md cursor-pointer"
                aria-label={buttonText}
              >
                <span className="font-medium">{buttonText}</span>
                <span
                  aria-hidden="true"
                  className="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-1 hover:opacity-0"
                >
                  arrow_forward
                </span>
              </button>

              <button
                aria-label="Más opciones"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-text-title text-bg-main hover:opacity-80 transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-rounded text-lg hover:translate-y-6"
                >
                  arrow_downward
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MAGIA: Si showImage es FALSE, este bloque simplemente no existe en el DOM */}
      {showImage && (
        <HeroSvg />
      )}
    </section>
  );
}

function ChevronRight() {
  return (
    <svg
      aria-hidden="true"
      className="w-3 h-3 text-brand-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}