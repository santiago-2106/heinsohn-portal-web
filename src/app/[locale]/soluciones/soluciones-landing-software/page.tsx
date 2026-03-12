import PreguntasFort from "@/src/components/forms/formularios/PreguntForm";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import Navbar from "@/src/components/layout/navbar/Navbar";
import SectionLandingSoftware from "@/src/components/sections/landing-hgs/SectionLandingSoftware";
import Mapa from "@/src/components/sections/mapa/Mapa";
import Clientes from "@/src/components/sections/shared/clientes/Clientes";
import Hero from "@/src/components/sections/shared/hero/Hero";
import SliderTestimonial from "@/src/components/sliders/SliderTestimonial";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import { testimonialsSlider } from "@/src/data/soluciones/landing-hgs";
import { HeroLandingSoftware, titleLandingSoftware } from "@/src/data/soluciones/landing-software";
import { paisesLandingSoftware } from "@/src/data/soluciones/mapa";
import { dataPreguntasFrecuentes } from "@/src/data/soluciones/desarrollo-a-medida";



export default function PageLandingSoftware () {
    return (
        <>
        <Hero 
        title={HeroLandingSoftware.title}
        subtitle={HeroLandingSoftware.subtitle}
        description={HeroLandingSoftware.description}
        breadcrumb={HeroLandingSoftware.breadCrumb}
        buttonText={HeroLandingSoftware.buttonText}
        />
        <Clientes 
        title="Clientes"
        description='Organizaciones líderes que confían en nuestras soluciones para transformar sus operaciones y alcanzar nuevos niveles de excelencia.'
        />
        <TextComponent 
        title={titleLandingSoftware.title}
        description={titleLandingSoftware.description}
        />
        <SectionLandingSoftware />
        <Mapa 
        title="La mejor solución para tu operacion multinacional"
        imgMap="/img/mapa-landing-software.png"
        paises={paisesLandingSoftware}
        showIcon={false}
        showCoberturaTitle={false}
        />
        <PreguntasFort title="Preguntas frecuentes" items={dataPreguntasFrecuentes}/>

        </>
    )
}