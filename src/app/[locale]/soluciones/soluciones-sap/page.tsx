import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import SectionGestionHumana from "@/src/components/sections/gestion-humana/SectionGestionHumana";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import BannerFiguras from "@/src/components/sections/shared/figura/BannerFiguras";
import TestInteractivo from "@/src/components/forms/formularios/TestInteractivo";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText";


// Data Centralizada
import { dataSAP, dataPorQueSAP, dataFormularioTest } from "@/src/data/soluciones/sap";

// Optimización SEO
export const metadata: Metadata = {
  title: "Soluciones SAP Business One | Heinsohn",
  description:
    "Implementación de ERP SAP Business One en Colombia. Somos Partner Gold de SAP con más de 40 años de experiencia y 1.300 proyectos exitosos.",
  robots: "index, follow",
};

export default function SolucionesSAP() {
  return (
    <>
      {/* SECCIÓN HERO */}
      <Hero
        title={dataSAP.hero.title}
        description={dataSAP.hero.description}
        buttonText={dataSAP.hero.buttonText}
        breadcrumb={dataSAP.hero.breadcrumb}
        badges={dataSAP.hero.badges}
        isUppercase={false}
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
      <div className="bg-bg-card-2 border-y border-border-ui">
        <CardAnuncies
          title={dataSAP.partnerSection.title}
          description={dataSAP.partnerSection.description}
          cards={dataSAP.partnerSection.cards}
          topBadge={(dataSAP.partnerSection as any).topBadge}
          cols={2}
        />
      </div>

      {/* SECCIÓN: CLIENTES */}
      <Clientes
        title={dataSAP.clientesSection.title as any}
        description={dataSAP.clientesSection.description}
      />

      {/* BANNER FIGURAS GEOMÉTRICAS */}
      <BannerFiguras />

      {/* SECCIÓN: DESPUÉS DEL TEST */}
      <CardAnuncies
        title={dataSAP.afterTestSection.title}
        description={dataSAP.afterTestSection.description}
        cards={dataSAP.afterTestSection.cards}
        cols={2}
      />

      {/* FORMULARIO DE TEST */}
      <TestInteractivo {...dataFormularioTest} />

      {/* FORMULARIO DE CONTACTO */}
      <ContactForm title={<>Contáctanos</>} />

      {/* SECCIÓN DE TEXTO: ¿POR QUÉ SAP? */}
      <SectionCenteredText
        title={dataPorQueSAP.title}
        description={dataPorQueSAP.description}
      />
    </>
  );
}
