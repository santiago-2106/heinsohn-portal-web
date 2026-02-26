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
    <section className="bg-[#fafafa] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Encabezado de la sección */}
        <h2 className="text-3xl md:text-4xl text-gray-900 font-light mb-6 max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-light mb-16 max-w-4xl mx-auto whitespace-pre-line leading-relaxed">
          {description}
        </p>

        {/* Grilla dinámica de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {cards.map((card, index) => (
            <CardGestionHumana
              key={index}
              {...card} // Le pasamos todas las propiedades a la tarjeta de una vez
            />
          ))}
        </div>
      </div>
    </section>
  );
}
