import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import CardResult from "@/src/components/sections/shared/sectioncard/SectionResults";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import PreguntasFort from "@/src/components/forms/formularios/PreguntForm";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

// next-intl (Todo desde el JSON, ya no usamos importaciones locales de data)
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import mapRich from "@/src/hooks/mapRich";

// Optimización SEO
export const metadata: Metadata = {
  title: "Soluciones Sector Financiero | Heinsohn",
  description: "Software especializado para banca, fintechs y aseguradoras. Administra créditos, obligaciones financieras, fondos de inversión y portafolios en LATAM.",
  robots: "index, follow",
};

export default function SolucionesFinanciero() {
  const t = useTranslations("financiera");
  const cardsFinanzas = mapRich(t, "cardsExperienciaCifras");

  return (
    <>
      <Hero
        title={t("dataHeroFinanzas.title")}
        description={t.rich("dataHeroFinanzas.description", richText)}
        buttonText={t("dataHeroFinanzas.buttonText")}
        buttonHref={t("dataHeroFinanzas.buttonHref")}
        arrowHref="#"
        breadcrumb={t.raw("dataHeroFinanzas.breadcrumb")}
        badges={t.raw("dataHeroFinanzas.badges")}
        isUppercase={false}          
      />

      <CardAnuncies
        title={t("titlesFinanciera.EntidadesFinancierasRegion.title")}
        description={t.rich("titlesFinanciera.EntidadesFinancierasRegion.description", richText)}
        cards={t.raw("cardsEntidadesFinancieras")}
        cols={3}
        bottomText={t("titlesFinanciera.EntidadesFinancierasRegion.footerRetos")}
        bottomBtn={t("titlesFinanciera.EntidadesFinancierasRegion.btnRetos")}
      />

      <CardAnuncies
        title={t("titlesFinanciera.SolucionesTecnologicas.title")}
        cards={t.raw("cardsSolucionesTecnologicas")}
        cols={2}
      />

      <CardResult {...t.raw("cardResultados")} />

      <Clientes title={t("titlesFinanciera.ExperienciaCifras.title")} />

      <CardAnuncies 
        title={t("titlesFinanciera.statsVacio")} 
        cards={cardsFinanzas} 
        cols={2} 
      />

      <CertificacionesInternacionales title={t("titlesFinanciera.CertificacionesInternacionales.title")} />

      <CardCases {...t.raw("cardConoceNuestroTrabajo")} />
      
      <Slider 
        title={t("sliderBlogDestacadoFinanciera.title")}
        data={t.raw("sliderBlogDestacadoFinanciera.items")}
      />

      <PreguntasFort
        title={t("titlesFinanciera.preguntasFrecuentes.title")}
        items={t.raw("preguntasFrecuentesLista")} 
      />

      <ContactForm title={t("titlesFinanciera.ContactForm.title")} />
    </>
  );
}