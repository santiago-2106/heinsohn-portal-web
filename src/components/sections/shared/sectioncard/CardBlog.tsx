import CardGrid from "@/src/components/layout/grids/CardGrid";
import { ReactNode } from "react";

interface CardImgProps {
  img: string;
  titleCard: string;
  subtitle1?: string;   
  subtitle2?: string;   
  description?: string; 
  badge?: string;       
  btnText?: string;     
}

interface DataCardImgProps {
    dataCards: CardImgProps[];
    titlePrincipal:string
}

export default function CardBlog({ titlePrincipal,dataCards }: DataCardImgProps,) {
  return (
    <section className="w-full">
      <div className='mx-auto max-w-5xl p-4'>

        {
            titlePrincipal && (
                <div className="flex justify-between">
                    <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6 ">{titlePrincipal}</h2>
                    <span className="material-symbols-rounded text-brand-accent group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
            )
        }
        
        <CardGrid columns={3}>
          {dataCards.map((item, index) => (
            <div key={index} className='flex flex-col border border-border-ui bg-bg-card-2 h-full transition-all hover:shadow-md'>
              
              {/* Imagen y Badge */}
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.titleCard} className="object-cover brightness-90 grayscale-90 w-[288px] h-[155px] " />
                {item.badge && (
                  <div className="absolute top-8 right-8 bg-black text-white text-[11px] uppercase tracking-wider px-2 py-2 font-medium">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1">
                {item.subtitle1 && (
                  <p className="text-text-body text-sm font-light mb-2 opacity-70">
                    {item.subtitle1}
                  </p>
                )}

                <h3 className="text-text-title text-xl md:text-2xl font-light leading-tight mb-4">
                  {item.titleCard}
                </h3>

                {item.description && (
                  <p className="text-text-body text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                )}

                {/* PARTE INFERIOR (Botón o Subtítulo 2) */}
                <div className="mt-auto">
                  {item.btnText ? (
                    <div className="flex items-center gap-2 text-text-title font-medium text-sm cursor-pointer group w-fit">
                      <span>{item.btnText}</span>
                      <span className="material-symbols-rounded text-brand-accent text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  ) : (
                    /* SUBTITLE PARA CARGOS DE LIDERES */
                    item.subtitle2 && (
                      <p className='text-brand-accent text-sm font-medium'>
                        {item.subtitle2}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}