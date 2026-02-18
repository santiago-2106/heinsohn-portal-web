

import { textModelDevelop, textoModelDevelop, textoModelDevelop2 } from '@/src/components/data/financiera/DataFinanciera'
import { TextSolucionDigtal2, TextSolucionDigtal3 } from '@/src/components/data/textComponentData/dataTextComponent'


import ContactForm from '@/src/components/forms/formularios/ContactForm'
import Footer from '@/src/components/layout/footer/Footer'
import FooterBottom from '@/src/components/layout/footer/FooterBottom'
import Navbar from '@/src/components/layout/navbar/Navbar'
import Hero from '@/src/components/sections/Hero'
import ModelosDesarrollo from '@/src/components/sections/sections-soluciones-Digitales/ModelosDesarrollo'
import Slider from '@/src/components/sliders/Slider'
import CardEstrategicNegocio from '@/src/components/ui/cardsSolutDigitalIS/CardEstrategicNegocio'
import CardSoftwreGeneric from '@/src/components/ui/cardsSolutDigitalIS/CardSoftwreGeneric'
import TetxSolutionsDigital from '@/src/components/ui/textsComponent/TetxSolutionsDigital'



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
      <Slider />
      <Footer />
      <FooterBottom />
    </div>
  )
}
