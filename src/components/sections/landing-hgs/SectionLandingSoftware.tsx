import React from 'react'
import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import { dataCardCasosEstudio, dataCardLandingSoftware, dataLandignSoftwareTexts, heroSlidesLandingSoftware } from '@/src/data/soluciones/landing-software'
import TextSections from '../../ui/typography/TextSections'
import CardLandingSoftware from '../shared/sectioncard/CardLandingSoftware'
import SliderHero from '../../sliders/SliderHero'
import SliderTestimonial from '../../sliders/SliderTestimonial'
import { testimonialsSlider } from '@/src/data/soluciones/landing-hgs'
import { useTranslations } from 'next-intl'
import { useCard } from '@/src/hooks/useCard'

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
                description={item.description} iconPosition='left'
                />    
              ))
            }
          </article>
      </div>
      <div >

        <TextSections items={t.raw("dataLandignSoftwareTexts")}/>
        <TextComponent title={t("titlesLandingSoftware.titleLandingSoftware3.title")}/>
        <SliderTestimonial items={t.raw("sliderLandingSoftware")}/>
        <TextComponent title='Casos de estudio'/>
        <CardLandingSoftware items={t.raw("cardsCasosEstudio")}/>
        <TextComponent title={t("titlesLandingSoftware.titleLandingSoftware5.title")}/>
        <SliderHero items={t.raw("sliderLandingSoftware2")}/>
      </div>
    </section>
  )
}
