import { dataCard } from "@/src/types/cardTypes";
import { AccountBalanceOutlined, AddReactionOutlined, AssessmentOutlined, AssignmentIndOutlined, BusinessCenterOutlined, BusinessOutlined, CodeOutlined, DataObjectOutlined, DisplaySettingsOutlined, Diversity2Outlined, Diversity3Outlined, InsightsOutlined, LanguageOutlined, PsychologyOutlined, RocketLaunchOutlined, RouteOutlined, SettingsInputComponentOutlined, ShowChartOutlined, ViewQuiltOutlined, VolunteerActivismOutlined, VrpanoOutlined, WarehouseOutlined, WorkOutlineOutlined } from "@mui/icons-material";
 
 
 
 
export const dataLandignHGS = [
    { titleLanding: (<>1.000<span className="text-brand-accent">+</span></>), descriptionLanding: "Empresas" },
    { titleLanding: (<>6<span className="text-brand-accent">+</span></>), descriptionLanding: "Países" },
    { titleLanding: (<>45<span className="text-brand-accent">+</span></>), descriptionLanding: "Años" },
    { titleLanding: (<>5<span className="text-brand-accent">k</span></>), descriptionLanding: "Empleados" }
]
 
 
//TITULOS Y DESCRIPCIONAES LANDING HGS
 
export const titleLandingHGS = {
   
    title:"Presencial regional",
    description: (
        <>
        Operamos en <span className="text-text-body font-bold">más de 6 países</span> de América Latina, brindando soluciones adaptadas a las regulaciones locales y las necesidades específicas de cada mercado. Nuestra expansión regional nos posiciona como el socio estratégico ideal para empresas con operaciones multinacionales.
        </>
    )
   
}
 
export const titleLandingHGS2 = {
   
    title:"Soluciones para cada tipo de empresa",
    description: (
        <>
       Atendemos tanto a <span className="text-text-body font-bold">PyMEs</span> como a <span className="text-text-body font-bold">grandes empresas</span> con soluciones escalables y flexibles que se adaptan al tamaño, complejidad y sector de cada organización. Ya sea que necesites gestionar 10 o 50,000 empleados, tenemos la solución perfecta para ti.
        </>
    )
   
}
 
export const titleLandingHGS3 = {
   
    title:"Confianza de miles de clientes",
    description: (
        <>
        Más de <span className="text-text-body font-bold">1.000 clientes en toda la región</span> confían en nosotros para gestionar su operación de nómina y talento humano. Cada día, más de 500,000 empleados utilizan nuestros servicios, respaldados por nuestra tecnología robusta y confiable.
        </>
    )
   
}
 
//TITULO LANDIGN SOLUCIENES EN MODALIDA OUTSORCING (BPO)
export const titleLandingHGS4 = {
   
    title:"Soluciones en Modalida Outsorcing (BPO)",
    description: (
        <>
        Además de nuestras soluciones tecnológicas, ofrecemos servicios de <span className="text-text-body font-bold">Outsourcing especializado </span> para que puedas concentrarte en tu core business mientras nosotros nos encargamos de la operación:
        </>
    )
   
}
 
//TITULO LANDIGN CONTACTANOS
 
export const titleLandingHGS5 = {
  title:'Contáctanos',
  description: (
    <>
     hoy y descubre cómo podemos transformar tu gestión humana con soluciones que combinan <span className="text-text-body font-bold">tecnología, experiencia y alcance regional.</span>
    </>
  )
}
 
//TITULO LANDING HGS ALIANZAS ESTRATEGICAS
 
export const titleLandingHGS6 = {
  title:'Alianzas estratégicas con líderes tecnológicos',
  description: (
    <>
    Somos <span className="font-bold">aliados certificados</span> de los principales proveedores de tecnología del mundo, como IBM, Microsoft y otros líderes de la industria. Estas alianzas nos permiten integrar las mejores tecnologías del mercado en nuestras soluciones.
    </>
  )
}
 
//Inofrmacion landing-hgs cards soluciones para cada tipo de empresa
export const dataLandignHGS2 = [
  {
    icon: <WarehouseOutlined sx={{fontSize:40}}/>,
    contenedor: " 1 a 450 colaboradores",
    title: "Pymes",
    description: "Nomina para pequeña y mediana empresa",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <BusinessOutlined sx={{fontSize:40}}/>,
    contenedor: "+500 Colaboradores",
    title: "Grandes empresas",
    description: "Nomina para grandes empresas",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
 
];
 
 
//INFOMACION LANDING HGS CARDS portafolio completo
 
export const dataCardsLandingHGS: dataCard[] = [
    {
        icon:<DataObjectOutlined sx={{fontSize:35, fill:'red', stroke:'white'}}/>,
        title:"Software como servicio (SaaS)",
        description:"Plataformas cloud modernas, seguras y siempre actualizadas.",
        alineacion:'center'
    },
    {
        icon:<DisplaySettingsOutlined sx={{fontSize:35, fill:'red', stroke:'white'}}/>,
        title:"Outsourcing (BPO)",
        description:"Gestión completa de nómina, administración de personal y recobro de incapacidades",
        alineacion:'center'
    },
    {
        icon:<VrpanoOutlined sx={{fontSize:35, fill:'red', stroke:'white'}}/>,
        title:"Desarrollos de tecnología",
        description:"Soluciones personalizadas e integraciones con sistemas empresariales",
        alineacion:'center'
    }
]
 
//Informacion cards nuestro portafolio de soluciones
 
export const dataCardsLandingHGS2: dataCard[] = [
    {
    icon: (
      <AssignmentIndOutlined sx={{  fontSize:40 }} />
    ),
    title: "software de Nómina ",
    description:"Gestiona el cálculo y liquidación de nómina con precisión, cumplimiento normativo y automatización completa. Nuestra solución de nómina garantiza:",
    items: [
      { textos:"Cálculo preciso y automático de compra"},
      { textos:"Cumplimiento de legislacion laboral"},
      { textos:"Integracion con sistemas contables ERP"},
      { textos:"Autoliquidación de aporte y parafiscales"},
      { textos:"Repostes y consultas en tiempo real"},
      { textos:"Portal empleado con autogestión"},
     
    ],
    btn:'Conoce más'
  },
 
  {
    icon:<AccountBalanceOutlined sx={{fontSize:40}}/>,
    title:'Software Nómina para Gobierno',
    description: 'Solución especializada para entidades del sector público, con funcionalidades específicas para cumplir con normativas gubernamentales, gestión de planta de personal, carrera administrativa y presupuesto:',
    items: [
        {textos:'Gestión de planta de personal y provisionalidad'},
        { textos:'Control presupuestal de nómina'},
        {textos:'Cumplimiento normativo del sector público'},
        {textos:'Integración con sistemas de contratación estatal'},
        { textos:'Reportes para órganos de control'},
    ],
    btn:'Conoce más'
  },
 
  {
    icon:<AddReactionOutlined sx={{fontSize:40}}/>,
    title:'Software de Talento Humano',
    description:'Potencia la gestión completa del ciclo de vida del empleado, desde la atracción y selección hasta el desarrollo y retiro. Incluye:',
    items: [
        {textos:'Reclutamiento y selección'},
        {textos:'Onboarding digital'},
        {textos:'Gestión de desempeño y evaluaciones'},
        {textos:'Planes de carrera y sucesion'},
        {textos:'Capacitación y desarrollo'},
        {textos:'Gestión de tiempo y asistencia'},
        {textos:'Analitycs de talento e indicadores de RRHH'},
       
    ],
    btn:'Conoce más'
  },
 
   {
    icon:<VolunteerActivismOutlined sx={{fontSize:40}}/>,
    title:'Software seguridad y salud en el trabajo (SST)',
    description:'Gestiona integralmente tu Sistema de Gestión de Seguridad y Salud en el Trabajo conforme a normativas ISO 45001 y regulaciones locales e internacionales:',
    items: [
        {textos:'Gestión de riesgos y peligros'},
        {textos:'Investigacion de incidentes y accidentes'},
        {textos:'Programa de vigilancia epidemiologica'},
        {textos:'Exámenes médicos ocupacionales'},
        {textos:'Capacitaciones t entrenamiento en SST'},
        {textos:'Indicadores y reportes de gestión'},
        {textos:'Auditorias y cumplimineto normativo'},  
    ],
    btn: 'Conoce más'
  },
 
]
 
//INFORMACION cards Soluciones en Modalidad Outsorcing (BPO)
 
export const dataCardsLandingHGS3 = [
     {
    icon:<AssessmentOutlined sx={{fontSize:40}}/>,
    title:'Outsourcing de Nómina y Administración de Personal',
    description:'Terceriza la operación completa de nómina y administración de personal con nuestro servicio BPO:',
    items: [
        {textos:' Liquidación de nómina completa'},
        { textos:'Afiliaciones y novedades ante entidades'},
        { textos:'Gestión documental y archivo'},
        { textos:'Atención a consultas de empleados'},
        { textos:'Cumplimiento normativo garantizado'},
        { textos:'Reportes gerenciales y operativos'},
    ],
    btn: 'Conoce más'
  },
 
    {
        icon:<WorkOutlineOutlined sx={{fontSize:40}}/>,
        title:'Outsourcing de Recobro de Incapacidades (GRE)',
        description:'Maximiza la recuperación de recursos por incapacidades y licencias con nuestro servicio especializado de Gestión de Recobros:',
        items: [
            {textos:'Gestión integral del proceso de recobro'},
            { textos:'Seguimiento ante EPS y ARL'},
            { textos:'Maximización de recuperación de recursos'},
            { textos:'Reducción de cartera de recobro'},
            { textos:'Reportes de gestión y recuperación'},
           
        ],
        btn: 'Conoce más'
    },
 
    {
        icon:<AssignmentIndOutlined sx={{fontSize:40}}/>,
        title:' Nómina de Pensionados',
        description:'Solución especializada para Fondos de Pensiones, Cajas de Compensación y entidades que gestionan mesadas pensionales:',
        items: [
            {textos:'Liquidación de mesadas pensionales'},
            { textos:'Gestión de novedades de pensionados'},
            { textos:'Control de supervivencia'},
            { textos:'Cálculo de retroactivos y ajustes'},
            { textos:'Cumplimiento normativo del sector pensiones'},
            { textos:'Integración con sistemas actuariales'},
        ],
        btn: 'Conoce más'
    },
]
 
//INFORMACION CARDFEATURES PORQUE ELEGIR HEINSOHN HUMAN GLOBAL SOLUTIONS
export const dataCardsFeaturesLandingHGS = [
  {
    icon: <RocketLaunchOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Experiencia comprobada",
    description: "Más de 40 años liderando el mercado de soluciones de nómina y gestión humana ",
  },
 
  {
    icon:<LanguageOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Alcance regional",
    description:"Presencia en más de 6 países con conocimiento local profundo",
  },
 
  {
    icon:<ViewQuiltOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Versatilidad",
    description:"Soluciones para PyMEs y Grandes Empresas, sector privado y público ",
  },
 
  {
    icon: <BusinessCenterOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Confianza",
    description:"Más de 1,000 clientes y 500,000 usuarios diarios respaldan nuestra calidad ",
  },
 
  {
    icon: <RouteOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Flexibilidad",
    description:"Modalidades SaaS, Outsourcing o híbridas según tus necesidades ",
  },
 
  {
    icon: <InsightsOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Innovación",
    description:"Tecnología de última generación con alianzas estratégicas (IBM, Microsoft) ",
  },
 
  {
    icon: <ShowChartOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Cumplimiento",
    description: "Garantía de cumplimiento normativo en todos los países donde operamos ",
  },
  {
    icon: <AssignmentIndOutlined sx={{color:'#D30034',fontSize:40}}/>,
    title: "Especialización",
    description:"Soluciones verticales por industria y tipo de organización",
  },
 
];
 
//INFORMACION DATACARDS comienza tu transformacion digital en Gestion Humana
 
//*MIRAR DESCRIPTION O TITLE Y PORQUE */
export const dataCardsLandingHGS4: dataCard[] = [
  {title:  'Optimizar procesos y reducir tiempos operativos'},
  {title: 'Garantizar cumplimiento normativo en todos tus países de operación'},
  {title: 'Tomar decisiones basadas en datos con analytics avanzado'},
  {title: 'Mejorar la experiencia de tus colaboradores'},
  {title: 'Escalar tu operación sin incrementar proporcionalmente costos'},
  {title: 'Enfocarte en tu estrategia de talento mientras nosotros gestionamos la operación'},
]
 
 
 
//INFORRMACION LANDINGH HGS CARRUSEL
export const heroSlides = [
  {
    id:1,
    title: "Impactos de la reforma laboral en Colombia",
    description: "Análisis detallado de los principales cambios introducidos por la reforma laboral y su impacto directo en la gestión de nómina, prestaciones sociales.",
    image: "/img/noticias-interes.jpg"
  },
  {
    id:2,
    title: "La innovación como motor de transformación digital",
    description: "Análisis detallado de los principales cambios introducidos por la reforma laboral y su impacto directo en la gestión de nómina, prestaciones sociales.",
    image: "/img/imgSlider.png",
  }
]
 
 
//LINEA DE ICONOS Alianza estrategicas con lideres tecnologicos
 
export const dataTimeLineAlianzas = [
  {
    title: "Soluciones de última generación",
    description: (
      <>
      Nuestras plataformas incorporan tecnologías emergentes como <span className="font-bold">inteligencia artificial, Analytics avanzado, automatización de procesos y experiencia de usuario optimizada,</span> garantizando que tu empresa cuente con herramientas de vanguardia
      </>
    ),
    icon: <Diversity2Outlined sx={{ fontSize: 32 }} />
  },
  {
    title: "Experiencia comprobada",
    description:(
      <>
      Con <span className="font-bold">más de 40 años</span>  en el negocio de nómina y gestión del talento humano, hemos acumulado un conocimiento profundo de las mejores prácticas, retos regulatorios y necesidades cambiantes del mercado laboral.
      </>
    ),
    icon: <RocketLaunchOutlined sx={{ fontSize: 32 }} />
  },
  { 
    
    title: "Sector Privado y Público",
    description: (
      <>
      Atendemos tanto al <span className="font-bold">sector privado</span> como al <span className="font-bold">sector público</span>, con soluciones especializadas para entidades gubernamentales, fondos de pensiones, empresas de servicios, retail, manufactura y más. Nuestras soluciones por <span className="font-bold">verticales de negocio</span> garantizan que cada industria reciba la funcionalidad específica que necesita.
      </>
    ),
    icon: <AccountBalanceOutlined sx={{ fontSize: 32 }} />
  }
];
 
//INFORMACION SLIDER TESTIMONIAL
export const testimonialsSlider = [
  {
    companyLogo: "/img/coordinadora-logo.png",
    companyName: "Coordinadora",
    name: "Gustavo Alberto Gaviria",
    role: "Jefe de Nómina Nacional",
    text: "Heinsohn, como proveedores de software hemos tenido la confianza que el software cumple con todas las reglamentaciones legales y propias de la empresa."
  },
  {
    companyLogo: "/img/fundacion-logo.png",
    companyName: "Fundación Santa Fe",
    name: "Camila Peñaliza Lopera",
    role: "Gerente de Nómina",
    text: "Felicita a Heinsohn por la calidad de sus servicios, está muy contenta con el producto y con los consultores que la asisten."
  }
]