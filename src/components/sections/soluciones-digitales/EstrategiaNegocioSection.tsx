import FeatureCard from "@/src/components/ui/cards/CardFeatures";
import TextComponent from "../../ui/typography/TextComponent";
import ButtonComponent from "../../ui/buttons/Button";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import { useCard } from "@/src/hooks/useCard";


export default function CardSoftwreGeneric() {

  const t = useTranslations("desarrolloAMedida")

  const DesarrolloAlaMedidaUX= t.raw("dataEstrategiaNegocio")

  const cardsDesarrolloAMedida = useCard(DesarrolloAlaMedidaUX)

  return (
    <>
      <TextComponent 
      title={t("titles.dataEstrategiaNegocio.title")}
      description={t.rich("titles.dataEstrategiaNegocio.description", richText)}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-3 mx-auto max-w-5xl">
        {cardsDesarrolloAMedida.map((item,) => (
          <FeatureCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <ButtonComponent textoBtn={t("textBtn.textoBtn2")} />
    </>
  );
}
