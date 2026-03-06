import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import Hero from "@/src/components/sections/shared/hero/Hero";
import TextSections from "@/src/components/ui/typography/TextSections";
import { dataLandignHGS } from "@/src/data/landing-hgs";
import SectionLandingHgs from "@/src/components/sections/landing-hgs/SectionLandingHgs";
import SectionLandingHgs2 from "@/src/components/sections/landing-hgs/SectionLandingHgs2";
 
export default function SolucionesLandign() {
  const dataTI = {
    title: "Human Global Solutions",
    subtitle: (<>Una empresa <span className="text-brand-accent">heinsohn</span></>),
    description: (<>
    <span className="font-semibold">Heinsohn Human Global Solutions</span> es la empresa líder en soluciones de <span className="font-semibold">Nómina y Gestión Humana</span> en la región, con más de <span className="font-semibold">45 años de experiencia</span> transformando la manera en que las organizaciones gestionan su talento humano. Como parte del grupo empresarial Heinsohn, somos una <span className="font-semibold">empresa de base tecnológica</span> que combina innovación, conocimiento profundo del negocio y alcance regional para ofrecer soluciones de última generación.
    </>),
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
        subtitle={dataTI.subtitle}
        description={dataTI.description}
        buttonText={dataTI.buttonText}
        breadcrumb={dataTI.breadcrumb}
      />
      <TextSections items={dataLandignHGS}/>
      <SectionLandingHgs />
      <SectionLandingHgs2 />
      <Footer />
      <FooterBottom />
    </div>
  );
}