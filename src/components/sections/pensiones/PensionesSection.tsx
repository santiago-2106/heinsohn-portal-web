import React from "react";
import ButtonComponent from "../../ui/buttons/Button";
import CardResultados from "../shared/sectioncard/CardResultados";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import TextComponent from "../../ui/typography/TextComponent";

// Interfaz para obligar a que las props lleguen bien
interface PensionesSectionProps {
  dataResultados1: any;
  textoDesafios: { title: React.ReactNode; description: React.ReactNode }; // Cambiado de string a React.ReactNode
  dataDesafios: any[];
  textoModulos: { title: React.ReactNode; description: React.ReactNode }; // Cambiado de string a React.ReactNode
  dataModulos: any[];
  textoDiferenciadores: { title: React.ReactNode }; // Cambiado
  dataDiferenciadores: any[];
  textoResultados2: { title: React.ReactNode }; // Cambiado
  dataResultados2: any;
}

export default function PensionesSection({
  dataResultados1,
  textoDesafios,
  dataDesafios,
  textoModulos,
  dataModulos,
  textoDiferenciadores,
  dataDiferenciadores,
  textoResultados2,
  dataResultados2
}: PensionesSectionProps) {
  
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Métrica 1 */}
      <CardResultados data={dataResultados1} />

      {/* Desafíos */}
      <section>
        <CardAnuncies
          title={textoDesafios.title}
          description={textoDesafios.description}
          cards={dataDesafios}
          cols={2}
        />
        <TextComponent description="Con nuestras soluciones para pensiones obtienes software escalable y seguro, alineados a la regulación y pensadas para garantizar confianza y sostenibilidad." />
        <div className="flex justify-center mt-6">
          <ButtonComponent textoBtn="Explora nuestras soluciones en pensiones" />
        </div>
      </section>

      {/* Módulos */}
      <CardAnuncies
        title={textoModulos.title}
        description={textoModulos.description}
        cards={dataModulos}
        cols={1}
      />

      {/* Diferenciadores */}
      <CardAnuncies
        title={textoDiferenciadores.title}
        cards={dataDiferenciadores}
        cols={2}
      />

      {/* Métrica 2 */}
      <div>
        <TextComponent title={textoResultados2.title} />
        <CardResultados data={dataResultados2} />
      </div>
    </div>
  );
}