import ContactForm from '@/src/components/forms/formularios/ContactForm'
import Footer from '@/src/components/layout/footer/Footer'
import FooterBottom from '@/src/components/layout/footer/FooterBottom'
import Navbar from '@/src/components/layout/navbar/Navbar'
import Hero from '@/src/components/sections/shared/hero/Hero'
import ModelosDesarrollo from '@/src/components/sections/soluciones-digitales/ModelosDesarrollo'
import Slider from '@/src/components/sliders/SliderBlog'
import CardEstrategicNegocio from '@/src/components/sections/soluciones-digitales/EstrategiaNegocioSection'
import CardSoftwreGeneric from '@/src/components/sections/soluciones-digitales/GenericSoftwareSection'
import TetxSolutionsDigital from '@/src/components/sections/soluciones-digitales/TetxSolutionsDigital'
import PreguntasFort from '@/src/components/forms/formularios/PreguntForm'
import { dataPreguntasFrecuentes } from '@/src/data/soluciones-digitales'



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
      <ModelosDesarrollo />
      <PreguntasFort title='Preguntas Frecuentes' items={dataPreguntasFrecuentes}/>
      <Slider />
      <Footer />
      <FooterBottom />
    </div>
  )
}