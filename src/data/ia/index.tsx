import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { IACardProps } from "@/src/types/typeIA";

// 1. DATA DEL HERO
export const dataIaHero = {
  title: <h2 className="font-light">Soluciones de Inteligencia Artificial para empresas</h2>,
  description: (
    <div className="flex flex-col gap-6">
      <p>
        Creamos soluciones de inteligencia artificial diseñadas para acelerar la
        transformación digital de tu negocio. <strong>A través de IA generativa</strong>, 
        procesamiento de lenguaje natural (PLN), visión por computadora y 
        aprendizaje automático, <strong>ayudamos a las empresas a automatizar procesos, 
        mejorar la eficiencia operativa y generar valor sostenible.</strong>
      </p>
      <ul className="flex flex-col gap-3 mt-2">
        <li className="flex items-start gap-2">
          <strong className="text-text-title font-bold whitespace-nowrap">
            <span className="text-brand-accent">+</span>45
          </strong>
          <span>años de experiencia en ingeniería y tecnología empresarial</span>
        </li>
        <li className="flex items-start gap-2">
          <strong className="text-text-title font-bold whitespace-nowrap">
            <span className="text-brand-accent">+</span>200
          </strong>
          <span>proyectos de innovación impulsados por IA y automatización</span>
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

// 2. TEXTOS DE LAS SECCIONES (Para limpiar el page.tsx)
export const dataIaSections = {
  soluciones: {
    title: <> Soluciones en Inteligencia Artificial<br />aplicada a los desafíos reales de tu<br />negocio</>,
    description: (
      <>
        <strong>Cada empresa enfrenta retos distintos.</strong> Nuestras soluciones de IA combinan personalización, escalabilidad y automatización para resolver los problemas específicos de tu operación:
      </>
    )
  },
  implementacion: {
    title: "Cómo implementamos la inteligencia artificial en tu empresa",
    description: "Nuestro enfoque combina visión estratégica, desarrollo técnico y acompañamiento continuo:",
    buttonText: "Empieza tu hoja de ruta AI personalizada"
  },
  beneficios: {
    title: "Beneficios de nuestros servicios de Inteligencia Artificial",
    description: "Nuestras soluciones de inteligencia artificial para empresas combinan IA generativa, agentes inteligentes y automatización avanzada para crear ventajas reales y medibles:",
  },
  ctaFooter: "Conversa con un especialista en IA"
};

// 3. TARJETAS DE IA (Completadas según las imágenes)
export const dataIaCards: IACardProps[] = [
  {
    id: 1,
    icon: <PaletteOutlinedIcon sx={{ fontSize: 40 }} />,
    title: "GenAI Canvas: IA generativa con diseño estratégico y viabilidad",
    description: (
      <>
        <strong>¿Quieres implementar IA generativa pero no sabes por dónde empezar?</strong> GenAI Canvas es el punto de partida ideal para trazar una ruta estratégica, identificar oportunidades reales y validar la viabilidad técnica antes de invertir.
        <br /><br />
        De 3 a 4 semanas exploramos contigo el qué, cómo y cuándo de la inteligencia artificial en tu organización — y convertimos la visión en un plan de acción medible y sostenible.
      </>
    ),
    lists: [
      {
        title: "Beneficios clave",
        type: "bullet",
        variant: "normal",
        items: [
          "Oportunidades alineadas al negocio y con retorno tangible.",
          "Análisis técnico y de factibilidad para minimizar riesgos.",
          "Roadmap claro de adopción (6, 12 o 24 meses).",
        ],
      },
      {
        title: "Entregables estratégicos",
        type: "bullet",
        variant: "highlighted",
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
        type: "number",
        items: [
          "Definimos el caso y flujo operativo.",
          "Creamos el MVP de prompts y arquitectura funcional.",
          "Conectamos servicios y memoria (RAG, UI, AI evals).",
          "Evaluamos rendimiento, precisión y experiencia.",
        ],
      },
      {
        title: "Beneficios inmediatos",
        type: "bullet",
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
        type: "bullet",
        items: [
          <><strong>Conversacionales:</strong> Atención al cliente, soporte y ventas.</>,
          <><strong>Analíticos:</strong> Interpretación de datos y generación de reportes.</>,
          <><strong>Operativos:</strong> Ejecución de tareas internas, integraciones o alertas automáticas.</>,
        ],
      },
      {
        title: "Beneficios de nuestros agentes",
        type: "bullet",
        items: [
          "Respuestas en tiempo real 24/7",
          "Reducción de costos operativos",
          "Experiencias más humanas y personalizadas",
          "Integración total con tus sistemas empresariales"
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
        type: "bullet",
        items: [
          "Comprender el impacto de la IA en la productividad y la estrategia empresarial.",
          "Identificar oportunidades reales de automatización y eficiencia.",
          "Fomentar liderazgo digital y cultura de innovación.",
          "Brindar un espacio de consultoría de IA que permita la adopción sencilla de la tecnología.",
        ],
      },
      {
        title: "Resultados esperados",
        type: "bullet",
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

// 4. BENEFICIOS
export const dataIaBeneficios = [
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">01</span>,
    title: "Eficiencia y productividad ampliadas.",
    description: "Automatiza flujos de trabajo con IA y machine learning. Los agentes inteligentes y modelos de lenguaje trabajan 24/7.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">02</span>,
    title: "Decisiones impulsadas por datos y predicción.",
    description: "Aprovecha analítica avanzada y modelos generativos para tomar decisiones basadas en datos confiables.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">03</span>,
    title: "Innovación con IA generativa aplicada.",
    description: "Desde la ideación hasta el prototipo con GenAI Canvas y Launchpad, llevamos tus casos de uso a productos funcionales.",
  },
  {
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">04</span>,
    title: "Escalabilidad empresarial sin fricción.",
    description: "Nuestras soluciones se integran con tu infraestructura cloud asegurando crecimiento continuo.",
  },
  {
    colSpan: "md:col-span-2",
    icon: <span className="text-brand-accent text-5xl md:text-6xl font-light">05</span>,
    title: "Inteligencia que evoluciona contigo.",
    description: "Cada interacción mejora. Nuestros agentes analizan contexto para aprender, adaptarse y optimizar procesos.",
  }
];

// 5. TIMELINE
export const dataIaTimeline = [
  { fase: "Fase", indicador: "#1", title: "Exploración", description: "Identificamos áreas donde la IA puede aportar valor." },
  { fase: "Fase", indicador: "#2", title: "Planificación", description: "Definimos la hoja de ruta y los KPIs." },
  { fase: "Fase", indicador: "#3", title: "Desarrollo", description: "Diseñamos y entrenamos modelos de IA de alta precisión." },
  { fase: "Fase", indicador: "#4", title: "Optimización", description: "Ajustamos e integramos la solución en tus sistemas." },
  { fase: "Fase", indicador: "#5", title: "Escalabilidad", description: "Soporte, actualización y mejora continua." }
];


export const dataIaFaq = [
  { 
    question: "¿Qué son los servicios de Inteligencia Artificial Generativa?", 
    answer: {descriptions:"La IA generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo a partir de patrones aprendidos en grandes volúmenes de datos."} 
  },
  { 
    question: "¿Cómo se aplica la Inteligencia Artificial en los negocios?", 
    answer: {descriptions:"Se aplica en la automatización de procesos, análisis predictivo, atención al cliente mediante agentes conversacionales y personalización de experiencias." } 
  },
  { 
    question: "¿Qué es la asistencia para la inteligencia empresarial y para qué se utiliza?", 
    answer: {descriptions:"Es el uso de IA para interpretar datos complejos del negocio y generar reportes o insights que ayuden a los líderes a tomar mejores decisiones." } 
  },
  { 
    question: "¿Cómo implementar IA en una empresa?", 
    answer: {descriptions:"Comenzando con un caso de uso claro, validando su viabilidad mediante un prototipo (MVP) y luego escalándolo progresivamente al resto de la organización." } 
  },
  { 
    question: "¿Cuánto tarda un proyecto de IA Generativa?", 
    answer: {descriptions:"Depende del alcance. Con nuestros programas como GenAI Launchpad, puedes tener un prototipo funcional (MVP) en tan solo 5 semanas." } 
  },
  { 
    question: "¿Qué beneficios concretos ofrece la IA para las empresas?", 
    answer: {descriptions:"Reducción de costos operativos, mayor rapidez en la atención, toma de decisiones basada en datos precisos y liberación de tiempo para tareas estratégicas." } 
  }
];