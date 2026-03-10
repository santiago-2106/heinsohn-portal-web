import React from "react";
import {
  softwareCards,
  analitycCards,
  enginerTeamCards,
  strategicConsultingCards,
} from "@/src/data/ti";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";

export default function CardFinal() {
  return (
    <>
      <CardAnuncies
        title="Ingenieria de software y Desarrollo de productos Digitales"
        cards={softwareCards}
      />

      <CardAnuncies
        title="Analítica de datos e inteligencia artificial"
        cards={analitycCards}
      />

      <CardAnuncies
        title="Ingeniería extendida y equipos dedicados"
        cards={enginerTeamCards}
      />

      <CardAnuncies
        title="Consultoria estrategica"
        cards={strategicConsultingCards}
      />
    </>
  );
}
