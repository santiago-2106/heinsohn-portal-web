import React from 'react'
import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import { dataCardCasosEstudio, dataCardLandingSoftware, dataLandignSoftwareTexts, heroSlidesLandingSoftware } from '@/src/data/landing-software'
import TextSections from '../../ui/typography/TextSections'
import CardLandingSoftware from '../shared/sectioncard/CardLandingSoftware'
import SliderHero from '../../sliders/SliderHero'

export default function SectionLandingSoftware() {
  return (
    <section>
      <div className='pt-28'>
              <TextComponent title='Beneficios del software de nómina'/>
              <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl">
                  {
                      dataCardLandingSoftware.map((item, index) => (
                          <CardFeatures key={index} {...item}/>    
                      ))
                  }
              </article>
      </div>
      <div className='pt-28'>
        <TextSections items={dataLandignSoftwareTexts}/>
        <TextComponent title='Casos de estudio'/>
        <CardLandingSoftware items={dataCardCasosEstudio}/>
        <SliderHero items={heroSlidesLandingSoftware}/>
      </div>
    </section>
  )
}
