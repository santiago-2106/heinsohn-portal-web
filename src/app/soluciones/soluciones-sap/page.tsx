import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import { dataSAP } from "@/src/data/sap";
import SectionGestionHumana from "@/src/components/sections/gestion-humana/SectionGestionHumana";

export default function SolucionesSAP() {
  return (
    <div>
      <Navbar />

      {/* SECCIÓN HERO */}
      <Hero
        title={dataSAP.hero.title}
        description={dataSAP.hero.description}
        buttonText={dataSAP.hero.buttonText}
        breadcrumb={dataSAP.hero.breadcrumb}
      />

      {/* SECCIÓN CARDS IA */}
      <CardAnuncies
        title={dataSAP.aiSection.title}
        cards={dataSAP.aiSection.cards}
        cols={2}
      />

      {/* SECCIÓN: TEST INTERACTIVO ERP */}
      <SectionGestionHumana
        title={dataSAP.testSection.title}
        description={dataSAP.testSection.description}
        cards={dataSAP.testSection.cards}
      />

      {/* SECCIÓN: COMPARACIÓN DE ERP */}
      <CardAnuncies
        title={dataSAP.erpComparisonSection.title}
        description={dataSAP.erpComparisonSection.description}
        cards={dataSAP.erpComparisonSection.cards}
        cols={3}
      />

      {/* SECCIÓN: POR QUÉ ELEGIR HEINSOHN */}
      <div className="bg-[#fafafa]">
        <CardAnuncies
          topBadge={(dataSAP.partnerSection as any).topBadge}
          title={dataSAP.partnerSection.title}
          description={dataSAP.partnerSection.description}
          cards={dataSAP.partnerSection.cards}
          cols={2}
        />
      </div>

      <CardAnuncies
        title={dataSAP.afterTestSection.title}
        description={dataSAP.afterTestSection.description}
        cards={dataSAP.afterTestSection.cards}
        cols={2}
      />

      <Footer />
      <FooterBottom />
    </div>
  );
}
