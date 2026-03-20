import { richText } from "@/src/hooks/helper/richText";

// Estilo reutilizable para que los íconos se vean delgados (light) y del tamaño correcto
const iconStyle = { fontVariationSettings: "'wght' 200, 'opsz' 48" };
const iconClass = "material-symbols-rounded text-[36px] text-text-title mb-2";

// =========================================================================
//  DATA HERO TRADUCIDA
// =========================================================================
export const dataHeroDesarrolloAMedida1 = (t: any) => ({
  title: t("dataHeroDesarrolloAMedida.title"),
  description: t.rich("dataHeroDesarrolloAMedida.description", richText),
  buttonText: t("dataHeroDesarrolloAMedida.buttonText"),
  breadcrumb: t.raw("dataHeroDesarrolloAMedida.breadcrumb"),
});

// =========================================================================
// INFORMACION DEL SLIDER DESARROLLO A MEDIDA
// =========================================================================
export const cardSliderWork = (t: any) => {
  // Extraemos los objetos crudos
  const work1 = t.raw("dataCardKnowOurWork");
  const work2 = t.raw("dataCardKnowOurWork2");

  return [
    {
      img: work1.imgKnowOurWork,
      title: work1.titleWork,
      description: work1.descriptionWork,
      btn: work1.textBtn
    },
    {
      img: work2.imgKnowOurWork,
      title: work2.titleWork,
      description: work2.descriptionWork,
      btn: work2.textBtn
    }
  ];
};


// =========================================================================
// PREGUNTAS FRECUENTES DESARROLLO A MEDIDA
// =========================================================================
export const preguntasDesarrolloAMedida = (t: any) => {
  // Obtenemos todo el array crudo del JSON
  const faqRaw = t.raw("dataPreguntasFrecuentes");

  return faqRaw.map((item: any, index: number) => ({
    // Si quieres que la pregunta soporte negritas o colores, 
    // puedes usar t.rich con el índice
    question: t.rich(`dataPreguntasFrecuentes.${index}.question`),
    
    // La respuesta la pasamos cruda para manejar el objeto interno
    answer: item.answer 
  }));
};



export const dataCardKnowOurWork = {
  imgKnowOurWork: "/img/edif.jpg",
  titleWork: "Transformación digital en el sector financiero",
  descriptionWork:
    "Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.",
  textBtn: "Conoce el caso completo",
};

export const dataCardKnowOurWork2 = {
  imgKnowOurWork: "/img/imgWorkKnow.jpg",
  titleWork: "Transformación de una plataforma de servicios de salud",
  descriptionWork:
    "Diseñamos una nueva experiencia digital para una plataforma de salud, mejorando la navegación, reorganizando los flujos...",
  textBtn: "Descubre cómo lo hicimos",
};

