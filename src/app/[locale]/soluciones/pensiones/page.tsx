import React from "react";

// 1. IMPORTAMOS COMPONENTES
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardResultados from "@/src/components/sections/shared/sectioncard/CardResultados";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import ButtonComponent from "@/src/components/ui/buttons/Button";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";

// 2. IMPORTAMOS LA DATA
import { 
  infoSolucionesPension,
  infoPensiones1,
  textoDesafios,
  infoPensiones2,
  textoModulos,
  infoPensiones3,
  textoDiferenciadores,
  informacionPensiones5,
  textoResultados2,
  infoPensiones6,
  dataPreguntasFrecuentesPensiones
} from "@/src/data/soluciones/pensiones/index";

export default function PagePensiones() {
  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">
      
      <Hero
        title={infoSolucionesPension.title}
        description={infoSolucionesPension.description}
        buttonText={infoSolucionesPension.buttonText}
        breadcrumb={infoSolucionesPension.breadcrumb}
        showImage={true} 
      />
      
      <CardResultados data={infoPensiones1} />

      <CardAnuncies
        title={textoDesafios.title}
        description={textoDesafios.description}
        cards={infoPensiones2}
        cols={2}
      />

      <TextComponent 
        description="Con nuestras soluciones para pensiones obtienes software escalable y seguro, alineados a la regulación y pensadas para garantizar confianza y sostenibilidad." 
      />
      
      {/* Botón centrado limpiamente */}
      <center className="mb-12">
        <ButtonComponent textoBtn="Explora nuestras soluciones en pensiones" />
      </center>

      <CardAnuncies
  title={textoModulos.title}
  description={textoModulos.description}
  cards={infoPensiones3}
  cols={1}
  alignHeader="left" // <--- Agrega esta línea para liberar las restricciones
/>

      <CardAnuncies
        title={textoDiferenciadores.title}
        cards={informacionPensiones5}
        cols={2}
      />

      <TextComponent title={textoResultados2.title} />
      
      <CardResultados data={infoPensiones6} />

      <CertificacionesInternacionales 
        title="Certificaciones Internacionales" 
        imagen="/img/certificacionInternacional2.png" 
      />

      <TextComponent 
        description="Sin compromiso | Respaldo en +7 Países | +12 millones de afiliados administrativos" 
      />

      <TextComponent 
        title="Moderniza la gestión de tu sistema de pensiones" 
        description="Transforma la administración de pensiones en tu entidad y asegura cumplimiento en cada auditoría" 
      /> 
      
      <center className="mb-12">
        <ButtonComponent textoBtn="Conversa con un especialista en pensiones" /> 
      </center>

      <PreguntForm 
        title="Preguntas frecuentes" 
        items={dataPreguntasFrecuentesPensiones}
      />
      
      <center className="my-12">
        <ButtonComponent textoBtn="Conversa con un especialista en pensiones" /> 
      </center>

    </main>
  );
}