import React from "react";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import { dataSAP, dataPorQueSAP } from "@/src/data/sap"; // <-- Importamos la nueva data
import SectionGestionHumana from "@/src/components/sections/gestion-humana/SectionGestionHumana";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import BannerFiguras from "@/src/components/sections/shared/figura/BannerFiguras";
import TestInteractivo from "@/src/components/forms/formularios/TestInteractivo";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText"; 

export default function SolucionesSAP() {
  return (
    <div>
      <Navbar />

      <Hero
        title={dataSAP.hero.title}
        description={dataSAP.hero.description}
        buttonText={dataSAP.hero.buttonText}
        breadcrumb={dataSAP.hero.breadcrumb}
      />

      <CardAnuncies
        title={dataSAP.aiSection.title}
        cards={dataSAP.aiSection.cards}
        cols={2}
      />

      <SectionGestionHumana
        title={dataSAP.testSection.title}
        description={dataSAP.testSection.description}
        cards={dataSAP.testSection.cards}
      />

      <CardAnuncies
        title={dataSAP.erpComparisonSection.title}
        description={dataSAP.erpComparisonSection.description}
        cards={dataSAP.erpComparisonSection.cards}
        cols={3}
      />

      <div className="bg-[#fafafa]">
        <CardAnuncies
          topBadge={(dataSAP.partnerSection as any).topBadge}
          title={dataSAP.partnerSection.title}
          description={dataSAP.partnerSection.description}
          cards={dataSAP.partnerSection.cards}
          cols={2}
        />
      </div>
      
      <Clientes
        title="Compañías que confían en SAP Y Heinsohn"
        description={dataSAP.clientesSection.description}
      />
      
      <BannerFiguras />

      <CardAnuncies
        title={dataSAP.afterTestSection.title}
        description={dataSAP.afterTestSection.description}
        cards={dataSAP.afterTestSection.cards}
        cols={2}
      />
      
      <TestInteractivo />
      
      <ContactForm />

      {/* AQUÍ VA NUESTRA NUEVA SECCIÓN DE TEXTO */}
      <SectionCenteredText 
        title={dataPorQueSAP.title}
        description={dataPorQueSAP.description}
      />

      <Footer />
      <FooterBottom />
    </div>
  );
}