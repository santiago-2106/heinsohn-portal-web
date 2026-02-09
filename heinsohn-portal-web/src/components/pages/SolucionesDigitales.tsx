import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardAnuncies from '../ui/CardAnuncies'
import CardCases from '../ui/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'
import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'

export default function SolucionesFinanciero() {
  const dataFinanzas = {
    title: "Desarrollo de software a la medida ",
    description: "El desarrollo de software a la medida es la clave para que las empresas avancen con agilidad, seguridad y escalabilidad. Creamos soluciones únicas que se adaptan a tu negocio, con la experiencia y el conocimiento que nos posiciona como una de las principales empresas de desarrollo de software en Colombia y LATAM.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Digitales" }
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
      <CardAnuncies />
      <CardCases />
      <ContactForm />
      <Footer />
      <FooterBottom />
    </div>
  )
}