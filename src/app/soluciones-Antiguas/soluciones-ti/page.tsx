import type { Metadata } from "next";

// Componentes de la Vista
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardFinal from "@/src/components/sections/ti/TiSolutionsSection";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

// Importación de Datos
import { dataTI } from "@/src/data/soluciones/ti/index"; // <- Asegúrate de que apunte a tu nueva ruta
import { dataCardKnowOurWork } from "@/src/data/soluciones/desarrollo-a-medida"; // O donde lo hayas dejado
import { cardSlider1 } from "@/src/data/soluciones/share/slider";

// Optimización SEO y Web Vitals
export const metadata: Metadata = {
  title: "Soluciones TI | Heinsohn",
  description: "Transformamos la tecnología en valor para tu negocio con soluciones de Business Intelligence, IA, Cloud y modernización de infraestructura.",
  robots: "index, follow",
};

export default function PageSolucionesTI() {
  return (
    <>
      <Hero
        title={dataTI.title}
        description={dataTI.description}
        buttonText={dataTI.buttonText}
        breadcrumb={dataTI.breadcrumb}
      />
      
      <CardFinal />
      
      <CardCases {...dataCardKnowOurWork} />
      
      <Slider data={cardSlider1} />
      
      <ContactForm title={undefined} />
    </>
  );
}