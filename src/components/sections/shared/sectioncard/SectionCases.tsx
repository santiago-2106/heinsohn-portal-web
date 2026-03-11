import Image from "next/image";

// 1. AÑADIMOS subtitleWork A LA INTERFAZ
export interface propsKnowOurWork {
  imgKnowOurWork: string;
  titleWork: string;
  subtitleWork?: string; // Lo hacemos opcional por si alguna vista no lo tiene
  descriptionWork: string;
  textBtn: string;
}

export default function CardCases({
  imgKnowOurWork,
  titleWork,
  subtitleWork, // 2. RECIBIMOS LA PROP
  descriptionWork,
  textBtn,
}: propsKnowOurWork) {
  return (
    <section className="bg-bg-main py-8 sm:py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="mb-8 text-center text-2xl font-semibold text-text-title sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
          Conoce Nuestro Trabajo
        </h2>

        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          <article className="flex flex-col border border-border-ui bg-bg-card-2 transition-shadow duration-300 hover:shadow-md">
            {imgKnowOurWork && (
              <div className="relative h-48 w-full sm:h-56 md:h-80">
                <Image
                  src={imgKnowOurWork}
                  alt={titleWork || "Caso de éxito"}
                  fill
                  priority
                  className="object-cover brightness-90 grayscale-[50%]"
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
              <a
                href="#"
                aria-label={`Leer más sobre: ${titleWork}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-text-title transition-colors hover:text-brand-accent group"
              >
                {textBtn}
                <span aria-hidden="true" className="material-symbols-rounded text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          {/* Imagen Lateral Decorativa */}
          <div className="relative hidden md:block border border-border-ui border-l-0">
            <Image
              src="/img/workimg.png"
              alt="Decoración de caso de éxito"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}