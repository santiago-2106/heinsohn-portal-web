import React from "react";
import { dataCard } from "@/src/types/cardTypes";

// Estilo reutilizable para que los íconos se vean delgados (light) y del tamaño correcto
const iconStyle = { fontVariationSettings: "'wght' 200, 'opsz' 48" };
const iconClass = "material-symbols-rounded text-[36px] text-text-title mb-2";

// =========================================================================
// 1. DATA DEL HERO
// =========================================================================
export const dataHeroDesarrolloAMedida = {
  title: "Desarrollo de software a la medida",
  description: (
    <>
      El desarrollo de software a la medida es la clave para que las empresas
      avancen con agilidad, seguridad y escalabilidad.
      <span className="font-bold text-text-title ml-1">
        Creamos soluciones únicas que se adaptan a tu negocio,
      </span>{" "}
      con la experiencia y el conocimiento que nos posiciona como una de las
      principales empresas de desarrollo de software en Colombia y LATAM.
    </>
  ),
  buttonText: "Solicita una asesoría gratuita",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones" },
    { label: "Soluciones TI", href: "/soluciones-ti" },
    { label: "Desarrollo de software a la medida" },
  ],
};

// =========================================================================
// 2. DATA CARACTERÍSTICAS (GenericSoftwareSection)
// =========================================================================
export const dataSoftwaregenerico = [
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        computer
      </span>
    ),
    description: "Eliminan cuellos de botella con procesos agiles.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        architecture
      </span>
    ),
    description: "Escalan sin fricciones gracias a arquitecturas modernas.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        edit_note
      </span>
    ),
    description: "Reducen costos ocultos al reemplazar licencias ineficientes.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        arming_countdown
      </span>
    ),
    description: "Refuerzan la seguridad con estandares globlaes de DevSecOps.",
  },
];

// =========================================================================
// 3. DATA ESTRATEGIA DE NEGOCIO
// =========================================================================
export const dataEstrategiaNegocio = [
  {
    title: "Diseño centrado en el usuario (UX/UI)",
    description:
      "Validamos MVPs desde la primera iteración para asegurar claridad de producto.",
  },
  {
    title: "Arquitecturas modernas",
    description:
      "Microservicios, Cloud y Serverless que garantizan flexibilidad y escalabilidad en el tiempo.",
  },
  {
    title: "Industrialización con IA",
    description:
      "Aplicamos Inteligencia Artificial en codificación y QA para reducir tiempos de entrega y errores.",
  },
  {
    title: "DevSecOps integrado",
    description:
      "Seguridad, calidad y automatización presentes en todo el ciclo de desarrollo.",
  },
  {
    title: "Soporte multicloud",
    description:
      "Experiencia con Azure, AWS y Google Cloud para proyectos en cualquier entorno.",
  },
  {
    title: "Integración abierta",
    description:
      "Conectamos tu software con ERP, CRM, Core bancario y plataformas como SAP o Salesforce.",
  },
  {
    title: "Testign automatizado y QA continuo",
    description: "Menos riesgos, mayor confiabilidad en la operación crítica.",
  },
  {
    title: "Metodologias agiles y tradicionales",
    description:
      "Adaptamos el marco de trabajo a la cultura y necesidades de cada cliente.",
  },
  {
    title: "Equipo especializado",
    description:
      "Arquitectos, desarrolladores, DevOps, QA, BI y UX/UI que trabajan como una extensión de tu organización.",
  },
];

// =========================================================================
// 4. DATA MODELOS DE DESARROLLO (CON LOS ÍCONOS DE TUS IMÁGENES)
// =========================================================================

export const textModelDevelop: dataCard[] = [
  {
    // Ícono para: Staff Augmentation (Persona + cubo/código)
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        deployed_code_account
      </span>
    ),
    title: "Staff Augmentation",
    description:
      "Integra desarrolladores especializados para fortalecer tu equipo actual.",
  },
  {
    // Ícono para: Project Based Development (Triángulo, Cuadrado, Círculo)
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        category_search
      </span>
    ),
    title: "Project Based Development",
    description:
      "Entregas con alcance definido: Discovery, construcción de MVP y evoluciones incrementales.",
  },
  {
    // Ícono para: Dedicated Teams (3 círculos)
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        workspaces
      </span>
    ),
    title: "Dedicated Teams",
    description:
      "Conformamos células ágiles multidisciplinarias (PM, Devs, QA, UX) que trabajan como una extensión de tu organización.",
  },
];

export const textoModelDevelop: dataCard[] = [
  {
    // Ícono para: Soluciones como producto (Líneas de velocidad)
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        motion_blur
      </span>
    ),
    title: "Soluciones como producto",
    description:
      "Paquetes cerrados para necesidades específicas de negocio, listos para implementarse de forma rápida y segura.",
  },
  {
    // Ícono para: Consultoría técnica (Persona en un recuadro)
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        contacts
      </span>
    ),
    title: "Consultoría técnica + Implementación",
    description:
      "Asesoría estratégica acompañada de la ejecución, ideal para proyectos de alto impacto o entornos regulados.",
  },
];

export const textoModelDevelop2: dataCard[] = [
  {
    title: "Optimización de recursos",
    description: (
      <>
        <span className="font-semibold text-text-title">
          Al desarrollar soluciones a la medida,
        </span>{" "}
        inviertes solo en lo que tu empresa realmente necesita, optimizando
        recursos y eliminando costos innecesarios. Los lanzamientos se aceleran
        —de semanas, no meses— permitiendo una respuesta ágil a las
        oportunidades del mercado.
      </>
    ),
  },
  {
    title: "Eficiencia y retorno de la inversión",
    description: (
      <>
        Además, trabajas sobre plataformas preparadas para crecer contigo en
        cualquier entorno, con resiliencia digital que garantiza continuidad
        incluso en escenarios críticos. Todo conectado bajo un ecosistema
        inteligente que integra{" "}
        <span className="font-semibold text-text-title">
          SAP, Salesforce, core financiero y más,
        </span>{" "}
        potenciando la eficiencia y el retorno de inversión en cada proyecto.
      </>
    ),
  },
];

export const textoSolucionDigital2: dataCard[] = [
  {
    title: (
      <>
        <span className="text-brand-accent">01.</span> Vision Compartida
      </>
    ),
    description:
      "Alineamos objetivos de negocio y retos tecnológicos en una fase de descubrimiento estratégica. Aquí definimos metas claras y medibles para asegurar que el proyecto aporte valor desde el primer día.",
  },
  {
    title: (
      <>
        <span className="text-brand-accent">02.</span> Diseño con proposito
      </>
    ),
    description:
      "Creamos prototipos UX/UI y definimos la arquitectura más adecuada, garantizando usabilidad, escalabilidad y alineación con tus operaciones actuales y futuras.",
  },
  {
    title: (
      <>
        <span className="text-brand-accent">03.</span> Construccion agil y
        segura
      </>
    ),
    description:
      "Desarrollamos con equipos multidisciplinarios, prácticas DevSecOps y QA automatizado, asegurando entregas rápidas y de alta calidad en cada sprint.",
  },
  {
    title: (
      <>
        <span className="text-brand-accent">04.</span> Evolucion Continua
      </>
    ),
    description:
      "Acompañamos el despliegue, soporte y escalamiento de la solución para que siga aportando valor en un entorno de negocio cambiante.",
  },
];

export const SolucinesDigital6: dataCard[] = [
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        savings
      </span>
    ),
    title: "Lenguajes & Frameworks (Frontend/Backend)",
    items: [
      { textos: "Java" },
      { textos: "NET" },
      { textos: "Python" },
      { textos: "Node.js" },
      { textos: "React" },
      { textos: "Angular" },
      { textos: "Vue.js" },
      { textos: "Flutter" },
    ],
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        background_replace
      </span>
    ),
    title: "Cloud & Arquitecturas",
    items: [
      { textos: "AWS" },
      { textos: "Microsoft Azure" },
      { textos: "Google Cloud Platform" },
      { textos: "Kubernetes" },
      { textos: "Docker" },
    ],
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        account_balance_wallet{" "}
      </span>
    ),

    title: "Bases de datos & Big Data",
    items: [
      { textos: "PostgreSQL" },
      { textos: "MongoDB" },
      { textos: "Oracle" },
      { textos: "Microsoft SQL Server" },
    ],
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        account_balance
      </span>
    ),
    title: "Integraciones Empresariales & QA",
    items: [
      { textos: "SAP" },
      { textos: "Salesforce" },
      { textos: "Gitlab" },
      { textos: "Selenium" },
    ],
  },
];

export const textoSoftwareSolucionDigital = [
  {
    id: 1,
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        diamond_shine
      </span>
    ),
    description:
      "Certificación CMMI Nivel 5 que garantiza procesos de calidad.",
  },
  {
    id: 2,
      icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        motion_blur
      </span>
    ),
    description:
      "Metodologías ágiles probadas: Scrum, DevSecOps, QA Automation, UX/UI.",
  },
  {
    id: 3,
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        language
      </span>
    ),
    description:
      "Cobertura internacional y alianzas estratégicas para proyectos globales.",
  },
  {
    id: 4,
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "48px" }}
      >
        sync_saved_locally
      </span>
    ),
    description:
      "+200 proyectos implementados con impacto en múltiples industrias.",
  },
];

// =========================================================================
// 5. DATA PREGUNTAS FRECUENTES
// =========================================================================
export const dataPreguntasFrecuentes = [
  {
    question: "¿Por qué elegir empresas de desarrollo de software en Colombia?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Cuanto cuesta desarrollar software a la medida y como se calcula la inverison?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Que diferencia hay entre software estandar y software personalizado?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Cuanto tiempo toma un proyecto de desarrollo de software empresarial?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Que metodologias utilizan las empresad de desarrollo de software exitosas?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Como se asegura la calidad y la seguridad del software personalizado?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Que industrias se benefician mas del desarrollo de software personalizado?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
  {
    question:
      "¿Como se integra una solucion a la medida con sistemas ya existentes (ERP, CRM, core, bancario)?",
    answer: {
      descriptions:
        "Te ayudamos a crear experiencias de usuario fluidas, seguras y personalizadas que conectan a los conductores con su vehículo y, al mismo tiempo, desbloquean nuevas oportunidades de negocio.",
      listsItems: [
        "Pagos y comercio en vehículos",
        "Vehículo definido por software",
        "Android Auto y sistemas embebidos",
        "IA generativa para personalización",
        "Vehículos e infraestructura conectados",
      ],
    },
  },
];



export const dataCardKnowOurWork = {
  imgKnowOurWork: "/img/edif.jpg",
  titleWork: "Transformación digital en el sector financiero",
  descriptionWork:
    "Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.",
  textBtn: "Conoce el caso completo",
};

export const dataCardKnowOurWork2 = {
  imgKnowOurWork: "/img/imgWorkKnow.jpg",
  titleWork: "Transformación de una plataforma de servicios de salud",
  descriptionWork:
    "Diseñamos una nueva experiencia digital para una plataforma de salud, mejorando la navegación, reorganizando los flujos...",
  textBtn: "Descubre cómo lo hicimos",
};

