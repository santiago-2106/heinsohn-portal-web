import React from "react";

export default function HeroGeometricSvg() {
  return (
    <div className="absolute top-0 right-0 h-full w-1/3 pointer-events-none overflow-hidden hidden lg:block">
      <svg
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-150 h-[628px] opacity-50" // Ajusta la opacidad según tu diseño
      >
        {/* Línea divisoria vertical principal */}
        <line x1="0" y1="0" x2="0" y2="600" stroke="currentColor" strokeWidth="1" />
        
        {/* Rectángulo superior con arco */}
        <path
          d="M0 150 Q0 0 150 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1" />

        {/* Círculo central grande */}
        <circle
          cx="200"
          cy="400"
          r="180"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Líneas de encuadre */}
        <rect x="0" y="0" width="400" height="600" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}