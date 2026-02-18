import React from 'react';

// --- ICONOS DE LA SECCIÓN HERO (Color Rojo/Rosa #E30613) ---
const HeroIcons = {
  lightning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  dollar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
      <path d="M12 18V6"/>
    </svg>
  ),
  arrowDown: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14"/>
      <path d="m19 12-7 7-7-7"/>
    </svg>
  )
};

// --- ICONOS DE LAS CARDS DE INTELIGENCIA ARTIFICIAL (Color Negro/Gris) ---
const CardIcons = {
  shield: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <circle cx="12" cy="10" r="3" /> {/* Estrella simulada dentro del escudo */}
    </svg>
  ),
  bubbles: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3"/>
      <circle cx="19" cy="18" r="2"/>
      <circle cx="5" cy="18" r="2"/>
    </svg>
  ),
  stars: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z"/>
      <circle cx="4" cy="20" r="1"/> 
    </svg>
  ),
  bot: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8.01" y2="16" />
      <line x1="16" y1="16" x2="16.01" y2="16" />
    </svg>
  )
};

export const dataSAP = {
  // 1. CONFIGURACIÓN DEL HERO
  hero: {
    title: "Soluciones SAP",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones SAP" }
    ],
    // Estructura visual compleja del Hero (Subtítulo + Texto + Lista Iconos)
    description: (
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-500 leading-snug">
          Elige el ERP ideal para tu empresa y recibe una cotización personalizada
        </h2>

        <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed text-justify md:text-left">
          SAP Business One centraliza finanzas, inventarios, producción y ventas en un ERP flexible y
          escalable, apoyado por un ecosistema completo de nómina, gestión humana y cumplimiento
          legal, que impulsa la eficiencia operativa y el crecimiento del negocio.{' '}
          <strong className="font-bold text-gray-900 block mt-4 md:inline md:mt-0">
            Miles de empresas en más de 170 países confían en SAP Business One.
          </strong>
        </p>

        <div className="flex flex-col gap-5 mt-2">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{HeroIcons.lightning}</div>
            <span className="text-gray-600 font-light text-base md:text-lg">
              Heinsohn como Partner Gold de SAP Business One en Colombia
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{HeroIcons.dollar}</div>
            <span className="text-gray-600 font-light text-base md:text-lg">
              Recibe una propuesta con precio y beneficios de inmediato.
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{HeroIcons.arrowDown}</div>
            <span className="text-gray-600 font-light text-base md:text-lg">
              Obtén contenido descargable adaptado a tu perfil empresarial.
            </span>
          </div>
        </div>
      </div>
    )
  },

  // 2. CONFIGURACIÓN DE LAS CARDS DE IA
  aiSection: {
    title: "Herramientas de inteligencia artificial en SAP Business One",
    cards: [
      {
        icon: CardIcons.shield,
        title: "Automatización de órdenes de venta",
        description: "generación directa de órdenes en SAP desde archivos Excel, reduciendo errores y tiempos de digitación."
      },
      {
        icon: CardIcons.bubbles,
        title: "Procesamiento masivo de facturación",
        description: "generación automática de facturas desde remisiones creadas en SAP y envío a la DIAN."
      },
      {
        icon: CardIcons.stars,
        title: "Procesamiento masivo de pagos recibidos",
        description: "creación automática de pagos con base en archivos bancarios."
      },
      {
        icon: CardIcons.bot,
        title: "Gestión inteligente de cartera",
        description: "uso de eventos de aceptación y/o rechazo por parte del receptor para optimizar el control y seguimiento de facturas."
      }
    ]
  }
};