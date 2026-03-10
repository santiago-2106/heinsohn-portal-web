import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import StaffArgumentationSection from "@/src/components/sections/staff-augmentation/StaffAugmentationSection";
import StaffArgumentationSection2 from "@/src/components/sections/staff-augmentation/StaffAugmentationSection2";
import Mapa from "@/src/components/sections/mapa/Mapa";
import { paisesStaffArgumentation } from "@/src/data/mapa";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import { dataPreguntasFrecuentesStaff } from "@/src/data/staff-augmentation";
import ButtonComponent from "@/src/components/ui/buttons/Button";

export default function page() {
  const infoStaffArgumentation = {
    title: "Staff Argumentation TI",
    description: (
      <>
        Fortalece tus operaciones con nuestro servicio de
        staff augmentation diseñado con base en experiencia, análisis y
        comprensión de tu negocio. En Heinsohn, contamos con equipos técnicos a
        la medida de tus objetivos, integrando expertos en desarrollo de
        software, QA, datos, arquitectura e inteligencia artificial. 
        <br />
        <span className="font-semibold text-gary-800">
          Optimiza costos, escala capacidades y acelera tus entregas con un
          modelo flexible, transparente y alineado a tus zonas horarias. 
        </span>

        <ul className="flex flex-col gap-3 mt-2">
        <li className="flex items-start gap-2">
          <strong className=" font-bold">
            <span className="text-brand-accent">+</span>45
          </strong>
          <span>
            años de experiencia en soluciones tecnológicas empresariales.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span>
            <span className="font-bold">Equipos</span> multidisciplinarios para integrarse a tus operaciones
          </span>
        </li>
      </ul>
      </>
    ),
    buttonText: "Arma tu equipo ideal ahora",
    breadcrumb: [
      { label: "staff argumentation", href: "/staff-argumentation" },
      { label: "soluciones staff argumentation" },
    ],
  };

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
      showIcon
      title="Tiempo promedio de vinculacion"
      descripcion="2 a 3 semanas."
      imgMap="/img/mapa-staff2.png"
      paises={paisesStaffArgumentation}
      />
      <ButtonComponent textoBtn=" Empieza tu hoja de ruta AI personalizada" />
      <PreguntForm title="Preguntas frecuentes" items={dataPreguntasFrecuentesStaff}/>
      <Footer />
      <FooterBottom />
    </>
  );
}
