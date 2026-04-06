import type { Metadata } from "next";
import { useTranslations } from "next-intl";

// Componentes
import Hero from "@/src/components/sections/shared/hero/Hero";

export const metadata: Metadata = {
  title: "Soporte | Heinsohn",
  description: "Encuentra en un solo lugar las plataformas de soporte: PSE, Service Desk, Mantis y Mantis Entrega.",
  robots: "index, follow",
};

export default function SoportePage() {
  const t = useTranslations("soporte");
  const items = t.raw("plataformas.items");

  // Clases usando tus variables globales de borde
  const borderClasses = [
    "border-b md:border-r border-border-ui",             
    "border-b border-border-ui",                         
    "border-b md:border-b-0 md:border-r border-border-ui", 
    ""                                                  
  ];

  return (
    <div className="bg-bg-main pb-16 md:pb-24">
      {/* SECCIÓN HERO */}
      <div className="bg-bg-main">
        <Hero
          title={t("dataHero.title")}
          description={
            <span className="block mt-6 max-w-4xl text-base md:text-[17px] text-text-body font-light leading-relaxed">
              {t("dataHero.description")}
            </span>
          }
          breadcrumb={t.raw("dataHero.breadcrumb")}
          badges={t.raw("dataHero.badges")}
          isUppercase={false}
          showImage={false}
          buttonText=""
        />
      </div>

      {/* SECCIÓN GRILLA DE PLATAFORMAS */}
      <section className="px-4 sm:px-6 lg:px-8 mt-4 md:mt-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border-ui bg-bg-main">
            
            {items.map((item: any, index: number) => (
              <div 
                key={index} 
                className={`flex flex-col p-10 md:p-14 ${borderClasses[index]}`}
              >
                {/* Ícono con tamaño forzado mediante style */}
                <span 
                  className="material-symbols-rounded text-text-title font-light mb-6 shrink-0"
                  style={{ fontSize: "50px" }} 
                >
                  {item.icon}
                </span>
                
                <h3 className="text-2xl font-light text-text-title mb-6">
                  {item.title}
                </h3>
                
                <p className="text-[15px] text-text-body font-light leading-relaxed mb-10 flex-grow">
                  {item.description}
                </p>
                
                <a 
                  href={item.linkUrl} 
                  className="inline-flex items-center gap-3 text-sm font-medium text-text-title group w-max"
                >
                  {item.linkText}
                  {/* 👇 Flecha también corregida con rounded */}
                  <span className="material-symbols-rounded text-[#D90036] text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
}