import React from "react";
import Hero from "@/src/components/sections/shared/hero/Hero";
import Navbar from "@/src/components/layout/navbar/Navbar";
import SolucionesGestionH from "@/src/components/sections/gestion-humana/SolucionesGestionH";
import SoluciongestionH2 from "@/src/components/sections/gestion-humana/SolucionGestionH2";
import CardProductSection from "@/src/components/sections/gestion-humana/ProductSection";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import TextTeam from "@/src/components/sections/soluciones-digitales/TeamSection";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";

export default function page() {
  const infoGestionHumanaHero = {
    title: "HGS - Gestión Humana",
    description: (
      <>
        Una compañía de{" "}
        <span className="font-semibold">
          servicios en gestión del talento humano,
        </span>{" "}
        que crea impacto positivo con soluciones tecnológicas,{" "}
        <span className="font-semibold">
          servicios de asesoría y operación.
        </span>
      </>
    ),
    buttonText: "solicita una asesoria gratuita",
    breadcrumb: [
      { label: "soluciones", href: "/gestion-humana" },
      { label: "HGS - Gestión Humana" },
    ],
    
  };

  return (
    <div>
      <Navbar />
      <Hero
        title={infoGestionHumanaHero.title}
        description={infoGestionHumanaHero.description}
        buttonText={infoGestionHumanaHero.buttonText}
        breadcrumb={infoGestionHumanaHero.breadcrumb}
        
        
      />
      <SolucionesGestionH />
      <SoluciongestionH2 />
      <CardProductSection />
      <TextTeam />
      <ContactForm title={undefined} />
      <Footer />
      <FooterBottom />
    </div>
  );
}
