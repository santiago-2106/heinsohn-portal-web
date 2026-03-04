import React from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { IACardProps } from "@/src/types/typeIA";

// 1. DATA DEL HERO (Totalmente alineado a la izquierda, mismo tamaño de letra)
export const dataIaHero = {
  title: "Soluciones de Inteligencia Artificial para empresas",
  description: (
    <div className="flex flex-col gap-6">
      <p>
        Creamos soluciones de inteligencia artificial diseñadas para acelerar la
        transformación digital de tu negocio. <strong>A través de IA generativa</strong>, 
        procesamiento de lenguaje natural (PLN), visión por computadora y 
        aprendizaje automático, <strong>ayudamos a las empresas a automatizar procesos, 
        mejorar la eficiencia operativa y generar valor sostenible.</strong>
      </p>
      
      {/* ESTRUCTURA FLEXBOX: Asegura alineación perfecta y sin desorden */}
      <ul className="flex flex-col gap-3 mt-2">
        <li className="flex items-start gap-2">
          <strong className="text-text-title font-bold whitespace-nowrap">
            <span className="text-brand-accent">+</span>45
          </strong>
          <span>
            años de experiencia en ingeniería y tecnología empresarial
          </span>
        </li>
        <li className="flex items-start gap-2">
          <strong className="text-text-title font-bold whitespace-nowrap">
            <span className="text-brand-accent">+</span>200
          </strong>
          <span>
            proyectos de innovación impulsados por IA y automatización
          </span>
        </li>
      </ul>
    </div>
  ),
  buttonText: "Comienza ahora con una sesión de descubrimiento AI",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones" },
    { label: "Soluciones de Inteligencia Artificial para empresas" },
  ],
};

export const dataIaCards: IACardProps[] = [
  {
    id: 1,
    icon: <PaletteOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "GenAI Canvas: IA generativa con diseño estratégico y viabilidad",
    description: (
      <>
        <strong>¿Quieres implementar IA generativa pero no sabes por dónde empezar?</strong> GenAI Canvas es el punto de partida ideal para trazar una ruta estratégica, identificar oportunidades reales y validar la viabilidad técnica antes de invertir.
        <br /><br />
        De 3 a 4 semanas exploramos contigo el qué, cómo y cuándo de la inteligencia artificial en tu organización — y convertimos la visión en un plan de acción medible y sostenible. Ideal para empresas que están explorando cómo integrar IA generativa de forma estratégica y escalable.
      </>
    ),
    lists: [
      {
        title: "Beneficios clave",
        type: "bullet" as "bullet",
        variant: "normal" as "normal",
        items: [
          "Oportunidades alineadas al negocio y con retorno tangible.",
          "Análisis técnico y de factibilidad para minimizar riesgos.",
          "Roadmap claro de adopción (6, 12 o 24 meses).",
        ],
      },
      {
        title: "Entregables estratégicos",
        type: "bullet" as "bullet",
        variant: "highlighted" as "highlighted", // Esta propiedad activa la línea y el texto grande
        items: [
          "Mapa de oportunidades priorizadas.",
          "Informe de viabilidad técnica.",
          "Arquitectura sugerida para pilotos.",
          "Roadmap de adopción personalizado.",
        ],
      },
    ],
    btnText: "Solicita tu sesión estratégica con GenAI Canvas",
  },
  {
    id: 2,
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 40 }} />,
    title: "GenAI Launchpad: Prototipado End-to-End",
    description: (
      <>
        <strong>¿Tienes un caso de uso de IA generativa y quieres validarlo rápidamente?</strong> GenAI Launchpad te lleva del concepto al prototipo funcional en solo 5 semanas. Creamos MVPs reales, listos para pruebas, iteración y escalamiento.
        <br /><br />
        Diseñado para equipos que buscan agilidad sin comprometer calidad técnica, este programa combina ingeniería, orquestación y validación de resultados.
      </>
    ),
    lists: [
      {
        title: "Nuestro proceso probado",
        type: "number" as "number",
        items: [
          "Definimos el caso y flujo operativo.",
          "Creamos el MVP de prompts y arquitectura funcional.",
          "Conectamos servicios y memoria (RAG, UI, AI evals).",
          "Evaluamos rendimiento, precisión y experiencia.",
        ],
      },
      {
        title: "Beneficios inmediatos",
        type: "bullet" as "bullet",
        items: [
          "Time-to-MVP acelerado y validación técnica temprana.",
          "Reducción de riesgo y costos de desarrollo.",
          "Seguridad por diseño y cumplimiento normativo.",
          "Prototipo funcional validado en solo 5 semanas.",
        ],
      },
    ],
    footerText: "Ideal para empresas que ya identificaron casos de uso y buscan pasar a la ejecución con resultados tangibles.",
    btnText: "Agenda tu sesión con el equipo de GenAI Launchpad",
  },
  {
    id: 3,
    icon: <BoltOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Agentes Inteligentes, la nueva fuerza laboral digital",
    description: (
      <>
        Nuestros AI Agents combinan <strong>capacidades de lenguaje, razonamiento y acción para ejecutar tareas autónomas</strong> en áreas críticas del negocio.
      </>
    ),
    lists: [
      {
        title: "Tipos de agentes",
        type: "bullet" as "bullet",
        items: [
          <><strong>Conversacionales:</strong> Atención al cliente, soporte y ventas.</>,
          <><strong>Analíticos:</strong> Interpretación de datos y generación de reportes.</>,
          <><strong>Operativos:</strong> Ejecución de tareas internas, integraciones o alertas automáticas.</>,
        ],
      },
      {
        title: "Beneficios de nuestros agentes",
        type: "bullet" as "bullet",
        items: [
          "Respuestas en tiempo real 24/7",
          "Reducción de costos operativos",
          "Experiencias más humanas y personalizadas",
          "Integración total con tus sistemas empresariales",
        ],
      },
    ],
    btnText: "Conoce cómo los agentes inteligentes pueden transformar tu operación",
  },
  {
    id: 4,
    icon: <PersonSearchOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "Executive AI Workshop: Prepara a tu equipo para adoptar la inteligencia artificial",
    description: (
      <>
        La adopción de inteligencia artificial comienza con las personas. <strong>Nuestro AI Workshop está diseñado para equipos directivos y líderes empresariales que buscan comprender el potencial real de la IA y aplicarlo estratégicamente en su día a día.</strong>
        <br /><br />
        En solo 4 horas, combinamos teoría práctica, demostraciones y ejercicios interactivos con herramientas como ChatGPT, Copilot y Azure OpenAI para activar una mentalidad data & AI-driven en tu organización.
      </>
    ),
    lists: [
      {
        title: "Objetivos del workshop",
        type: "bullet" as "bullet",
        items: [
          "Comprender el impacto de la IA en la productividad y la estrategia empresarial.",
          "Identificar oportunidades reales de automatización y eficiencia.",
          "Fomentar liderazgo digital y cultura de innovación.",
          "Brindar un espacio de consultoría de IA que permita la adopción sencilla de la tecnología.",
        ],
      },
      {
        title: "Resultados esperados",
        type: "bullet" as "bullet",
        items: [
          "Equipos más productivos y estratégicos.",
          "Mayor claridad sobre cómo integrar IA generativa en procesos clave.",
          "Aceleración en la adopción tecnológica y toma de decisiones basada en datos.",
        ],
      },
    ],
    btnText: "Solicita tu Workshop y acelera la adopción de IA en tu empresa",
  },
];

// BENEFICIOS
export const dataIaBeneficios = [
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">01</span>,
    title: "Eficiencia y productividad ampliadas.",
    description: "Automatiza flujos de trabajo con IA y machine learning. Los agentes inteligentes y modelos de lenguaje trabajan 24/7 para liberar a tus equipos de tareas operativas.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">02</span>,
    title: "Decisiones impulsadas por datos y predicción.",
    description: "Aprovecha analítica avanzada y modelos generativos para tomar decisiones basadas en datos confiables y anticipar comportamientos del mercado.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">03</span>,
    title: "Innovación con IA generativa aplicada.",
    description: "Desde la ideación hasta el prototipo con GenAI Canvas y Launchpad, llevamos tus casos de uso de IA generativa a productos funcionales en semanas.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">04</span>,
    title: "Escalabilidad empresarial sin fricción.",
    description: "Nuestras soluciones de inteligencia artificial se integran con tu infraestructura cloud (Azure, AWS, GCP), asegurando crecimiento continuo y optimización de costos.",
  },
  {
    colSpan: "md:col-span-2",
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">05</span>,
    title: "Inteligencia que evoluciona contigo.",
    description: "Cada interacción mejora. Nuestros agentes analizan contexto y resultados para aprender, adaptarse y optimizar procesos de forma autónoma.",
  }
];

export const dataIaTimeline = [
  { fase: "Fase", indicador: "#1", title: "Exploración (AI Brainstorming)", description: "Identificamos áreas donde la IA Generativa, el PLN o la visión por computadora pueden aportar valor y priorizamos los casos de uso de mayor impacto." },
  { fase: "Fase", indicador: "#2", title: "Planificación (AI Blueprint)", description: "Definimos la hoja de ruta, los KPIs y las tecnologías adecuadas para garantizar alineación con tus objetivos." },
  { fase: "Fase", indicador: "#3", title: "Desarrollo y Entrenamiento (Mindcrafting)", description: "Diseñamos, entrenamos y conectamos modelos de IA de alta precisión." },
  { fase: "Fase", indicador: "#4", title: "Optimización (Tuning Lab)", description: "Ajustamos e integramos la solución en tus sistemas, garantizando rendimiento y adopción fluida." },
  { fase: "Fase", indicador: "#5", title: "Escalabilidad y Mantenimiento Continuo.", description: "Acompañamos tu evolución con soporte, actualización y mejora continua." }
];

export const dataIaFaq = [
  { question: "¿Qué son los servicios de Inteligencia Artificial Generativa?", answer: {descriptions:"La IA generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo a partir de patrones aprendidos en grandes volúmenes de datos."} },
  { question: "¿Cómo se aplica la Inteligencia Artificial en los negocios?", answer: {descriptions:"Se aplica en la automatización de procesos, análisis predictivo, atención al cliente mediante agentes conversacionales y personalización de experiencias." } },
  { question: "¿Qué es la asistencia para la inteligencia empresarial y para qué se utiliza?", answer: {descriptions:"Es el uso de IA para interpretar datos complejos del negocio y generar reportes o insights que ayuden a los líderes a tomar mejores decisiones." } },
  { question: "¿Cómo implementar IA en una empresa?", answer: {descriptions:"Comenzando con un caso de uso claro, validando su viabilidad mediante un prototipo (MVP) y luego escalándolo progresivamente al resto de la organización." } },
  { question: "¿Cuánto tarda un proyecto de IA Generativa?", answer: {descriptions:"Depende del alcance. Con nuestros programas como GenAI Launchpad, puedes tener un prototipo funcional (MVP) en tan solo 5 semanas." } },
  { question: "¿Qué beneficios concretos ofrece la IA para las empresas?", answer: {descriptions:"Reducción de costos operativos, mayor rapidez en la atención, toma de decisiones basada en datos precisos y liberación de tiempo para tareas estratégicas." } }
];