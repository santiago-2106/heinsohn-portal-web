import Navbar from '@/src/components/layout/navbar/Navbar'
import CardCases from '@/src/components/ui/cardsSolutions/CardCases'
import Footer from '@/src/components/layout/footer/Footer'
import FooterBottom from '@/src/components/layout/footer/FooterBottom'
import ContactForm from '@/src/components/forms/ContactForm'
import Hero from '@/src/components/sections/Hero'
import CardFinal from '@/src/components/ui/cardsSolutions/CardFinal'
import Slider from '@/src/components/sliders/Slider'

export default function PageSolucionesTI() {
  const dataTI = {
    title: "Soluciones TI",
    description: "Transformamos la tecnología en valor para tu negocio.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones TI" }
    ]
  };

  return (
    <div>
      <Navbar />
      <Hero 
        title={dataTI.title}
        description={dataTI.description}
        buttonText={dataTI.buttonText}
        breadcrumb={dataTI.breadcrumb}
      />
      <CardFinal />
      <CardCases />
      <ContactForm />
      <Slider />
      <Footer />
      <FooterBottom />
    </div>
  )
}