import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";

export const metadata: Metadata = {
  title: "PQRSF | Heinsohn",
  description: "En Heinsohn valoramos tu opinión. Envíanos tus peticiones, quejas, reclamos, sugerencias o felicitaciones.",
  robots: "index, follow",
};

export default function PqrsfPage() {
  const t = useTranslations("pqrs"); 

  const rawCards = t.raw("instrucciones.cards");
  
  const processedCards = rawCards.map((card: any) => ({
    ...card,
    number: (
      <span className="block text-[42px] lg:text-[30px] font-light text-[#D90036] mb-4 leading-none">
        {card.number}
      </span>
    ),
    title: (
      <span className="block text-2xl font-light text-text-primary mb-2">
        {card.title}
      </span>
    ),
    description: (
      <span 
        className="text-text-secondary font-light"
        dangerouslySetInnerHTML={{ __html: card.description }} 
      />
    )
  }));

  return (
    <>
      {/* SECCIÓN HERO */}
      <div className="bg-white">
        <Hero
          title={t("dataHero.title")}
          // Aquí personalizamos la descripción para incluir el subtítulo con otro estilo
          description={
            <span className="block mt-4">
              <span className="block text-2xl md:text-[26px] font-light text-text-primary mb-6">
                {t("dataHero.subtitle")}
              </span>
              <span className="block text-base md:text-lg text-text-secondary font-light leading-relaxed">
                {t.rich("dataHero.description", richText)}
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

      {/* SECCIÓN TARJETAS DE INSTRUCCIONES */}
      <div className="pb-24 -mt-16 md:-mt-28 relative z-10 bg-transparent">
        <CardAnuncies
          title="" 
          cards={processedCards}
          cols={3}
          alignHeader="left"
        />
      </div>
    </>
  );
}