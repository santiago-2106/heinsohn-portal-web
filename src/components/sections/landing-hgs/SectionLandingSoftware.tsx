import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import TextSections from '../../ui/typography/TextSections'
import CardLandingSoftware from '../shared/sectioncard/CardLandingSoftware'
import SliderHero from '../../sliders/SliderHero'
import SliderTestimonial from '../../sliders/SliderTestimonial'
import { useTranslations } from 'next-intl'
import { useCard } from '@/src/hooks/useCard'
import { richText } from '@/src/hooks/helper/richText'

export default function SectionLandingSoftware() {

  const t = useTranslations("landingSoftware")

  const traductionCards = t.raw("cardsBeneficionLandignSoftware")
  const cardsLandingSoftware = useCard(traductionCards)

  return (
    <section>
      <div >
        <TextComponent title='Beneficios del software de nómina'/>
          <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl">
            {
              cardsLandingSoftware.map((item, index) => (
                <CardFeatures 
                key={item.id}
                title={item.title}
                icon={item.icon}
                description={item.description} 
                iconPosition='left'
                iconColor='black'
                />    
              ))
            }
          </article>
      </div>
      <div >

        <TextSections items={t.raw("dataLandignSoftwareTexts")}/>
        {/*TITULO Y SLIDER DE COORDINADORA Y FUNDACION SANTA-FE */}
        <TextComponent title={t.rich("titlesLandingSoftware.titleLandingSoftware3.title", richText)}/>
        <SliderTestimonial items={t.raw("sliderLandingSoftware")}/>
        {/*TITULO Y CARDS CASOS DE ESTUDIO */}
        <TextComponent title='Casos de estudio'/>
        <CardLandingSoftware items={t.raw("cardsCasosEstudio")}/>
        {/*TITULO Y SLIDER DE INFORMACION DE INTERESES */}
        <TextComponent title={t("titlesLandingSoftware.titleLandingSoftware5.title")}/>
        <SliderHero items={t.raw("sliderLandingSoftware2")}/>
      </div>
    </section>
  )
}
