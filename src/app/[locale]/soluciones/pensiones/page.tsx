import React from "react";
import Hero from "@/src/components/sections/shared/hero/Hero";
import PensionesSection from "@/src/components/sections/pensiones/PensionesSection";
import PensionesSection2 from "@/src/components/sections/pensiones/PensionesSection2";

// Importamos TODA la data centralizada
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

export default function pagePensiones() {
  return (
    <div className="bg-bg-main min-h-screen transition-colors duration-300">
      
      {/* 1. HERO (Con imagen encendida) */}
      <Hero
        title={infoSolucionesPension.title}
        description={infoSolucionesPension.description}
        buttonText={infoSolucionesPension.buttonText}
        breadcrumb={infoSolucionesPension.breadcrumb}
        showImage={true} 
      />
      
      {/* 2. SECCIÓN 1 (Le pasamos los títulos y los datos exactos) */}
      <PensionesSection 
        dataResultados1={infoPensiones1}
        textoDesafios={textoDesafios}
        dataDesafios={infoPensiones2}
        textoModulos={textoModulos}
        dataModulos={infoPensiones3}
        textoDiferenciadores={textoDiferenciadores}
        dataDiferenciadores={informacionPensiones5}
        textoResultados2={textoResultados2}
        dataResultados2={infoPensiones6}
      />
      
      {/* 3. SECCIÓN 2 (Preguntas frecuentes y cierre) */}
      <PensionesSection2 
        dataFaq={dataPreguntasFrecuentesPensiones}
      />
      
    </div>
  );
}