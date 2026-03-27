import React from "react";

// 1. IMPORTAMOS COMPONENTES
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardResultados from "@/src/components/sections/shared/sectioncard/CardResultados";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import ButtonComponent from "@/src/components/ui/buttons/Button";
import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";

// 2. INTERNACIONALIZACIÓN
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

export default function PagePensiones() {

  const t = useTranslations("pensiones")

  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">
      
      {/* 1. HERO */}
      <Hero
        title={t("dataHeroPensiones.title")}
        description={t.rich("dataHeroPensiones.description", richText)}
        buttonText={t("dataHeroPensiones.buttonText")}
        breadcrumb={t.raw("dataHeroPensiones.breadcrumb")}
        showImage={true} 
      />
      
      {/* 2. MÉTRICAS 1 */}
      <CardResultados data={t.raw("cardsPensiones1")} />

      {/* 3. RETOS DEL SISTEMA */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones1.title", richText)}
        description={t.rich("titlesPensiones.titlePensiones1.description", richText)}
        cards={t.raw("cardsPensiones2")}
        cols={2}
      />

      {/* 4. TEXTO COMPLEMENTARIO */}
      <TextComponent 
        description={t("titlesPensiones.titlePensiones2.description")}
      />
      
      {/* 5. BOTÓN CTA */}
      <center className="mb-12">
        <ButtonComponent textoBtn={t("buttonsPensiones.buttonPensiones1")} />
      </center>

      {/* 6. MÓDULOS DE SOLUCIONES */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones3.title", richText)}
        description={t.rich("titlesPensiones.titlePensiones3.description", richText)}
        cards={t.raw("cardPensiones3")}
        cols={1}
        alignHeader="left"
      />

      {/* 7. DIFERENCIADORES */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones4.title", richText)}
        cards={t.raw("informacionPensiones5")}
        cols={2}
      />

      {/* 8. RESULTADOS 2 - TÍTULO */}
      <TextComponent title={t("titlesPensiones.titlePensiones5.title")} />
      
      {/* 9. MÉTRICAS 2 */}
      <CardResultados data={t.raw("infoPensiones6")} />

      {/* 10. CERTIFICACIONES */}
      <CertificacionesInternacionales 
        title={t("titlesPensiones.titlePensiones6.title")} 
        imagen="/img/certificacionInternacional2.png" 
      />

      {/* 11. TEXTO RESPALDO */}
      <TextComponent 
        description={t("titlesPensiones.titlePensiones7.description")} 
      />

      {/* 12. CTA FINAL */}
      <TextComponent 
        title={t("titlesPensiones.titlePensiones8.title")} 
        description={t("titlesPensiones.titlePensiones8.description")} 
      /> 
      
      <center className="mb-12">
        <ButtonComponent textoBtn={t("buttonsPensiones.buttonPensiones2")} /> 
      </center>

      {/* 13. PREGUNTAS FRECUENTES */}
      <PreguntForm 
        title={t("titlesPensiones.PreguntasFrecuentes.title")}
        items={t.raw("dataPreguntasFrecuentesPensiones")}
      />
      
      <center className="my-12">
        <ButtonComponent textoBtn={t("buttonsPensiones.buttonPensiones3")} /> 
      </center>

    </main>
  );
}