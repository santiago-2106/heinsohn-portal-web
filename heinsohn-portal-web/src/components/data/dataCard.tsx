import { ReactNode } from "react";
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

// --- ICONOS FINANCIEROS ---//
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SecurityIcon from '@mui/icons-material/Security';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PieChartIcon from '@mui/icons-material/PieChart';


export interface dataCard {
    icon?: ReactNode
    title: string
    description: string
    btn: string
    items?: string[] 
}

export const softwareCards: dataCard[] = [
    {icon:<DevicesIcon />, title: 'Desarrollo de aplicaciones moviles y web', description:'soluciones intuitivas para todo tip de dispositivos', btn:'ver soluciones'},
    {icon:<DisplaySettingsIcon />, title: 'Diseño y Desarrollo UX/UI', description:'interfaces centradas en el usuario, pensadas para mejorar la experiencia y la conversion', btn:'Ver experiencias'},
    {icon:<DataObjectIcon />, title: 'Desarollo de software', description:'productos a la medida de cada necesidad empresarial', btn:'Solicitar desarrollo'},
    {icon:<CloudQueueIcon />, title: 'Desarrollo software cloud', description:'aplicaciones seguras, flexibles y con alto rendimiento en la nube.', btn:'Ver mas'},
    {icon:<TabletMacIcon/>, title: 'Desarrollo de plataformas escalables', description:'arquitecturas prepardas para el crecimiento del negocio', btn:'Explorar'},
    {icon:<DeveloperModeIcon />, title: 'Modernizacion de aplicaciones de software', description:'actualizacion tecnologica que prolonga la vida util y aumenta la eficiencia', btn:'Actualizar ahora'},
]

export const analitycCards: dataCard[] = [
    {icon:<LocalPoliceIcon/>, title: 'Business Intelligence', description:'Impulsa tu crecimiento con soluciones de BI que ofrecen visualizaciones claras y análisis predictivos.', btn:'ver BI'},
    {icon:<SmartToyIcon />, title: 'Consultoría IA', description:'Asesoramiento experto para integrar la inteligencia artificial en tu estrategia de negocio.', btn:'Ver experiencias'},
    {icon:<AutoAwesomeIcon />, title: 'Soluciones de Inteligencia Artificial  y Copilot', description:'Soluciones de IA y Copilot que potencian la eficiencia y la automatización inteligente.', btn:'Ver soluciones IA'},
    {icon:<BubbleChartIcon />, title: 'Machine Learning e Inteligencia Artificial', description:'Algoritmos predictivos que convierten datos en insights para optimizar procesos empresariales.', btn:'Explorar IA'}, 
]

export const enginerTeamCards: dataCard[] = [
    {icon:<AccountCircleIcon />, title: 'Staff Augmentation', description:'Amplía tu equipo con expertos en tecnología, integrándolos de forma flexible a tus proyectos.', btn:'Ampliar equipo'},
    {icon:<EmojiPeopleIcon />, title: 'Equipos dedicados', description:'Talento experto, enfocado en tus objetivos de negocio.', btn:'Ver talento experto'},
]

export const strategicConsultingCards: dataCard[] = [
    {icon:<CloudSyncIcon />, title: 'Cloud y modernización de infraestructura', description:'Acompañamos a las empresas en su transición a la nube, optimizando costos y asegurando escalabilidad, seguridad y continuidad del negocio.', btn:'Optimizacion en la nube'},
    {icon:<TipsAndUpdatesIcon />, title: 'Consultoría estratégica para adopción digital', description:'Guiamos la integración de nuevas tecnologías dentro de los modelos de negocio, generando valor tangible y acelerando la innovación.', btn:'Explorar consultoria'},
]

//--- DATOS SECTOR FINANCIERO ---//

export const financialChallengesCards: dataCard[] = [
    {
        icon: <CreditCardIcon sx={{ fontSize: 32 }} />, 
        title: 'Pagos digitales en auge', 
        description: 'Más de $111 billones de transacciones digitales reportados el año pasado.', 
        btn: ''
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: 32 }} />, 
        title: 'Open Finance en expansión', 
        description: 'Brasil espera 60 millones de cuentas de Open Finance, marcando tendencia.', 
        btn: ''
    },
    {
        icon: <PhonelinkSetupIcon sx={{ fontSize: 32 }} />, 
        title: 'Digitalización en Colombia', 
        description: 'Más de 36 millones de adultos tenían productos financieros en 2024.', 
        btn: ''
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 32 }} />, 
        title: 'Ciberseguridad en primer plano', 
        description: 'El 70% de las organizaciones priorizan la ciberseguridad ante nuevos retos.', 
        btn: ''
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 32 }} />, 
        title: 'IA y automatización', 
        description: 'Reducir la intervención humana operativa para elevar la expectativa de innovación.', 
        btn: ''
    },
    {
        icon: <StorefrontIcon sx={{ fontSize: 32 }} />, 
        title: 'Competencias fintech', 
        description: 'Mañana se esperan 2.763 fintech, creando un ecosistema competitivo.', 
        btn: ''
    },
];

export const financialSolutionsCards: dataCard[] = [
    {
        icon: <RequestQuoteIcon sx={{ fontSize: 32 }} />, 
        title: 'Gestión de Créditos y Libranzas', 
        description: 'Software de administración de créditos y libranzas que gestiona el ciclo completo: desde la solicitud hasta el pago final.',
        items: [
            'Trazabilidad y control en cada etapa.',
            'Escalable y parametrizable según portafolio.',
            'Reducción de tiempos de capacitación y soporte.'
        ],
        btn: 'Conoce la solución de Créditos y Libranzas ->'
    },
    {
        icon: <ReceiptLongIcon sx={{ fontSize: 32 }} />, 
        title: 'Obligaciones Financieras', 
        description: 'Software especializado en obligaciones financieras que brinda visibilidad total del portafolio y asegura cumplimiento normativo.', 
        items: [
            'Registro y seguimiento de pagos, anticipos, reestructuraciones y novaciones.',
            'Integración con sistemas contables y financieros.',
            'Reportes gerenciales y normativos en PDF y Excel.'
        ],
        btn: 'Explora la solución de Obligaciones Financieras ->'
    },
    {
        icon: <FolderOpenIcon sx={{ fontSize: 32 }} />, 
        title: 'Software para Fondos de Inversión Colectiva (FICs)', 
        description: 'Plataforma integral para la administración de Fondos de Inversión Colectiva, diseñada para responder al crecimiento del negocio bajo normativas específicas.', 
        items: [
            'Multiempresa y multilenguaje.',
            'Automatización de procesos masivos.',
            'Movilidad y visión 360° para inversionistas.'
        ],
        btn: 'Descubre nuestra solución para FICs ->'
    },
    {
        icon: <PieChartIcon sx={{ fontSize: 32 }} />, 
        title: 'Software Administrador de Portafolios e Inversiones – MIDAS', 
        description: 'Plataforma de gestión integral de inversiones y riesgos, que cubre desde Front Office hasta Back Office.', 
        items: [
            'Módulos especializados en riesgos de mercado, liquidez, contraparte y operativo.',
            'Multimoneda, multiportafolio y con reportes normativos de ley.',
            'Más de 25 años respaldando a fondos, aseguradoras y banca en LATAM.'
        ],
        btn: 'Conoce cómo optimizar tus portafolios ->'
    },
];

export const experienceStatsData: dataCard[] = [
    {
        title: 'Cobertura masiva',
        description: 'Nuestras soluciones soportan la administración de millones de afiliados y billones de dólares en activos en fondos de pensiones, FICs e inversiones.',
        btn: '', 
        icon: null 
    },
    {
        title: 'Mercados complejos',
        description: 'Experiencia probada en sectores altamente regulados de Colombia, Perú, Bolivia, El Salvador, Honduras, Panamá, Argentina, Uruguay, entre otros.',
        btn: '',
        icon: null
    },
    {
        title: 'Confianza sostenida',
        description: 'Más de 1.200 entidades financieras y aseguradoras activas en LATAM y el Caribe que utilizan nuestras plataformas.',
        btn: '',
        icon: null
    },
    {
        title: 'Resultados tangibles',
        description: 'Reducción de costos operativos, mejoras en trazabilidad y cumplimiento normativo en proyectos de gran escala.',
        btn: '',
        icon: null
    },
];