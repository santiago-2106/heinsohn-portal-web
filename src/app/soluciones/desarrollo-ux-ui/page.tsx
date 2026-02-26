import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import UxImgUrl from "@/src/components/forms/uploads-Img-Url/UxImgUrl";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import {
  dataTextComponent,
  dataTextTitle,
} from "@/src/data/share/textosGenerales";
import CardSd from "@/src/components/sections/soluciones-digitales/PricingSection";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import TextTeam from "@/src/components/sections/soluciones-digitales/TeamSection";
import CardSwiper from "@/src/components//sliders/CardSwiper";
import Footer from "@/src/components//layout/footer/Footer";
import FooterBottom from "@/src/components//layout/footer/FooterBottom";

export default function SolucionDigital() {
  const dataUXConsultorias = {
    title: "Consultoría UX-UI Diseño y desarrollo de experiencias de usuario",
    description:
      "Creamos experiencias digitales centradas en las personas, con interfaces funcionales, atractivas y accesibles.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones-digitales" },
      { label: "Digitales" },
    ],
  };

  return (
    <>
      <Navbar />
      <Hero
        title={dataUXConsultorias.title}
        description={dataUXConsultorias.description}
        buttonText={dataUXConsultorias.buttonText}
        breadcrumb={dataUXConsultorias.breadcrumb}
      />
      <UxImgUrl />
      <TextComponent
        title={dataTextComponent.title}
        description={dataTextComponent.description}
      />
      <CardSd />
      <ContactForm />
      <CardCases />
      <Slider />
      <TextTeam />
      <CardSwiper />
      <Footer />
      <FooterBottom />
    </>
  );
}
