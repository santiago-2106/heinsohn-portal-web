import type { ResultsCorporativoProps } from "@/src/types/typePensiones";

export default function CardResultados({ data }: ResultsCorporativoProps) {
  return (
    <section className="bg-bg-card-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light mb-8">{data.title}</h2>

        <div className="grid lg:grid-cols-2 border border-border-ui">
          <div className="p-6 md:p-10 lg:p-12 border-r border-border-ui flex flex-col justify-center">
            <div className="material-symbols-rounded text-text-title font-light">{data.highlight.icon}</div>

            <div className="flex items-center mb-4">
              <span className="text-2xl md:text-3xl lg:text-5xl text-brand-accent">
                {data.highlight.suffix}
              </span>

              <span className="text-2xl md:text-3xl lg:text-5xl font-light">
                {data.highlight.value}
              </span>
            </div>

            <p className="text-base md:text-lg lg:text-[25px]">
              {data.highlight.description}
            </p>
          </div>

          <div className="grid grid-rows-2">
            {data.metrics.map((item, index) => {
              const isLeft = item.positionIcon === 'left'
              
              return(
              <div
                key={item.id}
                className={`p-10 ${
                  index === 0 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-brand-accent text-2xl md:text-3xl lg:text-5xl">{item.suffix}</span>

                  <span className="text-6xl font-light">{item.value}</span>
                </div>
                <div className={`flex gap-4 ${isLeft ? "flex-row items-center" : "flex-col"}`}>
                  <span className="material-symbols-rounded text-text-title font-light text-2xl md:text-4xl lg:text-6xl shrink-0" style={{fontSize:'40px'}}>{item.icon}</span>

                  <p className="text-text-body font-light">{item.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
