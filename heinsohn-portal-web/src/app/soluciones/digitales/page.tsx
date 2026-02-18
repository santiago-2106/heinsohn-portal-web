import React from 'react'
import Navbar from '@/src/components/layout/navbar/Navbar'
import Hero from '@/src/components/sections/Hero'
import UxImgUrl from '@/src/components/forms/uploads-Img-Url/UxImgUrl'
import TextComponent from '@/src/components/ui/textsComponent/TextComponent'
import { dataTextComponent, dataTextTitle } from '@/src/components/data/textComponentData/dataTextComponent'
import CardSd from '@/src/components/ui/cardsSolutDigitalIS/CardSd'
import ContactForm from '@/src/components/forms/formularios/ContactForm'
import CardCases from '@/src/components//ui/cardsSolutions/CardCases'
import Slider from '@/src/components//sliders/Slider'
import TextTeam from '@/src/components//ui/textsComponent/TextTeam'
import CardSwiper from '@/src/components//sliders/CardSwiper'
import Footer from '@/src/components//layout/footer/Footer'
import FooterBottom from '@/src/components//layout/footer/FooterBottom'


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
