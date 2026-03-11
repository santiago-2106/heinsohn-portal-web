import { dataTextSolucionDigtal } from "@/src/data/share/textosGenerales";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import FeatureCard from "@/src/components/ui/cards/CardFeatures";
import { Devices } from "@mui/icons-material";
import ButtonComponent from "../../ui/buttons/Button";
import { dataSoftwaregenerico } from "../../../data/desarrollo-a-medida";

export default function TrustSection() {
  return (
    <>
      <TextComponent
        title={dataTextSolucionDigtal.title}
        description={dataTextSolucionDigtal.description}
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-5xl ">
        {" "}
        {/*ESTILOS ESTILOS */}
        {/*Corregir name aqui de feautrcard {/*VER SI MEJOR USAR ITEM O INDEX */}{" "}
        {dataSoftwaregenerico.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            description={item.description}
            iconPosition="left"
            variant="compact"
          />
        ))}
      </section>
      <ButtonComponent textoBtn="Solicita una consultoria" />
    </>
  );
}
