import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";

import Hero from "@/src/components/sections/shared/hero/Hero";
import SliderVentajas from "@/src/components/sliders/SliderVentajas";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import LideresSection from "@/src/components/sections/pensiones/LideresSection";
import FuncionalidadesSection from "@/src/components/sections/pensiones/FuncionalidadesSection";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import SliderBlog from "@/src/components/sliders/SliderBlog";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

import { dataPensionesVoluntarias } from "@/src/data/pensiones-voluntarias";

// ✅ SOLUCIÓN DEFINITIVA: Declaramos los datos exactos aquí mismo.
// Así forzamos a TypeScript a leer el objeto con { descriptions: "" }
// y evitamos cualquier error de importación o caché vieja.
const faqItemsSeguros = [
  {
    question: "¿Qué diferencia hay entre pensiones obligatorias y voluntarias en LATAM?",
    answer: { descriptions: "Las pensiones obligatorias son exigidas por ley y se deducen del salario del trabajador, mientras que las voluntarias son aportes adicionales que el individuo decide hacer para mejorar su retiro." }
  },
  {
    question: "¿Cómo digitalizar el sistema de pensiones en mi entidad financiera?",
    answer: { descriptions: "A través de nuestra plataforma integral, puedes migrar tus bases de datos, automatizar la gestión de aportes y ofrecer una interfaz moderna a tus afiliados en tiempo récord." }
  },
  {
    question: "¿Este software sirve para administrar el ahorro para el retiro?",
    answer: { descriptions: "Sí, la plataforma cuenta con módulos especializados para la administración, inversión y cálculo de rendimientos de los ahorros para el retiro." }
  },
  {
    question: "¿Funciona también para el ahorro previsional voluntario (APV)?",
    answer: { descriptions: "Absolutamente, nuestro software está diseñado para manejar esquemas de APV, ajustándose a los beneficios tributarios y normativas de cada país." }
  },
  {
    question: "¿Se puede usar para administrar jubilaciones?",
    answer: { descriptions: "Sí, el sistema gestiona el ciclo completo, desde la etapa de acumulación hasta la etapa de desacumulación y pago de las mesadas pensionales o jubilaciones." }
  },
  {
    question: "¿El software es multipaís y multimoneda?",
    answer: { descriptions: "Así es. Nuestra solución está diseñada para operar en diferentes países de LATAM, soportando múltiples monedas y adaptándose a las regulaciones locales de cada región." }
  }
];

export default function PensionesVoluntarias() {
  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-300">


      <Hero
        title={dataPensionesVoluntarias.hero.title}
        description={dataPensionesVoluntarias.hero.description}
        buttonText={dataPensionesVoluntarias.hero.buttonText}
        breadcrumb={dataPensionesVoluntarias.hero.breadcrumb}
        showBadges={false}
        isUppercase={false}
      />

      <SliderVentajas
        title={dataPensionesVoluntarias.ventajas.title}
        description={dataPensionesVoluntarias.ventajas.description}
        cards={dataPensionesVoluntarias.ventajas.cards}
      />
      
      <ContactForm />

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

      {/* ✅ LE PASAMOS LA DATA LOCAL QUE CREAMOS ARRIBA */}
      <PreguntForm
        title="Preguntas frecuentes"
        items={faqItemsSeguros}
      />

      <div className="py-16 md:py-24 bg-bg-main border-t border-border-ui">
        <h2 className="text-3xl md:text-4xl text-text-title font-light mb-12 text-center">
          Blog destacado
        </h2>
        <SliderBlog />
      </div>

    </div>
  );
}