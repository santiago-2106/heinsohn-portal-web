import { ReactNode } from "react";
import { dataCard } from "@/src/types/cardTypes";

// --- ICONOS TECNOLOGÍA Y SERVICIOS --- //
import DevicesIcon from "@mui/icons-material/Devices";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

// --- DATOS TECNOLOGÍA Y SERVICIOS --- //



export const analitycCards: dataCard[] = [
  {
    icon: <LocalPoliceIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Business Intelligence",
    description:
      "Impulsa tu crecimiento con soluciones de BI que ofrecen visualizaciones claras y análisis predictivos.",
    btn: "ver BI",
  },
  {
    icon: <SmartToyIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Consultoría IA",
    description:
      "Asesoramiento experto para integrar la inteligencia artificial en tu estrategia de negocio.",
    btn: "Conocer más",
  },
  {
    icon: <AutoAwesomeIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Soluciones de Inteligencia Artificial y Copilot",
    description:
      "Soluciones de IA y Copilot que potencian la eficiencia y la automatización inteligente.",
    btn: "Ver soluciones IA",
  },
  {
    icon: <BubbleChartIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Machine Learning e Inteligencia Artificial",
    description:
      "Algoritmos predictivos que convierten datos en insights para optimizar procesos empresariales.",
    btn: "Explorar IA",
  },
];

export const enginerTeamCards: dataCard[] = [
  {
    icon: <AccountCircleIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Staff Augmentation",
    description:
      "Amplía tu equipo con expertos en tecnología, integrándolos de forma flexible a tus proyectos.",
    btn: "Ampliar equipo",
  },
  {
    icon: <EmojiPeopleIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Equipos dedicados",
    description: "Talento experto, enfocado en tus objetivos de negocio.",
    btn: "Ver talento experto",
  },
];

export const strategicConsultingCards: dataCard[] = [
  {
    icon: <CloudSyncIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Cloud y modernización de infraestructura",
    description:
      "Acompañamos a las empresas en su transición a la nube, optimizando costos y asegurando escalabilidad, seguridad y continuidad del negocio.",
    btn: "Optimizacion en la nube",
  },
  {
    icon: <TipsAndUpdatesIcon sx={{fill: 'white', stroke: 'black', fontSize:40}}/>,
    title: "Consultoría estratégica para adopción digital",
    description:
      "Guiamos la integración de nuevas tecnologías dentro de los modelos de negocio, generando valor tangible y acelerando la innovación.",
    btn: "Explorar consultoria",
  },
];
