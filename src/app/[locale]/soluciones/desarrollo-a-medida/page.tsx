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
import { 
  cardSliderWork,
  dataHeroDesarrolloAMedida1,
  preguntasDesarrolloAMedida
} from '@/src/data/soluciones/desarrollo-a-medida' 

import { cardSlider2 } from '@/src/data/soluciones/share/slider'
import { useTranslations } from "next-intl";

// Configuración de Metadatos para SEO y Web Vitals
export const metadata: Metadata = {
  title: "Desarrollo de Software a la Medida | Heinsohn",
  description: "Avanza con agilidad, seguridad y escalabilidad. Creamos soluciones únicas de software que se adaptan a tu negocio en Colombia y LATAM.",
  robots: "index, follow",
};

export default function DesarrolloAMedidaPage() {
  
  const t = useTranslations("desarrolloAMedida");

const heroDesarrolloAMedidaHero = dataHeroDesarrolloAMedida1 (t);

const preguntasFrecuentesDesarrolloAMedida = preguntasDesarrolloAMedida(t)

const sliderDesarrolloAMedida = cardSliderWork(t)

  return (
    <>  
        {/* 1. HERO */}
        <Hero {...heroDesarrolloAMedidaHero}/>
        
        {/* 2. MÉTRICAS */}
        <section aria-label="Nuestra experiencia">
          <TetxSolutionsDigital />
        </section>

        {/* 3. BENEFICIOS */}
        <CardSoftwreGeneric/>
        
        {/* 4. FORMULARIO DE ENGAGEMENT */}
        <ContactForm title=" ¿Tienes un proyecto en mente?" />
        
        {/* 5. ESTRATEGIA */}
        <CardEstrategicNegocio />
        
        {/* 6. MODELOS DE TRABAJO */}
        <ModelosDesarrollo />
        
        {/* 7. PREGUNTAS FRECUENTES */}
        <PreguntasFort 
          title='Preguntas Frecuentes' 
          items={preguntasFrecuentesDesarrolloAMedida}
        />

        {/* 8. SLIDER BLOG */}
        <Slider data={sliderDesarrolloAMedida} />
    </>
  )
}