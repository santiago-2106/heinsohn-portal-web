import SliderSvg from "@/src/components/svgs/SliderSvg";
import ButtonCard from "@/src/components/ui/buttons/ButtonCard";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import { useTranslations } from "next-intl";
import Image from "next/image";

// 1. AÑADIMOS subtitleWork A LA INTERFAZ
export interface propsKnowOurWork {
  title: string
  imgKnowOurWork: string;
  titleWork: string;
  subtitleWork?: string; // Lo hacemos opcional por si alguna vista no lo tiene
  descriptionWork: string;
  textBtn: string;
}

export default function CardCases({
  title,
  imgKnowOurWork,
  titleWork,
  subtitleWork, // 2. RECIBIMOS LA PROP
  descriptionWork,
  textBtn,
}: propsKnowOurWork) {

  const t = useTranslations("desarrolloUxUi")
  return (
    <section className="bg-bg-main py-8 sm:py-12 md:py-16 transition-colors duration-300">
      <TextComponent title={title} />
      <div className=" w-full max-w-305 ml-auto px-4 sm:px-2 md:px-4">

        <div className="flex flex-col md:flex-row items-start gap-6">
          <article className="w-full md:w-2/3 bg-bg-card-2 border border-border-ui flex flex-col">
            {imgKnowOurWork && (
              <div className="relative h-56 md:h-95 w-full">
                <Image
                  src={imgKnowOurWork}
                  alt={titleWork || "Caso de éxito"}
                  fill
                  priority
                  className="object-cover brightness-90 grayscale-100"
                />
              </div>
            )}

            <div className="flex flex-col gap-3 p-5 sm:p-8 grow">
              {/* Título Principal de la tarjeta */}
              <h6 className="font-medium text-text-title text-xl mb-2">{titleWork}</h6>

              {/* 3. RENDERIZAMOS LA PROP DINÁMICA (Si existe) */}
              {subtitleWork && (
                <p className="font-semibold text-text-body text-sm uppercase tracking-wide">
                  {subtitleWork}
                </p>
              )}

              {/* Descripción */}
              <p className="text-base leading-relaxed font-light text-text-body">
                {descriptionWork}
              </p>
              
              {/* Botón con Google Symbols */}
              <div className="mt-auto">
                <ButtonCard
                  text={textBtn}
                  hrefButton="#"
                  alineacion="left"
                />
            </div>
            </div>
          </article>

          <div className="hidden md:flex md:w-1/3 bg-bg-card-2 relative -ml-6">
          <SliderSvg />
          </div>

        </div>
      </div>
    </section>
  );
}