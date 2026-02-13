// sections/CapabilitiesSection.tsx

import FeatureCard from "@/src/components/ui/cardsSolutDigitalIS/CardFeatures"
import TextComponent from "../textsComponent/TextComponent"
import { TextSolucionDigtal21 } from "../../data/textComponentData/dataTextComponent"

export default function CardSoftwreGeneric() {

  const data = [
    {
      title: "Diseño centrado en el usuario (UX/UI)",
      description: "Validamos MVPs desde la primera iteración para asegurar claridad de producto. "
    },
    {
      title: "Arquitecturas modernas",
      description: "Microservicios, Cloud y Serverless que garantizan flexibilidad y escalabilidad en el tiempo. ."
    },
    {
      title: "Industrialización con IA",
      description: "Aplicamos Inteligencia Artificial en codificación y QA para reducir tiempos de entrega y errores. "
    },
    {
      title: "DevSecOps integrado",
      description: "Seguridad, calidad y automatización presentes en todo el ciclo de desarrollo. "
    },
    {
      title: "Soporte multicloud",
      description: "Experiencia con Azure, AWS y Google Cloud para proyectos en cualquier entorno. "
    },
    {
      title: "Integración abierta",
      description: "Conectamos tu software con ERP, CRM, Core bancario y plataformas como SAP o Salesforce. "
    },
    {
      title: "Soporte multicloud",
      description: "Menos riesgos, mayor confiabilidad en la operación crítica. "
    },
    {
      title: "Soporte multicloud",
      description: "Adaptamos el marco de trabajo a la cultura y necesidades de cada cliente."
    },
    {
      title: "Soporte multicloud",
      description: "Arquitectos, desarrolladores, DevOps, QA, BI y UX/UI que trabajan como una extensión de tu organización."
    },
    
  ]

  return (
   <>
   <TextComponent title={TextSolucionDigtal21.title} description={TextSolucionDigtal21.description}/>
    <section className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-3 mx-auto max-w-4xl">
      {data.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
    <div className="flex justify-center py-8 px-4">
        <button className="bg-black text-white text-base font-medium py-4 px-10 rounded-full">Conversa con un consultor y evalua tu proximo MVP</button>
    </div>
   </>
  )
}
