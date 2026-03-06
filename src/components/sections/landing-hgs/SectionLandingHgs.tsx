import { dataCardsLandingHGS, dataLandignHGS2, dataTimeLineAlianzas, titleLandingHGS, titleLandingHGS2, titleLandingHGS3, titleLandingHGS6 } from "@/src/data/landing-hgs";
import TextComponent from "../../ui/typography/TextComponent";
import Mapa from "../mapa/Mapa";
import CardGrid from "../../layout/grids/CardGrid";
import CardGestionHumana from "../../ui/cards/CardGestionHumana";
import Clientes from "../shared/clientes/Clientes";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import TimeLineLandingHgs from "./TimeLineLandingHgs";
import { paisesPendientes } from "@/src/data/mapa";



export default function SectionLandingHgs() {
  return (
    <section>
      <div>
        <TextComponent
        title={titleLandingHGS.title}
        description={titleLandingHGS.description}
        align="left" 
        />

        <Mapa 
        imgMap="/img/mapa-landingHgs.png"
        paises={paisesPendientes}
        showIcon={false}
        showCoberturaTitle={false}
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
        title={titleLandingHGS6.title}
        description={titleLandingHGS6.description}
        />
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
          <img src="/img/ibm-logo.png" alt="logo ibm" className="h-16 md:h-14 lg:h-22 w-auto object-contain"/>
          <img src="/img/microsoft-logo.png" alt="logo microsoft" className="h-16 md:h-14 lg:h-18 w-auto object-contain"/>
        </div>
        <TimeLineLandingHgs informationLandingSoftware={dataTimeLineAlianzas}/>
      </div>
      
    </section>
  )
}
