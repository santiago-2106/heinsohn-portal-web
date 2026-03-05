import { dataCardsLandingHGS, dataCardsLandingHGS2, dataCardsLandingHGS3, dataLandignHGS2, titleLandingHGS, titleLandingHGS2, titleLandingHGS3 } from "@/src/data/landing-hgs";
import TextComponent from "../../ui/typography/TextComponent";
import Mapa from "../mapa/Mapa";
import CardGrid from "../../layout/grids/CardGrid";
import CardGestionHumana from "../../ui/cards/CardGestionHumana";
import Clientes from "../shared/clientes/Clientes";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import Card from "../../ui/cards/Card";


export default function SectionLandingHgs() {
  return (
    <section>
      <div>
        <TextComponent
        title={titleLandingHGS.title}
        description={titleLandingHGS.description} 
        />

        <Mapa 
        imgMap="/img/mapa-landingHgs.png"
        />
      </div>

      <div>
        <TextComponent
        title={titleLandingHGS2.title}
        description={titleLandingHGS2.description} 
        />
        <CardGrid columns={2} >
          {
            dataLandignHGS2.map((item, index) => (
              <div key={index}>
                <CardGestionHumana {...item}/>
              </div>
            ))
          }
        </CardGrid>

        <Clientes 
        title={titleLandingHGS3.title}
        description={titleLandingHGS3.description}
        />

        <CardAnuncies 
        title="Portafolio completo"
        description="Ofecemos una oferta integral que combina"
        cards={dataCardsLandingHGS}
        cols={3}
        />
      </div>

      <div>
        <TextComponent 
        title="Nuestro portafolio de soluciones"
        description= 'Heinsohn Human Global Solutions ofrece un ecosistema completo de soluciones para cubrir todas las necesidades de tu área de Gestión Humana:'
        />

        <CardGrid columns={2}>
          {
            dataCardsLandingHGS2.map((item, index) => (
              <article key={index}>
                <Card {...item} />
              </article>
            ))
          }
        </CardGrid>
      </div>
    </section>
  )
}
