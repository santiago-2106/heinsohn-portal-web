import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";

// Importación de componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import SliderVentajas from "@/src/components/sliders/SliderVentajas";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import LideresSection from "@/src/components/sections/pensiones/LideresSection";
import FuncionalidadesSection from "@/src/components/sections/pensiones/FuncionalidadesSection";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import SliderBlog from "@/src/components/sliders/SliderBlog";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

// Importación de la data
import { dataPensionesVoluntarias } from "@/src/data/pensiones-voluntarias";

export default function PensionesVoluntarias() {
  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-300">
      <Navbar />

      {/* 1. HERO */}
      <Hero
        title={dataPensionesVoluntarias.hero.title}
        description={dataPensionesVoluntarias.hero.description}
        buttonText={dataPensionesVoluntarias.hero.buttonText}
        breadcrumb={dataPensionesVoluntarias.hero.breadcrumb}
        showBadges={false}
        isUppercase={false}
      />

      {/* 2. VENTAJAS */}
      <SliderVentajas
        title={dataPensionesVoluntarias.ventajas.title}
        description={dataPensionesVoluntarias.ventajas.description}
        cards={dataPensionesVoluntarias.ventajas.cards}
      />
      <ContactForm />

      {/* 3. SERVICIOS DE GESTIÓN */}
      <CardAnuncies
        title={dataPensionesVoluntarias.servicios.title}
        cards={dataPensionesVoluntarias.servicios.cards}
        cols={2}
      />

      {/* 4. LÍDERES #1 */}
      <LideresSection
        title={dataPensionesVoluntarias.lideres.title}
        mainCard={dataPensionesVoluntarias.lideres.mainCard}
        gridCards={dataPensionesVoluntarias.lideres.gridCards}
      />


      {/* 5. FUNCIONALIDADES (TABS) */}
      <FuncionalidadesSection
        title={dataPensionesVoluntarias.funcionalidades.title}
        tabs={dataPensionesVoluntarias.funcionalidades.tabs}
      />

      {/* 6. TEXTO CENTRADO (CTA) */}
      <SectionCenteredText
        title={dataPensionesVoluntarias.cta.title}
        description={dataPensionesVoluntarias.cta.description}
      />

      {/* 7. PREGUNTAS FRECUENTES (Limpiado para usar el diseño propio de tu componente) */}
      <PreguntForm
        title={dataPensionesVoluntarias.faq.title}
        items={dataPensionesVoluntarias.faq.items}
      />

      {/* 8. BLOG DESTACADO */}
      <div className="py-16 md:py-24 bg-bg-main border-t border-border-ui">
        <h2 className="text-3xl md:text-4xl text-text-title font-light mb-12 text-center">
        </h2>
        <SliderBlog />
      </div>

      {/* 10. FOOTER */}
      <Footer />
      <FooterBottom />
    </div>
  );
}
