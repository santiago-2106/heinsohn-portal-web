import { AccountTreeRounded, AutoFixHighOutlined, CloudQueueOutlined, Description, DevicesOutlined, ErrorOutlineOutlined, GavelOutlined, Groups2Outlined, ManageAccountsOutlined, PaletteOutlined, VerifiedOutlined,} from "@mui/icons-material";
import { dataCard } from "../dataCard";
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { ResultsCorporativoData } from "../../types/typePensiones";
import { dataTextComponent } from "../textComponentData/dataTextComponent";
import { title } from "process";



export const infoStaffArgumentation: dataCard[] = [
    {icon:<ManageAccountsOutlined />,title:'Procesos lentos por falta de recursos tecnicos especializados', alineacion:'center'},
    {icon:<WorkOutlineOutlinedIcon />,title:'Dificultad para cubrir roles criticos o temporales', alineacion:'center'},
    {icon:<Groups2Outlined />,title:'Costos elevados en contratacion y retencion de talento', alineacion:'center'},
    {icon:<SensorOccupiedOutlinedIcon />,title:'Perdida de foco estrategico por tareas administrativa', alineacion:'center'},
]



export const titleStaffArgumentation1: dataTextComponent = {
   title:'El modelo de staffing que combina talento, agilidad y resultados medibles',
    description:(
        <>
          Nuestro servicio especializado de TI está diseñado para que accedas a los perfiles que necesitas con eficiencia y respaldo metodológico. <span className="font-semibold text-gray-800">Nos encargamos de todo el ciclo:</span> desde la identificación y validación del talento hasta su integración y acompañamiento continuo en tus operaciones.
        </>
    ),
}


export const infoStaffArgumentation2: ResultsCorporativoData = {
    highlight: {
        icon: <VerifiedOutlined sx={{fill:'white', stroke:'red', fontSize: 50}} />,
        value: "Staff Argumentation TI",
        description: "incorporas talento especializado que trabaja bajo tu dirección y procesos, con soporte de selección, contratación y gestión administrativa por parte de Heinsohn. "
    },

    metrics: [
    {
      id: "compliance",
      icon: <GavelOutlined sx={{fill:'white', stroke:'red', fontSize: 50}}/>,
      description: (
        <>
        Nearshore <br />(LATAM, mismas zonas horaria).
        </>
      )
    },
    {
      id: "cost",
      icon: <ErrorOutlineOutlined sx={{fill:'white', stroke:'red', fontSize: 50}}/>,
      description: "Remoto 100% o hibrido segun la ubicacion requerida."
    }
  ]
}

export const infoStaffArgumentation3: dataCard[] = [
  {
    icon: <DevicesOutlined sx={{ fontSize: 28 }} />,
    title: "Desarrollo y modernización",
    items: [
      "Frontend – React, Angular, Vue.js, Next.js.",
      "Backend – Java (Spring Boot), Node.js, Python (FastAPI/Django), .NET Core.",
      "Full Stack – MERN, MEAN, Java + React/Angular.",
      "Mobile – Swift, Kotlin, React Native, Flutter."
    ]
  },
  {
    icon: <AutoFixHighOutlined sx={{ fontSize: 28 }} />,
    title: "Calidad y eficiencia (QA & SDET)",
    items: [
      "Automation – Playwright, Cypress, Selenium, Appium.",
      "SDET – Creación de frameworks robustos y escalables.",
      "Testing – Funcional, regresión, performance (JMeter) y seguridad."
    ]
  },
  {
    icon: <CloudQueueOutlined sx={{ fontSize: 28 }} />,
    title: "Infraestructura, Cloud y Seguridad",
    items: [
      "Cloud & Platform – AWS, Azure, Google Cloud (GCP).",
      "DevOps & SRE – Kubernetes, Terraform, Docker, CI/CD.",
      "Cybersecurity – DevSecOps, IAM, cumplimiento (SOC2/HIPAA), Pentesting."
    ]
  },
  {
    icon: <PaletteOutlined sx={{ fontSize: 28 }} />,
    title: "Análisis, diseño y estrategia",
    items: [
      "Product & UX/UI – Product Designers, UX Researchers (Figma, Adobe XD).",
      "Agile Management – Project Managers, Scrum Masters.",
      "Business Analysis – Enfoque en requerimientos técnicos."
    ]
  },

  {
    icon: <PaletteOutlined sx={{ fontSize: 28 }} />,
    title: "Ingeniería de datos e IA ",
    items: [
      "Data Engineering Snowflake, Databricks, dbt, Apache Airflow, Spark. ",
      "AI & GenAI LLM Engineering (LangChain, OpenAI API), Vector Databases (Pinecone), RAG Architecture.",
      "Machine LearningMLOps, PyTorch, TensorFlow, Scikit-learn. ",
      "Analytics Business Intelligence (Power BI, Tableau), Analytics Engineering.",
    ]
  },

  {
    icon: <PaletteOutlined sx={{ fontSize: 28 }} />,
    title: "Liderazgo y arquitectura",
    items: [
      "Arquitectura Software, Cloud, Datos y Soluciones Enterprise.",
      "Executive Search Tech Leads, VP of Engineering, CTOs fraccionados o permanentes.",

    ]
  }
];


//Data informacions Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día 
export const infoStaffArgumentation4= [
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
      indicador:'01',
      title: "Evaluación de necesidades", 
      description: "Entendemos tu contexto y los perfiles requeridos." 
    },
    { 
      indicador:'02',
      title: "Selección y validación", 
      description: "Preseleccionamos y evaluamos técnicamente a los candidatos." 
    },
    { 
      indicador:'03',
      title: "Formalización", 
      description: "Acuerdos transparentes y soporte completo en contratación." 
    },
    { 
      indicador:'04',
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