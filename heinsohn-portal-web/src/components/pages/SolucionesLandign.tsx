import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardAnuncies from '../ui/cardsSolutions/CardAnuncies'
import CardCases from '../ui/cardsSolutions/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'

import ContactForm from '../forms/ContactForm'
import Hero from '../sections/Hero'
import CardFinal from '../ui/cardsSolutions/CardFinal'

export default function SolucionesLandign() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <CardFinal></CardFinal>
      <CardCases></CardCases>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </div>
  )
}
