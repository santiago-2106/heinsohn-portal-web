import React from "react";
import { dataCard } from "@/src/types/cardTypes"; // Ajusta esta ruta si es diferente

// =========================================================================
// 1. DATA DEL HERO (Soluciones TI)
export const dataTI = {
  title: "Soluciones TI",
  description: "Transformamos la tecnología en valor para tu negocio.",
  buttonText: "Solicita una asesoría gratuita",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones" },
    { label: "Soluciones TI" },
  ],
};

// =========================================================================
// 2. DATA TECNOLOGÍA Y SERVICIOS
// =========================================================================


export const softwareCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>devices</span>, 
    title: 'Desarrollo de aplicaciones moviles y web', 
    description:'soluciones intuitivas para todo tip de dispositivos', 
    btn:'ver soluciones'
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>display_settings</span>, 
    title: 'Diseño y Desarrollo UX/UI', 
    description:'interfaces centradas en el usuario, pensadas para mejorar la experiencia y la conversion', 
    btn:'Ver experiencias'
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>data_object</span>, 
    title: 'Desarollo de software', 
    description:'productos a la medida de cada necesidad empresarial', 
    btn:'Solicitar desarrollo'
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>cloud_queue</span>, 
    title: 'Desarrollo software cloud', 
    description:'aplicaciones seguras, flexibles y con alto rendimiento en la nube.', 
    btn:'Ver mas'
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>tablet_mac</span>, 
    title: 'Desarrollo de plataformas escalables', 
    description:'arquitecturas prepardas para el crecimiento del negocio', 
    btn:'Explorar'
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>code_blocks</span>, 
    title: 'Modernizacion de aplicaciones de software', 
    description:'actualizacion tecnologica que prolonga la vida util y aumenta la eficiencia', 
    btn:'Actualizar ahora'
  },
];

export const analitycCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>local_police</span>,
    title: "Business Intelligence",
    description: "Impulsa tu crecimiento con soluciones de BI que ofrecen visualizaciones claras y análisis predictivos.",
    btn: "ver BI",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>robot_2</span>,
    title: "Consultoría IA",
    description: "Asesoramiento experto para integrar la inteligencia artificial en tu estrategia de negocio.",
    btn: "Conocer más",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>auto_awesome</span>,
    title: "Soluciones de Inteligencia Artificial y Copilot",
    description: "Soluciones de IA y Copilot que potencian la eficiencia y la automatización inteligente.",
    btn: "Ver soluciones IA",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>bubble_chart</span>,
    title: "Machine Learning e Inteligencia Artificial",
    description: "Algoritmos predictivos que convierten datos en insights para optimizar procesos empresariales.",
    btn: "Explorar IA",
  },
];

export const enginerTeamCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>account_circle</span>,
    title: "Staff Augmentation",
    description: "Amplía tu equipo con expertos en tecnología, integrándolos de forma flexible a tus proyectos.",
    btn: "Ampliar equipo",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>person_raised_hand</span>,
    title: "Equipos dedicados",
    description: "Talento experto, enfocado en tus objetivos de negocio.",
    btn: "Ver talento experto",
  },
];

export const strategicConsultingCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>cloud_sync</span>,
    title: "Cloud y modernización de infraestructura",
    description: "Acompañamos a las empresas en su transición a la nube, optimizando costos y asegurando escalabilidad, seguridad y continuidad del negocio.",
    btn: "Optimizacion en la nube",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>tips_and_updates</span>,
    title: "Consultoría estratégica para adopción digital",
    description: "Guiamos la integración de nuevas tecnologías dentro de los modelos de negocio, generando valor tangible y acelerando la innovación.",
    btn: "Explorar consultoria",
  },
];
