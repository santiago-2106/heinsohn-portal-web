import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextSections from "@/src/components/ui/typography/TextSections";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";

// Data Centralizada

import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

import SectionLandingHgs from "@/src/components/sections/landing-hgs/SectionLandingHgs";
import SectionLandingHgs2 from "@/src/components/sections/landing-hgs/SectionLandingHgs2";

// Optimización SEO
export const metadata: Metadata = {
  title: "Software de Nómina | Heinsohn",
  description: "Software de nómina y planilla para todos los sectores. Reduce el error humano en un 40%.",
  robots: "index, follow",
};

export default function SolucionesLandignSoftware() {

  const t = useTranslations("landingHgs")

  return (
    <>
      <Hero
        title={t("dataHeroLandingHGS.title")}
        subtitle={t.rich("dataHeroLandingHGS.subtitle", richText)}
        description={t.rich("dataHeroLandingHGS.description", richText)}
        showImage={false} // <-- AQUÍ LE DECIMOS A ESTE HERO QUE NO PINTE LA IMAGEN
      />
      
      <TextSections items={t.raw("dataLandingHGS")} />
      
      <SectionLandingHgs />
      <SectionLandingHgs2 />
    </>
  );
}