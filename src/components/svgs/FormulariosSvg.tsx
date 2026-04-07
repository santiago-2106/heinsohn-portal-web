import React from 'react';

const FormulariosSvg: React.FC = () => {
  return (
    <section className="w-[407.32px] h-164.75 relative overflow-hidden color--bordes fondo-svg rotate-180">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 398"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="text-gray-200"
        stroke="currentColor"
      >
        {/* Estructura de Rectángulos Transcrita */}
        <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 640 1.00781)" />
        <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1280 1.00781)" />
        <rect width="244.449" height="244.449" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1280 245.457)" />
        <rect width="244.449" height="244.449" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 152.109)" />
        <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1186.65 396.557)" />
        <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1768.9 1.00781)" />
        <rect width="93.3473" height="93.3473" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 1.00781)" />

        {/* Máscaras y Arcos (Círculos Enmascarados) */}
        <defs>
          <mask id="mask0_317_5658" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1279" y="0" width="398" height="398">
            <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1280 1.00781)" fill="white" />
          </mask>
          
          <mask id="mask3_317_5658" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="395" y="151" width="246" height="247">
             <rect width="244.449" height="244.449" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 640 396.55)" fill="white" />
          </mask>
        </defs>

        {/* Grupos con Máscara aplicada para simular la espiral */}
        <g mask="url(#mask0_317_5658)">
          <circle cx="395.551" cy="395.551" r="395.051" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 1280 396.55)" />
        </g>

        <g mask="url(#mask3_317_5658)">
          <circle cx="244.449" cy="244.449" r="243.949" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 640 396.55)" />
        </g>

        {/* Círculos decorativos y líneas adicionales del inspector */}
        <circle cx="122.225" cy="122.225" r="121.725" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 152.109)" />
        <circle cx="75.5509" cy="75.5509" r="75.0509" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1186.65 396.557)" />
        <path d="M201 2.24512V396.245" />
      </svg>

      {/* Contenedor de contenido con el estándar de tus proyectos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 relative h-full w-full">
           {/* Aquí va el contenido del portal */}
        </div>
      </div>
    </section>
  );
};

export default FormulariosSvg;