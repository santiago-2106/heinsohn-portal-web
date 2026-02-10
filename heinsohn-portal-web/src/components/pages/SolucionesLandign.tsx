import React from 'react'
import Navbar from '../layout/navbar/Navbar'

import CardCases from '../ui/cardsSolutions/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'
import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'
import CardFinal from '../ui/cardsSolutions/CardFinal'
import Slider from '../sliders/Slider'

export default function SolucionesLandign() {
  const dataTI = {
    title: "Soluciones TI",
    description: "Transformamos la tecnología en valor para tu negocio.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones TI" }
    ]
  };

  return (
    <div>
      <Navbar />
      <Hero 
        title={dataTI.title}
        description={dataTI.description}
        buttonText={dataTI.buttonText}
        breadcrumb={dataTI.breadcrumb}
      />
      <CardFinal />
      <CardCases />
      <ContactForm />
      <Slider />
      <Footer />
      <FooterBottom />
    </div>
  )
}