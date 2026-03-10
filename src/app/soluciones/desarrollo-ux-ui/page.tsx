import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/sections/shared/hero/Hero";
import UxImgUrl from "@/src/components/forms/uploads-Img-Url/UxImgUrl";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import { dataTextComponent, dataTextDesarrolloUx } from "@/src/data/share/textosGenerales";
import CardSd from "@/src/components/sections/soluciones-digitales/PricingSection";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Slider from "@/src/components/sliders/SliderBlog";
import TextTeam from "@/src/components/sections/soluciones-digitales/TeamSection";
import Footer from "@/src/components//layout/footer/Footer";
import FooterBottom from "@/src/components//layout/footer/FooterBottom";
import SliderSolDigital from "@/src/components/sliders/SliderCards";
import { softwareCards } from "@/src/data/ti";
import PreguntasFort from "@/src/components/forms/formularios/PreguntForm";
import { dataCardKnowOurWork, dataCardKnowOurWork2 } from "@/src/data/soluciones-digitales";
import { cardSlider1, cardSlider2 } from "@/src/data/share/slider";

export default function SolucionDigital() {
  const dataUXConsultorias = {
    title: "Consultoría UX-UI Diseño y desarrollo de experiencias de usuario",
    description:(
    <>
    <span className="font-bold">Creamos experiencias digitales</span> centradas en las personas, con interfaces funcionales, atractivas y accesibles.
    </>
    ),
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones-digitales" },
      { label: "Consultoría UX-UI Diseño y desarrollo de experiencias de usuario" },
    ],
  };

  return (
    <>
      <Navbar />
      <Hero
        title={dataUXConsultorias.title}
        description={dataUXConsultorias.description}
        buttonText={dataUXConsultorias.buttonText}
        breadcrumb={dataUXConsultorias.breadcrumb}
      />
      <UxImgUrl />
      <TextComponent
        title={dataTextDesarrolloUx.title}
        description={dataTextDesarrolloUx.description}
      />
      <CardSd />
      <ContactForm />
      <CardCases {...dataCardKnowOurWork2}/>
      <Slider data={cardSlider2}/>
      <TextTeam />
      <SliderSolDigital title="Productos relacionados" cards={softwareCards}/>
      
      <Footer />
      <FooterBottom />
    </>
  );
}
