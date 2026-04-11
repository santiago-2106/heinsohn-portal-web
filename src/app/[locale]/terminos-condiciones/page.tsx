"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SidebarTerms from "@/src/components/layout/sidebar/SidebarTerms";

export default function TerminosYCondicionesPage() {
  const t = useTranslations("TerminosCondiciones");
  const sections = t.raw("sections") || [];
  
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  if (!sections.length) return null; // Previene errores si el JSON tarda en cargar

  // Obtenemos la información específica de la pestaña activa
  const activeSection = sections.find((sec: any) => sec.id === activeId) || sections[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto pt-6 px-6 lg:px-24 pb-20 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Sidebar Fijo - Se mantiene para PC */}
        <SidebarTerms 
          sections={sections} 
          activeId={activeId} 
          setActiveId={setActiveId} 
        />

        {/* Contenedor de Información Principal */}
        <main className="flex-1 flex flex-col gap-12 w-full overflow-hidden">
          
          {/* Header de los Términos (Solo aparece una vez al inicio) */}
          <header className="relative flex flex-col min-h-[420px] -mt-6">
            <img 
              src="/img/terminosycondiciones.jpg" 
              className="absolute inset-0 w-full h-full object-cover object-right grayscale contrast-125" 
              alt="Fondo términos y condiciones" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            
            <div className="relative pt-20 pb-12 flex flex-col justify-end px-4 z-10 w-full lg:w-4/5 h-full mt-auto">
              <nav className="text-sm text-text-body flex gap-2 items-center mb-6">
                <span className="material-symbols-rounded text-base">home</span>
                <span>{t("breadcrumb.home")}</span> 
                <span className="text-[#E30613] text-lg font-bold">›</span> 
                <span>{t("breadcrumb.current")}</span>
              </nav>

              <h1 className="text-4xl md:text-[54px] font-light text-text-title leading-[1.15] mb-8">
                {t("title")}
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-black text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  {t("download")} 
                  <span className="material-symbols-rounded text-sm">arrow_downward</span>
                </button>
                <span className="text-sm text-text-body flex items-center gap-2">
                  <span className="material-symbols-rounded text-lg text-gray-400">schedule</span> 
                  {t("readingTime")}
                </span>
              </div>
            </div>
          </header>

          {/* CUERPO DINÁMICO: Solo muestra la información de la pestaña activa */}
          {activeSection && (
            <div className="flex flex-col gap-8 px-4 fade-in">
              {/* Título Principal Estándar (H2) para TODOS los puntos, incluido el 03 */}
              <h2 className="text-4xl md:text-5xl font-light text-text-title flex items-baseline gap-3">
                <span className="text-[#E30613]">{activeSection.number}</span> 
                {activeSection.title}
              </h2>

              {/* Renderizado de Párrafos Simples - USADO PARA EL PUNTO 03, idéntico al diseño */}
              {activeSection.paragraphs && (
                <div className="flex flex-col gap-6 mt-4">
                  {activeSection.paragraphs.map((paragraph: string, idx: number) => (
                    <p 
                      key={idx} 
                      className="text-text-body leading-relaxed text-base text-justify"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              )}

              {/* Renderizado de Subsecciones (Ej: Punto 01) */}
              {activeSection.subsections && (
                <div className="flex flex-col gap-8 mt-2">
                  {activeSection.subsections.map((sub: any, index: number) => (
                    <div key={index} className="flex flex-col gap-3">
                      <h3 className="text-[22px] font-light text-text-title flex items-baseline gap-2">
                        <span className="text-[#E30613]">{sub.subNumber}</span> 
                        {sub.subtitle}
                      </h3>
                      {sub.content && (
                        <p 
                          className="text-text-body leading-relaxed text-base text-justify"
                          dangerouslySetInnerHTML={{ __html: sub.content }}
                        />
                      )}
                      {sub.list && (
                        <ul className="flex flex-col gap-3 mt-2">
                          {sub.list.map((listItem: string, listIdx: number) => (
                            <li key={listIdx} className="text-text-body leading-relaxed text-base text-justify pl-4">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* AJUSTE PARA EL PUNTO 08 Y 09: Listas con letras grandes y en rojo 👇 */}
                      {sub.letter_list && (
                        <div className="flex flex-col gap-6 mt-2 pl-4"> {/* Contenedor de la lista con letras */}
                          {sub.letter_list.map((listItem: any, listIdx: number) => (
                            <div key={listIdx} className="flex gap-6 items-start">
                              {/* Prefijo de la letra grande y roja */}
                              <span className="text-[#E30613] text-[28px] font-light leading-none pt-1">
                                {listItem.prefix}
                              </span>
                              {/* Texto del ítem */}
                              <p 
                                className="text-text-body leading-relaxed text-base text-justify m-0"
                                dangerouslySetInnerHTML={{ __html: listItem.text }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Renderizado de Bloques Mixtos (Puntos 06, 10, 12, 13, 23) */}
              {activeSection.contentBlocks && (
                <div className="flex flex-col gap-6 mt-4 overflow-hidden">
                  {activeSection.contentBlocks.map((block: any, idx: number) => {
                    if (block.type === "paragraph") {
                      return (
                        <p 
                          key={idx} 
                          className="text-text-body leading-relaxed text-base text-justify"
                          dangerouslySetInnerHTML={{ __html: block.text }}
                        />
                      );
                    }
                    {/* Listas Numeradas (Puntos 06, 12, 13, 23) - Números Rojos Grandes */}
                    if (block.type === "numbered_list") {
                      return (
                        <div key={idx} className="flex flex-col gap-6 my-2">
                          {block.items.map((item: string, i: number) => (
                            <div key={i} className="flex gap-4 sm:gap-6 items-start">
                              <span className="text-[#E30613] text-[28px] font-light leading-none pt-1 shrink-0">
                                {i + 1}
                              </span>
                              <p 
                                className="text-text-body leading-relaxed text-base text-justify m-0"
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </div>
                          ))}
                        </div>
                      );
                    }
                    {/* Listas con Letras (Punto 10) - Letras Rojas Grandes */}
                    if (block.type === "letter_list") {
                        return (
                          <div key={idx} className="flex flex-col gap-6 my-2">
                            {block.items.map((item: any, i: number) => (
                              <div key={i} className="flex gap-4 sm:gap-6 items-start">
                                {/* Prefijo de la letra grande y roja */}
                                <span className="text-[#E30613] text-[28px] font-light leading-none pt-1 shrink-0">
                                  {item.prefix}
                                </span>
                                {/* Texto del ítem */}
                                <p 
                                  className="text-text-body leading-relaxed text-base text-justify m-0"
                                  dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                              </div>
                            ))}
                          </div>
                        );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}