import React from "react";

interface Props {
  className?: string;
  strokeColor?: string;
  bgColor?: string;
}

export default function GeometricDivider({
  className = "",
  strokeColor = "#E5E7EB", // Gris clarito para las líneas, igual al original
  bgColor = "transparent"
}: Props) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ backgroundColor: bgColor }}>
      
      <svg
        // ViewBox de 1200x240 garantiza exactamente 5 columnas de 240x240
        viewBox="0 0 1200 240"
        className="w-full h-auto block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={strokeColor} strokeWidth="1">

          {/* CONTENEDOR GENERAL Y DIVISIONES DE LAS 5 COLUMNAS */}
          <rect x="0" y="0" width="1200" height="240" />
          <line x1="240" y1="0" x2="240" y2="240" />
          <line x1="480" y1="0" x2="480" y2="240" />
          <line x1="720" y1="0" x2="720" y2="240" />
          <line x1="960" y1="0" x2="960" y2="240" />

          {/* ================= BLOQUE 1 (Izquierda Extrema) ================= */}
          <line x1="0" y1="96" x2="240" y2="96" />
          <line x1="144" y1="0" x2="144" y2="240" />
          {/* Sub-cuadrícula pequeña */}
          <line x1="144" y1="144" x2="240" y2="144" />
          <line x1="192" y1="96" x2="192" y2="144" />
          {/* Círculos */}
          <circle cx="72" cy="168" r="72" />
          <circle cx="192" cy="48" r="48" />
          {/* Curva Superior */}
          <path d="M 0 96 A 144 96 0 0 1 144 0" />


          {/* ================= BLOQUE 2 (Centro Izquierda) ================= */}
          <line x1="240" y1="144" x2="480" y2="144" />
          <line x1="336" y1="144" x2="336" y2="240" />
          {/* Sub-cuadrícula pequeña */}
          <line x1="384" y1="144" x2="384" y2="240" />
          <line x1="336" y1="192" x2="384" y2="192" />
          {/* Círculo */}
          <circle cx="288" cy="192" r="48" />
          {/* Curva Gigante */}
          <path d="M 240 144 A 240 144 0 0 1 480 0" />


          {/* ================= BLOQUE 3 (Centro Exacto) ================= */}
          {/* Círculo Central Gigante */}
          <circle cx="600" cy="120" r="120" />


          {/* ================= BLOQUE 4 (Centro Derecha - Espejo del 2) ================= */}
          <line x1="720" y1="144" x2="960" y2="144" />
          <line x1="864" y1="144" x2="864" y2="240" />
          {/* Sub-cuadrícula pequeña */}
          <line x1="816" y1="144" x2="816" y2="240" />
          <line x1="816" y1="192" x2="864" y2="192" />
          {/* Círculo */}
          <circle cx="912" cy="192" r="48" />
          {/* Curva Gigante (Invertida) */}
          <path d="M 720 0 A 240 144 0 0 0 960 144" />


          {/* ================= BLOQUE 5 (Derecha Extrema - Espejo del 1) ================= */}
          <line x1="960" y1="96" x2="1200" y2="96" />
          <line x1="1056" y1="0" x2="1056" y2="240" />
          {/* Sub-cuadrícula pequeña */}
          <line x1="960" y1="144" x2="1056" y2="144" />
          <line x1="1008" y1="96" x2="1008" y2="144" />
          {/* Círculos */}
          <circle cx="1128" cy="168" r="72" />
          <circle cx="1008" cy="48" r="48" />
          {/* Curva Superior (Invertida) */}
          <path d="M 1056 0 A 144 96 0 0 1 1200 96" />

        </g>
      </svg>
    </div>
  );
}