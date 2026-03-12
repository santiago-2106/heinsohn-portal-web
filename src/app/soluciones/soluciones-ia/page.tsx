import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import SectionAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import SubcomponenteCardStaff from "@/src/components/sections/staff-augmentation/SubcomponenteStaff"; 
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import Button from "@/src/components/ui/buttons/Button";
import CardIA from "@/src/components/ui/cards/CardIA";

import { 
  dataIaHero, 
  dataIaCards, 
  dataIaBeneficios, 
  dataIaTimeline, 
  dataIaFaq,
  dataIaSections 
} from "@/src/data/ia";

export default function SolucionesIA() {
  return (
    <div className="bg-bg-main min-h-screen">

      
      {/* 1. HERO */}
      <Hero {...dataIaHero} />

      {/* 2. SOLUCIONES Y DESAFÍOS */}
      <section className="py-16 bg-bg-main border-t border-border-ui">
        <TextComponent
          title={dataIaSections.soluciones.title}
          description={dataIaSections.soluciones.description}
        />
        <div className="px-4 sm:px-6 lg:px-8 mt-12 max-w-7xl mx-auto">
          {dataIaCards.map((card) => (
            <CardIA key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* 3. CÓMO IMPLEMENTAMOS (Timeline) */}
      <section className="py-16">
        <TextComponent
          title={dataIaSections.implementacion.title}
          description={dataIaSections.implementacion.description}
        />
        <SubcomponenteCardStaff information={dataIaTimeline} />
        <div className="flex justify-center mt-8">
          <Button textoBtn={dataIaSections.implementacion.buttonText} />
        </div>
      </section>

      {/* 4. BENEFICIOS */}
      <SectionAnuncies 
        title={dataIaSections.beneficios.title}
        description={dataIaSections.beneficios.description}
        cards={dataIaBeneficios}
        cols={2}
      />

      {/* 5. PREGUNTAS FRECUENTES */}
      <PreguntForm title="Preguntas frecuentes" items={dataIaFaq} />
      
      {/* BOTÓN INFERIOR */}
      <div className="bg-bg-main pb-16 flex justify-center transition-colors duration-300">
         <Button textoBtn={dataIaSections.ctaFooter} />
      </div>

    </div>
  );
}