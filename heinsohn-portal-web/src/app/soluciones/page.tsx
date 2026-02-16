
import { textModelDevelop, textoModelDevelop, textoModelDevelop2 } from '@/src/components/data/DataTI'
import { TextSolucionDigtal2, TextSolucionDigtal3 } from '@/src/components/data/textComponentData/dataTextComponent'
import ContactForm from '@/src/components/forms/ContactForm'
import Footer from '@/src/components/layout/footer/Footer'
import FooterBottom from '@/src/components/layout/footer/FooterBottom'
import Navbar from '@/src/components/layout/navbar/Navbar'
import Hero from '@/src/components/sections/Hero'
import CardEstrategicNegocio from '@/src/components/ui/cardsSolutDigitalIS/CardEstrategicNegocio'
import CardSoftwreGeneric from '@/src/components/ui/cardsSolutDigitalIS/CardSoftwreGeneric'
import Card from '@/src/components/ui/cardsSolutions/Card'
import TetxSolutionsDigital from '@/src/components/ui/textsComponent/TetxSolutionsDigital'
import TextComponent from '@/src/components/ui/textsComponent/TextComponent'


export default function pageSdIS() {
  const dataSolutionDigitales = {
    title:'Desarrollo de software a la medida',
    description: (
      <>
       desarrollo de software a la medida es la clave para que las empresas avancen con agilidad, seguridad y escalabilidad.  <span className='font-semibold'>Creamos soluciones únicas que se adaptan a tu negocio,</span> con la experiencia y el conocimiento que nos posiciona como una de las principales empresas de desarrollo de software en Colombia y LATAM.
      </>
    ),
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones TI" }
    ]
  }

  return (
    <div>
      <Navbar />
      <Hero 
      title={dataSolutionDigitales.title}
      description={dataSolutionDigitales.description}
      buttonText={dataSolutionDigitales.buttonText}
      breadcrumb={dataSolutionDigitales.breadcrumb}
      />
      <TetxSolutionsDigital />
      <CardSoftwreGeneric />
      <ContactForm />
      <CardEstrategicNegocio />
      <section>
        <TextComponent title={TextSolucionDigtal2.title} description={TextSolucionDigtal2.description}/>
        <article className='max-w-4xl mx-auto grid grid-cols-1 p-5 md:grid-cols-3 gap-16 py-16'>
           {
            textModelDevelop.map((cardDevelop, index) => (
              <Card key={index} {...cardDevelop} />
            ))
          }
        </article>
        <article className='max-w-5xl mx-auto grid grid-cols-1 p-8 md:grid-cols-2 gap-14 py-12'>
          {
            textoModelDevelop.map((card, index) => (
              <Card key={index} {...card}/>
            ))
          }
        </article>
        
        <div className="flex justify-center py-8 px-4">
          <button className="bg-black text-white text-base font-medium py-4 px-10 rounded-full">Explora el modelo de desarrollo de software que mejor encaja con tu estrategia</button>
        </div>
      </section>

{/*CORREIR Y REVISAR ESTO YA QUE ES MUCHA REPETIDERA XD XD XD */}
      <section>
        <TextComponent title={TextSolucionDigtal3.title} description={TextSolucionDigtal3.description}/>
        <article className='max-w-5xl mx-auto grid grid-cols-1 p-2 md:grid-cols-2 gap-16 py-1'>
           {
            textoModelDevelop2.map((cardDevelop, index) => (
              <Card key={index} {...cardDevelop} />
            ))
          }
        </article>
      </section>
      <Footer />
      <FooterBottom />
    </div>
  )
}
