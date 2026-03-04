import { dataCard } from "@/src/types/cardTypes";
import { BusinessOutlined, CodeOutlined, SettingsInputComponentOutlined, VrpanoOutlined, WarehouseOutlined } from "@mui/icons-material";


export const dataLandignHGS = [
    { titleLanding: (<>1.000<span className="text-brand-accent">+</span></>), descriptionLanding: "Empresas" },
    { titleLanding: (<>6<span className="text-brand-accent">+</span></>), descriptionLanding: "Países" },
    { titleLanding: (<>45<span className="text-brand-accent">+</span></>), descriptionLanding: "Años" },
    { titleLanding: (<>5<span className="text-brand-accent">k</span></>), descriptionLanding: "Empleados" }
]

export const dataLandignHGS2 = [
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
  }
];



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

//INFOMACION LANDING HGS CARDS

export const dataCardsLandingHGS: dataCard[] = [
    {
        icon:<CodeOutlined sx={{fontSize:35, fill:'red', stroke:'white'}}/>,
        title:"Software como servicio (SaaS)",
        description:"Plataformas cloud modernas, seguras y siempre actualizadas.",
        alineacion:'center'
    },
    {
        icon:<SettingsInputComponentOutlined sx={{fontSize:35, fill:'red', stroke:'white'}}/>,
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