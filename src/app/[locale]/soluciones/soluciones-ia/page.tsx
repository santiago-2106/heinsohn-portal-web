import React from "react";
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import SectionAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import SubcomponenteCardStaff from "@/src/components/sections/staff-augmentation/SubcomponenteStaff"; 
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import Button from "@/src/components/ui/buttons/Button";
import CardIA from "@/src/components/ui/cards/CardIA";

// Internacionalización
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import NumberIcon from "@/src/data/soluciones/ia";
import mapRich from "@/src/hooks/mapRich";

export default function SolucionesIAPage() {

  const t = useTranslations("solucionesIa");

  const rawCards = t.raw("dataIaBeneficios");
  const cardsbeneficioIa = rawCards.map((card: any) => ({
    ...card,
    number: NumberIcon(card.number),
  }));

  const cardsIA = mapRich(t, "dataIaCards") 

  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">

      {/* 1. HERO */}
      <Hero 
        title={t("dataIaHero.title")}
        description={t.rich("dataIaHero.description", richText)}
        buttonText={t("dataIaHero.buttonText")}
        buttonHref={t("dataIaHero.buttonHref")}
        arrowHref="#cards1"
        breadcrumb={t.raw("dataIaHero.breadcrumb")}
        showImage={true} 
      />

      {/* 2. SOLUCIONES Y DESAFÍOS */}
      <section className="py-12">
        <TextComponent
          title={t.rich("dataIaSections.soluciones.title", richText)}
          description={t.rich("dataIaSections.soluciones.description", richText)}
          align="left"
        />
        <div>
          {cardsIA.map((card: any) => (
            <CardIA key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* 3. CÓMO IMPLEMENTAMOS (Timeline) */}
      <section className="py-16">
        <TextComponent
          title={t.rich("dataIaSections.implementacion.title", richText)}
          description={t.rich("dataIaSections.implementacion.description", richText)}
        />
        <SubcomponenteCardStaff information={t.raw("dataIaTimeline")} />
        <center className="mt-12">
          <Button textoBtn={t("dataIaSections.implementacion.buttonText")} />
        </center>
      </section>

      {/* 4. BENEFICIOS */}
      <SectionAnuncies 
        title={t.rich("dataIaSections.beneficios.title", richText)}
        description={t.rich("dataIaSections.beneficios.description", richText)}
        cards={cardsbeneficioIa}
        cols={2}
        alignHeader="left"
      />

      {/* 5. PREGUNTAS FRECUENTES */}
      <div className="bg-bg-card-1 py-16 border-t border-border-ui mt-12">
        <PreguntForm 
          title={t("dataIaSections.PreguntasFrecuentes.title")} 
          items={t.raw("dataIaFaq")} 
        />
        
        {/* BOTÓN INFERIOR */}
        <center className="mt-12">
           <Button textoBtn={t("dataIaSections.ctaFooter")} />
        </center>
      </div>

    </main>
  );
}