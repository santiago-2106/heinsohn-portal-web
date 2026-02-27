import Footer from "@/src/components/layout/footer/Footer"
import FooterBottom from "@/src/components/layout/footer/FooterBottom"
import Navbar from "@/src/components/layout/navbar/Navbar"
import Hero from "@/src/components/sections/Hero"
import StaffArgumentationSection from "@/src/components/sections/section-Staff-Argumentation/StaffArgumentationSection"
import StaffArgumentationSection2 from "@/src/components/sections/section-Staff-Argumentation/StaffArgumentationSection2"
import Mapa from "@/src/components/ui/Map/Mapa"


export default function page() {
    const infoStaffArgumentation = {
        title:'Staff Argumentation TI',
        description: (
            <>
            Fortalece tus operaciones con nuestro servicio de staff augmentation diseñado con base en experiencia, análisis y comprensión de tu negocio. En Heinsohn, contamos con equipos técnicos a la medida de tus objetivos, integrando expertos en desarrollo de software, QA, datos, arquitectura e inteligencia artificial. 
            <br />
            <span className="font-semibold text-gary-800">Optimiza costos, escala capacidades y acelera tus entregas con un modelo flexible, transparente y alineado a tus zonas horarias. </span>
            </>
        ),
        buttonText: 'Arma tu equipo ideal ahora',
        breadcrumb: [
            {label:'staff argumentation', href:'/staff-argumentation'},
            {label:'soluciones staff argumentation'}
        ]
        
    }

  return (
    <>
      <Navbar />
      <Hero 
      title={infoStaffArgumentation.title}
      description={infoStaffArgumentation.description}
      buttonText={infoStaffArgumentation.buttonText}
      breadcrumb={infoStaffArgumentation.breadcrumb}
      />
      <StaffArgumentationSection />
      <StaffArgumentationSection2 />
      <Mapa 
      title="Tiempo promedio de vinculacion"
      descripcion="2 a 3 semanas."
      imgMap="/img/mapa-staff2.png"
      />
      <Footer />
      <FooterBottom />
    </>
  )
}
