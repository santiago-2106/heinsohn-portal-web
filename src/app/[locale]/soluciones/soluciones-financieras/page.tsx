import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import CardResult from "@/src/components/sections/shared/sectioncard/SectionResults";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import PreguntasFort from "@/src/components/forms/formularios/PreguntForm";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import { dataResultadosFinanciera } from "@/src/data/soluciones/financiera";
import { cardSlider1 } from "@/src/data/soluciones/share/slider";

// Data Centralizada
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
  dataCasosFinanciera,
  titlesFinanciera // <-- Importamos los nuevos títulos centralizados
} from "@/src/data/soluciones/financiera";

// Optimización SEO
export const metadata: Metadata = {
  title: "Soluciones Sector Financiero | Heinsohn",
  description: "Software especializado para banca, fintechs y aseguradoras. Administra créditos, obligaciones financieras, fondos de inversión y portafolios en LATAM.",
  robots: "index, follow",
};

export default function SolucionesFinanciero() {
  return (
    <>
      <Hero
        title={dataFinanzas.title}
        description={dataFinanzas.description}
        buttonText={dataFinanzas.buttonText}
        breadcrumb={dataFinanzas.breadcrumb}
        badges={dataFinanzas.badges} 
        isUppercase={false}          
      />

      <CardAnuncies
        title={entitiesData.title}
        description={introRetos.description}
        cards={financialChallengesCards}
        cols={3}
        bottomText={footerRetos}
        bottomBtn={btnRetos}
      />

      <CardAnuncies
        title={titlesFinanciera.soluciones}
        cards={financialSolutionsCards}
        cols={2}
      />

      {/* Si CardResult lleva data, deberías pasarla igual, por ahora lo dejamos como está */}
     <CardResult {...dataResultadosFinanciera} />

      <Clientes title={titlesFinanciera.clientes} />

      <CardAnuncies 
        title={titlesFinanciera.statsVacio} 
        cards={experienceStatsData} 
        cols={2} 
      />

      <CertificacionesInternacionales title={titlesFinanciera.certificaciones} />

      <CardCases {...dataCasosFinanciera} />
      
      <Slider title="blog destacado" data={cardSlider1} />

      <PreguntasFort
        title={titlesFinanciera.faq}
        items={financialFaqData as any} 
      />

      <ContactForm title={titlesFinanciera.contacto}/>
    </>
  );
}