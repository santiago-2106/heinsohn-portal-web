
import type { ResultsCorporativoProps } from "@/src/types/typePensiones";

export default function CardResultados({ title,data }: ResultsCorporativoProps) {
  return (
    <section className="bg-bg-main py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl text-text-title font-light mb-8 w-full text-center">
          {title}
        </h2>

        <div className="grid lg:grid-cols-2 border border-border-ui">
          <div className="p-5 sm:p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border-ui flex flex-col justify-center">
            
            {/* ICON */}
            <div className="material-symbols-rounded text-text-title font-light text-5xl sm:text-6xl md:text-7xl lg:text-[80px]" style={{fontSize:"58px"}}>
              {data.highlight.icon}
            </div>

            {/* VALUE */}
            <div className="flex items-center mb-3 md:mb-4 mt-2">
              <span className="text-brand-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {data.highlight.suffix}
              </span>

              <span className="text-text-title font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
                {data.highlight.value}
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] font-light text-text-body leading-snug">
              {data.highlight.description}
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="grid grid-rows-2">
            {data.metrics.map((item, index) => {
              const isLeft = item.positionIcon === "left";

              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`p-5 sm:p-6 md:p-8 lg:p-10 ${
                    index === 0 ? "border-b border-border-ui" : ""
                  }`}
                >
                  {/* VALUE */}
                  <div className="flex items-center mb-3 md:mb-4">
                    <span className="text-brand-accent text-xl sm:text-2xl md:text-3xl lg:text-6xl">
                      {item.suffix}
                    </span>

                    <span className="text-text-title font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
                      {item.value}
                    </span>
                  </div>

                  {/* CONTENIDO INTERNO */}
                  <div
                    className={`flex gap-3 md:gap-4 ${
                      isLeft
                        ? "flex-row items-center"
                        : "flex-col items-start"
                    }`}
                  >
                    {/* ICON Interno */}
                    <span className="material-symbols-rounded text-text-title font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl shrink-0" style={{fontSize:"58px"}}>
                      {item.icon}
                    </span>

                    {/* DESCRIPTION INTERNO */}
                    <p className="text-xs sm:text-sm md:text-lg text-text-body font-light leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}