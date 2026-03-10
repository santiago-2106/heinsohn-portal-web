import {
  AccountTreeRounded,
  AddReactionOutlined,
  ArchitectureOutlined,
  AutoAwesomeOutlined,
  CasesOutlined,
  CloudSyncOutlined,
  Diamond,
  DiamondOutlined,
  ErrorOutlineOutlined,
  GavelOutlined,
  HelpCenterOutlined,
  ImportantDevicesOutlined,
  LanguageOutlined,
  LaptopChromebookOutlined,
  PaletteOutlined,
  PermContactCalendarOutlined,
  PortraitOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import { dataCard } from "@/src/types/cardTypes";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { ResultsCorporativoData } from "../../types/typePensiones";
import { dataTextComponent } from "../share/textosGenerales";


export const infoStaffArgumentation: dataCard[] = [
  {
    icon: <SensorOccupiedOutlinedIcon sx={{ fontSize:40 }} />,
    title: "Procesos lentos por falta de recursos tecnicos especializados",
    alineacion: "center",
  },
  {
    icon: <CasesOutlined sx={{ fontSize:40 }} />,
    title: "Dificultad para cubrir roles criticos o temporales",
    alineacion: "center",
  },
  {
    icon: <WorkOutlineOutlinedIcon sx={{ fontSize:40 }} />,
    title: "Costos elevados en contratacion y retencion de talento",
    alineacion: "center",
  },
  {
    icon: <ErrorOutlineOutlined sx={{ fontSize:40 }} />,//VER ICONOS AQUI
    title: "Perdida de foco estrategico por tareas administrativa",
    alineacion: "center",
  },
];


//INFORMACINO TITULOS STAFF ARGUMENTATION
export const titleStaffArgumentation1: dataTextComponent = {
  title:
    "El modelo de staffing que combina talento, agilidad y resultados medibles",
  description: (
    <>
      Nuestro servicio especializado de TI está diseñado para que accedas a los
      perfiles que necesitas con eficiencia y respaldo metodológico.{" "}
      <span className="font-semibold text-gray-800">
        Nos encargamos de todo el ciclo:
      </span>{" "}
      desde la identificación y validación del talento hasta su integración y
      acompañamiento continuo en tus operaciones.
    </>
  ),
};

 {/* Informacion  Titulo staff Cuando tu equipo necesita crecer, el Staff Augmentation TI es la respuesta  */}
export const titleStaffArgumentation2: dataTextComponent = {
  title:
    "Cuando tu equipo necesita crecer, el Staff Augmentation TI es la respuesta",
  description: (
    <>
      Las empresas necesitan escalar con agilidad y precisión, pero el reclutamiento tradicional suele ser lento y costoso. Nuestro modelo de Staff Augmentatio TI te permite reforzar tu equipo sin recurrir a esquemas de outsourcing tradicional. 
      
      <br />
      <br />
      <span className="font-bold mt-80">Síntomas de una gestión sin staffing de TI eficiente:</span>
    </>
  ),
};

//Titulo Informacion Staff Argumnetation Tu aliado estratégico en Staff Augmentation

export const titleStaffArgumentation3: dataTextComponent = {
  title: 'Tu aliado estratégico en Staff Augmentation',
   description: (
    <>
      Más de cuatro décadas de experiencia nos respaldan como uno de los aliados tecnológicos más sólidos en Latinoamérica. No solo te ofrecemos talento, sino un modelo de colaboración pensado para la continuidad, eficiencia y calidad.
      
      <br />
      <br />
      <span className="font-bold mt-80">Nuestro diferencial</span>
    </>
  ),
}


export const infoStaffArgumentation2: ResultsCorporativoData = {
  highlight: {
    icon: (
      <VerifiedOutlined sx={{ fill: "white", stroke: "red", fontSize: 50 }} />
    ),
    value: "Staff Argumentation TI",
    description:
      "incorporas talento especializado que trabaja bajo tu dirección y procesos, con soporte de selección, contratación y gestión administrativa por parte de Heinsohn. ",
  },

  metrics: [
    {
      id: "compliance",
      icon: (
        <GavelOutlined sx={{ fill: "white", stroke: "red", fontSize: 50 }} />
      ),
      description: (
        <>
          Nearshore <br />
          (LATAM, mismas zonas horaria).
        </>
      ),
    },
    {
      id: "cost",
      icon: (
        <ErrorOutlineOutlined
          sx={{ fill: "white", stroke: "red", fontSize: 50 }}
        />
      ),
      description: "Remoto 100% o hibrido segun la ubicacion requerida.",
    },
  ],
};

export const infoStaffArgumentation3: dataCard[] = [
  {
    icon: <ImportantDevicesOutlined sx={{ fontSize: 40 }} />,
    title: "Desarrollo y modernización",
    items: [
      {
        titulo: "Frontend",
        textos:
          "Implementación de interfaces modernas con React, Angular, Vue.js y Next.js.",
      },
      {
        titulo: "Desarrollo backend",
        textos:
          "Construcción de servicios y APIs con Java (Spring Boot), Node.js, Python (FastAPI/Django) y .NET Core.",
      },
      {
        titulo: "Desarrollo full stack",
        textos:
          "Implementación integral con stacks como MERN, MEAN y combinaciones Java + React/Angular.",
      },
      {
        titulo: "Desarrollo móvil",
        textos:
          "Aplicaciones móviles nativas e híbridas con Swift, Kotlin, React Native y Flutter.",
      },
    ],
  },
  {
    icon: <Diamond sx={{fill: 'white', stroke: 'black', fontSize: 40 }} />,
    title: "Calidad y eficiencia",
    items: [
      {
        titulo: "Automatización de pruebas",
        textos:
          "Diseño y ejecución de pruebas automatizadas con Playwright, Cypress, Selenium y Appium.",
      },
      {
        titulo: "Ingeniería de pruebas",
        textos:
          "Construcción de frameworks de pruebas robustos, escalables y mantenibles.",
      },
      {
        titulo: "Pruebas funcionales y técnicas",
        textos:
          "Pruebas funcionales, de regresión, rendimiento (JMeter) y seguridad.",
      },
    ],
  },
  {
    icon: <CloudSyncOutlined sx={{ fill: "white", stroke: "black", fontSize: 40 }} />,
    title: "Infraestructura, nube y seguridad",
    items: [
      {
        titulo: "Servicios en la nube",
        textos: "Implementación y gestión en AWS, Azure y Google Cloud.",
      },
      {
        titulo: "Automatización y operaciones",
        textos:
          "Orquestación y despliegue continuo con Kubernetes, Terraform, Docker e integración continua.",
      },
      {
        titulo: "Ciberseguridad",
        textos:
          "Seguridad integrada al desarrollo, gestión de accesos, cumplimiento normativo y pruebas de penetración.",
      },
    ],
  },
  {
    icon: <PaletteOutlined sx={{fontSize:40}}/>,
    title: "Análisis, diseño y estrategia",
    items: [
      {
        titulo: "Diseño de producto y experiencia",
        textos:
          "Definición de productos digitales y experiencias centradas en el usuario con Figma y Adobe XD.",
      },
      {
        titulo: "Gestión ágil de proyectos",
        textos:
          "Dirección de proyectos con metodologías ágiles y marcos de trabajo colaborativos.",
      },
      {
        titulo: "Análisis de negocio",
        textos:
          "Levantamiento, documentación y validación de requerimientos técnicos y funcionales.",
      },
    ],
  },
  {
    icon: <AutoAwesomeOutlined sx={{ fontSize: 40 }} />,
    title: "Ingeniería de datos e inteligencia artificial",
    items: [
      {
        titulo: "Ingeniería de datos",
        textos:
          "Diseño de arquitecturas y procesamiento de datos con Snowflake, Databricks, dbt, Apache Airflow y Spark.",
      },
      {
        titulo: "Inteligencia artificial y modelos generativos",
        textos:
          "Desarrollo de soluciones con modelos de lenguaje, bases de datos vectoriales y arquitecturas RAG.",
      },
      {
        titulo: "Aprendizaje automático",
        textos:
          "Construcción, entrenamiento y despliegue de modelos con MLOps, PyTorch, TensorFlow y Scikit-learn.",
      },
      {
        titulo: "Analítica y visualización",
        textos:
          "Inteligencia de negocio y análisis avanzado con Power BI y Tableau.",
      },
    ],
  },
  {
    icon:<ArchitectureOutlined sx={{ fontSize:40 }}/>,
    title: "Liderazgo y arquitectura",
    items: [
      {
        titulo: "Arquitectura tecnológica",
        textos:
          "Definición de arquitecturas de software, nube y datos para soluciones empresariales.",
      },
      {
        titulo: "Búsqueda de liderazgo tecnológico",
        textos:
          "Incorporación de líderes técnicos en roles estratégicos de dirección tecnológica.",
      },
    ],
  },
];

//Data informacions Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día
export const infoStaffArgumentation4 = [
  {
    icon: <PortraitOutlined sx={{ fill:'red', fontSize:40  }} />,
    title: "Optimizacion de costos",
    description: "Reduce gastos administrativos y operativos. ",
  },

  {
    icon: <AddReactionOutlined sx={{ fill:'red', fontSize:40 }} />,
    title: "Contratacion agil",
    description: "Perfiles disponibles en 2 a 3 semanas. ",
  },

  {
    icon: <AccountTreeRounded sx={{ fill:'red', fontSize:40 }}/>,
    title: "Talento de primer nivel",
    description: "Especialistas validados técnica y culturalmente. ",
  },

  {
    icon: <PermContactCalendarOutlined sx={{ fill:'red', fontSize:40 }} />,
    title: "Cercania y colaboracion",
    description: "Talento en tu misma zona horaria. ",
  },

  {
    icon: <PermContactCalendarOutlined sx={{ fill:'red', fontSize:40 }} />,
    title: "Escalabilidad total:",
    description: "Amplía o reduce tu equipo según las demandas del proyecto.",
  },

  {
    icon: <PermContactCalendarOutlined sx={{ fill:'red', fontSize:40 }} />,
    title: "Transparencia",
    description: "Seguimiento, métricas y reportes de productividad. ",
  },
];

//Data Informacion Así construimos tu equipo de TI ideal, paso a paso

export const infoStaffArgumentation5 = [
  {
    indicador: "01",
    title: "Evaluación de necesidades",
    description: "Entendemos tu contexto y los perfiles requeridos.",
  },
  {
    indicador: "02",
    title: "Selección y validación",
    description: "Preseleccionamos y evaluamos técnicamente a los candidatos.",
  },
  {
    indicador: "03",
    title: "Formalización",
    description: "Acuerdos transparentes y soporte completo en contratación.",
  },
  {
    indicador: "04",
    title: "Ejecución",
    description:
      "El equipo se integra a tus operaciones con seguimiento constante.",
  },
];

//

export const infoStaffArgumentation6 = [
  {
    icon: <LaptopChromebookOutlined sx={{ fontSize:40 }} />,
    description: "Metodología Data-Driven 360°. ",
  },

  {
    icon: <DiamondOutlined sx={{ fontSize:40 }}/>,
    description:
      "Certificación CMMI Nivel 5 y metodologías ágiles (Scrum, OKR, Lean). ",
  },

  {
    icon: <LanguageOutlined sx={{ fontSize:40 }} />,
    description: "Cobertura regional con sedes en LATAM y Norteamérica. ",
  },

  {
    icon: <HelpCenterOutlined sx={{ fontSize:40 }} />,
    description: "Soporte continuo y acompañamiento operativo. ",
  },
];

//DATA PREGUNTAS FRECUENTES STAFF-ARGUMENTATION
export const dataPreguntasFrecuentesStaff = [
  {
    question: "¿Se trata de un solo software o de varias soluciones diferentes?",
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
    question: "¿Qué entidades pueden utilizar este software previsional?",
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
    question: "¿El software se adapta a la regulación de cada país en LATAM?",
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
    question: "¿Puedo implementar solo algunos módulos y escalar después?",
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
    question: "¿El software cubre la nómina de pensionados y los pagos masivos?",
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
    question: "¿También sirve para administrar ahorro previsional voluntario o APV?",
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
    question: "¿Se puede usar para administrar cesantías desde el mismo sistema? ",
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
    question: "¿El software es multipaís y multimoneda?",
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
    question: "¿Qué tipo de acompañamiento ofrece Heinsohn?",
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
    question: "¿Cómo iniciar la implementación del software previsional?",
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


