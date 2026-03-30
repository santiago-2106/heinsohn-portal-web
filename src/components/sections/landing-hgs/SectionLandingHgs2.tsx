import CardGrid from '../../layout/grids/CardGrid'
import { dataCardsFeaturesLandingHGS, dataCardsLandingHGS2, dataCardsLandingHGS3, dataCardsLandingHGS4, heroSlides, titleLandingHGS4, titleLandingHGS5 } from '@/src/data/soluciones/landing-hgs'
import CardLandingHgs from '../shared/sectioncard/CardLandingHgs'
import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import CardAnuncies from '../shared/sectioncard/SectionAnuncies'
import SliderHero from '../../sliders/SliderHero'
import Card from '../../ui/cards/Card'
import { useTranslations } from 'next-intl'
import mapRich from '@/src/hooks/mapRich'
import { richText } from '@/src/hooks/helper/richText'
import { useCard } from '@/src/hooks/useCard'

export default function SectionLandingHgs2() {

  const t = useTranslations("landingHgs")

  const card1 = mapRich(t, "cardSoftwareNomina") 
  const card2 = mapRich(t, "cardOutsorcingBPO") 

  const card3 = useCard(t.raw("cardFeatureLandingHGS"))

  const card4 = mapRich(t, "cardTransformacionDigital")

  return (
    <section >
        <div>
          {/*INFORMACION LANDING SOFTWARE NUESTRO PORTAFOLIO DE SOLUCIONES */}
        <TextComponent 
        title={t("titleLandingHGS7.title")}
        description={t("titleLandingHGS7.description")}
        />

        <CardGrid columns={2}>
          {
            card1.map((item: any, index: number) => (
              <article key={index}>
                <Card {...item} />
              </article>
            ))
          }
        </CardGrid>
      </div>
      <div className='pt-28'>
        {/*INFORMACION Soluciones en Modalida Outsorcing (BPO) */}
        <TextComponent 
        title={t("titleLandingHGS4.title")}
        description={t.rich("titleLandingHGS4.description", richText)}
        />
        <CardGrid columns={1}>
          {
            card2.map((item: any, index: number) =>(
              <article key={index}>
                <CardLandingHgs {...item}/>
              </article>
            ))
          }
        </CardGrid>
      </div>

      <div className='pt-28'>
        {/*INFORMACION ¿Por que elegir Heinsohn HUman Global Solutions?*/}
        <TextComponent title={t("titleLandingHGS8.title")}/>
        <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl">
            {
                card3.map((item, index) => (
                    <CardFeatures key={index} {...item} iconColor='text-brand-accent'/>    
                ))
            }
        </article>
      </div>

      <div >
        {/*INFORMACION Comienza tu transformación digital en Gestión Humana */}
        <CardAnuncies 
        title={t("titleLandingHGS9.title")}
        description={t("titleLandingHGS9.description")}
        cols={2}
        cards={card4}
        />

        <TextComponent 
        title={t("titleLandingHGS10.title")}
        description={t("titleLandingHGS10.description")}
        />
        <SliderHero items={t.raw("sliderLandingHGS")}/>
      </div>

      <div>
        <TextComponent 
        title={titleLandingHGS5.title}
        description={titleLandingHGS5.description}
        />
        <div className='flex justify-center items-center gap-4 py-8 mb-12'>
            <button className="group flex items-center  gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md">
                Agendar consulta
            </button>
            <button className='rounded-full border-2 px-8 py-4 transition-all hover:opacity-80 shadow-sm hover:shadow-md'>Ver casos de exito</button>
        </div>

      </div>
    </section>
  )
}
