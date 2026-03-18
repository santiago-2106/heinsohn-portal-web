import React, { ReactNode } from "react";

export interface datagestionHumana {
  icon?: React.ReactNode;
  title: string;
  description: ReactNode;
  image?: string; 
  contenedor?: React.ReactNode;
  btnText?: string;
  btn?: string;
}

// ==========================================
// 1. DATA DEL HERO (Gestión Humana)
// ==========================================
export const infoGestionHumanaHero = {
  title: "HGS - Gestión Humana",
  description: (
    <>
      Una compañía de{" "}
      <span className="font-semibold text-text-title">
        servicios en gestión del talento humano,
      </span>{" "}
      que crea impacto positivo con soluciones tecnológicas,{" "}
      <span className="font-semibold text-text-title">
        servicios de asesoría y operación.
      </span>
    </>
  ),
  buttonText: "Solicita una asesoría gratuita",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones" },
    { label: "HGS - Gestión Humana" },
  ],
};

// ==========================================
// 2. DATA DE TIPO DE EMPRESAS
// ==========================================
export const gestionHumanaInfo: datagestionHumana[] = [
  {
    icon: <span className="material-symbols-rounded font-light" style={{ fontSize: "40px" }}>business</span>,
    contenedor: "+500 Colaboradores",
    title: "Grandes empresas",
    description: "Nomina para grandes empresas",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <span className="material-symbols-rounded  font-light" style={{ fontSize: "40px" }}>warehouse</span>,
    contenedor: " 1 a 450 colaboradores",
    title: "Pymes",
    description: "Nomina para pequeña y mediana empresa",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <span className="material-symbols-rounded  font-light" style={{ fontSize: "40px" }}>things_to_do</span>,
    contenedor: "+100 colaboradores",
    title: "Gobierno",
    description: "Soluciones para la administracion publica",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
];

// ==========================================
// 3. PRODUCTOS GESTIÓN HUMANA
// ==========================================
export const ProductsgestionHumanaInfo2: datagestionHumana[] = [
  {
    title: "Software de nómina",
    description: (
      <>Contamos con un software de <span className="font-bold text-text-title">nómina inteligente</span> para el pago y liquidación de nómina.</>
    ),
    btnText: "Conocer más",
    image: "/img/laptpo1.png", 
  },
  {
    title: "Solucion pago a contratistas",
    description: (
      <><span className="font-bold text-text-title"> Estamos a la vanguardia. </span> Afrontamos los nuevos retos del mercado desarrollando soluciones acordes al cambio constante del mundo.</>
    ),
    btnText: "Conocer más",
    image: "/img/laptop2.png", 
  },
  {
    title: "Seguridad y salud en el trabajo",
    description: (
      <>Permite la <span className="font-bold text-text-title">implementacion, mantenimiento y control</span> del sistema de gestion de seguridad y slaud en el trabajo.</>
    ),
    btnText: "Conocer más",
    image: "/img/laptop3.png", 
  },
  {
    title: "Software de nomina",
    description: (
      <>Permite la administracion integral del recurso humano de <span className="font-bold text-text-title">tu organización.</span></>
    ),
    btnText: "Conocer más",
    image: "/img/laptop4.png", 
  },
  {
    title: "Soluciones de nomina y gestion humana par Gobierno",
    description: (
      <>Facilita los proceso, seguimientos y evaluaciones de la organizacion y de ares de <span className="font-bold text-text-title">talento humano.</span></>
    ),
    btnText: "Conocer más",
    image: "/img/laptop5.png", 
  },
  {
    title: "Gestion de reconocimiento economicos",
    description: (
      <><span className="font-bold text-text-title">Aumenta tus ingresos</span> recuperando el dinero de incapacidades y licencias de tus colaboradores.</>
    ),
    btnText: "Conocer más",
    image: "/img/laptop6.png", 
  },
  {
    title: "Nómina Emax",
    description:(
      <>Toda la experiencia de Heinsohn en una solución <span className="font-bold text-text-title">100% digital</span>, ideal para la pequeña grab empresa!</>
    ) ,
    btnText: "Conocer más",
    image: "/img/laptop7.png", 
  },
];

// ==========================================
// 4. SERVICIOS OUTSOURCING (infoGestionHumana2)
// ==========================================
export const infoGestionHumana2 = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>account_box</span>,
    title: "Outsourcing de administración y atención a colaboradores",
    description: "Entendemos las necesidades de los colaboradores, por ello nuestro equipo realiza un acompañamiento constante a nuestros clientes."
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>add_reaction</span>,
    title: "Procesos especiales de gestión del talento humano",
    description: "Enfocamos nuestro esfuerzo en conseguir los mejores talentos para las compañías, realizando procesos de selección y toda la gestión de talento que requieran las organizaciones.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>digital_wellbeing</span>,
    title: "Gestión de seguridad y salud en el trabajo",
    description: "Creamos un modelo estratégico que reúne a los mejores profesionales del sector, para realizar la planeación de las acciones correspondientes en la seguridad y salud de los trabajadores.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>perm_contact_calendar</span>,
    title: "Outsourcing liquidación de pago de nómina y contratistas",
    description: "Realizamos todos los procesos de liquidación, auditoría y ejecución de pagos de nómina para los empleados que requieran las compañías.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>admin_meds</span>,
    title: "Outsourcing de gestión incapacidades y reconocimientos económicos",
    description: "Manejo de giros, compra de cartera, desembolsos, legalización de créditos y generación de documentos como cartas de aprobación.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>enterprise</span>,
    title: "Atención a clientes y transformación digital",
    description: "Nuestros clientes son la fuente de nuestra transformación. Cada reto propuesto es el combustible que nos impulsa a crecer y crear nuevas estrategias.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>acute</span>,
    title: "Atracción, selección y planeación de la fuerza laboral",
    description: "Enfocamos nuestro esfuerzo en conseguir los mejores talentos para las compañías, realizando procesos de selección y toda la gestión de talento que requieran las organizaciones.",
  },
  {
    icon: <span className="material-symbols-rounded  p-1 rounded-full font-light" style={{ fontSize: "32px" }}>card_travel</span>,
    title: "Consultoría",
    description: "Acompañamos a las organizaciones en iniciativas enfocadas en lograr “las personas correctas”, “haciendo las cosas correctas”, “logrando los resultados deseados”.",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>concierge</span>,
    title: "Servicios adicionales",
    description: "Modelos de flexibilización, conciliaciones contables, asesorías tributarias en retención en la fuente y legales referentes a contratos, asesorías y auditorías en UGPP.",
  },
];