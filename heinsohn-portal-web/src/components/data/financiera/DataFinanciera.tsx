import { ReactNode } from "react";

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

// --- DATOS SECTOR FINANCIERO ---//

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