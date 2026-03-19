import React from "react";

//Informacion Hero Landing productos de software y nomina
export const HeroLandingSoftware = {
    title: 'Software de nómina y planilla para todos los sectores',
    subtitle: (<>Reduce el error humano en un <span className="text-brand-accent">40%</span> </>),
    description: (
        <>
        Con Heinsohn nómina encontrarás un software de nómina estratégico que brinda cumplimiento a la nómina electrónica frente a la DIAN.
        <br />
        <br />
        Nuestro software de nómina automatiza los cálculos salariales, genera reportes precisos, garantiza el cumplimiento de obligaciones legales y fiscales, y optimiza los procesos administrativos de gestión del personal.
        </>
    ),
    buttonText: "Solicita una demo exclusiva",
    breadcrumb: [ // <-- CORREGIDO: Todo en minúscula
        {label: 'Landing Software', href: '/landing-software'},
        {label: 'Software de nómina y planilla para todos los sectores'}
    ]
}

//Informacion title landing productos de software y nomina
export const titleLandingSoftware = {
    title: 'Evita errores por procesos manuales en la liquidación de nómina.',
    description: (
        <>
        Cerca del <span className="text-brand-accent font-bold">60%</span> de las empresas pierden tiempo excesivo o reportan ineficiencias críticas debido a la gestión manual de la nómina. Estos procesos manuales son la fuente principal de errores en cálculos de salarios, deducciones e impuestos.
        </>
    )
}

//INFORMACION CARD LANDING PRODUCTOS DE SOFTWARE Y NOMINA PLANILLA
export const dataCardLandingSoftware = [
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>monitoring</span>, title: "Información en tableros Power BI" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>article_person</span>, title: "Nomina electrónica Dian" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>devices_other</span>, title: "Soluciones de nómina 100% Web" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>person_raised_hand</span>, title: "Autogestión para los colaboradores" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>add_task</span>, title: "Avalado por la UGPP" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>beach_access</span>, title: "Módulo de vacaciones" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>receipt_long</span>, title: "Distribución de costos" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>data_object</span>, title: "Interfaz contable" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>business_center</span>, title: "+ de 500 clientes utilizan nuestro software de nomina" },
    {icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>rocket_launch</span>, title: "+40 años de experiencia en soluciones de nomina" },
];

//Informacion textos 13 48+ 100% 95%
export const dataLandignSoftwareTexts = [
    { titleLanding: '13', descriptionLanding: "Presencia paises" },
    { titleLanding: (<>48<span className="text-brand-accent">+</span></>), descriptionLanding: "Años de experiencia" },
    { titleLanding: (<>100<span className="text-brand-accent">%</span></>), descriptionLanding: "Plataformas web" },
    { titleLanding: (<>95<span className="text-brand-accent">%</span></>), descriptionLanding: "Satisfaccion" }
]

//Informacion card casos de estudio 
export const dataCardCasosEstudio = [
  {
    id:1,
    title: "Transformación digital en el sector financiero",
    description: "Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.",
    image: "/img/edif.jpg"
  },
]

//DATA SLIDER LANDIGN PRODUCTOS SOFTWARE
export const heroSlidesLandingSoftware = [
  {
    id:1,
    title: "La innovación como motor de transformación digital",
    description: "Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.",
    image: "/img/imgSlider.png",
    reverse:true
  },
  {
    id:2,
    title: "Impactos de la reforma laboral en Colombia",
    description: "Análisis detallado de los principales cambios introducidos por la reforma laboral y su impacto directo en la gestión de nómina, prestaciones sociales.",
    image: "/img/noticias-interes.jpg",
    reverse:true
  },
]