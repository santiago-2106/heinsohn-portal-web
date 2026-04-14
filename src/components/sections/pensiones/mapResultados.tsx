import { richText } from "@/src/hooks/helper/richText";
import { ResultsCorporativoData } from "@/src/types/typePensiones";

export const mapResultados = (data: any): ResultsCorporativoData => {
  return {
    title: data.title,

    highlight: {
      icon: data.highlight.icon && (
        <span
          className="material-symbols-rounded text-text-title font-light"
          style={{ fontSize: "48px" }}
        >
          {data.highlight.icon}
        </span>
      ),

      value: (
        <div className="flex items-baseline mt-2">
          {data.highlight.prefix && (
            <span className="text-brand-accent text-5xl md:text-7xl font-light mr-1">
              {data.highlight.prefix}
            </span>
          )}

          <span className="text-text-title text-7xl md:text-[90px] font-light leading-none tracking-tight">
            {data.highlight.value}
          </span>
        </div>
      ),
      description: (
        <span className=" text-2xl md:text-5xl text-text-body font-light leading-tight mt-2">
          {data.highlight.description}
        </span>
      ),
    },

    metrics: data.metrics.map((item: any) => ({
      id: item.id,
      positionIcon: item.positionIcon,

      icon: item.icon && (
        <span className="material-symbols-rounded text-text-title font-light text-2xl md:text-4xl lg:text-6xl">
          {item.icon}
        </span>
      ),

      value: (
        <div className="flex flex-col">
          {item.extraLabel && (
            <span className="text-text-body text-base md:text-lg font-light mb-1">
              {item.extraLabel}
            </span>
          )}

          <div className="flex items-baseline">
            {item.prefix && (
              <span className="text-brand-accent text-4xl md:text-6xl font-light mr-1">
                {item.prefix}
              </span>
            )}

            <span className="text-text-title text-5xl md:text-[70px] font-light leading-none tracking-tight">
              {item.value}
            </span>

            {item.suffix && (
              <span className="text-text-title text-sm md:text-base font-bold ml-2">
                {item.suffix}
              </span>
            )}
          </div>
        </div>
      ),

      description: (
        <span className="text-xs sm:text-sm md:text-lg text-text-body font-light leading-snug">
          {item.description}
        </span>
      ),
    })),
  };
};