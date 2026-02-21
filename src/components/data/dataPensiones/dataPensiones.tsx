import {
  RocketLaunchOutlined,
  GavelOutlined,
  LocalOfferOutlined,
  VerifiedUserOutlined,
  HelpOutlineOutlined,
  RoundaboutLeftOutlined,
  AccountCircle,
  AssignmentInd,
  AccountBox,
  AddReaction,
  FolderShared,
  FolderSharedOutlined
} from "@mui/icons-material"

import DevicesIcon from "@mui/icons-material/Devices";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

import SavingsIcon from '@mui/icons-material/Savings';



import { ResultsCorporativoData } from "../../types/typePensiones"
import { dataCard } from "@/src/components/types/cardTypes"
import { cardPropsInformation } from "../../types/typeCardAnuncies";



export const infoPensiones1: ResultsCorporativoData = {
  highlight: {
    icon: <RocketLaunchOutlined sx={{ fontSize: 40 }} />,
    value: "30",
    suffix: '+',
    description: "Años de experiencia"
  },

  metrics: [
    {
      id: "compliance",
      value: "12",
      suffix: "+",
      description: "millones de afiliados administrados en Colombia y Latam"
    },
    {
      id: "cost",
      suffix: "+",
      value: "90.000 USD",
      description: "millones en pensiones"
    }
  ]
}



export const infoPensiones2: dataCard[] = [
  { icon: <DevicesIcon />, title: 'Envejecimiento poblacional', description: 'Mas jubilados demandan procesos ágiles y sostenibles.', alineacion: 'center' },
  { icon: <DisplaySettingsIcon />, title: 'Sostenibilidad financiera', description: 'Los déficits en sistemas de reparto impulsan la diversificación en fondos de capitalización.', alineacion: 'center' },
  { icon: <DataObjectIcon />, title: 'Digitalización de trámites', description: 'Los afiliados esperan autogestión, trazabilidad y una experiencia 100% digital.', alineacion: 'center' },
  { icon: <CloudQueueIcon />, title: 'Presión regulatoria', description: 'Normativas cambiantes exigen reportes confiables y actualizados.', alineacion: 'center' },
  { icon: <TabletMacIcon />, title: 'Nómina de pensionados', description: ' El pago masivo necesita liquidación transparente y sin errores. ', alineacion: 'center' },
  { icon: <DeveloperModeIcon />, title: 'Nuevos actores', description: 'Aseguradoras y multifondos intensifican la competencia y elevan los estándares de servicio.', alineacion: 'center' },
]

export const infoPensiones3: dataCard[] = [
  {
    icon: <SavingsIcon sx={{ fill: 'white', stroke: 'black', strokeWidth: 1 }} />,
    title: 'Módulo de Pensiones obligatorias ',
    description: (
      <>
        Gestiona el ciclo completo del afiliado, desde el diseño, vinculación hasta el reconocimiento y pago de la pensión <span className="font-semibold text-gray-800">Bajo distintos regimenes y marcos normativos.</span>
      </>
    ),
    items:
      [
        {textos:'Administración de afiliaciones, historia laboral y cotizaciones'},
        {textos:'Liquidación de pensiones en esquemas de capitalización, reparto o mixtos.'},
        {textos:'Gestión de novedades, traslados, retiros y cambios de estado.'},
        {textos:'Nómina de pensionados integrada, con procesos masivos y control total. '},
        {textos:'Parametrización normativa por país y actualización continua ante cambios regulatorios. '},
        {textos:'Integración con sistemas regulatorios, contables y de recaudo. '},
        {textos:'Generación de reportes ejecutivos y detallados '},
        {textos:'Diseñado pensando en la experiencia del usuario para una mayor facilidad de uso. '},
        {textos:'Visión 360° del afiliado y empleadores, brindando acceso unificado a cuentas bancarias, relaciones y estado de las obligaciones. '}
      ],
  },

  {
    icon: <AccountCircle sx={{ fill: 'white', stroke: 'black', strokeWidth: 1 }} />,
    title: 'Módulo de Rentas vitalicias y nómina de pensionados ',
    description: (
      <>
        Administra la liquidación y pago periódico de rentas vitalicias y la nómina de pensionados desde una  <span className="font-semibold text-gray-800">plataforma 100 % web y altamente automatizada. </span>
      </>
    ),
    items:
      [
        {textos:'Liquidación automática de rentas vitalicias. '},
        {textos:'Gestión de sobrevivencias, sustituciones y temporalidades. '},
        {textos:'Procesos masivos de cálculo y dispersión de pagos. '},
        {textos:'Notificaciones al pensionado sobre pagos y ajustes. '},
        {textos:'Gestor documental integrado para auditoría y trazabilidad.  '},
        {textos:'Expediente electrónico, notificaciones, integración con gestor documental, componente de cargue y generación de archivos.  '},
        {textos:'Se adapta a fondos de pensiones, aseguradoras y empresas de riesgos laborales, permitiéndote gestionar tanto nóminas de pensionados como rentas vitalicias en un solo lugar. '}

      ],
  },
  {
    icon: <SavingsIcon sx={{ fill: "white", stroke: "black", strokeWidth: 1 }} />,
    title: 'Modulo de Pesniones Voluntarias',
    description: (
      <>
        Gestiona esquemas de ahorro previsional voluntario desde una lógica multifondos, flexible y orientada a la autogestión del afiliado, con un conjunto completo de procesos que <span className="font-semibold text-gray-800">Cubren la gestion finaciera, operativa y de riesgos</span>
      </>
    ),
    items: [
      {textos:'Administración de aportes periódicos y extraordinarios. '},
      {textos:'Movilidad entre fondos según perfil de riesgo del afiliado. '},
      {textos:'Gestión integral de afiliados, personas y cuentas. '},
      {textos:'Gestión financiera, valoración y control de riesgos asociados a los fondos. '},
      {textos:'Gestión de beneficios tributarios conforme a la normativa local. '},
      {textos:'Portales de autogestión para afiliados y empleadores. '},
      {textos:'Reportes regulatorios, contables y de aportes colectivos. '},
      {textos:'Cierre operativo y financiero de los fondos con trazabilidad total. '}
    ]
  },
  {
    icon: <AccountCircle sx={{ fill: 'white', stroke: 'black' }} />,
    title: 'Modulo de cesantias',
    description: (
      <>
        <span className="font-semibold text-gray-800">Administra la gestion integral de cesantias</span> con altos volúmenes operativos y estrictos controles normativos, desde un mismo core previsional abarcando desde la gestión de afiliados hasta el cálculo de fondos y los retiros permitidos por ley.
      </>
    ),
    items: [
      {textos:'Gestión de retiros parciales y totales según causales legales. '},
      {textos:'Procesos masivos de liquidación, traslados y pagos. '},
      {textos:'Administración multifondos con beneficios adicionales. '},
      {textos:'Integración con nómina, sistemas de recaudo y contabilidad. '},
      {textos:'Reducción de costos operativos y mejora en la trazabilidad de aportes. '}
    ]
  },

]


export const infoPensiones4: cardPropsInformation = {

  cards: infoPensiones3,
  bottomText: (
    <>
      REVISAR AQUI
    </>
  ),
  bottomBtn: 'xs'
}




export const informacionPensiones5: dataCard[] = [
  { icon: <AccountBox sx={{ fill: 'white', stroke: 'red' }} />, title: 'Escala regional', description: 'Presencia en El Salvador, Bolivia, Perú, Colombia, Honduras y otros países. ' },
  { icon: <AddReaction sx={{ fill: 'white', stroke: 'red' }} />, title: 'Cumplimiento regulatorio', description: 'Actualizaciones continuas ante cambios normativos. ' },
  { icon: <DataObjectIcon />, title: 'Escala regional comprobada y en expansión', description: 'Plataforma que escala regionalmente en proceso de expansión hacia nuevos mercados como Chile, México, República Dominicana, entre otros. Acompañando el crecimiento y la evolución del negocio previsional de nuestros clientes. ' },
  { icon: <AssignmentInd sx={{ fill: 'white', stroke: 'red' }} />, title: 'Soporte Especializado', description: 'Acompañamiento en implementación y operación diaria, respaldada por un equipo de más de 200 profesionales con conocimiento del sector previsional, gestión de proyectos y procesos funcionales.  ', },

]


export const infoPensiones6: ResultsCorporativoData = {
  highlight: {
    icon: <RocketLaunchOutlined sx={{ fontSize: 40 }} />,
    value: "40%",
    description: "del mercado colombiano en pensiones obligatorias soportado con nuestras soluciones. "
  },

  metrics: [
    {
      id: "compliance",
      value: "30",
      suffix: "+",
      description: "30 años de innovacion en el sector previsional"
    },
    {
      id: "cost",
      icon: <FolderSharedOutlined sx={{ fontSize: 50, fill: 'white', stroke: 'black' }} />,
      description: "Altos volúmenes con millones de transacciones mensuales en liquidación de nómina de pensionados. "
    }
  ]
}