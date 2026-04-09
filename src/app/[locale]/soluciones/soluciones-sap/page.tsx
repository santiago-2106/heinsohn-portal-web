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
import createNumberIcon, { dataSAP, dataPorQueSAP, dataFormularioTest } from "@/src/data/soluciones/sap";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import HeroSvg from "@/src/components/svgs/HeroSvg";

// Optimización SEO
export const metadata: Metadata = {
  title: "Soluciones SAP Business One | Heinsohn",
  description:
    "Implementación de ERP SAP Business One en Colombia. Somos Partner Gold de SAP con más de 40 años de experiencia y 1.300 proyectos exitosos.",
  robots: "index, follow",
};

export default function SolucionesSAP() {

  const t = useTranslations("solucionesSap")

  //CONSERVAN SUS ESTILOS DE ACUERDO A LA UX Y EL CODIGO DE createNumberIcon REALIZADO
  const rawCards = t.raw("cardsErpSap.cards");
  const cardsErpSap = rawCards.map((card: any) => ({
    ...card,
    icon: createNumberIcon(card.number, card.badgeText),
  }));

  return (
    <>
      {/* SECCIÓN HERO */}
      <Hero
        title={t("dataHeroSolucionesSap.title")}
        description={dataSAP.hero.description}
        buttonText={t("dataHeroSolucionesSap.buttonText")}
        breadcrumb={t.raw("dataHeroSolucionesSap.breadcrumb")}
        badges={t.raw("dataHeroSolucionesSap.badges")}
        isUppercase={false}
      />

      {/* SECCIÓN CARDS IA */}
      <CardAnuncies
        title={t("cardsHerramientasIA.title")}
        cards={t.raw("cardsHerramientasIA.cards")}
        cols={2}
      />

      {/* SECCIÓN: TEST INTERACTIVO ERP */}
      <SectionGestionHumana
        title={t("cardsTestInteractivo.title")}
        description={t("cardsTestInteractivo.description")}
        cards={t.raw("cardsTestInteractivo.cards")}
      />

      {/* SECCIÓN: COMPARACIÓN DE ERP */}
      <CardAnuncies
        title={t.rich("cardsMejorErpPymes.title", richText)}
        description={t("cardsMejorErpPymes.description")}
        cards={t.raw("cardsMejorErpPymes.cards")}
        cols={3}
      />

      {/* SECCIÓN: POR QUÉ ELEGIR HEINSOHN */}
      <div className="bg-bg-card-2 border-y border-border-ui">
        <CardAnuncies
          title={t("cardsPorqueElegirHeinsohn.title")}
          description={t("cardsPorqueElegirHeinsohn.description")}
          cards={t.raw("cardsPorqueElegirHeinsohn.cards")}
          topBadge={t("cardsPorqueElegirHeinsohn.topBadge")}
          cols={2}
        />
      </div>

      {/* SECCIÓN: CLIENTES */}
      <Clientes
        title={t.rich("TitleClientes.title", richText)}
        description={t.rich("TitleClientes.description", richText)}
      />

      {/* BANNER FIGURAS GEOMÉTRICAS */}
      <HeroSvg />

      {/* SECCIÓN: DESPUÉS DEL TEST */}
      <CardAnuncies
        title={t("cardsErpSap.title")}
        description={t.rich("cardsErpSap.description", richText)}
        cards={cardsErpSap}
        cols={2}
        alignHeader="left"
      />

      {/* FORMULARIO DE TEST */}
      <TestInteractivo {...t.raw("FormularioTestInteractivo")} />

      {/* FORMULARIO DE CONTACTO */}
      <ContactForm title={t("titleContactForm.title")} />

      {/* SECCIÓN DE TEXTO: ¿POR QUÉ SAP? */}
      <SectionCenteredText
        title={t.rich("titlePorqueSAP.title",richText)}
        description={t.rich("titlePorqueSAP.description", richText)}
      />
    </>
  );
}
