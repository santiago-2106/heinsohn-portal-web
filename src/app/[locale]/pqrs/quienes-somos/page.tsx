import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";

export const metadata: Metadata = {
  title: "¿Quiénes somos? | Heinsohn",
  description: "Una empresa colombiana con más de 40 años de experiencia ofreciendo soluciones empresariales por medio de la tecnología.",
  robots: "index, follow",
};

export default function QuienesSomosPage() {
  const t = useTranslations("quienesSomos");

  return (
    <div className="bg-white pb-12 md:pb-24 border-b border-gray-200">
      {/* SECCIÓN HERO */}
      <Hero
        title={t("dataHero.title")}
        description={
          <span className="block mt-6 max-w-4xl">
            {/* SUBTÍTULO */}
            <span className="block text-3xl md:text-[38px] font-light text-text-primary mb-8 leading-[1.3]">
              {t("dataHero.subtitle")}
            </span>
            {/* DESCRIPCIÓN */}
            <span className="block text-base md:text-lg text-text-secondary font-light leading-relaxed">
              {t("dataHero.description")}
            </span>
          </span>
        }
        breadcrumb={t.raw("dataHero.breadcrumb")}
        badges={t.raw("dataHero.badges")}
        isUppercase={false}
        showImage={false}
        buttonText=""
      />
    </div>
  );
}