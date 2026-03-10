import FeatureCard from "@/src/components/ui/cards/CardFeatures";
import TextComponent from "../../ui/typography/TextComponent";
import { TextSolucionDigtal21 } from "../../../data/share/textosGenerales";
import ButtonComponent from "../../ui/buttons/Button";
import { dataEstrategiaNegocio } from "../../../data/soluciones-digitales";

export default function CardSoftwreGeneric() {
  return (
    <>
      <TextComponent
        title={TextSolucionDigtal21.title}
        description={TextSolucionDigtal21.description}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-3 mx-auto max-w-5xl">
        {dataEstrategiaNegocio.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <ButtonComponent textoBtn="Conversa con un consultor y evalua tu proximo MVP" />
    </>
  );
}
