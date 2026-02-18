import type { ResultsCorporativoProps } from "@/src/components/types/typePensiones"

export default function CardResultados({ data }: ResultsCorporativoProps) {
  
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-light mb-8">
            {data.title}
        </h2>
 
        <div className="grid lg:grid-cols-2 border border-gray-200">

          <div className="p-12 border-r border-gray-200 flex flex-col justify-center">
            <div className="mb-6">{data.highlight.icon}</div>

            <div className="flex items-center mb-4">
              <span className="text-7xl text-red-500">
                {data.highlight.suffix}
              </span>

              <span className="text-8xl font-light">
                {data.highlight.value}
              </span>
            </div>

            <p className="text-[25px] font-light leading-snug">
              {data.highlight.description}
            </p>
          </div>

          <div className="grid grid-rows-2">

            {data.metrics.map((item, index) => (
              <div
                key={item.id}
                className={`p-10 ${
                  index === 0 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-red-500 text-7xl">
                      {item.suffix}
                    </span>

                  <span className="text-6xl font-light">
                    {item.value}
                  </span>

                </div>
                <div className="flex gap-2">
                  <span className="flex items-center">
                    {item.icon}
                  </span>

                  <p className="text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
