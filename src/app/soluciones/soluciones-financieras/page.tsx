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

import {
  financialChallengesCards,
  financialSolutionsCards,
  experienceStatsData,
  financialFaqData,
} from "@/src/data/financiera";

export default function SolucionesFinanciero() {
  const dataFinanzas = {
    title: "Soluciones para el Sector Financiero",
    description:
      "Contamos con un portafolio de software especializado para banca, fintechs aseguradoras y entidades no bancarizadas que buscan liderar la transformación digital del sector financiero en LATAM. Nuestras soluciones permiten administrar créditos, obligaciones financieras, fondos de inversión y portafolios con total eficiencia, seguridad y cumplimiento normativo.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones para el sector financiero" },
    ],
  };

  const introRetos =
    "La industria financiera en Latinoamérica vive un momento decisivo. La digitalización, la presión regulatoria y la irrupción de nuevos actores están transformando la manera en que bancos, fintechs, aseguradoras y entidades no bancarizadas operan. Estos son algunos de los retos más urgentes:";
  const footerRetos =
    "Comprender estos desafíos es el primer paso para transformarlos en oportunidades. Por eso, contar con software especializado, seguro y escalable es clave para transformar estos desafíos en oportunidades de crecimiento";
  const btnRetos = "Descubre cómo enfrentamos estos retos en LATAM";

  return (
    <div>
      <Navbar />
      <Hero
        title={dataFinanzas.title}
        description={dataFinanzas.description}
        buttonText={dataFinanzas.buttonText}
        breadcrumb={dataFinanzas.breadcrumb}
      />

      <CardAnuncies
        title="Lo que enfrentan hoy las entidades financieras en la región"
        description={introRetos}
        cards={financialChallengesCards}
        cols={3}
        bottomText={footerRetos}
        bottomBtn={btnRetos}
      />

      <CardAnuncies
        title="Soluciones tecnológicas para créditos, fondos e inversiones"
        cards={financialSolutionsCards}
        cols={2}
      />

      <CardResult />

      <Clientes title="Nuestra experiencia en cifras" />

      <CardAnuncies title=" " cards={experienceStatsData} cols={2} />

      <Certificaciones title="Certificaciones internacionales" />

      <CardCases />
      <Slider />

      <PreguntasFort
        title="Preguntas frecuentes sobre software financiero"
        items={financialFaqData}
      />

      <ContactForm />

      <Footer />
      <FooterBottom />
    </div>
  );
}
