import { dataCardsLandingHGS, dataLandignHGS2, dataTimeLineAlianzas, titleLandingHGS, titleLandingHGS2, titleLandingHGS3, titleLandingHGS6 } from "@/src/data/soluciones/landing-hgs";
import TextComponent from "../../ui/typography/TextComponent";
import Mapa from "../mapa/Mapa";
import CardGrid from "../../layout/grids/CardGrid";
import CardGestionHumana from "../../ui/cards/CardGestionHumana";
import Clientes from "../shared/clientes/Clientes";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import TimeLineLandingHgs from "./TimeLineLandingHgs";
import { paisesLandingHgs } from "@/src/data/soluciones/mapa";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import mapRich from "@/src/hooks/mapRich";




export default function SectionLandingHgs() {

  const t = useTranslations("landingHgs")

  const cardPymes = t.raw("cardSolucionesPymes")

  const timeline = mapRich(t,"dataTimeLineAlianzas")

  return (
    <section>
      <div>
        {/*informacion Presencial regional */}
        <TextComponent
        title={t("titlePresenciaRegional.title")}
        description={t.rich("titlePresenciaRegional.descripcion", richText)}
        align="left" 
        />

        <Mapa 
        imgMap="/img/mapa-landingHgs.png"
        paises={paisesLandingHgs}
        showIcon={false}
        showCoberturaTitle={false}
        />
      </div>

      <div>
        {/*informacion Soluciones para cada tipo de empresa */}
        <TextComponent
        title={t("titleLandingHGS2.title")}
        description={t.rich("titleLandingHGS2.description", richText)} 
        />
        <CardGrid columns={2} >
          {
            cardPymes.map((info:any, index:number) => (
              <CardGestionHumana 
                key={index}
                icon={info.icon}
                contenedor={info.contenedor}
                title={info.title}
                description={info.description}
                btnText={info.btnText} 
              />
            ))
          }
        </CardGrid>

        <Clientes 
        title={(t("titleLandingHGS3.title"))}
        description={t.rich("titleLandingHGS3.description", richText)}
        />
        {/*Informacion Portafolio completo */}
        <CardAnuncies 
        title={t("cardPotafolioCompleto.title")}
        description={t("cardPotafolioCompleto.description")}
        cards={t.raw("cardPotafolioCompleto.cardsPortafolio")}
        cols={3}
        />
      </div>

      <div>
        {/*Informacion Alianzas estratégicas con líderes tecnológicos */}
        <TextComponent 
        title={t("titleLandingHGS6.title")}
        description={t.rich("titleLandingHGS6.description", richText)}
        />
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
          <img src="/img/ibm-logo.png" alt="logo ibm" className="h-16 md:h-14 lg:h-22 w-auto object-contain"/>
          <img src="/img/microsoft-logo.png" alt="logo microsoft" className="h-16 md:h-14 lg:h-18 w-auto object-contain"/>
        </div>
        <TimeLineLandingHgs informationLandingSoftware={timeline} />
      </div>
      
    </section>
  )
}
