import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardCases from '../ui/cardsSolutions/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'
import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'
import CardFinal from '../ui/cardsSolutions/CardFinal'

import Slider from '../sliders/Slider'
import CardResult from '../ui/CardResult'
import UxImgUrl from '../forms/uploads-Img-Url/UxImgUrl'


export default function SolucionesFinanciero() {
  const dataFinanzas = {
    title: "Soluciones para el Sector Financiero",
    description: "Contamos con un portafolio de software especializado para banca, fintechs aseguradoras y entidades no bancarizadas que buscan liderar la transformación digital del sector financiero en LATAM. Nuestras soluciones permiten administrar créditos, obligaciones financieras, fondos de inversión y portafolios con total eficiencia, seguridad y cumplimiento normativo.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Financieras" }
    ]
  };

  return (
    <div>
      <Navbar />
      <Hero 
        title={dataFinanzas.title}
        description={dataFinanzas.description}
        buttonText={dataFinanzas.buttonText}
        breadcrumb={dataFinanzas.breadcrumb}
      />
      <CardFinal />
      <CardCases />
      <ContactForm />
      <UxImgUrl />
      <Slider />
      <CardResult />
      <Footer />
      <FooterBottom />
    </div>
  )
}