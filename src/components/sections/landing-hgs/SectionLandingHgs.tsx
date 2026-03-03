import { dataCardsLandingHGS, dataLandignHGS2, titleLandingHGS, titleLandingHGS2, titleLandingHGS3 } from "@/src/data/landing-hgs";
import TextComponent from "../../ui/typography/TextComponent";
import Mapa from "../mapa/Mapa";
import CardGrid from "../../layout/grids/CardGrid";
import CardGestionHumana from "../../ui/cards/CardGestionHumana";
import Clientes from "../shared/clientes/Clientes";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";


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
    </section>
  )
}
