import { AccountBoxOutlined, AddReactionOutlined, BusinessCenterOutlined, BusinessOutlined, CastleOutlined, ContactPageOutlined, HistoryToggleOffOutlined, MedicationOutlined, RoomServiceOutlined, VolunteerActivismOutlined, WarehouseOutlined, WorkOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// ELIMINADO: import { StaticImageData } from "next/image";

// ✅ CORRECCIÓN DE RUTAS: Ya no importamos, usaremos strings directos a /public/img/
// Los nombres de archivos se mantienen según tus capturas (ojo con "laptpo1" que parece tener un typo en el original)

export interface datagestionHumana {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string; // ✅ CAMBIO: De StaticImageData a string
  contenedor?: React.ReactNode;
  btnText: string;
  btn?: string;
}

export const gestionHumanaInfo: datagestionHumana[] = [
  {
    icon: <BusinessOutlined />,
    contenedor: "+500 Colaboradores",
    title: "Grandes empresas",
    description: "Nomina para grandes empresas",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <WarehouseOutlined />,
    contenedor: " 1 a 450 colaboradores",
    title: "Pymes",
    description: "Nomina para pequeña y mediana empresa",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <CastleOutlined />,
    contenedor: "+100 colaboradores",
    title: "Gobierno",
    description: "Soluciones para la administracion publica",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
];

// Productos gestión Humana - RUTAS ACTUALIZADAS A /public/img/
export const ProductsgestionHumanaInfo2: datagestionHumana[] = [
  {
    title: "Software de nomina",
    description: "Contamos con un ​software de nómina inteligente​ para el pago y liquidación de nómina.",
    btnText: "Conocer mas",
    image: "/img/laptpo1.png", // ✅ Ruta directa
  },
  {
    title: "Solucion pago a contratistas",
    description: "Estamos a la vanguardia. Afrontamos los nuevos retos del mercado desarrollando soluciones acordes al cambio constante del mundo.",
    btnText: "Conocer mas",
    image: "/img/laptop2.png", // ✅ Ruta directa
  },
  {
    title: "Seguridad y salud en el trabajo",
    description: "Permite la implementacion, mantenimiento y control del sistema de gestion de seguridad y slaud en el trabajo",
    btnText: "Conocer mas",
    image: "/img/laptop3.png", // ✅ Ruta directa
  },
  {
    title: "Software de nomina",
    description: "Permite la administracion integral del recurso humano de tu organizacion",
    btnText: "Conocer mas",
    image: "/img/laptop4.png", // ✅ Ruta directa
  },
  {
    title: "Soluciones de nomina y gestion humana par Gobierno",
    description: "Facilita los proceso, seguimientos y evaluaciones de la organizacion y de ares de talento humano",
    btnText: "Conocer mas",
    image: "/img/laptop5.png", // ✅ Ruta directa
  },
  {
    title: "Gestion de reconocimiento economicos",
    description: "Aumenta tus ingresos recuperando el dinero de incapacidades y licencias de tus colaboradores",
    btnText: "Conocer mas",
    image: "/img/laptop6.png", // ✅ Ruta directa
  },
  {
    title: "Nomina Emax",
    description: "Toda la experiencia de Heinsohn en una solucion 100% digital, ideal para la pequeña grab empresa!",
    btnText: "Conocer mas",
    image: "/img/laptop7.png", // ✅ Ruta directa
  },
];

export const infoGestionHumana2 = [
  {
    icon: <AccountBoxOutlined sx={{fontSize:40, fill:'black', stroke:'white'}} />,
    title: "Outsourcing de administración y atención a colaboradores",
    description: "Entendemos las necesidades de los colaboradores, por ello nuestro equipo realiza un acompañamiento constante a nuestros clientes."
  },

   {
    icon: <AddReactionOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Procesos especiales de gestión del talento humano",
    description: "Enfocamos nuestro esfuerzo en conseguir los mejores talentos para las compañías, realizando procesos de selección y toda la gestión de talento que requieran las organizaciones.",
  },

   {
    icon: <VolunteerActivismOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Gestión de seguridad y salud en el trabajo",
    description: "Creamos un modelo estratégico que reúne a los mejores profesionales del sector, para realizar la planeación de las acciones correspondientes en la seguridad y salud de los trabajadores.",
  },

   {
    icon: <ContactPageOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Outsourcing liquidación de pago de nómina y contratistas",
    description: "Realizamos todos los procesos de liquidación, auditoría y ejecución de pagos de nómina para los empleados que requieran las compañías.",
  },

   {
    icon: <MedicationOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Outsourcing de gestión incapacidades y reconocimientos económicos",
    description: "Manejo de giros, compra de cartera, desembolsos, legalización de créditos y generación de documentos como cartas de aprobación.",
  },

   {
    icon: <BusinessCenterOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Atención a clientes y transformación digital",
    description: "Nuestros clientes son la fuente de nuestra transformación. Cada reto propuesto es el combustible que nos impulsa a crecer y crear nuevas estrategias.",
  },

   {
    icon: <HistoryToggleOffOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Atracción, selección y planeación de la fuerza laboral",
    description: "Enfocamos nuestro esfuerzo en conseguir los mejores talentos para las compañías, realizando procesos de selección y toda la gestión de talento que requieran las organizaciones.",
  },

   {
    icon: <WorkOutlined sx={{fontSize:40, fill:'white', stroke:''}}/>,
    title: "Consultoría",
    description: "Acompañamos a las organizaciones en iniciativas enfocadas en lograr “las personas correctas”, “haciendo las cosas correctas”, “logrando los resultados deseados”.",
  },

   {
    icon: <RoomServiceOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Servicios adicionales",
    description: "Modelos de flexibilización, conciliaciones contables, asesorías tributarias en retención en la fuente y legales referentes a contratos, asesorías y auditorías en UGPP.",
  },
  
];