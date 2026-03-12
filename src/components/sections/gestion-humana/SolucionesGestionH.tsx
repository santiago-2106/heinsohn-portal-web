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

export default function SolucionesGestionH() {
  return (
    <section className="">
      <article className="max-w-5xl mx-auto px-6 py-8">
        <TextComponent
          title={textoGestionHumana.title}
          description={textoGestionHumana.description}
        />

        <CardGrid columns={3}>
          {gestionHumanaInfo.map((info, index) => (
            <CardGestionHumana key={index} {...info} />
          ))}
        </CardGrid>
      </article>

      <CardAnuncies
        title={textoGestionHumana2.title}
        description={textoGestionHumana2.description}
        cards={infoGestionHumana2}
        cols={3}
      />

      <div>
        <Clientes
          title={textoGestionHumana3.title}
          description={textoGestionHumana3.description}
        />
        <ButtonComponent textoBtn="Habla con un experto" />
      </div>
    </section>
  );
}