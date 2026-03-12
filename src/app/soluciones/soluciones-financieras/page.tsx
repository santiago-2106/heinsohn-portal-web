import Navbar from "@/src/components/layout/navbar/Navbar";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import Hero from "@/src/components/sections/shared/hero/Hero";
import Slider from "@/src/components/sliders/SliderBlog";
import CardResult from "@/src/components/sections/shared/sectioncard/SectionResults";
import PreguntasFort from "@/src/components/forms/formularios/PreguntForm";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import Certificaciones from "@/src/components/sections/shared/certificaciones/Certificaciones";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";

// Importamos TODA la data desde tu archivo centralizado
import {
  financialChallengesCards,
  financialSolutionsCards,
  experienceStatsData,
  financialFaqData,
  dataFinanzas,
  introRetos,
  footerRetos,
  btnRetos,
  entitiesData,
} from "@/src/data/financiera";

export default function SolucionesFinanciero() {
  return (
    <div>
      <Hero
        title={dataFinanzas.title}
        description={dataFinanzas.description}
        buttonText={dataFinanzas.buttonText}
        breadcrumb={dataFinanzas.breadcrumb}
        badges={dataFinanzas.badges} // <-- Pasamos los badges por props
        isUppercase={false}          // <-- Apagamos las mayúsculas forzadas del título
      />

      <CardAnuncies
        title ={entitiesData.title}
        description={introRetos.description}
        cards={financialChallengesCards}
        cols={3}
        bottomText={footerRetos}
        bottomBtn={btnRetos}
      />

      <CardAnuncies
        title={
      <>Soluciones tecnológicas para créditos,<br className="hidden md:block" />fondos e inversiones</>
    }
        cards={financialSolutionsCards}
        cols={2}
      />

      <CardResult />

      <Clientes title="Nuestra experiencia en cifras" />

      <CardAnuncies title=" " cards={experienceStatsData} cols={2} />

      <CertificacionesInternacionales title="Certificaciones internacionales" />

      <CardCases />
      <Slider />

      <PreguntasFort
        title="Preguntas frecuentes sobre software financiero"
        items={financialFaqData as any} // <-- Solución al conflicto de tipos de FaqAnswer
      />

      <ContactForm  title={
      <>Transforma la gestion<br className="hidden md:block" />financiera de tu empresa</>
    }/>

    </div>
  );
}