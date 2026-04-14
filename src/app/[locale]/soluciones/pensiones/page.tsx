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
import mapRich from "@/src/hooks/mapRich";
import { mapResultados } from "@/src/components/sections/pensiones/mapResultados";

export default function PagePensiones() {

  const t = useTranslations("pensiones")

  const cardPensions3 = mapRich(t, "cardPensiones3")


  //CARD Resultados que nos respaldan
  const dataPension1 = t.raw("cardsPensiones1")
  const cardPensions1 = mapResultados(dataPension1)


  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">
      
      {/* 1. HERO */}
      <Hero
        title={t("dataHeroPensiones.title")}
        description={t.rich("dataHeroPensiones.description", richText)}
        buttonText={t("dataHeroPensiones.buttonText")}
        breadcrumb={t.raw("dataHeroPensiones.breadcrumb")}
        badges={t.raw("dataHeroPensiones.badges")}
        showImage={true} 
      />
      
      {/* 2. MÉTRICAS 1 */}
      <CardResultados title="Resultados Corporativos" data={cardPensions1} />

      {/* 3. RETOS DEL SISTEMA */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones1.title", richText)}
        description={t.rich("titlesPensiones.titlePensiones1.description", richText)}
        cards={t.raw("cardsPensiones2.cards")}
        cols={2}
        bottomText={t.raw("cardsPensiones2.bottomText")}
        bottomBtn={t.raw("cardsPensiones2.bottomBtn")}
      />
      

      {/* 6. MÓDULOS DE SOLUCIONES */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones3.title", richText)}
        description={t.rich("titlesPensiones.titlePensiones3.description", richText)}
        cards={cardPensions3}
        cols={1}
        alignHeader="left"
      />

      {/* 7. DIFERENCIADORES */}
      <CardAnuncies
        title={t.rich("titlesPensiones.titlePensiones4.title", richText)}
        cards={t.raw("informacionPensiones5")}
        cols={2}
      />
      
      {/*  8. RESULTADOS 2 - TÍTULO, Y MÉTRICAS 2 */}
      <CardResultados title={t.rich("titlesPensiones.titlePensiones5.title", richText)} data={t.raw("infoPensiones6")} />

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
        title={t.rich("titlesPensiones.titlePensiones8.title", richText)} 
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