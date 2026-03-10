import React from 'react'
import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import { dataCardCasosEstudio, dataCardLandingSoftware, dataLandignSoftwareTexts, heroSlidesLandingSoftware } from '@/src/data/landing-software'
import TextSections from '../../ui/typography/TextSections'
import CardLandingSoftware from '../shared/sectioncard/CardLandingSoftware'
import SliderHero from '../../sliders/SliderHero'
import SliderTestimonial from '../../sliders/SliderTestimonial'
import { testimonialsSlider } from '@/src/data/landing-hgs'

export default function SectionLandingSoftware() {
  return (
    <section>
      <div >
              <TextComponent title='Beneficios del software de nómina'/>
              <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl">
                  {
                      dataCardLandingSoftware.map((item, index) => (
                          <CardFeatures key={index} {...item} iconPosition='left'/>    
                      ))
                  }
              </article>
          
      </div>
      <div >

        <TextSections items={dataLandignSoftwareTexts}/>
        <TextComponent title='Esto dicen nuestros clientes de software de nómina'/>
        <SliderTestimonial items={testimonialsSlider}/>
        <TextComponent title='Casos de estudio'/>
        <CardLandingSoftware items={dataCardCasosEstudio}/>
        <TextComponent title='Informacion de interes'/>
        <SliderHero items={heroSlidesLandingSoftware}/>
      </div>
    </section>
  )
}
