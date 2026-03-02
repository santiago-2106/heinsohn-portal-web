import React from "react";

export default function SubcomponenteCardStaff({ information }: any) {
  return (
    <section className="w-full py-16 px-4 bg-bg-main transition-colors duration-300">
      <nav className="max-w-4xl mx-auto">
        <ol className="flex flex-col">
          {information.map((info: any, index: number) => {
            const linea = index === information.length - 1;

            return (
              <li key={index} className="group relative flex gap-6 pb-12 last:pb-0">
                {/* LÍNEA GRIS */}
                {!linea && (
                  <span className="absolute left-[11px] top-10 h-full w-[2px] bg-border-ui" aria-hidden="true" />
                )}

                {/* CÍRCULO */}
                <div className="relative flex flex-col items-center mt-8">
                  <div className="z-10 h-6 w-6 rounded-full border-4 border-bg-main bg-border-ui" />
                </div>

                {/* TARJETA */}
                <div className="flex-1 rounded-sm border border-border-ui bg-bg-card-2 p-8 md:flex md:items-start md:gap-12 shadow-sm">
                  {/* FASE Y NÚMERO (Idéntico a la imagen) */}
                  <div className="flex flex-col items-start min-w-[80px] shrink-0 mb-4 md:mb-0">
                    <span className="text-[11px] uppercase font-bold text-text-title tracking-widest mb-1">
                      {info.fase}
                    </span>
                    <span className="text-4xl md:text-5xl font-light tracking-tighter text-brand-accent leading-none">
                      {info.indicador}
                    </span>
                  </div>

                  {/* TÍTULO Y DESCRIPCIÓN */}
                  <div>
                    <h3 className="text-xl md:text-2xl text-text-title font-medium mb-3">
                      {info.title}
                    </h3>
                    <p className="text-text-body leading-relaxed text-sm md:text-base">
                      {info.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}