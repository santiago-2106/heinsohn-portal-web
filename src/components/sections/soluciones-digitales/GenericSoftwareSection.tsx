import TextComponent from "@/src/components/ui/typography/TextComponent";
import FeatureCard from "@/src/components/ui/cards/CardFeatures";
import ButtonComponent from "../../ui/buttons/Button";
import { data_softwareGenerico,  getButtons, titlesDesarrolloAMedida } from "../../../data/soluciones/desarrollo-a-medida";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import { useCard } from "@/src/hooks/useCard";

export default function TrustSection() {

  const t = useTranslations("desarrolloAMedida")


  const rawCards = t.raw("dataSoftwaregenerico");
  const cards = useCard(rawCards);

  return (
    <>
      <TextComponent
        title={t("titles.softwareGenerico.title")}
        description={t.rich("titles.softwareGenerico.description", richText)}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-5xl ">
        {" "}
        {/*ESTILOS ESTILOS */}
        {/*Corregir name aqui de feautrcard {/*VER SI MEJOR USAR ITEM O INDEX */}{" "}
        {cards.map((item) => (
          <FeatureCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconPosition="left"
            variant="compact"
          />
        ))}
      </section>
      <ButtonComponent textoBtn={t("textBtn.textoBtn1")} />
    </>
  );
}
