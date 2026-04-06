import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

// Componentes Reutilizables de tu proyecto
import Hero from "@/src/components/sections/shared/hero/Hero";
import IgualdadOportunidades from "@/src/components/ui/cards/cardTrabajaconNosotros";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import BannerFiguras from "@/src/components/sections/shared/figura/BannerFiguras";
import SectionCenteredText from "@/src/components/sections/shared/centertext/SectionCenteredText";

export const metadata: Metadata = {
  title: "Trabaja con Nosotros | Heinsohn",
  description: "Únete al equipo Heinsohn. Descubre nuestras vacantes, beneficios y nuestra cultura de igualdad de oportunidades.",
  robots: "index, follow",
};

export default function TrabajaConNosotrosPage() {
  const t = useTranslations("trabajaConNosotros");

  return (
    <>
      {/* SECCIÓN HERO */}
      <Hero
        title={t("dataHero.title")}
        description={t("dataHero.description")}
        buttonText={t("dataHero.buttonText")}
        breadcrumb={t.raw("dataHero.breadcrumb")}
        badges={t.raw("dataHero.badges")}
        isUppercase={false}
        // No pasamos ninguna prop de imagen para que quede centrado/limpio
      />
     {/* SECCIÓN TALENTO CERTIFICADO */}
      <CertificacionesInternacionales 
        title={t.rich("talentoCertificado.title", richText)}
        descripcion={t.rich("talentoCertificado.description", richText)}
        imagen={t("talentoCertificado.image")}
      />
      {/* SECCIÓN IGUALDAD DE OPORTUNIDADES */}
      <IgualdadOportunidades
        icon={t("igualdadOportunidades.icon")}
        title={t.rich("igualdadOportunidades.title", richText)}
        description={t.rich("igualdadOportunidades.description", richText)}
        imageUrl={t("igualdadOportunidades.imageUrl")}
      />
      
      {/* SECCIÓN ALCANCE GLOBAL (Texto centrado) */}
      <SectionCenteredText
        title={t.rich("alcanceGlobal.title", richText)}
        description={t.rich("alcanceGlobal.description", richText)}
      />

      {/* SECCIÓN BENEFICIOS */}
      <CardAnuncies
        title={t("beneficios.title")}
        description={t("beneficios.description")}
        cards={t.raw("beneficios.cards")}
        cols={2}
      />

      {/* BANNER FIGURAS (Si lo necesitas para separar secciones como en otras vistas) */}
      <BannerFiguras />

      {/* SECCIÓN CALL TO ACTION / VACANTES */}
      <div className="py-10">
        <SectionCenteredText
          title={t("vacantes.title")}
          description={t.rich("vacantes.description", richText)}
        />
      </div>
    </>
  );
}