import React from "react";
import CardGestionHumana from "@/src/components/ui/cards/CardGestionHumana";
import { propsGestionHumana } from "../../../types/typesGestionHumana";

interface SectionProps {
  title: string;
  description: string | React.ReactNode;
  cards: propsGestionHumana[];
}

export default function SectionGestionHumana({
  title,
  description,
  cards,
}: SectionProps) {
  return (
    <section className="bg-bg-main py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Encabezado de la sección */}
        <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6 max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-text-body text-base md:text-lg font-light mb-16 max-w-4xl mx-auto whitespace-pre-line leading-relaxed">
          {description}
        </p>

        {/* Grilla dinámica de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {cards.map((card, index) => (
            <CardGestionHumana
              key={index}
              {...card} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}