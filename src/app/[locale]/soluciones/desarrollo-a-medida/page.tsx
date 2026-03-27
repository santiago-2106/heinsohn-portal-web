import type { Metadata } from "next";

// Componentes de la vista
import Hero from '@/src/components/sections/shared/hero/Hero'
import TetxSolutionsDigital from '@/src/components/sections/soluciones-digitales/TetxSolutionsDigital'
import CardSoftwreGeneric from '@/src/components/sections/soluciones-digitales/GenericSoftwareSection'
import ContactForm from '@/src/components/forms/formularios/ContactForm'
import CardEstrategicNegocio from '@/src/components/sections/soluciones-digitales/EstrategiaNegocioSection'
import ModelosDesarrollo from '@/src/components/sections/soluciones-digitales/ModelosDesarrollo'
import PreguntasFort from '@/src/components/forms/formularios/PreguntForm'
import Slider from '@/src/components/sliders/SliderBlog'

// Data Importada (Cronológica)
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

// Configuración de Metadatos para SEO y Web Vitals
export const metadata: Metadata = {
  title: "Desarrollo de Software a la Medida | Heinsohn",
  description: "Avanza con agilidad, seguridad y escalabilidad. Creamos soluciones únicas de software que se adaptan a tu negocio en Colombia y LATAM.",
  robots: "index, follow",
};

export default function DesarrolloAMedidaPage() {
  
  const t = useTranslations("desarrolloAMedida");
  
  return (
    <>  
        {/* 1. HERO */}
        <Hero 
        title={t("dataHeroDesarrolloAMedida.title")}
        description={t.rich("dataHeroDesarrolloAMedida.description", richText)}
        buttonText={t("dataHeroDesarrolloAMedida.buttonText")}
        breadcrumb={t.raw("dataHeroDesarrolloAMedida.breadcrumb")}
        />
        
        {/* 2. MÉTRICAS */}
        <section aria-label="Nuestra experiencia">
          <TetxSolutionsDigital />
        </section>

        {/* 3. BENEFICIOS */}
        <CardSoftwreGeneric/>
        
        {/* 4. FORMULARIO DE ENGAGEMENT */}
        <ContactForm title={t("titles.titleContactForm.title")} />
        
        {/* 5. ESTRATEGIA */}
        <CardEstrategicNegocio />
        
        {/* 6. MODELOS DE TRABAJO */}
        <ModelosDesarrollo />
        
        {/* 7. PREGUNTAS FRECUENTES */}
        <PreguntasFort 
          title={t("titles.PreguntasFrecuentes.title")} 
          items={t.raw("dataPreguntasFrecuentes")}
        />

        {/* 8. SLIDER BLOG */}
        <Slider 
        title={t("sliderDesarrolloAlaMedida.title")}
        data={t.raw("sliderDesarrolloAlaMedida.items")} />
    </>
  )
}