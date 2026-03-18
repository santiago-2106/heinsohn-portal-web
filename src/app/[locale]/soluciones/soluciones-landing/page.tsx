import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextSections from "@/src/components/ui/typography/TextSections";
import SectionLandingHgs from "@/src/components/sections/landing-hgs/SectionLandingHgs";
import SectionLandingHgs2 from "@/src/components/sections/landing-hgs/SectionLandingHgs2";

// Data Centralizada
import {
  dataLandignHGS,
  heroLandingHGS,
} from "@/src/data/soluciones/landing-hgs";

// Optimización SEO
export const metadata: Metadata = {
  title: "Human Global Solutions | Heinsohn",
  description:
    "Líderes en soluciones de Nómina y Gestión Humana en LATAM con más de 45 años de experiencia transformando organizaciones.",
  robots: "index, follow",
};

export default function SolucionesLandign() {
  return (
    <>
      <Hero
        title={heroLandingHGS.title}
        subtitle={heroLandingHGS.subtitle}
        description={heroLandingHGS.description}
        breadcrumb={heroLandingHGS.breadcrumb}
        showImage={false}
      />
      <TextSections items={dataLandignHGS} />

      <SectionLandingHgs />
      <SectionLandingHgs2 />
    </>
  );
}
