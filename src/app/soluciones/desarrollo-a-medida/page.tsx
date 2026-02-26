import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardFinal from "@/src/components/sections/ti/TiSolutionsSection";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import Slider from "@/src/components/sliders/SliderBlog";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";

export default function SolucionesFinanciero() {
  const dataFinanzas = {
    title: "Desarrollo de software a la medida ",
    description:
      "El desarrollo de software a la medida es la clave para que las empresas avancen con agilidad, seguridad y escalabilidad. Creamos soluciones únicas que se adaptan a tu negocio, con la experiencia y el conocimiento que nos posiciona como una de las principales empresas de desarrollo de software en Colombia y LATAM.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Digitales" },
    ],
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
      <Slider />
      <Footer />
      <FooterBottom />
    </div>
  );
}