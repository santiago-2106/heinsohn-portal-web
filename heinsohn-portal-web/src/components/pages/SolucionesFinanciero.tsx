import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardCases from '../ui/cardsSolutions/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'
import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'
import Slider from '../sliders/Slider'
import CardResult from '../ui/CardResult'

import { 
  financialChallengesCards, 
  financialSolutionsCards,
  experienceStatsData 
} from '../data/dataCard'

import CardAnuncies from '../ui/cardsSolutions/CardAnuncies'
import Clientes from '../sections/clientes'
import Certificaciones from '../sections/certificaciones'




export default function SolucionesFinanciero() {
  
  const dataFinanzas = {
    title: "Soluciones para el Sector Financiero",
    description: "Contamos con un portafolio de software especializado para banca, fintechs aseguradoras y entidades no bancarizadas que buscan liderar la transformación digital del sector financiero en LATAM. Nuestras soluciones permiten administrar créditos, obligaciones financieras, fondos de inversión y portafolios con total eficiencia, seguridad y cumplimiento normativo.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones para el sector financiero" }
    ]
  };

  // Textos Retos
  const introRetos = "La industria financiera en Latinoamérica vive un momento decisivo. La digitalización, la presión regulatoria y la irrupción de nuevos actores están transformando la manera en que bancos, fintechs, aseguradoras y entidades no bancarizadas operan. Estos son algunos de los retos más urgentes:";
  
  const footerRetos = "Comprender estos desafíos es el primer paso para transformarlos en oportunidades. Por eso, contar con software especializado, seguro y escalable es clave para transformar estos desafíos en oportunidades de crecimiento";
  
  const btnRetos = "Descubre cómo enfrentamos estos retos en LATAM";


  return (
    <div>
      <Navbar />
      <Hero 
        title={dataFinanzas.title}
        description={dataFinanzas.description}
        buttonText={dataFinanzas.buttonText}
        breadcrumb={dataFinanzas.breadcrumb}
      />

      <CardAnuncies 
        title="Lo que enfrentan hoy las entidades financieras en la región"
        description={introRetos} 
        cards={financialChallengesCards} 
        cols={3}
        bottomText={footerRetos} 
        bottomBtn={btnRetos}     
      />

      <CardAnuncies 
        title="Soluciones tecnológicas para créditos, fondos e inversiones" 
        cards={financialSolutionsCards} 
        cols={2}
      />
      
      <CardResult />

      <Clientes 
        title="Nuestra experiencia en cifras"
      />


      <CardAnuncies 
        title=" " 
        cards={experienceStatsData} 
        cols={2}
      />

      <Certificaciones 
        title="Certificaciones internacionales"
      />



      <CardCases />

      <Slider />

      <ContactForm />
      <Footer />
      <FooterBottom />
    </div>
  )
}