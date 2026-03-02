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
  dataIaFaq 
} from "@/src/data/ia";

export default function SolucionesIA() {
  return (
    <div className="bg-bg-main min-h-screen">
      <Navbar />
      
      {/* 1. HERO */}
      <Hero
        title={dataIaHero.title}
        description={dataIaHero.description}
        buttonText={dataIaHero.buttonText}
        breadcrumb={dataIaHero.breadcrumb}
      />

      {/* 2. SOLUCIONES Y DESAFÍOS (Tarjetas Complejas de IA) */}
      <section className="py-16 bg-bg-main border-t border-border-ui">
        <TextComponent
          title="Soluciones en Inteligencia Artificial aplicada a los desafíos reales de tu negocio"
          description={
            <>
              <strong>Cada empresa enfrenta retos distintos.</strong> Nuestras soluciones de IA combinan personalización, escalabilidad y automatización para resolver los problemas específicos de tu operación:
            </>
          }
        />
        <div className="px-4 sm:px-6 lg:px-8 mt-12 max-w-7xl mx-auto">
          {dataIaCards.map((card) => (
            <CardIA key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* 4. CÓMO IMPLEMENTAMOS (Timeline) */}
      <section className="py-16">
        <TextComponent
          title="Cómo implementamos la inteligencia artificial en tu empresa"
          description="Nuestro enfoque combina visión estratégica, desarrollo técnico y acompañamiento continuo:"
        />
        <SubcomponenteCardStaff information={dataIaTimeline} />
        <Button textoBtn="Empieza tu hoja de ruta AI personalizada" />
      </section>

      {/* 3. BENEFICIOS (Card 05 será horizontal y rectangular gracias al colSpan) */}
      <SectionAnuncies 
        title="Beneficios de nuestros servicios de Inteligencia Artificial"
        description="Nuestras soluciones de inteligencia artificial para empresas combinan IA generativa, agentes inteligentes y automatización avanzada para crear ventajas reales y medibles:"
        cards={dataIaBeneficios}
        cols={2}
      />


      {/* 5. PREGUNTAS FRECUENTES (Usando tu componente real con colores adaptados) */}
      <PreguntForm title="Preguntas frecuentes" items={dataIaFaq} />
      
      {/* Botón inferior separado con fondo correcto */}
      <div className="bg-bg-main pb-16 flex justify-center transition-colors duration-300">
         <Button textoBtn="Conversa con un especialista en penciones" />
      </div>

      <Footer />
      <FooterBottom />
    </div>
  );
}