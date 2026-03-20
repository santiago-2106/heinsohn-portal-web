import React from "react";
import { dataCard } from "@/src/types/cardTypes";

export const dataFinanzas = {
  title: (
    <>
      Soluciones para el sector <br className="hidden md:block" /> financiero
    </>
  ),
  description: (
    <>
      Contamos con un <strong className="font-bold text-text-title">portafolio de software especializado para banca, fintechs, aseguradoras y entidades no bancarizadas</strong> que buscan liderar la transformación digital del sector financiero en LATAM. Nuestras soluciones permiten administrar créditos, obligaciones financieras, fondos de inversión y portafolios con total eficiencia, seguridad y cumplimiento normativo.
    </>
  ),
  buttonText: "Solicita una asesoría gratuita",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones" },
    { label: "Soluciones para el sector financiero" },
  ],
  badges: [
    { 
      prefix: "+", 
      highlight: "40", 
      text: "años de experiencia" 
    },
    { 
      prefix: "+", 
      highlight: "1.200", 
      text: "clientes en LATAM" 
    },
  ]
};

export const entitiesData = {
  title:(
    <>Lo que enfrentan hoy las entidades<br className="hidden md:block" />financieras en la región</>
  )
};

export const introRetos = {
  description: (
    <>
      La industria financiera en Latinoamérica vive un momento decisivo. La digitalización, la presión regulatoria y la irrupción de nuevos actores están transformando la manera en que bancos, fintechs, aseguradoras y entidades no bancarizadas operan. <strong>Estos son algunos de los retos más urgentes:</strong>
    </>
  )
};

export const footerRetos = "Comprender estos desafíos es el primer paso para transformarlos en oportunidades. Por eso, contar con software especializado, seguro y escalable es clave para transformar estos desafíos en oportunidades de crecimiento";

export const btnRetos = "Descubre cómo enfrentamos estos retos en LATAM";

// ==========================================
// 2. TARJETAS DE RETOS FINANCIEROS
// ==========================================
export const financialChallengesCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>credit_card</span>,
    title: "Pagos digitales en auge",
    description: "Más de 650 millones de transacciones al mes con billeteras y pagos sin contacto.",
    btn: "",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>add_shopping_cart</span>,
    title: "Open Finance en expansión",
    description: "Brasil supera 9 millones de usuarios bajo este modelo, abriendo camino en personalización y transparencia.",
    btn: "",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>card_travel</span>,
    title: "Digitalización en Colombia",
    description: "Más de 20 millones de usuarios en Transfiya y 299 millones de transferencias inmediatas en 2024 (+294% vs. 2023).",
    btn: "",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>add_moderator</span>,
    title: "Ciberseguridad en primer plano",
    description: "El 67,5% de las organizaciones la identifica como su mayor riesgo.",
    btn: "",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>robot_2</span>,
    title: "IA y automatización",
    description: "Desde la detección de fraudes hasta la atención al cliente, elevan las expectativas de inmediatez.",
    btn: "",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>price_change</span>,
    title: "Competencias fintech",
    description: "México ya supera las 700 fintech activas, intensificando la innovación y la presión competitiva.",
    btn: "",
  },
];

// ==========================================
// 3. TARJETAS DE SOLUCIONES FINANCIERAS
// ==========================================
export const financialSolutionsCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>car_tag</span>,
    title: "Gestión de Créditos y Libranzas",
    description: "Software de administración de créditos y libranzas que gestiona el ciclo completo: desde la solicitud hasta el pago final.",
    items: [
      { textos: "Trazabilidad y control en cada etapa." },
      { textos: "Escalable y parametrizable según portafolio." },
      { textos: "Reducción de tiempos de capacitación y soporte." },
    ],
    btn: "Conoce la solución de Créditos y Libranzas ->",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>finance_chip</span>,
    title: "Obligaciones Financieras",
    description: "Software especializado en obligaciones financieras que brinda visibilidad total del portafolio y asegura cumplimiento normativo.",
    items: [
      { textos: "Registro y seguimiento de pagos, anticipos, reestructuraciones y novaciones." },
      { textos: "Integración con sistemas contables y financieros." },
      { textos: "Reportes gerenciales y normativos en PDF y Excel." },
    ],
    btn: "Explora la solución de Obligaciones Financieras ->",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>folder_code</span>,
    title: "Software para Fondos de Inversión Colectiva (FICs)",
    description: "Plataforma integral para la administración de Fondos de Inversión Colectiva, diseñada para responder al crecimiento del negocio bajo normativas específicas.",
    items: [
      { textos: "Multiempresa y multilenguaje." },
      { textos: "Automatización de procesos masivos." },
      { textos: "Movilidad y visión 360° para inversionistas." },
    ],
    btn: "Descubre nuestra solución para FICs ->",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>price_change</span>,
    title: "Software Administrador de Portafolios e Inversiones – MIDAS",
    description: "Plataforma de gestión integral de inversiones y riesgos, que cubre desde Front Office hasta Back Office.",
    items: [
      { textos: "Módulos especializados en riesgos de mercado, liquidez, contraparte y operativo." },
      { textos: "Multimoneda, multiportafolio y con reportes normativos de ley." },
      { textos: "Más de 25 años respaldando a fondos, aseguradoras y banca en LATAM." },
    ],
    btn: "Conoce cómo optimizar tus portafolios ->",
  },
];

// ==========================================
// 4. EXPERIENCIA Y CIFRAS
// ==========================================
export const experienceStatsData: dataCard[] = [
  {
    title: "Cobertura masiva",
    description:(<>Nuestras soluciones soportan la administración de millones de afiliados y billones de dólares en activos en <strong className="font-bold text-text-title">fondos de pensiones, FICs e inversiones.</strong></>),
    btn: "",
    icon: null,
  },
  {
    title: "Mercados complejos",
    description:(<>Experiencia probada en sectores altamente regulados de <strong className="font-bold text-text-title">Colombia, Perú, Bolivia, El Salvador, Honduras, Panamá, Argentina, Uruguay, entre otros.</strong></>),
    btn: "",
    icon: null,
  },
  {
    title: "Confianza sostenida",
    description:(<><strong className="font-bold text-text-title">Más de 1.200 entidades</strong> financieras y aseguradoras activas en LATAM y el Caribe que utilizan nuestras plataformas.</>),
    btn: "",
    icon: null,
  },
  {
    title: "Resultados tangibles",
    description:(<>Reducción de costos operativos, mejoras en trazabilidad y cumplimiento normativo en <strong className="font-bold text-text-title">proyectos de gran escala.</strong></>),
    btn: "",
    icon: null,
  },
];

// ==========================================
// 5. CASOS DE ÉXITO (Para dejar la vista limpia)
// ==========================================
export const dataCasosFinanciera = {
  imgKnowOurWork: "/img/edif.jpg", // Puedes cambiar esta ruta luego
  titleWork: "Caso de Éxito en Banca",
  descriptionWork: "Implementamos una solución integral que redujo los tiempos de respuesta en un 40%.",
  textBtn: "Leer caso completo",
};

// ==========================================
// 6. PREGUNTAS FRECUENTES (FAQ)
// ==========================================
export interface FaqItem {
  question: string;
  answer: string;
}

export const financialFaqData: FaqItem[] = [
  {
    question: "¿Qué beneficios ofrece el software de créditos y libranzas?",
    answer: "Nuestro software automatiza todo el ciclo de vida del crédito, desde la originación hasta el recaudo. Reduce los tiempos de aprobación, minimiza errores operativos mediante validaciones automáticas y ofrece una visión 360° del cliente para mejorar la toma de decisiones.",
  },
  {
    question: "¿Cómo ayuda el software de obligaciones financieras al cumplimiento normativo?",
    answer: "La plataforma se actualiza constantemente según las regulaciones locales de cada país en LATAM. Genera reportes normativos automáticos, asegura la trazabilidad de todas las transacciones y cuenta con auditoría detallada para cumplir con los estándares de los entes de control.",
  },
  {
    question: "¿Qué diferencia tiene nuestro software de FICs frente a otros del mercado?",
    answer: "A diferencia de soluciones genéricas, nuestro software está especializado en la normativa de Fondos de Inversión Colectiva. Permite el manejo de múltiples tipos de fondos, valoración diaria automatizada y un portal de autogestión para inversionistas con experiencia de usuario superior.",
  },
  {
    question: "¿Qué módulos cubre el Administrador de Portafolios e Inversiones – MIDAS?",
    answer: "MIDAS es una suite integral que cubre Front Office (captura de operaciones), Middle Office (gestión de riesgos y límites) y Back Office (contabilidad, valoración y cumplimiento), asegurando una gestión de inversiones robusta y centralizada.",
  },
  {
    question: "¿Cómo apoya la digitalización financiera a entidades no bancarizadas?",
    answer: "Proveemos tecnología de nivel bancario accesible para cooperativas, fondos de empleados y fintechs, permitiéndoles ofrecer productos digitales, onboarding 100% online y transacciones seguras sin necesidad de desarrollar infraestructura propia desde cero.",
  },
  {
    question: "¿Qué diferencia hay entre un software financiero multipaís y uno local?",
    answer: "Una solución multipaís permite a los grupos financieros estandarizar sus operaciones en toda la región bajo una misma plataforma tecnológica, adaptándose simultáneamente a la moneda, tributación y regulación específica de cada país (Colombia, Perú, Panamá, etc.).",
  },
  {
    question: "¿Las soluciones financieras cumplen con normativas internacionales?",
    answer: "Sí, nuestras soluciones están alineadas con estándares internacionales como NIIF/IFRS, ISO 27001 en seguridad de la información y cumplen con los lineamientos de Basilea para la gestión de riesgos financieros.",
  },
  {
    question: "¿Qué beneficios tiene implementar software financiero en la nube?",
    answer: "La implementación en la nube ofrece escalabilidad inmediata, reducción de costos en infraestructura física, mayor seguridad con respaldos automáticos y acceso seguro desde cualquier ubicación, facilitando el trabajo remoto y la continuidad del negocio.",
  },
  {
    question: "¿Este software financiero se adapta a distintos marcos regulatorios en LATAM y el Caribe?",
    answer: "Absolutamente. Contamos con experiencia probada en Colombia, Ecuador, Perú, Panamá, Costa Rica, Honduras, El Salvador, República Dominicana, entre otros, adaptando nuestra parametrización a las leyes y prácticas de mercado locales.",
  },
];
// ==========================================
// 7. TÍTULOS DE SECCIONES GENERALES (NUEVO)
// ==========================================
export const titlesFinanciera = {
  soluciones: (
    <>Soluciones tecnológicas para créditos,<br className="hidden md:block" />fondos e inversiones</>
  ),
  clientes: "Nuestra experiencia en cifras",
  certificaciones: "Certificaciones internacionales",
  faq: "Preguntas frecuentes sobre software financiero",
  contacto: (
    <>Transforma la gestion<br className="hidden md:block" />financiera de tu empresa</>
  ),
  statsVacio: " " // Para la sección que no lleva título
};
// ==========================================
// 8. DATA DE RESULTADOS (CardResults)
// ==========================================
export const dataResultadosFinanciera = {
  title: (
    <>
      Resultados que demuestran nuestra <br className="hidden md:block" />
      experiencia en el sector financiero
    </>
  ),
  mainStat: {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>rocket_launch</span>,
    title: "Experiencia comprobada",
    prefix: "+",
    number: "40",
    text: "años desarrollando software financiero en LATAM.",
  },
  benefits: [
    {
      icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>gavel</span>,
      title: "Cumplimiento normativo",
      description: "Respuesta ágil a cambios regulatorios.",
    },
    {
      icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>local_offer</span>,
      title: "Reducción de costos",
      description: "Procesos automatizados que optimizan recursos.",
    },
    {
      icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>local_police</span>,
      title: "Escalabilidad y seguridad",
      description: "Arquitectura 100% web, en nube o local.",
    },
    {
      icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "32px" }}>error</span>,
      title: "Soporte especializado",
      description: "Acompañamiento en implementación y operación.",
    }
  ],
  button: {
    text: "Habla con un especialista sobre tu gestión financiera",
    href: "/contacto"
  }
};