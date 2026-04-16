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
        <div className="-mb-10 md:-mb-18 ">
            <TextComponent title="Beneficios del software de nomina" />
        </div>
          <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-5xl">
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
        
        <SliderTestimonial title={t.rich("titlesLandingSoftware.titleLandingSoftware3.title", richText)} items={t.raw("sliderLandingSoftware")}/>
        {/*TITULO Y CARDS CASOS DE ESTUDIO */}

        <div className='pt-20'>
          <CardLandingSoftware title='Casos de estudio' items={t.raw("cardsCasosEstudio")}/>
        </div>
        {/*TITULO Y SLIDER DE INFORMACION DE INTERESES */}
        <div className='pt-20'>
        <SliderHero titleHero={t("titlesLandingSoftware.titleLandingSoftware5.title")} items={t.raw("sliderLandingSoftware2")}/>
        </div>
      </div>
    </section>
  )
}
