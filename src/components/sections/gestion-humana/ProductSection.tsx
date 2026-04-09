import React from "react";
import { ProductsgestionHumanaInfo2 } from "../../../data/soluciones/gestion-humana";
import ProductRow from "../../ui/cards/CardProductRow";
import TextComponent from "../../ui/typography/TextComponent";
import { textoGestionHumana4 } from "../../../data/soluciones/share/textosGenerales";
import CertificacionesInternacionales from "../shared/certificaciones/CertificacionesInternacionales";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import mapRich from "@/src/hooks/mapRich";

export default function CardProductSection() {
  const t = useTranslations("gestionHumana")

  const productosCards = mapRich(t, "ProductosgestionHumana")

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-10 space-y-2">
        <TextComponent title={t("titlesGestionHumana.titleGestionHumana6.title")}/>
        {productosCards.map((item:any, index:number) => (
          <ProductRow key={index} product={item} reverse={index % 2 !== 0} />
        ))}
      </div>
      <div className="mt-36">
        <TextComponent
          title={t("titlesGestionHumana.titleGestionHumana7.title")}
          description={t.rich("titlesGestionHumana.titleGestionHumana7.description", richText)}
        />
        <CertificacionesInternacionales title={t("titlesGestionHumana.titleGestionHumana8.title")} />
      </div>
    </section>
  );
}