"use client"

import React from "react";
import {Link} from '@/src/i18n/navigation';
import { scrollHero } from "@/src/utils/scrollHero";
import HeroSvg from "@/src/components/svgs/HeroSvg";
import HeroGeometricSvg from "@/src/components/svgs/HeroGeometricSvg";
import { HeroProps } from "@/src/types/typeHero";
import Breadcrumb from "./BreadCrumb";


export default function Hero({
  title,
  description,
  subtitle,
  buttonText,
  buttonHref,
  arrowHref,
  breadcrumb, // Si no viene, es un array vacío (evita el error .map)
  badges,
  isUppercase = false,
  showImage = true, 
  booleanSVG=false
}: HeroProps) {

  const ancla = buttonHref?.startsWith("#")
  const isAnchorArrow = arrowHref?.startsWith("#");

  return (
    <section className="bg-bg-main pt-12 md:pt-20 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-8 md:px-12 pb-12 md:pb-20">
        <div className="flex flex-col items-start w-full">
          {booleanSVG && (
            <div className="hidden xl:block"><HeroGeometricSvg /></div>
          
          )}
          {/* BREADCRUMB */}
         <Breadcrumb items={breadcrumb || []}/>
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
          {buttonText && buttonHref && (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
               {ancla ? (
                /* SCROLL INTERNO */
                <a
                  href={buttonHref}
                  onClick={(e) => scrollHero(e, ancla, buttonHref)}
                  className="group flex items-center gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span className="font-medium">{buttonText}</span>
                  <span className="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              ) : (
                /* NAVEGACIÓN NORMAL */
                <Link
                  href={buttonHref}
                  className="group flex items-center gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span className="font-medium">{buttonText}</span>
                  <span className="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              )}


              {isAnchorArrow && (
                <button
                  aria-label="scroll"
                  onClick={(e) => scrollHero(e, isAnchorArrow, arrowHref)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-text-title text-bg-main"
                >
                  <span className="material-symbols-rounded">
                    arrow_downward
                  </span>
                </button>
              )}
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