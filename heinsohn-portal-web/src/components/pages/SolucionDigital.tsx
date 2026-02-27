import React from 'react'
import Navbar from '../layout/navbar/Navbar'
import Hero from '../sections/Hero'
import UxImgUrl from '../forms/uploads-Img-Url/UxImgUrl'
import TextComponent from '../ui/textsComponent/TextComponent'
import { dataTextComponent, dataTextTitle } from '../data/textComponentData/dataTextComponent'
import CardSd from '../ui/cardsSolutDigitalIS/CardSd'
import ContactForm from '../forms/ContactForm'
import CardCases from '../ui/cardsSolutions/CardCases'
import Slider from '../sliders/Slider'
import TextTeam from '../ui/textsComponent/TextTeam'
import CardSwiper from '../sliders/CardSwiper'
import Footer from '../layout/footer/Footer'
import FooterBottom from '../layout/footer/FooterBottom'


export default function SolucionDigital() {
  const dataUXConsultorias ={
    title: "Consultoría UX-UI Diseño y desarrollo de experiencias de usuario",
    description: "Creamos experiencias digitales centradas en las personas, con interfaces funcionales, atractivas y accesibles.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones-digitales" },
      { label: "Digitales" }
  ]}

  return (
    <>
      <Navbar />
      <Hero
        title={dataUXConsultorias.title}
        description={dataUXConsultorias.description}
        buttonText={dataUXConsultorias.buttonText}
        breadcrumb={dataUXConsultorias.breadcrumb} />
      <UxImgUrl />
      <TextComponent title={dataTextComponent.title} description={dataTextComponent.description} />
      <CardSd />
      <ContactForm />
      <CardCases />
      <Slider />
      <TextTeam />
      <CardSwiper />
      <Footer />
      <FooterBottom />
    </>
  )
}
