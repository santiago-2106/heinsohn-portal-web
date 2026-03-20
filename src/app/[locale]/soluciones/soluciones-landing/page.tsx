import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextSections from "@/src/components/ui/typography/TextSections";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";

// Data Centralizada
import {
  HeroLandingSoftware,
  dataLandignSoftwareTexts,
  titleLandingSoftware,
  dataCardLandingSoftware
} from "@/src/data/soluciones/landing-software";

// Optimización SEO
export const metadata: Metadata = {
  title: "Software de Nómina | Heinsohn",
  description: "Software de nómina y planilla para todos los sectores. Reduce el error humano en un 40%.",
  robots: "index, follow",
};

export default function SolucionesLandignSoftware() {
  return (
    <>
      <Hero
        title={HeroLandingSoftware.title}
        subtitle={HeroLandingSoftware.subtitle}
        description={HeroLandingSoftware.description}
        buttonText={HeroLandingSoftware.buttonText}
        breadcrumb={HeroLandingSoftware.breadcrumb}
        showImage={false} // <-- AQUÍ LE DECIMOS A ESTE HERO QUE NO PINTE LA IMAGEN
      />
      
      <TextSections items={dataLandignSoftwareTexts} />

      <CardAnuncies
        title={titleLandingSoftware.title}
        description={titleLandingSoftware.description}
        cards={dataCardLandingSoftware}
        cols={3}
      />
    </>
  );
}