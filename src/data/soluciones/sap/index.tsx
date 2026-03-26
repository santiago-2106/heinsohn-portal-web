import React from "react";
import { dataCard } from "@/src/types/cardTypes"; // Ajusta la ruta si es necesario
import { title } from "process";

// ==========================================
// 1. FUNCIÓN AUXILIAR PARA ÍCONOS NUMÉRICOS
// ==========================================
const createNumberIcon = (number: string, badgeText: string) => (
  <div className="flex flex-col">
    <span className="text-[64px] font-light text-brand-accent leading-none mb-3">
      {number}
    </span>
    <span className="inline-block border border-border-ui px-3 py-1 text-[11px] text-text-body font-medium bg-bg-card-2 w-max">
      {badgeText}
    </span>
  </div>
);

export default createNumberIcon;

// ==========================================
// 2. DATA PRINCIPAL: SOLUCIONES SAP
// ==========================================
export const dataSAP = {
  hero: {
    title: "Soluciones SAP",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones SAP" },
    ],
    description: (
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-text-body leading-snug">
          Elige el ERP ideal para tu empresa y recibe una cotización personalizada
        </h2>
        <p className="text-base md:text-lg text-text-body font-light leading-relaxed text-justify md:text-left">
          SAP Business One centraliza finanzas, inventarios, producción y ventas en un ERP flexible y escalable, apoyado por un ecosistema completo de nómina, gestión humana y cumplimiento legal, que impulsa la eficiencia operativa y el crecimiento del negocio.{" "}
          <strong className="font-bold text-text-title block mt-4 md:inline md:mt-0">
            Miles de empresas en más de 170 países confían en SAP Business One.
          </strong>
        </p>
        <div className="flex flex-col gap-5 mt-2">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <span className="material-symbols-rounded text-brand-accent" style={{ fontSize: "24px" }}>bolt</span>
            </div>
            <span className="text-text-body font-light text-base md:text-lg">
              Heinsohn como Partner Gold de SAP Business One en Colombia
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <span className="material-symbols-rounded text-brand-accent" style={{ fontSize: "24px" }}>monetization_on</span>
            </div>
            <span className="text-text-body font-light text-base md:text-lg">
              Recibe una propuesta con precio y beneficios de inmediato.
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <span className="material-symbols-rounded text-brand-accent" style={{ fontSize: "24px" }}>arrow_downward</span>
            </div>
            <span className="text-text-body font-light text-base md:text-lg">
              Obtén contenido descargable adaptado a tu perfil empresarial.
            </span>
          </div>
        </div>
      </div>
    ),
    badges: [
      { prefix: "+", highlight: "40", text: "años de experiencia" },
      { prefix: "+", highlight: "1.300", text: "implementaciones exitosas" },
    ]
  },

  aiSection: {
    title: <>Herramientas de inteligencia artificial<br className="hidden md:block" />en SAP Business One</>,
    cards: [
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>local_police</span>,
        title: "Automatización de órdenes de venta",
        description: "generación directa de órdenes en SAP desde archivos Excel, reduciendo errores y tiempos de digitación.",
      },
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>bubble_chart</span>,
        title: "Procesamiento masivo de facturación",
        description: "generación automática de facturas desde remisiones creadas en SAP y envío a la DIAN.",
      },
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>auto_awesome</span>,
        title: "Procesamiento masivo de pagos recibidos",
        description: "creación automática de pagos con base en archivos bancarios.",
      },
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>robot_2</span>,
        title: "Gestión inteligente de cartera",
        description: "uso de eventos de aceptación y/o rechazo por parte del receptor para optimizar el control y seguimiento de facturas.",
      },
    ],
  },

  testSection: {
    title: <>Test interactivo para elegir tu <br className="hidden md:block" />software ERP SAP según tus <br className="hidden md:block" />necesidades</>,
    description: "No todas las empresas necesitan el mismo tipo de ERP.\nCon este test rápido, identificamos el nivel de madurez tecnológica de tu empresa y te damos una recomendación personalizada.",
    cards: [
      {
        icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "32px" }}>domain</span>,
        contenedor: "Para pequeñas empresas",
        title: "ERP Heinsohn Lite",
        subTitle: "Desde 1-10 licencias",
        description: "Solución ERP diseñada específicamente para pequeñas empresas que buscan digitalizar sus procesos de manera simple y efectiva.",
        items: [
          "Implementación en 2-4 semanas",
          "Módulos esenciales integrados",
          "Interfaz intuitiva y fácil",
          "Soporte local en español",
          "Precio accesible para PYMEs",
        ],
        btnText: "Conocer Heinso...",
      },
      {
        badge: "Más popular",
        icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "32px" }}>warehouse</span>,
        contenedor: "Para empresas medianas",
        title: "ERP SAP Business One",
        subTitle: "Desde 5 licencias",
        description: "ERP completo de SAP que ofrece funcionalidades avanzadas para empresas que necesitan mayor integración y control.",
        items: [
          "ERP completo e integrado",
          "Módulos financieros avanzados",
          "Reportes y analytics en tiempo real",
          "Escalabilidad garantizada",
          "Integración con ecosistema SAP",
        ],
        btnText: "Conocer Heinso...",
      },
      {
        icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "32px" }}>garden_cart</span>,
        contenedor: "Para grandes empresas",
        title: "ERP SAP Grow with SAP",
        subTitle: "Desde 25 licencias",
        description: "La suite más avanzada de SAP para empresas que requieren máxima potencia, flexibilidad y capacidades de IA.",
        items: [
          "Suite completa SAP S/4HANA",
          "IA y machine learning integrados",
          "Escalabilidad empresarial ilimitada",
          "Automatización avanzada",
          "Transformación digital completa",
        ],
        btnText: "Conocer Heinso...",
      },
    ],
  },

  erpComparisonSection: {
    title: <>¿Qué ERP es mejor para PYMEs,<br/> empresas medianas o en expansión?</>,
    description: (
      <div className="flex flex-col gap-1 text-text-body font-light">
        <span>Transformaciones reales que han revolucionado industrias completas a través de soluciones tecnológicas innovadoras.</span>
        <span>No es lo mismo operar con 20 empleados que con 200.</span>
        <span>Por eso, Heinsohn tiene 3 soluciones de ERP distintas para cada etapa del crecimiento:</span>
      </div>
    ),
    cards: [
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>domain</span>,
        title: "Heinsohn Lite ERP",
        description: "Ideal para pequeñas empresas que buscan orden y control.",
        alineacion: "center",
      },
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>warehouse</span>,
        title: "SAP Business One ERP",
        description: "Pensado para empresas medianas que quieren integrar todas sus áreas.",
        alineacion: "center",
      },
      {
        icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>garden_cart</span>,
        title: "Grow with SAP ERP",
        description: "Para empresas en crecimiento que necesitan nube, IA y escalabilidad regional.",
        alineacion: "center",
      },
    ] as dataCard[],
  },

  partnerSection: {
    topBadge: '"Somos más que un proveedor: somos tu equipo ERP."',
    title: <>"¿Por qué elegir Heinsohn como partner<br/> de ERP SAP en Colombia y Latam?"</>,
    description: "No somos solo un proveedor de software. Somos tu aliado estratégico en la transformación digital de tu empresa.",
    cards: [
      {
        icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "32px" }}>diamond_shine</span>,
        badgeRight: "Certificación oficial",
        title: "SAP Gold Partner",
        description: (<>Certificación oficial que garantiza expertise y mejores prácticas en <strong className="font-semibold text-text-title">implementaciones SAP.</strong></>),
      },
      {
        icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "32px" }}>contact_support</span>,
        badgeRight: "Atención en español",
        title: "Soporte local",
        description: (<>Equipo especializado en <strong className="font-semibold text-text-title">Colombia y LatAm</strong> con soporte en español y conocimiento del mercado local.</>),
      },
      {
        icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "32px" }}>eco</span>,
        badgeRight: "Experiencia sectorial",
        title: "+15 industrias",
        description: (<><strong className="font-semibold text-text-title">Experiencia</strong> comprobada en manufactura, retail, servicios, salud, educación y más sectores.</>),
      },
      {
        icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "32px" }}>language</span>,
        badgeRight: "Desde 1979",
        title: "Aliado estratégico",
        description: (<>Trayectoria sólida acompañando la transformación digital de empresas en <strong className="font-semibold text-text-title">toda Latinoamérica.</strong></>),
      },
    ],
  },

  afterTestSection: {
    title: <>¿Qué recibirás después del test de ERP<br/>SAP?</>,
    description: (<>Al completar nuestro test interactivo, obtienes acceso inmediato a recursos valiosos <strong className="font-semibold text-text-title">completamente gratis.</strong></>),
    cards: [
      {
        icon: createNumberIcon("01", "Incluye ROI estimado"),
        title: "Cotización personalizada",
        description: "Propuesta detallada con precios, tiempos de implementación y beneficios específicos para tu empresa.",
      },
      {
        icon: createNumberIcon("02", "Contenido premium"),
        title: "Guía descargable",
        description: "Material exclusivo con mejores prácticas, casos de éxito y roadmap de implementación para tu industria.",
      },
      {
        icon: createNumberIcon("03", "Oportunidad de demo"),
        title: "Demo personalizada",
        description: "Demostración personalizada del ERP recomendado con escenarios reales de tu tipo de negocio.",
      },
      {
        icon: createNumberIcon("04", "Sin compromiso"),
        title: "Consultoría gratuita",
        description: "Sesión de 30 minutos con un especialista SAP para resolver dudas y planificar la implementación.",
      },
    ],
  },

  clientesSection: {
    title:<>"Compañías que confían en SAP y <br/> Heinsohn"</>,
    description: (<><strong className="font-semibold text-text-title">soluciones confiables</strong> para empresa que marcan la diferencia.</>),
  },
};
// ==========================================
// 3. DATA: TEST INTERACTIVO (Formulario)
// ==========================================
export const dataFormularioTest = {
  progressText: "15% completado",
  progressPercentage: 15,
  title: "Descubre tu ERP perfecto con nuestro test interactivo",
  subtitle: "Perfil general de la empresa",
  buttonText: "Siguiente",
  topImage: "/img/diseno-figuras.png",
  sideImage: "/img/contactimg.png",
  fields: [
    { 
      name: "sector", 
      label: <>¿En qué sector está tu empresa? <span className="text-brand-accent">*</span></>, 
      required: true 
    },
    { 
      name: "empleados", 
      label: <>Número de empleados <span className="text-brand-accent">*</span></>, 
      required: true 
    },
    { 
      name: "facturacion", 
      label: "¿Cuál es tu facturación anual aproximada?", 
      required: false 
    },
  ]
};
// ==========================================
// 4. SECCIÓN: POR QUÉ SAP
// ==========================================
export const dataPorQueSAP = {
  title: <>"¿Por qué SAP Business One con <br className="hidden md:block" />Heinsohn?"</>,
  description: (
    <>
      Porque Heinsohn no solo implementa SAP Business One, sino que <strong className="font-semibold text-text-title">integra nómina, gestión humana y cumplimiento legal colombiano en un solo ecosistema</strong>, con experiencia probada y acompañamiento real. Además de ser Partner Gold de SAP Business One en Colombia, realiza personalizaciones según las necesidades de cada sector y empresa, con equipo propio de desarrollo y actualizaciones constantes basadas en inteligencia artificial. <strong className="font-semibold text-text-title">Con más de 1.300 implementaciones que nos respaldan</strong>, entregamos un sistema que no compite con el ecosistema de tu empresa, sino que lo optimiza.
    </>
  ),
};