import { ElementType } from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import { DeviceHub } from "@mui/icons-material";

export interface SubtitleItem {
  icon: ElementType;
  text: string;
  features: string[];
}

export interface dataCardSolutions {
  icon: ElementType;
  titles: string;
  subtitle: SubtitleItem[];
  price: string;
}

export const informationCard: dataCardSolutions[] = [
  {
    icon: DevicesIcon,
    titles: "Basico",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: ["Angular, React", "Hasta 5 flujos de 1 a 50 pantallas"],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: ["16 horas -1 especialista UX."],
      },
    ],
    price: "$500 USD",
  },

  {
    icon: DevicesIcon,
    titles: "Intermedio",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: ["Angular, React", "Hasta 10 flujos de 1 a 100 pantallas"],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: ["32 horas -1 especialista UX."],
      },
    ],
    price: "$1000 USD",
  },

  {
    icon: DevicesIcon,
    titles: "Pro",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: ["Angular, React", "mas de 10 flujos de 101 a 200 pantallas"],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: ["48 horas -1 especialista UX."],
      },
    ],
    price: "$2000 USD",
  },
];

export const dataEstrategiaNegocio = [
  {
    title: "Diseño centrado en el usuario (UX/UI)",
    description:
      "Validamos MVPs desde la primera iteración para asegurar claridad de producto. ",
  },
  {
    title: "Arquitecturas modernas",
    description:
      "Microservicios, Cloud y Serverless que garantizan flexibilidad y escalabilidad en el tiempo. .",
  },
  {
    title: "Industrialización con IA",
    description:
      "Aplicamos Inteligencia Artificial en codificación y QA para reducir tiempos de entrega y errores. ",
  },
  {
    title: "DevSecOps integrado",
    description:
      "Seguridad, calidad y automatización presentes en todo el ciclo de desarrollo. ",
  },
  {
    title: "Soporte multicloud",
    description:
      "Experiencia con Azure, AWS y Google Cloud para proyectos en cualquier entorno. ",
  },
  {
    title: "Integración abierta",
    description:
      "Conectamos tu software con ERP, CRM, Core bancario y plataformas como SAP o Salesforce. ",
  },
  {
    title: "Testign automatizado y QA continuo",
    description: "Menos riesgos, mayor confiabilidad en la operación crítica. ",
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

export const textoSoftwareSolucionDigital = [
  {
    id: 1,
    icon: <DeviceHub />,
    description:
      "Certificación CMMI Nivel 5 que garantiza procesos de calidad. ",
  },
  {
    id: 2,
    icon: <DeviceHub />,
    description:
      "Metodologías ágiles probadas: Scrum, DevSecOps, QA Automation, UX/UI.",
  },
  {
    id: 3,
    icon: <DeviceHub />,
    description:
      "Cobertura internacional y alianzas estratégicas para proyectos globales.  ",
  },
  {
    id: 4,
    icon: <DeviceHub />,
    description:
      "+200 proyectos implementados con impacto en múltiples industrias .",
  },
];

export const dataSoftwaregenerico = [
  {
    description: "Eliminan cuellos de botella con procesos agiles.",
  },
  {
    description: "Escalan sin fricciones gracias a arquitecturas modernas.",
  },
  {
    description: "Reducen costos ocultos al reemplazar licencias ineficientes.",
  },
  {
    description: "Refuerzan la seguridad con estandares globlaes de DevSecOps.",
  },
];

// =========================================================================
// AQUÍ ESTÁN LAS VARIABLES FALTANTES PARA QUE COMPILE TU VISTA
// Las llenamos con datos de prueba estructurados para tu Card.tsx
// =========================================================================

export const textModelDevelop = [
  {
    title: "Modelo de Desarrollo Ágil",
    description: "Entregas continuas y funcionales para adaptarnos a los cambios del mercado rápidamente.",
  },
  {
    title: "Modelo Cascada (Waterfall)",
    description: "Ideal para proyectos con requisitos fijos y alcance claramente definido desde el inicio.",
  },
  {
    title: "Equipos Dedicados",
    description: "Una extensión de tu equipo interno trabajando exclusivamente en tus objetivos tecnológicos.",
  }
];

export const textoModelDevelop = [
  {
    title: "Auditoría de Código",
    description: "Revisamos tu código fuente para identificar vulnerabilidades y oportunidades de mejora.",
  },
  {
    title: "Refactorización",
    description: "Actualizamos sistemas heredados sin interrumpir la operación de tu negocio.",
  }
];

export const textoModelDevelop2 = [
  {
    title: "Integración de APIs",
    description: "Conectamos tus sistemas existentes para que la información fluya sin problemas.",
  },
  {
    title: "Migración a la Nube",
    description: "Llevamos tu infraestructura a servidores cloud para mayor seguridad y escalabilidad.",
  }
];

export const textoSolucionDigital2 = [
  {
    title: "Plataformas B2B",
    description: "Desarrollo de portales transaccionales para optimizar la relación con tus proveedores.",
  },
  {
    title: "E-Commerce B2C",
    description: "Tiendas en línea robustas preparadas para manejar altos volúmenes de tráfico y ventas.",
  }
];

export const SolucinesDigital6 = [
  {
    title: "Inteligencia de Negocios (BI)",
    description: "Dashboards interactivos para tomar decisiones basadas en datos en tiempo real.",
  },
  {
    title: "Automatización RPA",
    description: "Liberamos a tu equipo de tareas repetitivas mediante robots de software eficientes.",
  }
];