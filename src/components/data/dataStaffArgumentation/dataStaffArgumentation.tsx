import { AccountTreeRounded, AutoFixHighOutlined, CloudQueueOutlined, Description, DevicesOutlined, ErrorOutlineOutlined, GavelOutlined, Groups2Outlined, ManageAccountsOutlined, PaletteOutlined, VerifiedOutlined, } from "@mui/icons-material";
import { dataCard } from "@/src/components/types/cardTypes";
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { ResultsCorporativoData } from "../../types/typePensiones";
import { dataTextComponent } from "../textComponentData/dataTextComponent";
import { title } from "process";



export const infoStaffArgumentation: dataCard[] = [
  { icon: <ManageAccountsOutlined />, title: 'Procesos lentos por falta de recursos tecnicos especializados', alineacion: 'center' },
  { icon: <WorkOutlineOutlinedIcon />, title: 'Dificultad para cubrir roles criticos o temporales', alineacion: 'center' },
  { icon: <Groups2Outlined />, title: 'Costos elevados en contratacion y retencion de talento', alineacion: 'center' },
  { icon: <SensorOccupiedOutlinedIcon />, title: 'Perdida de foco estrategico por tareas administrativa', alineacion: 'center' },
]



export const titleStaffArgumentation1: dataTextComponent = {
  title: 'El modelo de staffing que combina talento, agilidad y resultados medibles',
  description: (
    <>
      Nuestro servicio especializado de TI está diseñado para que accedas a los perfiles que necesitas con eficiencia y respaldo metodológico. <span className="font-semibold text-gray-800">Nos encargamos de todo el ciclo:</span> desde la identificación y validación del talento hasta su integración y acompañamiento continuo en tus operaciones.
    </>
  ),
}


export const infoStaffArgumentation2: ResultsCorporativoData = {
  highlight: {
    icon: <VerifiedOutlined sx={{ fill: 'white', stroke: 'red', fontSize: 50 }} />,
    value: "Staff Argumentation TI",
    description: "incorporas talento especializado que trabaja bajo tu dirección y procesos, con soporte de selección, contratación y gestión administrativa por parte de Heinsohn. "
  },

  metrics: [
    {
      id: "compliance",
      icon: <GavelOutlined sx={{ fill: 'white', stroke: 'red', fontSize: 50 }} />,
      description: (
        <>
          Nearshore <br />(LATAM, mismas zonas horaria).
        </>
      )
    },
    {
      id: "cost",
      icon: <ErrorOutlineOutlined sx={{ fill: 'white', stroke: 'red', fontSize: 50 }} />,
      description: "Remoto 100% o hibrido segun la ubicacion requerida."
    }
  ]
}

export const infoStaffArgumentation3: dataCard[] = [
  {
    title: "Desarrollo y modernización",
    items: [
      { titulo: " frontend", textos: "Implementación de interfaces modernas con React, Angular, Vue.js y Next.js." },
      { titulo: "Desarrollo backend", textos: "Construcción de servicios y APIs con Java (Spring Boot), Node.js, Python (FastAPI/Django) y .NET Core." },
      { titulo: "Desarrollo full stack", textos: "Implementación integral con stacks como MERN, MEAN y combinaciones Java + React/Angular." },
      { titulo: "Desarrollo móvil", textos: "Aplicaciones móviles nativas e híbridas con Swift, Kotlin, React Native y Flutter." }
    ]
  },
  {
    title: "Calidad y eficiencia",
    items: [
      { titulo: "Automatización de pruebas", textos: "Diseño y ejecución de pruebas automatizadas con Playwright, Cypress, Selenium y Appium." },
      { titulo: "Ingeniería de pruebas", textos: "Construcción de frameworks de pruebas robustos, escalables y mantenibles." },
      { titulo: "Pruebas funcionales y técnicas", textos: "Pruebas funcionales, de regresión, rendimiento (JMeter) y seguridad." }
    ]
  },
  {
    title: "Infraestructura, nube y seguridad",
    items: [
      { titulo: "Servicios en la nube", textos: "Implementación y gestión en AWS, Azure y Google Cloud." },
      { titulo: "Automatización y operaciones", textos: "Orquestación y despliegue continuo con Kubernetes, Terraform, Docker e integración continua." },
      { titulo: "Ciberseguridad", textos: "Seguridad integrada al desarrollo, gestión de accesos, cumplimiento normativo y pruebas de penetración." }
    ]
  },
  {
    title: "Análisis, diseño y estrategia",
    items: [
      { titulo: "Diseño de producto y experiencia", textos: "Definición de productos digitales y experiencias centradas en el usuario con Figma y Adobe XD." },
      { titulo: "Gestión ágil de proyectos", textos: "Dirección de proyectos con metodologías ágiles y marcos de trabajo colaborativos." },
      { titulo: "Análisis de negocio", textos: "Levantamiento, documentación y validación de requerimientos técnicos y funcionales." }
    ]
  },
  {
    title: "Ingeniería de datos e inteligencia artificial",
    items: [
      { titulo: "Ingeniería de datos", textos: "Diseño de arquitecturas y procesamiento de datos con Snowflake, Databricks, dbt, Apache Airflow y Spark." },
      { titulo: "Inteligencia artificial y modelos generativos", textos: "Desarrollo de soluciones con modelos de lenguaje, bases de datos vectoriales y arquitecturas RAG." },
      { titulo: "Aprendizaje automático", textos: "Construcción, entrenamiento y despliegue de modelos con MLOps, PyTorch, TensorFlow y Scikit-learn." },
      { titulo: "Analítica y visualización", textos: "Inteligencia de negocio y análisis avanzado con Power BI y Tableau." }
    ]
  },
  {
    title: "Liderazgo y arquitectura",
    items: [
      { titulo: "Arquitectura tecnológica", textos: "Definición de arquitecturas de software, nube y datos para soluciones empresariales." },
      { titulo: "Búsqueda de liderazgo tecnológico", textos: "Incorporación de líderes técnicos en roles estratégicos de dirección tecnológica." }
    ]
  }
];


//Data informacions Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día 
export const infoStaffArgumentation4 = [
  {
    icon: <AccountTreeRounded />,
    title: "Optimizacion de costos",
    description: 'Reduce gastos administrativos y operativos. '
  },

  {
    icon: <AccountTreeRounded />,
    title: "Contratacion agil",
    description: 'Perfiles disponibles en 2 a 3 semanas. '
  },

  {
    icon: <AccountTreeRounded />,
    title: "Talento de primer nivel",
    description: 'Especialistas validados técnica y culturalmente. '
  },

  {
    icon: <AccountTreeRounded />,
    title: "Cercania y colaboracion",
    description: 'Talento en tu misma zona horaria. '
  },

  {
    icon: <AccountTreeRounded />,
    title: "Escalabilidad total:",
    description: 'Amplía o reduce tu equipo según las demandas del proyecto.'
  },

  {
    icon: <AccountTreeRounded />,
    title: "Transparencia",
    description: 'Seguimiento, métricas y reportes de productividad. '
  },
]



//Data Informacion Así construimos tu equipo de TI ideal, paso a paso 

export const infoStaffArgumentation5 = [
  {
    indicador: '01',
    title: "Evaluación de necesidades",
    description: "Entendemos tu contexto y los perfiles requeridos."
  },
  {
    indicador: '02',
    title: "Selección y validación",
    description: "Preseleccionamos y evaluamos técnicamente a los candidatos."
  },
  {
    indicador: '03',
    title: "Formalización",
    description: "Acuerdos transparentes y soporte completo en contratación."
  },
  {
    indicador: '04',
    title: "Ejecución",
    description: "El equipo se integra a tus operaciones con seguimiento constante."
  },
];

//

export const infoStaffArgumentation6 = [
  {
    icon: <AccountTreeRounded />,
    description: 'Metodología Data-Driven 360°. '
  },

  {
    icon: <AccountTreeRounded />,
    description: 'Certificación CMMI Nivel 5 y metodologías ágiles (Scrum, OKR, Lean). '
  },

  {
    icon: <AccountTreeRounded />,
    description: 'Cobertura regional con sedes en LATAM y Norteamérica. '
  },

  {
    icon: <AccountTreeRounded />,
    description: 'Soporte continuo y acompañamiento operativo. '
  },

]










//DATA DE SOLUCIONES IA

export const dataIA = [
  {
    fase: "Fase",
    indicador: "#1",
    title: "Exploración (AI Brainstorming)",
    description: "Identificamos áreas donde la IA Generativa, el PLN o la visión por computadora pueden aportar valor y priorizamos los casos de uso de mayor impacto."
  },

  {
    fase: "Fase",
    indicador: "#2",
    title: "Planificación (AI Blueprint)",
    description: "Definimos la hoja de ruta, los KPIs y las tecnologías adecuadas para garantizar alineación con tus objetivos. "
  },

  {
    fase: "Fase",
    indicador: "#3",
    title: "Desarrollo y Entrenamiento (Mindcrafting)",
    description: "Diseñamos, entrenamos y conectamos modelos de IA de alta precisión. "
  },

  {
    fase: "Fase",
    indicador: "#4",
    title: "Optimización (Tuning Lab)",
    description: "Ajustamos e integramos la solución en tus sistemas, garantizando rendimiento y adopción fluida. "
  },

  {
    fase: "Fase",
    indicador: "#5",
    title: "Escalabilidad y Mantenimiento Continuo.",
    description: "Acompañamos tu evolución con soporte, actualización y mejora continua."
  },
];