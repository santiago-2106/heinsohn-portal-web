import Navbar from "@/src/components/layout/navbar/Navbar";
import CardCases from "@/src/components/sections/shared/sectioncard/SectionCases";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardFinal from "@/src/components/sections/ti/TiSolutionsSection";
import Slider from "@/src/components/sliders/SliderBlog";
import { dataCardKnowOurWork } from "@/src/data/desarrollo-a-medida";
import { cardSlider1 } from "@/src/data/share/slider";

export default function PageSolucionesTI() {
  const dataTI = {
    title: "Soluciones TI",
    description: "Transformamos la tecnología en valor para tu negocio.",
    buttonText: "Solicita una asesoría gratuita",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones TI" },
    ],
  };

  return (
    <div>
      <Navbar />
      <Hero
        title={dataTI.title}
        description={dataTI.description}
        buttonText={dataTI.buttonText}
        breadcrumb={dataTI.breadcrumb}
      />
      <CardFinal />
      <CardCases {...dataCardKnowOurWork}/>
      <Slider data={cardSlider1}/>
      <ContactForm />
      <Footer />
      <FooterBottom />
    </div>
  );
}
