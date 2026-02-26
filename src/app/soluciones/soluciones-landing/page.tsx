import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardFinal from "@/src/components/sections/ti/TiSolutionsSection";
import Slider from "@/src/components/sliders/SliderBlog";

export default function SolucionesLandign() {
  const dataTI = {
    title: "Soluciones TI",
    description: "Transformamos la tecnología en valor para tu negocio.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones TI" },
    ],
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
  );
}
