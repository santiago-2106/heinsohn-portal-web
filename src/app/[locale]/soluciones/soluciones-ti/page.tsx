import type { Metadata } from "next";

// Componentes de la Vista
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardFinal from "@/src/components/sections/ti/TiSolutionsSection";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

// Importación de Datos
import { getTranslations } from "next-intl/server";

// Optimización SEO y Web Vitals
export const metadata: Metadata = {
  title: "Soluciones TI | Heinsohn",
  description: "Transformamos la tecnología en valor para tu negocio con soluciones de Business Intelligence, IA, Cloud y modernización de infraestructura.",
  robots: "index, follow",
};

export default async function PageSolucionesTI() {
  const t = await getTranslations("solucionesTi")
  const tContacto = await getTranslations("contactForm")

  return (
    <>
      <div id="solucionesTi">
        <Hero {...t.raw("dataHeroSolucionesTI")} />
        <CardFinal />
        <CardCases
          title={t("titlesSolucionesTi.title5")}
          {...t.raw("cardConoceNuestroTrabajo")}
        />
        <Slider
          title={t("sliderSolucionesTi.title")}
          data={t.raw("sliderSolucionesTi.items")}
        />
        <ContactForm title={tContacto("title")} />
      </div>
    </>
  );
}