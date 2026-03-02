import { BusinessOutlined, CastleOutlined, WarehouseOutlined } from "@mui/icons-material";
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

export const infoGestionHumana2: datagestionHumana[] = [
  {
    icon: <AccountCircleIcon />,
    title: "Selección Especializada",
    description: "Encontramos el talento idóneo para tus necesidades específicas mediante procesos rigurosos.",
    btn: "Ver servicio",
    btnText: "Ver servicio",
  },
  {
    icon: <AccountCircleIcon />,
    title: "Administración de Nómina",
    description: "Delegue la operatividad de su nómina en expertos garantizando cumplimiento legal.",
    btn: "Ver servicio",
    btnText: "Ver servicio",
  },
  {
    icon: <AccountCircleIcon />,
    title: "Consultoría HR",
    description: "Asesoría estratégica para potenciar el capital humano de su organización.",
    btn: "Ver servicio",
    btnText: "Ver servicio",
  },
];