import React from "react";
import Image from "next/image";

interface BannerFigurasProps {
  title?: string;
  description?: string | React.ReactNode;
}

export default function BannerFiguras({ title, description }: BannerFigurasProps) {
  return (
    <section className="bg-bg-main pt-16 pb-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título Dinámico (Opcional) */}
        {title && (
          <h2 className="text-3xl sm:text-4xl font-light text-text-title mb-6">
            {title}
          </h2>
        )}

        {/* Descripción Dinámica (Opcional) */}
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-text-body leading-relaxed mb-10">
            {description}
          </p>
        )}

        {/* Imagen de Diseño de Figuras */}
        <div className="w-full">
          <Image
            src="/img/diseno-figuras.png"
            width={1920}
            height={300}
            alt="Diseño de figuras decorativas"
            // Utilizamos object-cover y object-bottom para que se adapte bien como borde inferior
            className="w-full h-48 md:h-[300px] object-cover object-bottom block"
          />
        </div>
        
      </div>
    </section>
  );
}