import CardGrid from '../../layout/grids/CardGrid'
import { dataCardsFeaturesLandingHGS, dataCardsLandingHGS3, dataCardsLandingHGS4, heroSlides, titleLandingHGS4, titleLandingHGS5 } from '@/src/data/landing-hgs'
import CardLandingHgs from '../shared/sectioncard/CardLandingHgs'
import TextComponent from '../../ui/typography/TextComponent'
import CardFeatures from '../../ui/cards/CardFeatures'
import CardAnuncies from '../shared/sectioncard/SectionAnuncies'
import SliderHero from '../../sliders/SliderHero'
import ButtonComponent from '../../ui/buttons/Button'

export default function SectionLandingHgs2() {
  return (
    <section >
      <div className='pt-28'>
        <TextComponent 
        title={titleLandingHGS4.title}
        description={titleLandingHGS4.description}
        />
        <CardGrid columns={1}>
          {
            dataCardsLandingHGS3.map((item, index) =>(
              <article key={index}>
                <CardLandingHgs {...item}/>
              </article>
            ))
          }
        </CardGrid>
      </div>

      <div className='pt-28'>
        <TextComponent title='¿Por que elegir Heinsohn HUman Global Solutions?'/>
        <article className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl">
            {
                dataCardsFeaturesLandingHGS.map((item, index) => (
                    <CardFeatures key={index} {...item}/>    
                ))
            }
        </article>
      </div>

      <div >
        <CardAnuncies 
        title='Comienza tu transformación digital en Gestión Humana'
        description='En Heinsohn Human Global Solutions entendemos que tu talento humano es el activo más valioso de tu organización. Por eso, ponemos a tu disposición nuestro ecosistema completo de soluciones tecnológicas y servicios especializados para que puedas:'
        cols={2}
        cards={dataCardsLandingHGS4}
        />

        <TextComponent 
        title='Noticias de Interés'
        description='Mantente actualizado con las ultimas tendencias y cambios normativos en gestion humana.'
        />
        <SliderHero items={heroSlides}/>
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
