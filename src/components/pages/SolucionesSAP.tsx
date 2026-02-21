import React from 'react';
import Navbar from '../layout/navbar/Navbar';
import Hero from '../sections/Hero';
import CardAnuncies from '../ui/cardsSolutions/CardAnuncies';
import Footer from '../layout/footer/Footer';
import FooterBottom from '../layout/footer/FooterBottom';
import { dataSAP } from '../data/dataSap/DataSap';
import SectionGestionHumana from '../ui/cardsGestionHumana/SectionGestionHumana';
import GeometricDivider from '../ui/visuals/GeometricDivider';

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
      <GeometricDivider/>

      <Footer />
      <FooterBottom />
    </div>
  );
}