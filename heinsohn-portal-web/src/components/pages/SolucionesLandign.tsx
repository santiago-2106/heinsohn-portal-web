import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardAnuncies from '../ui/CardAnuncies'
import CardCases from '../ui/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'

import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'

export default function SolucionesLandign() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <CardAnuncies></CardAnuncies>
      <CardCases></CardCases>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </div>
  )
}
