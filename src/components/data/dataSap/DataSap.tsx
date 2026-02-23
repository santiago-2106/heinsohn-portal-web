import React from 'react';
import { dataCard } from '../../types/cardTypes';



// --- ICONOS DE LA SECCIÓN HERO ---
const HeroIcons = {
  lightning: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  dollar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
  arrowDown: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
};

// --- ICONOS DE LAS CARDS DE INTELIGENCIA ARTIFICIAL ---
const CardIcons = {
  shield: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="10" r="3" /></svg>,
  bubbles: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3"/><circle cx="19" cy="18" r="2"/><circle cx="5" cy="18" r="2"/></svg>,
  stars: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z"/><circle cx="4" cy="20" r="1"/> </svg>,
  bot: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="16" y1="16" x2="16.01" y2="16" /></svg>
};

// --- ICONOS DEL TEST INTERACTIVO ---
const TestIcons = {
  building: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="4" width="6" height="16"></rect><line x1="9" y1="12" x2="20" y2="12"></line></svg>,
  house: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  cart: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
};

// --- ICONOS PARA LA SECCIÓN "POR QUÉ ELEGIR HEINSOHN" ---
const PartnerIcons = {
  diamond: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/></svg>,
  support: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  leaf: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 3-9 8-11 5 2 8 6 8 11a7 7 0 0 1-7 7z"/><path d="M11 20v-6"/></svg>,
  globe: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E30613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
};

// ✅ SOLUCIÓN DEFINITIVA: 
// Usamos estilos en línea (style) para destruir cualquier cursiva (italic) o alineación rara 
// que tu tarjeta intente imponerle, y controlamos el tamaño para que JAMÁS se desborde.
const createNumberIcon = (number: string, badgeText: string) => (
  <div className="flex flex-col">
    <span className="text-[64px] font-light text-[#E30613] leading-none mb-3">
      {number}
    </span>

    <span className="inline-block border border-gray-200 px-3 py-1 text-[11px] text-gray-500 font-medium bg-white w-max">
      {badgeText}
    </span>
  </div>
);

export const dataSAP = {
  hero: {
    title: "Soluciones SAP",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones SAP" }
    ],
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
            <span className="text-gray-600 font-light text-base md:text-lg">Heinsohn como Partner Gold de SAP Business One en Colombia</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{HeroIcons.dollar}</div>
            <span className="text-gray-600 font-light text-base md:text-lg">Recibe una propuesta con precio y beneficios de inmediato.</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{HeroIcons.arrowDown}</div>
            <span className="text-gray-600 font-light text-base md:text-lg">Obtén contenido descargable adaptado a tu perfil empresarial.</span>
          </div>
        </div>
      </div>
    )
  },

  aiSection: {
    title: "Herramientas de inteligencia artificial en SAP Business One",
    cards: [
      { icon: CardIcons.shield, title: "Automatización de órdenes de venta", description: "generación directa de órdenes en SAP desde archivos Excel, reduciendo errores y tiempos de digitación." },
      { icon: CardIcons.bubbles, title: "Procesamiento masivo de facturación", description: "generación automática de facturas desde remisiones creadas en SAP y envío a la DIAN." },
      { icon: CardIcons.stars, title: "Procesamiento masivo de pagos recibidos", description: "creación automática de pagos con base en archivos bancarios." },
      { icon: CardIcons.bot, title: "Gestión inteligente de cartera", description: "uso de eventos de aceptación y/o rechazo por parte del receptor para optimizar el control y seguimiento de facturas." }
    ]
  },

  testSection: {
    title: "Test interactivo para elegir tu software ERP SAP según tus necesidades",
    description: "No todas las empresas necesitan el mismo tipo de ERP.\nCon este test rápido, identificamos el nivel de madurez tecnológica de tu empresa y te damos una recomendación personalizada.",
    cards: [
      { icon: TestIcons.building, contenedor: "Para pequeñas empresas", title: "ERP Heinsohn Lite", subTitle: "Desde 1-10 licencias", description: "Solución ERP diseñada específicamente para pequeñas empresas que buscan digitalizar sus procesos de manera simple y efectiva.", items: ["Implementación en 2-4 semanas", "Módulos esenciales integrados", "Interfaz intuitiva y fácil", "Soporte local en español", "Precio accesible para PYMEs"], btnText: "Conocer Heinso..." },
      { badge: "Más popular", icon: TestIcons.house, contenedor: "Para empresas medianas", title: "ERP SAP Business One", subTitle: "Desde 5 licencias", description: "ERP completo de SAP que ofrece funcionalidades avanzadas para empresas que necesitan mayor integración y control.", items: ["ERP completo e integrado", "Módulos financieros avanzados", "Reportes y analytics en tiempo real", "Escalabilidad garantizada", "Integración con ecosistema SAP"], btnText: "Conocer Heinso..." },
      { icon: TestIcons.cart, contenedor: "Para grandes empresas", title: "ERP SAP Grow with SAP", subTitle: "Desde 25 licencias", description: "La suite más avanzada de SAP para empresas que requieren máxima potencia, flexibilidad y capacidades de IA.", items: ["Suite completa SAP S/4HANA", "IA y machine learning integrados", "Escalabilidad empresarial ilimitada", "Automatización avanzada", "Transformación digital completa"], btnText: "Conocer Heinso..." }
    ]
  },

  erpComparisonSection: {
    title: "¿Qué ERP es mejor para PYMEs, empresas medianas o en expansión?",
    description: (
      <div className="flex flex-col gap-1">
        <span>Transformaciones reales que han revolucionado industrias completas a través de soluciones tecnológicas innovadoras.</span>
        <span>No es lo mismo operar con 20 empleados que con 200.</span>
        <span>Por eso, Heinsohn tiene 3 soluciones de ERP distintas para cada etapa del crecimiento:</span>
      </div>
    ) as any,
    cards: [
      { icon: TestIcons.building, title: "Heinsohn Lite ERP", description: "Ideal para pequeñas empresas que buscan orden y control.", alineacion: "center" },
      { icon: TestIcons.house, title: "SAP Bus321 iness One ERP", description: "Pensado para empresas medianas que quieren integrar todas sus áreas.", alineacion: "center" },
      { icon: TestIcons.cart, title: "Grow with SAP ERP", description: "Para empresas en crecimiento que necesitan nube, IA y escalabilidad regional.", alineacion: "center" }
    ] as dataCard[]
  },

  partnerSection: {
    topBadge: '"Somos más que un proveedor: somos tu equipo ERP."',
    title: "¿Por qué elegir Heinsohn como partner de ERP SAP en Colombia y Latam?",
    description: "No somos solo un proveedor de software. Somos tu aliado estratégico en la transformación digital de tu empresa.",
    cards: [
      { icon: PartnerIcons.diamond, badgeRight: "Certificación oficial", title: "SAP Gold Partner", description: <>Certificación oficial que garantiza expertise y mejores prácticas en <strong className="font-semibold text-gray-900">implementaciones SAP.</strong></> as any },
      { icon: PartnerIcons.support, badgeRight: "Atención en español", title: "Soporte local", description: <>Equipo especializado en <strong className="font-semibold text-gray-900">Colombia y LatAm</strong> con soporte en español y conocimiento del mercado local.</> as any },
      { icon: PartnerIcons.leaf, badgeRight: "Experiencia sectorial", title: "+15 industrias", description: <><strong className="font-semibold text-gray-900">Experiencia</strong> comprobada en manufactura, retail, servicios, salud, educación y más sectores.</> as any },
      { icon: PartnerIcons.globe, badgeRight: "Desde 1979", title: "Aliado estratégico", description: <>Trayectoria sólida acompañando la transformación digital de empresas en <strong className="font-semibold text-gray-900">toda Latinoamérica.</strong></> as any }
    ]
  },

  afterTestSection: {
    title: "¿Qué recibirás después del test de ERP SAP?",
    description: (
      <>
        Al completar nuestro test interactivo, obtienes acceso inmediato a recursos valiosos <strong className="font-semibold text-gray-900">completamente gratis.</strong>
      </>
    ) as any,
    cards: [
      {
        icon: createNumberIcon("01", "Incluye ROI estimado"),
        title: "Cotización personalizada",
        description: "Propuesta detallada con precios, tiempos de implementación y beneficios específicos para tu empresa."
      },
      {
        icon: createNumberIcon("02", "Contenido premium"),
        title: "Guía descargable",
        description: "Material exclusivo con mejores prácticas, casos de éxito y roadmap de implementación para tu industria."
      },
      {
        icon: createNumberIcon("03", "Demo personalizada"),
        title: "Oportunidad de demo",
        description: "Demostración personalizada del ERP recomendado con escenarios reales de tu tipo de negocio."
      },
      {
        icon: createNumberIcon("04", "Sin compromiso"),
        title: "Consultoría gratuita",
        description: "Sesión de 30 minutos con un especialista SAP para resolver dudas y planificar la implementación."
      }
    ]
  }
};