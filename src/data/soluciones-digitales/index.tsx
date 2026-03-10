import { ElementType } from "react";
import DevicesIcon from "@mui/icons-material/Devices";
import { AccountBalanceOutlined, AccountBalanceWalletOutlined, AddPhotoAlternateOutlined, ArchitectureOutlined, AutoAwesomeOutlined, ContactlessOutlined, ContactPageOutlined, DataArrayOutlined, DeviceHub, DiamondOutlined, EmojiEventsOutlined, FactCheckOutlined, GradeOutlined, LanguageOutlined, LaptopChromebookOutlined, PaymentOutlined, PersonalVideoOutlined, RecordVoiceOverOutlined, RequestQuoteOutlined, SavingsOutlined, SensorsOutlined, ShieldMoonOutlined, SpeedOutlined, TimerOffOutlined, UpdateOutlined, WebOutlined } from "@mui/icons-material";
import { dataCard } from "@/src/types/cardTypes";

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
    icon: GradeOutlined,
    titles: "Basico",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipo Rapido",
        features: ["Angular, React", "Hasta 5 flujos de 1 a 50 pantallas"],
      },
      {
        icon: FactCheckOutlined,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: UpdateOutlined,
        text: "Tiempo",
        features: ["16 horas -1 especialista UX."],
      },
    ],
    price: "$500 USD",
  },

  {
    icon: EmojiEventsOutlined,
    titles: "Intermedio",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipo Rapido",
        features: ["Angular, React", "Hasta 10 flujos de 1 a 100 pantallas"],
      },
      {
        icon: FactCheckOutlined,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: UpdateOutlined,
        text: "Tiempo",
        features: ["32 horas -1 especialista UX."],
      },
    ],
    price: "$1000 USD",
  },

  {
    icon: DiamondOutlined,
    titles: "Pro",
    subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipo Rapido",
        features: ["Angular, React", "mas de 10 flujos de 101 a 200 pantallas"],
      },
      {
        icon: FactCheckOutlined,
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: UpdateOutlined,
        text: "Tiempo",
        features: ["48 horas -1 especialista UX."],
      },
    ],
    price: "$2000 USD",
  },
];

//data soluciones Cards conoce nuestro trabajo

export const dataCardKnowOurWork ={
  imgKnowOurWork: "/img/edif.jpg",
  titleWork:'Transformación digital en el sector financiero',
  descriptionWork: 'Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.',
  textBtn: 'Conoce el caso completo'
} 

export const dataCardKnowOurWork2 ={
  imgKnowOurWork: "/img/imgWorkKnow.jpg",
  titleWork:'Transformación de una plataforma de servicios de salud',
  descriptionWork: 'Diseñamos una nueva experiencia digital para una plataforma de salud, mejorando la navegación, reorganizando los flujos...',
  textBtn: 'Descubre cómo lo hicimos'
} 


//TEXTOS DE CARDS E INFORMACION DESARROLLO A LA MEDIDA NO DEBERIA ESTAR AQUI
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
    icon: <DiamondOutlined sx={{ fontSize: 40 }}/>,
    description:
      "Certificación CMMI Nivel 5 que garantiza procesos de calidad. ",
  },
  {
    id: 2,
    icon: <SpeedOutlined sx={{ fontSize: 40 }}/>,
    description:
      "Metodologías ágiles probadas: Scrum, DevSecOps, QA Automation, UX/UI.",
  },
  {
    id: 3,
    icon: <LanguageOutlined sx={{ fontSize: 40 }}/>,
    description:
      "Cobertura internacional y alianzas estratégicas para proyectos globales.  ",
  },
  {
    id: 4,
    icon: <PersonalVideoOutlined sx={{ fontSize: 40 }}/>,
    description:
      "+200 proyectos implementados con impacto en múltiples industrias .",
  },
];

export const dataSoftwaregenerico = [
  {
    icon: <LaptopChromebookOutlined sx={{fontSize:35}}/>,
    description: "Eliminan cuellos de botella con procesos agiles.",
  },
  {
    icon: <ArchitectureOutlined sx={{fontSize:35}}/>,
    description: "Escalan sin fricciones gracias a arquitecturas modernas.",
  },
  {
    icon: <PaymentOutlined sx={{fontSize:35}}/>,
    description: "Reducen costos ocultos al reemplazar licencias ineficientes.",
  },
  {
    icon: <ShieldMoonOutlined sx={{fontSize:40}}/>,
    description: "Refuerzan la seguridad con estandares globlaes de DevSecOps.",
  },
];




// =========================================================================
// AQUÍ ESTÁN LAS VARIABLES FALTANTES PARA QUE COMPILE TU VISTA
// Las llenamos con datos de prueba estructurados para tu Card.tsx
// =========================================================================




export const textModelDevelop: dataCard[] = [
    {icon:<AddPhotoAlternateOutlined sx={{fontSize:40}}/> , title:'Staff Augmentation', description:'Integra desarrolladores especializados para fortalecer tu equipo actual. '},
    {icon:<WebOutlined sx={{fontSize:40}}/> , title:'Project Based Development', description:'Entregas con alcance definido: Discovery, construcción de MVP y evoluciones incrementales. '},
    {icon:<TimerOffOutlined sx={{fontSize:40}}/> , title:'Dedicated Teams', description:'Conformamos células ágiles multidisciplinarias (PM, Devs, QA, UX) que trabajan como una extensión de tu organización. '},
]

export const textoModelDevelop: dataCard[] = [
    {icon:<SpeedOutlined sx={{fontSize:40}}/> , title:'Soluciones como producto', description:'Paquetes cerrados para necesidades específicas de negocio, listos para implementarse de forma rápida y segura.'},
    {icon:<ContactPageOutlined sx={{fontSize:40}}/> , title:'Consultoria tecnica + Implementacion', description:'Asesoría estratégica acompañada de la ejecución, ideal para proyectos de alto impacto o entornos regulados.'}
]

export const textoModelDevelop2: dataCard[] = [
    { title:'Optimización de recursos', 
    description:(<>
    <span className="font-semibold text-gray-900">Al desarrollar soluciones a la medida,</span> inviertes solo en lo que tu empresa realmente necesita, optimizando recursos y eliminando costos innecesarios. Los lanzamientos se aceleran —de semanas, no meses— permitiendo una respuesta ágil a las oportunidades del mercado.
    </>)},
    { title:'Eficiencia y retorno de la inversión ', description:(
        <>
        Además, trabajas sobre plataformas preparadas para crecer contigo en cualquier entorno, con resiliencia digital que garantiza continuidad incluso en escenarios críticos. Todo conectado bajo un ecosistema inteligente que integra <span className="font-semibold text-gray-900">SAP, Salesforce,core financiero y más,</span> potenciando la eficiencia y el retorno de inversión en cada proyecto.
        </>
    )}
]

//AQUI?
export const textoSolucionDigital2: dataCard[] = [
    {
        title: (
        <>
        <span className="text-red-500">01.</span> Vision Compartida
        </>
    ), description:'Alineamos objetivos de negocio y retos tecnológicos en una fase de descubrimiento estratégica. Aquí definimos metas claras y medibles para asegurar que el proyecto aporte valor desde el primer día.'},

    {
        title: (
        <>
        <span className="text-red-500">02.</span> Diseño con proposito
        </>
    ), description:'Creamos prototipos UX/UI y definimos la arquitectura más adecuada, garantizando usabilidad, escalabilidad y alineación con tus operaciones actuales y futuras.'},

    {
        title: (
        <>
        <span className="text-red-500">03.</span> Construccion agil y segura
        </>
    ), description:'Desarrollamos con equipos multidisciplinarios, prácticas DevSecOps y QA automatizado, asegurando entregas rápidas y de alta calidad en cada sprint.'},

    {
        title: (
        <>
        <span className="text-red-500">04.</span> Evolucion Continua
        </>
    ), description:'Acompañamos el despliegue, soporte y escalamiento de la solución para que siga aportando valor en un entorno de negocio cambiante. '},
]

export const SolucinesDigital6: dataCard[] = [
    {
        icon:<SavingsOutlined sx={{ fontSize: 40 }} />,
        title:'Lenguajes & Frameworks (Frontend/Backend)',
        items:[{textos:'Java'}, {textos:'NET'}, {textos:'Python'}, {textos:'Node.js'}, {textos:'React'}, {textos:'Angular'}, {textos:'Vue.js'}, {textos:'Flutter'}]
    },

    {
        icon:<RecordVoiceOverOutlined sx={{ fontSize: 40 }} />,
        title:'Cloud & Arquitecturas',
        items:[{textos:'AWS'}, {textos:'Microsoft AAzure'}, {textos:'Google Cloud Platform'}, {textos:'Kubernetes'}, {textos:'Docker'}]
    },

    {
        icon:<AccountBalanceWalletOutlined sx={{ fontSize: 40 }} />,
        title:'Bases de datos & Big Data',
        items:[{textos:'PostgreSQL'}, {textos:'MongoDB'}, {textos:'Oracle'}, {textos:'Microsoft SQL Server'}]
    },

    {
        icon:<AccountBalanceOutlined sx={{ fontSize: 40 }} />,
        title:'Integraciones Empresariales & QA',
        items:[{textos:'SAP'}, {textos:'Salesforce'}, {textos:'Gitlab'}, {textos:'Selenium'}]
    },
]

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
    question: "¿Cuanto cuesta desarrollar software a la medida y como se calcula la inverison?",
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
    question: "¿Que diferencia hay entre software estandar y software personalizado?",
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
    question: "¿Cuanto tiempo toma un proyecto de desarrollo de software empresarial?",
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
    question: "¿Que metodologias utilizan las empresad de desarrollo de software exitosas?",
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
    question: "¿Como se asegura la calidad y la seguridad del software personalizado?",
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
    question: "¿Que industrias se benefician mas del desarrollo de software personalizado?",
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
    question: "¿Como se integra una solucion a la medida con sistemas ya existentes (ERP, CRM, core, bancario)?",
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