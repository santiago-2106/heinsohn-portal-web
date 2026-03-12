import {
  infoPensiones1,
  infoPensiones2,
  infoPensiones3,
  infoPensiones4,
  infoPensiones6,
  informacionPensiones5,
} from "../../../data/soluciones/pensiones";
import {
  textoPensiones1,
  textoPensiones2,
} from "../../../data/soluciones/share/textosGenerales";
import ButtonComponent from "../../ui/buttons/Button";
import CardResultados from "../shared/sectioncard/CardResultados";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import TextComponent from "../../ui/typography/TextComponent";
import CardGrid from "../../layout/grids/CardGrid";
import Card from "../../ui/cards/Card";

export default function PensionesSection() {
  return (
    <div>
      <CardResultados data={infoPensiones1} />

      <section className="">
        <CardAnuncies
          title={textoPensiones1.title}
          description={textoPensiones1.description}
          cards={infoPensiones2}
          cols={2}
        />
        <TextComponent description="Con nuestras soluciones para pensiones obtienes software escalable y seguro, alineados a la regulación y pensadas para garantizar confianza y sostenibilidad." />
        <ButtonComponent textoBtn="Explora nuestras soluciones en pensiones" />
      </section>
      <CardAnuncies
        title={textoPensiones2.title}
        description={textoPensiones2.description}
        {...infoPensiones4}
        cols={1}
        
      />

      {/* Antes: grid inline con Card directo. Ahora usa CardAnuncies como el resto del proyecto */}
      <CardAnuncies
        title="Lo que nos hace diferentes en la gestion pensional"
        cards={informacionPensiones5}
        cols={2}
      />

      <TextComponent title="Lo que nos hace diferentes en la gestion empresarial" />
      <CardResultados data={infoPensiones6}   />
    </div>
  );
}
