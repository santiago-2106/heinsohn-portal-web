import React from "react";

import Hero from "@/src/components/sections/shared/hero/Hero";
import SliderVentajas from "@/src/components/sliders/SliderVentajas";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import LideresSection from "@/src/components/sections/pensiones/LideresSection";
import FuncionalidadesSection from "@/src/components/sections/pensiones/FuncionalidadesSection";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import SliderBlog from "@/src/components/sliders/SliderBlog";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

import { dataPensionesVoluntarias } from "@/src/data/soluciones/pensiones-voluntarias";

export default function PensionesVoluntarias() {
  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-300">

      <Hero
        title={dataPensionesVoluntarias.hero.title}
        description={dataPensionesVoluntarias.hero.description}
        buttonText={dataPensionesVoluntarias.hero.buttonText}
        breadcrumb={dataPensionesVoluntarias.hero.breadcrumb}
        isUppercase={false}
        showImage={false} // <-- IMAGEN DEL HERO APAGADA
      />

      <SliderVentajas
        title={dataPensionesVoluntarias.ventajas.title}
        description={dataPensionesVoluntarias.ventajas.description}
        cards={dataPensionesVoluntarias.ventajas.cards}
      />
      
      <ContactForm title="Contáctanos"/>

      <CardAnuncies
        title={dataPensionesVoluntarias.servicios.title}
        cards={dataPensionesVoluntarias.servicios.cards}
        cols={2}
      />

      <LideresSection
        title={dataPensionesVoluntarias.lideres.title}
        mainCard={dataPensionesVoluntarias.lideres.mainCard}
        gridCards={dataPensionesVoluntarias.lideres.gridCards}
      />

      <FuncionalidadesSection
        title={dataPensionesVoluntarias.funcionalidades.title}
        tabs={dataPensionesVoluntarias.funcionalidades.tabs}
      />

      <SectionCenteredText
        title={dataPensionesVoluntarias.cta.title}
        description={dataPensionesVoluntarias.cta.description}
      />

      <PreguntForm
        title={dataPensionesVoluntarias.faq.title}
        items={dataPensionesVoluntarias.faq.items}
      />

      <div className="py-16 md:py-24 bg-bg-main border-t border-border-ui">
        {/* ✅ PASAMOS LA DATA AL SLIDER PARA QUE APAREZCA */}
        <SliderBlog 
          title="Blog destacado" 
          data={dataPensionesVoluntarias.blogs} 
        />
      </div>

    </div>
  );
}