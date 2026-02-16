import { ReactNode } from "react";

// --- ICONOS TECNOLOGÍA Y SERVICIOS --- //
import DevicesIcon from "@mui/icons-material/Devices";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export interface dataCard {
    icon?: ReactNode
    title: string
    description: string
    btn: string
    items?: string[] 
}

// --- DATOS TECNOLOGÍA Y SERVICIOS --- //

export const softwareCards: dataCard[] = [
    {
        icon:<DevicesIcon />, 
        title: 'Desarrollo de aplicaciones moviles y web', 
        description:'soluciones intuitivas para todo tip de dispositivos', 
        btn:'ver soluciones'
    },
    {
        icon:<DisplaySettingsIcon />, 
        title: 'Diseño y Desarrollo UX/UI', 
        description:'interfaces centradas en el usuario, pensadas para mejorar la experiencia y la conversion', 
        btn:'Ver experiencias'
    },
    {
        icon:<DataObjectIcon />, 
        title: 'Desarollo de software', 
        description:'productos a la medida de cada necesidad empresarial', 
        btn:'Solicitar desarrollo'
    },
    {
        icon:<CloudQueueIcon />, 
        title: 'Desarrollo software cloud', 
        description:'aplicaciones seguras, flexibles y con alto rendimiento en la nube.', 
        btn:'Ver mas'
    },
    {
        icon:<TabletMacIcon/>, 
        title: 'Desarrollo de plataformas escalables', 
        description:'arquitecturas prepardas para el crecimiento del negocio', 
        btn:'Explorar'
    },
    {
        icon:<DeveloperModeIcon />, 
        title: 'Modernizacion de aplicaciones de software', 
        description:'actualizacion tecnologica que prolonga la vida util y aumenta la eficiencia', 
        btn:'Actualizar ahora'
    },
];

export const analitycCards: dataCard[] = [
    {
        icon:<LocalPoliceIcon/>, 
        title: 'Business Intelligence', 
        description:'Impulsa tu crecimiento con soluciones de BI que ofrecen visualizaciones claras y análisis predictivos.', 
        btn:'ver BI'
    },
    {
        icon:<SmartToyIcon />, 
        title: 'Consultoría IA', 
        description:'Asesoramiento experto para integrar la inteligencia artificial en tu estrategia de negocio.', 
        btn:'Ver experiencias'
    },
    {
        icon:<AutoAwesomeIcon />, 
        title: 'Soluciones de Inteligencia Artificial y Copilot', 
        description:'Soluciones de IA y Copilot que potencian la eficiencia y la automatización inteligente.', 
        btn:'Ver soluciones IA'
    },
    {
        icon:<BubbleChartIcon />, 
        title: 'Machine Learning e Inteligencia Artificial', 
        description:'Algoritmos predictivos que convierten datos en insights para optimizar procesos empresariales.', 
        btn:'Explorar IA'
    }, 
];

export const enginerTeamCards: dataCard[] = [
    {
        icon:<AccountCircleIcon />, 
        title: 'Staff Augmentation', 
        description:'Amplía tu equipo con expertos en tecnología, integrándolos de forma flexible a tus proyectos.', 
        btn:'Ampliar equipo'
    },
    {
        icon:<EmojiPeopleIcon />, 
        title: 'Equipos dedicados', 
        description:'Talento experto, enfocado en tus objetivos de negocio.', 
        btn:'Ver talento experto'
    },
];

export const strategicConsultingCards: dataCard[] = [
    {
        icon:<CloudSyncIcon />, 
        title: 'Cloud y modernización de infraestructura', 
        description:'Acompañamos a las empresas en su transición a la nube, optimizando costos y asegurando escalabilidad, seguridad y continuidad del negocio.', 
        btn:'Optimizacion en la nube'
    },
    {
        icon:<TipsAndUpdatesIcon />, 
        title: 'Consultoría estratégica para adopción digital', 
        description:'Guiamos la integración de nuevas tecnologías dentro de los modelos de negocio, generando valor tangible y acelerando la innovación.', 
        btn:'Explorar consultoria'
    },
];