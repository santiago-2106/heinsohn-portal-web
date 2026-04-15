import SectionLandingSoftware from "@/src/components/sections/landing-hgs/SectionLandingSoftware";
import Mapa from "@/src/components/sections/mapa/Mapa";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import PreguntasFort from '@/src/components/forms/formularios/PreguntForm'
import { paisesLandingSoftware } from "@/src/data/soluciones/mapa";
import { richText } from "@/src/hooks/helper/richText";
import { useTranslations } from "next-intl";


export default function PageLandingSoftware() {

  const t = useTranslations("landingSoftware")

  return (
    <>
      <Hero
        title={t("dataHeroLandingSoftware.title")}
        subtitle={t.rich("dataHeroLandingSoftware.subtitle", richText)}
        description={t.rich("dataHeroLandingSoftware.description", richText)}
        breadcrumb={t.raw("dataHeroLandingSoftware.breadcrumb")} // <-- Corregido a minúscula
        buttonText={t("dataHeroLandingSoftware.buttonText")}
        buttonHref="#"
        arrowHref="#"
        showImage={false} // <-- AQUÍ SE APAGA LA IMAGEN
      />
      <Clientes
        title={t("titlesLandingSoftware.titleLandingSoftware1.title")}
        description={t.rich("titlesLandingSoftware.titleLandingSoftware1.description", richText)}
      />
      <TextComponent
        title={t("titlesLandingSoftware.titleLandingSoftware2.title")}
        description={t.rich("titlesLandingSoftware.titleLandingSoftware2.description",richText)}
      />

      <SectionLandingSoftware />

      <Mapa
        title={t("titlesLandingSoftware.titleMapaLandingSoftware.title")}
        imgMap="/img/mapa-landing-software.png"
        paises={paisesLandingSoftware}
        showIcon={false}
        showCoberturaTitle={false}
      />

      <PreguntasFort
        title={t("titlesLandingSoftware.titlePreguntasFrecuentes.title")}
        items={t.raw("preguntasFrecuentesLista")}
      />
    </>
  );
}
