import {
  gestionHumanaInfo,
  infoGestionHumana2,
} from "../../../data/soluciones/gestion-humana"; 
import CardGestionHumana from "../../ui/cards/CardGestionHumana";
import TextComponent from "../../ui/typography/TextComponent";
import {
  textoGestionHumana,
  textoGestionHumana2,
  textoGestionHumana3,
} from "../../../data/soluciones/share/textosGenerales";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import Clientes from "../shared/clientes/Clientes";
import ButtonComponent from "../../ui/buttons/Button";
import CardGrid from "../../layout/grids/CardGrid";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

export default function SolucionesGestionH() {

  const t = useTranslations("gestionHumana")

  const cardsGestionhumana = t.raw("cardsContrataSoluciones")

  return (
    <section className="">
      <article className="max-w-5xl mx-auto px-6 py-8">
        <TextComponent
          title={t("titlesGestionHumana.titleGestionHumana1.title")}
          description={t.rich("titlesGestionHumana.titleGestionHumana1.description", richText)}
        />

        <CardGrid columns={3}>
          {cardsGestionhumana.map((info:any, index:number) => (
            <CardGestionHumana 
            key={index}
            icon={info.icon}
            contenedor={info.contenedor}
            title={info.title}
            description={info.description}
            btnText={info.btnText} />
          ))}
        </CardGrid>
      </article>
      
      {/*CARDS  Outsourcing de Procesos - BPO */}
      <CardAnuncies
        title={t("titlesGestionHumana.titleGestionHumana2.title")}
        description={t.rich("titlesGestionHumana.titleGestionHumana2.description", richText)}
        cards={t.raw("cardsOutsourcingBPO")}
        cols={3}
      />

      <div>
        <Clientes
          title={t("titlesGestionHumana.titleGestionHumana3.title")}
          description={t.rich("titlesGestionHumana.titleGestionHumana3.description", richText)}
        />
        <ButtonComponent textoBtn={t("buttonGestionHumana")} />
      </div>
    </section>
  );
}