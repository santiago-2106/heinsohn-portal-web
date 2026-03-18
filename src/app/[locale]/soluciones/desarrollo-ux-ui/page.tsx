import type { Metadata } from "next";
// Componentes de la Vista
import Hero from "@/src/components/sections/shared/hero/Hero";
import UxImgUrl from "@/src/components/forms/uploads-Img-Url/UxImgUrl";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import CardSd from "@/src/components/sections/soluciones-digitales/PricingSection";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import TextTeam from "@/src/components/sections/soluciones-digitales/TeamSection";
import SliderSolDigital from "@/src/components/sliders/SliderCards";

import { 
  dataUXConsultorias, 
  dataTextDesarrolloUx, 
  dataCardKnowOurWork2 
} from "@/src/data/soluciones/share/textosGenerales";
import { cardSlider2 } from "@/src/data/soluciones/share/slider";
import { softwareCards } from "@/src/data/soluciones/share/textosGenerales";

// Optimización SEO y Web Vitals
export const metadata: Metadata = {
  title: "Consultoría UX-UI | Heinsohn",
  description: "Diseñamos experiencias digitales centradas en las personas. Creamos interfaces funcionales, atractivas y accesibles para conectar con tus usuarios.",
  robots: "index, follow",
};

export default function SolucionDigital() {
  return (
    <>
      
      
      {/* Contenedor Semántico Principal para SEO */}
      <main>
        
        {/* 1. HERO */}
        <Hero
          title={dataUXConsultorias.title}
          description={dataUXConsultorias.description}
          buttonText={dataUXConsultorias.buttonText}
          breadcrumb={dataUXConsultorias.breadcrumb}
        />
        
        {/* 2. INTERACTIVIDAD UX */}
        <UxImgUrl />
        
        {/* 3. TEXTO INTRODUCTORIO */}
        <TextComponent
          title={dataTextDesarrolloUx.title}
          description={dataTextDesarrolloUx.description}
        />
        
        {/* 4. PLANES / PRICING */}
        <CardSd />
        
        {/* 5. FORMULARIO DE CONTACTO */}
        <ContactForm title="" />
        
        {/* 6. CASOS DE ESTUDIO */}
        <CardCases {...dataCardKnowOurWork2}/>
        
        {/* 7. SLIDER DEL BLOG */}
        <Slider data={cardSlider2}/>
        
        {/* 8. SECCIÓN DEL EQUIPO */}
        <TextTeam />
        
        {/* 9. PRODUCTOS RELACIONADOS */}
        <SliderSolDigital 
          title="Productos relacionados" 
          cards={softwareCards}
        />
        
      </main>
      
    </>
  );
}