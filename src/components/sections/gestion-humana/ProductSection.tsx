import React from "react";
import { ProductsgestionHumanaInfo2 } from "../../../data/gestion-humana";
import ProductRow from "../../ui/cards/CardProductRow";
import TextComponent from "../../ui/typography/TextComponent";
import { textoGestionHumana4 } from "../../../data/share/textosGenerales";
import CertificacionesInternacionales from "../shared/certificaciones/CertificacionesInternacionales";

export default function CardProductSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-10 space-y-32">
        <TextComponent title="Productos" />
        {ProductsgestionHumanaInfo2.map((item, index) => (
          <ProductRow key={index} product={item} reverse={index % 2 !== 0} />
        ))}
      </div>
      <div className="mt-36">
        <TextComponent
          title={textoGestionHumana4.title}
          description={textoGestionHumana4.description}
        />
        <CertificacionesInternacionales title="Certificaciones Internacionales" />
      </div>
    </section>
  );
}
