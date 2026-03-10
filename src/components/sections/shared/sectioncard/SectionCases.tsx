import Image from "next/image";

export interface propsKnowOurWork{
  imgKnowOurWork: string
  titleWork:string
  descriptionWork: string
  textBtn: string
}

export default function CardCases({imgKnowOurWork, titleWork, descriptionWork, textBtn}: propsKnowOurWork) {
  return (
    <section className="bg-bg-main py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="mb-8 text-center text-2xl sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
          Conoce Nuestro Trabajo
        </h2>

        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          <article className="flex flex-col border border-border-ui bg-bg-card-2">
            {
              imgKnowOurWork && (
                <div className="relative h-48 w-full sm:h-56 md:h-80">
                  <Image
                    src={imgKnowOurWork} 
                    alt="Transformación digital en el sector financiero"
                    fill
                    priority
                    className="object-cover brightness-90 grayscale-100 "
                  />
                </div>
              )
            }

            <div className="flex flex-col gap-3 p-5 sm:p-6">

              <h6 className="font-light text-text-body ">
                {titleWork}
              </h6>

              <p className="font-light text-text-body ">
                <strong>Transformación digital en el sector financiero</strong>
              </p>


              <p className="text-sm leading-relaxed font-light text-text-body">
                {descriptionWork}
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold transition-transform hover:translate-x-1"
              >

                {textBtn} 
                <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>

                Conoce el caso completo
                {/* Aquí agregamos el SVG de la flecha con tu color rojo */}
                <svg
                  className="w-4 h-4 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>

              </a>
            </div>
          </article>

          <div className="relative hidden md:block border border-gray-200">
            <Image
              src="/img/workimg.png" /* <-- RUTA CORREGIDA */
              alt="Transformación digital en el sector financiero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
