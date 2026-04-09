import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import { richText } from "@/src/hooks/helper/richText";
import { useTranslations } from "next-intl";


export default function CardFinal() {

  const t = useTranslations("solucionesTi")
  
  return (
    <>
      {/*CARDS SOLUCIONES TI: Ingeniería de software y Desarrollo de productos Digitales  */}
      <CardAnuncies
      title={t("titlesSolucionesTi.title1")}
      cards={t.raw("cardssIngenieriaSoftware")}
      />
      {/*CARDS SOLUCIONES TI: Analítica de datos e inteligencia artificial  */}
      <CardAnuncies
      title={t.rich("titlesSolucionesTi.title2", richText)}
      cards={t.raw("cardsAnalitycIA")}
      />

      {/*CARDS SOLUCIONES TI: Ingeniería extendida y equipos dedicados  */}
      <CardAnuncies
      title={t("titlesSolucionesTi.title3")}
      cards={t.raw("cardsIngenieriaExtendida")}
      />

      {/*CARDS SOLUCIONES TI: Consultoria estratégica  */}
      <CardAnuncies
      title={t("titlesSolucionesTi.title4")}
      cards={t.raw("cardsConsultoriaEstrategica")}
      />

      
    </>
  );
}
