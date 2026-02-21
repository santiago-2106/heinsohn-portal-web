import Footer from '@/src/components/layout/footer/Footer'
import FooterBottom from '@/src/components/layout/footer/FooterBottom'
import Navbar from '@/src/components/layout/navbar/Navbar'
import Hero from '@/src/components/sections/Hero'
import PensionesSection from '@/src/components/sections/sections-Pensiones/PensionesSection'
import PensionesSection2 from '@/src/components/sections/sections-Pensiones/PensionesSection2'


export default function pagePensiones() {
    const infoSolucionesPension = {
        title: 'Soluciones para pensiones',
        description: (
            <>
            Nuestro software <span className='font-semibold'>está diseñado para fondos de pensiones, aseguradoras y entidades financieras que buscan transformar su gestión</span>  Con nuestras plataformas puedes administrar cesantías, pensiones obligatorias y voluntarias, y liquidar rentas vitalicias con total trazabilidad, eficiencia y cumplimiento normativo.
            </>
        ),
        buttonText: 'Habla con un experto en pensiones',
        breadcrumb: [
            { label: "Pensiones", href: "/pensiones" },
            { label: "Soluciones Pensiones" }
        ]
    }
  
  
return (
    <div>
      <Navbar />
      <Hero 
      title={infoSolucionesPension.title}
      description={infoSolucionesPension.description}
      buttonText={infoSolucionesPension.buttonText}
      breadcrumb={infoSolucionesPension.breadcrumb}
      />
      <PensionesSection />
      <PensionesSection2 />
      <Footer />
      <FooterBottom />
    </div>
  )
}
