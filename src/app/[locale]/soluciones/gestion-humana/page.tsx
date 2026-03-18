import type { Metadata } from "next";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";
import SolucionesGestionH from "@/src/components/sections/gestion-humana/SolucionesGestionH";
import SoluciongestionH2 from "@/src/components/sections/gestion-humana/SolucionGestionH2";
import CardProductSection from "@/src/components/sections/gestion-humana/ProductSection";
import ContactForm from "@/src/components/forms/formularios/ContactForm";
import TextTeam from "@/src/components/sections/soluciones-digitales/TeamSection";

// Data Centralizada
import { infoGestionHumanaHero } from "@/src/data/soluciones/gestion-humana";

// Optimización SEO
export const metadata: Metadata = {
  title: "Gestión Humana y Nómina | Heinsohn",
  description: "Servicios en gestión del talento humano. Creamos un impacto positivo con soluciones tecnológicas, servicios de asesoría y operación de nómina para empresas.",
  robots: "index, follow",
};

export default function GestionHumanaPage() {
  return (
    <>
      <Hero
        title={infoGestionHumanaHero.title}
        description={infoGestionHumanaHero.description}
        buttonText={infoGestionHumanaHero.buttonText}
        breadcrumb={infoGestionHumanaHero.breadcrumb}
        showImage={false}
      />
      
      {/* Verifica que estos componentes reciban la data internamente o pásasela por props si es necesario */}
      <SolucionesGestionH />
      
      <SoluciongestionH2 />
      
      <CardProductSection />
      
      <TextTeam />
      
      <ContactForm title={<>Optimiza tu gestión<br className="hidden md:block"/> humana hoy</>} />
    </>
  );
}