import React from "react";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import TextComponent from "../../ui/typography/TextComponent";
import ButtonComponent from "../../ui/buttons/Button";
import PreguntForm from "../../forms/formularios/PreguntForm";

interface PensionesSection2Props {
  dataFaq: any[];
}

export default function PensionesSection2({ dataFaq }: PensionesSection2Props) {
  return (
    <section className="pb-16 pt-8">
      
      {/* Certificaciones */}
      <CertificacionesInternacionales 
        title="Certificaciones Internacionales" 
        imagen="/img/certificacionInternacional.png" 
      />

      {/* Banner de Respaldo */}
      <div className="mt-8 mb-16 px-4">
        <p className="text-text-body text-center text-xl md:text-2xl font-light"> 
          Sin compromiso | Respaldo en <span className="text-brand-accent font-medium">+</span>7 Países | <span className="text-brand-accent font-medium">+</span>12 millones de afiliados administrativos 
        </p> 
      </div>

      {/* Llamado a la acción (CTA) */}
      <div className="mb-20"> 
        <TextComponent 
          title="Moderniza la gestión de tu sistema de pensiones" 
          description="Transforma la administración de pensiones en tu entidad y asegura cumplimiento en cada auditoría" 
        /> 
        <div className="flex justify-center mt-8">
          <ButtonComponent textoBtn="Conversa con un especialista en pensiones" /> 
        </div>
      </div> 

      {/* Preguntas Frecuentes */}
      <div className="bg-bg-card-1 py-16 border-t border-border-ui">
        <PreguntForm title='Preguntas frecuentes' items={dataFaq}/>
        <div className="flex justify-center mt-12">
          <ButtonComponent textoBtn="Conversa con un especialista en pensiones" /> 
        </div>
      </div>
      
    </section>
  );
}