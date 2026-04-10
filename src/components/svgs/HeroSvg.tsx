import React, { useId } from 'react';

const HeroSvg: React.FC = () => {
  const id = useId().replace(/:/g, ""); // Generamos un ID único para evitar conflictos de SSR

  return (
    <section className="w-full relative overflow-hidden pt-16 pb-8">
      <svg
        width="1920"
        height="398"
        viewBox="0 0 1920 398"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="w-full h-auto opacity-50"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* RECTÁNGULOS BASE (IMAGEN 2) */}
        <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 640 1.00781)" stroke="" />
        <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1280 1.00781)" stroke="" />
        <rect width="244.449" height="244.449" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1280 245.457)" stroke="" />
        <rect width="244.449" height="244.449" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 152.109)" stroke="" />
        <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1186.65 396.557)" stroke="" />
        <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1768.9 1.00781)" stroke="" />
        <rect width="93.3473" height="93.3473" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 1.00781)" stroke="" />

        <defs>
          <mask id={`mask0_${id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1279" y="0" width="398" height="398">
            <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1280 1.00781)" fill="white" />
          </mask>
          <mask id={`mask1_${id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1768" y="0" width="153" height="153">
            <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1920 152.109)" fill="white" />
          </mask>
          <mask id={`mask2_${id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1675" y="0" width="95" height="95">
            <rect width="93.3473" height="93.3473" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 1.00781)" fill="white" />
          </mask>
          <mask id={`mask3_${id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="395" y="151" width="246" height="247">
            <rect width="244.449" height="244.449" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 640 396.55)" fill="white" />
          </mask>
          <mask id={`mask4_${id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1221" y="244" width="60" height="60">
            <rect width="57.7545" height="57.7545" transform="matrix(-1 0 0 1 1280 245.457)" fill="white" />
          </mask>
        </defs>

        {/* GRUPOS CON MÁSCARAS (CURVAS) */}
        <g mask={`url(#mask0_${id})`}>
          <circle cx="395.551" cy="395.551" r="395.051" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 1280 396.55)" stroke="" />
        </g>
        <g mask={`url(#mask1_${id})`}>
          <circle cx="151.102" cy="151.102" r="150.602" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1920 152.109)" stroke="" />
        </g>
        <g mask={`url(#mask2_${id})`}>
          <circle cx="93.3473" cy="93.3473" r="92.8473" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 1.00781)" stroke="" />
        </g>
        <g mask={`url(#mask3_${id})`}>
          <circle cx="244.449" cy="244.449" r="243.949" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 640 396.55)" stroke="" />
        </g>
        <g mask={`url(#mask4_${id})`}>
          <circle cx="57.7545" cy="57.7545" r="57.2545" transform="matrix(-1 0 0 1 1280 245.457)" stroke="" />
        </g>

        {/* DETALLES ADICIONALES (IMAGEN 2 Y 3) */}
        <circle cx="122.225" cy="122.225" r="121.725" transform="matrix(4.37114e-08 1 1 -4.37114e-08 1675.55 152.109)" stroke="" />
        <circle cx="75.5509" cy="75.5509" r="75.0509" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1186.65 396.557)" stroke="" />
        
        {/* RECTÁNGULOS DE LA IZQUIERDA Y CENTRALES */}
        <rect width="395.551" height="395.551" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 1.00781)" stroke="" />
        <rect width="244.449" height="244.449" transform="matrix(4.37114e-08 1 1 -4.37114e-08 395.551 152.109)" stroke="" />
        <rect width="151.102" height="151.102" transform="matrix(4.37114e-08 1 1 -4.37114e-08 488.898 1.00781)" stroke="" />
        <rect width="93.3473" height="93.3473" transform="matrix(4.37114e-08 1 1 -4.37114e-08 395.551 1.00781)" stroke="" />
        <rect width="93.3473" height="93.3473" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1280 396.55)" stroke="" />

        {/* LÍNEAS Y CÍRCULOS FINALES */}
        <circle cx="197.775" cy="197.775" r="197.275" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 1.00781)" stroke="" />
        <path d="M201 2.24512V396.245" stroke="gray" />
        <circle cx="75.5509" cy="75.5509" r="75.0509" transform="matrix(4.37114e-08 1 1 -4.37114e-08 488.898 1.00781)" stroke="border border-ui" />
      </svg>

      {/* CONTENEDOR DE CAPA SUPERIOR (MANTIENE LA ESTRUCTURA DE LA IMAGEN 3) */}
      <div style={{ position: 'relative', width: '100%' }} data-radix-aspect-ratio-wrapper="">
        <div data-slot="aspect-ratio" className="w-full" style={{ position: 'absolute', top: 0, left: 0, height: '100%' }}>
          <div className="max-w-7xl mx-auto px-6 relative h-full flex items-center">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSvg;