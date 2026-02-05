import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import CardAnuncies from '../ui/CardAnuncies'
import CardCases from '../ui/CardCases'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'

export default function SolucionesLandign() {
  return (
    <div>
      <Navbar></Navbar>
      <CardAnuncies></CardAnuncies>
      <CardCases></CardCases>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </div>
  )
}
