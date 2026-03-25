import React from "react";
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import SectionAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import SubcomponenteCardStaff from "@/src/components/sections/staff-augmentation/SubcomponenteStaff"; 
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import Button from "@/src/components/ui/buttons/Button";
import CardIA from "@/src/components/ui/cards/CardIA";

// Import TODA la data centralizada
import { 
  dataIaHero, 
  dataIaSections,
  dataIaCards, 
  dataIaTimeline, 
  dataIaBeneficios, 
  dataIaFaq
} from "@/src/data/soluciones/ia/index";

export default function SolucionesIAPage() {
  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">

      {/* 1. HERO */}
      <Hero {...dataIaHero} showImage={true} />

      {/* 2. SOLUCIONES Y DESAFÍOS (Título y descripción a la izquierda forzado desde data) */}
      <section className="py-16 border-t border-border-ui">
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

      {/* 3. CÓMO IMPLEMENTAMOS (Timeline - Este sigue centrado) */}
      <section className="py-16">
        <TextComponent
          title={dataIaSections.implementacion.title}
          description={dataIaSections.implementacion.description}
        />
        <SubcomponenteCardStaff information={dataIaTimeline} />
        <center className="mt-12">
          <Button textoBtn={dataIaSections.implementacion.buttonText} />
        </center>
      </section>

      {/* 4. BENEFICIOS (NÚMEROS THIN ROJOS, alineados a la izquierda forzado desde data) */}
      <SectionAnuncies 
        title={dataIaSections.beneficios.title}
        description={dataIaSections.beneficios.description}
        cards={dataIaBeneficios}
        cols={2}
        alignHeader="left"
      />

      {/* 5. PREGUNTAS FRECUENTES */}
      <div className="bg-bg-card-1 py-16 border-t border-border-ui mt-12">
        <PreguntForm title="Preguntas frecuentes" items={dataIaFaq} />
        
        {/* BOTÓN INFERIOR */}
        <center className="mt-12">
           <Button textoBtn={dataIaSections.ctaFooter} />
        </center>
      </div>

    </main>
  );
}