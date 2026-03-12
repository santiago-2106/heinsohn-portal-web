import { AccountBoxOutlined, AddReactionOutlined, BusinessCenterOutlined, BusinessOutlined, CalendarMonthOutlined, CastleOutlined, ContactPageOutlined, HistoryToggleOffOutlined, MedicalInformationOutlined, MedicationOutlined, RoomServiceOutlined, VolunteerActivismOutlined, WarehouseOutlined, WorkOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ReactNode } from "react";
// ELIMINADO: import { StaticImageData } from "next/image";

// ✅ CORRECCIÓN DE RUTAS: Ya no importamos, usaremos strings directos a /public/img/
// Los nombres de archivos se mantienen según tus capturas (ojo con "laptpo1" que parece tener un typo en el original)

export interface datagestionHumana {
  icon?: React.ReactNode;
  title: string;
  description: ReactNode;
  image?: string; // ✅ CAMBIO: De StaticImageData a string
  contenedor?: React.ReactNode;
  btnText: string;
  btn?: string;
}

export const gestionHumanaInfo: datagestionHumana[] = [
  {
    icon: <BusinessOutlined sx={{fontSize:35 }}/>,
    contenedor: "+500 Colaboradores",
    title: "Grandes empresas",
    description: "Nomina para grandes empresas",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <WarehouseOutlined sx={{fontSize:35 }}/>,
    contenedor: " 1 a 450 colaboradores",
    title: "Pymes",
    description: "Nomina para pequeña y mediana empresa",
    btnText: "Ampliar Informacion",
    btn: "Ampliar Informacion",
  },
  {
    icon: <CastleOutlined sx={{fontSize:35 }}/>,
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
    title: "Software de nómina",
    description: (
      <>
      Contamos con un software de <span className="font-bold">nómina inteligente</span> para el pago y liquidación de nómina.
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptpo1.png", 
  },
  {
    title: "Solucion pago a contratistas",
    description: (
      <>
      <span className="font-bold"> Estamos a la vanguardia. </span> Afrontamos los nuevos retos del mercado desarrollando soluciones acordes al cambio constante del mundo.
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptop2.png", 
  },
  {
    title: "Seguridad y salud en el trabajo",
    description: (
      <>
      Permite la <span className="font-bold">implementacion, mantenimiento y control</span> del sistema de gestion de seguridad y slaud en el trabajo.
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptop3.png", 
  },
  {
    title: "Software de nomina",
    description: (
      <>
      Permite la administracion integral del recurso humano de <span className="font-bold">tu organización.</span>
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptop4.png", 
  },
  {
    title: "Soluciones de nomina y gestion humana par Gobierno",
    description: (
      <>
      Facilita los proceso, seguimientos y evaluaciones de la organizacion y de ares de <span className="font-bold">talento humano.</span>
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptop5.png", 
  },
  {
    title: "Gestion de reconocimiento economicos",
    description: (
      <>
      <span className="font-bold">Aumenta tus ingresos</span> recuperando el dinero de incapacidades y licencias de tus colaboradores.
      </>
    ),
    btnText: "Conocer más",
    image: "/img/laptop6.png", 
  },
  {
    title: "Nómina Emax",
    description:(
      <>
      Toda la experiencia de Heinsohn en una solución <span className="font-bold">100% digital</span>, ideal para la pequeña grab empresa!
      </>
    ) ,
    btnText: "Conocer más",
    image: "/img/laptop7.png", 
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
    icon: <MedicalInformationOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Outsourcing de gestión incapacidades y reconocimientos económicos",
    description: "Manejo de giros, compra de cartera, desembolsos, legalización de créditos y generación de documentos como cartas de aprobación.",
  },

   {
    icon: <WorkOutlineOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Atención a clientes y transformación digital",
    description: "Nuestros clientes son la fuente de nuestra transformación. Cada reto propuesto es el combustible que nos impulsa a crecer y crear nuevas estrategias.",
  },

   {
    icon: <HistoryToggleOffOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Atracción, selección y planeación de la fuerza laboral",
    description: "Enfocamos nuestro esfuerzo en conseguir los mejores talentos para las compañías, realizando procesos de selección y toda la gestión de talento que requieran las organizaciones.",
  },

   {
    icon: <WorkOutlined sx={{fontSize:40, fill:'white', stroke:'black'}}/>,
    title: "Consultoría",
    description: "Acompañamos a las organizaciones en iniciativas enfocadas en lograr “las personas correctas”, “haciendo las cosas correctas”, “logrando los resultados deseados”.",
  },

   {
    icon: <RoomServiceOutlined sx={{fontSize:40, fill:'black', stroke:'white'}}/>,
    title: "Servicios adicionales",
    description: "Modelos de flexibilización, conciliaciones contables, asesorías tributarias en retención en la fuente y legales referentes a contratos, asesorías y auditorías en UGPP.",
  },
  
];