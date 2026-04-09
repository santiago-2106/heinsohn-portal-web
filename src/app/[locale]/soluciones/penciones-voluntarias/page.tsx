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

// Internacionalización
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import ButtonComponent from "@/src/components/ui/buttons/Button";

export default function PensionesVoluntarias() {

  const t = useTranslations("pensionesVoluntarias");

  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-300">

      {/* 1. HERO */}
      <Hero
        title={t.rich("hero.title", richText)}
        description={t.rich("hero.description", richText)}
        buttonText={t("hero.buttonText")}
        breadcrumb={t.raw("hero.breadcrumb")}
        isUppercase={false}
        showImage={false}
      />

      {/* 2. VENTAJAS */}
      <SliderVentajas
        title={t("ventajas.title")}
        description={t("ventajas.description")}
        cards={t.raw("ventajas.cards")}
      />
      
      {/* 3. FORMULARIO DE CONTACTO */}
      <ContactForm title={t("contactFormTitle")} />

      {/* 4. SERVICIOS */}
      <CardAnuncies
        title={t.rich("servicios.title", richText)}
        cards={t.raw("servicios.cards")}
        cols={2}
      />

      {/* 5. LÍDERES */}
      <LideresSection
        title={t("lideres.title")}
        mainCard={t.raw("lideres.mainCard")}
        gridCards={t.raw("lideres.gridCards")}
      />

      {/* 6. FUNCIONALIDADES */}
      <FuncionalidadesSection
        title={t("funcionalidades.title")}
        tabs={t.raw("funcionalidades.tabs")}
      />

      {/* 7. CTA */}
      <SectionCenteredText
        title={t("cta.title")}
        description={t.rich("cta.description", richText)}
      />
      <ButtonComponent textoBtn="Conoce más"/>

      {/* 8. PREGUNTAS FRECUENTES */}
      <PreguntForm
        title={t("faq.title")}
        items={t.raw("faq.items")}
      />

      {/* 9. SLIDER BLOG */}
      <div className="py-16 md:py-24 bg-bg-main border-t border-border-ui">
        <SliderBlog 
          title={t("sliderBlog.title")} 
          data={t.raw("sliderBlog.items")} 
        />
      </div>

    </div>
  );
}