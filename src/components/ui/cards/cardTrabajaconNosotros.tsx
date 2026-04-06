import Image from "next/image";
import { ReactNode } from "react";

interface IgualdadOportunidadesProps {
  title: string | ReactNode;
  description: string | ReactNode;
  imageUrl: string;
  icon?: string;
}

export default function IgualdadOportunidades({
  title,
  description,
  imageUrl,
  icon = "diamond", // Tomará este valor o el que venga del JSON
}: IgualdadOportunidadesProps) {
  return (
    <section className="w-full py-16 flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Contenedor principal "Tipo Tarjeta" sin color de fondo extra */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl border border-gray-200 overflow-hidden">
        
        {/* LADO IZQUIERDO: Imagen más angosta (40% del ancho en desktop) */}
        <div className="w-full md:w-2/5 relative min-h-[350px] md:min-h-[500px] border-b md:border-b-0 md:border-r border-gray-200">
          <Image
            src={imageUrl}
            alt="Igualdad de Oportunidades"
            fill
            className="object-cover object-left"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* LADO DERECHO: Texto más ancho (60% del ancho en desktop) */}
        <div className="w-full md:w-3/5 flex flex-col justify-center p-10 md:p-16 lg:p-20">
          
          {/* Ícono de Google (Material Symbols) */}
          {icon && (
            <span className="material-symbols-outlined text-[32px] text-text-primary mb-6">
              {icon}
            </span>
          )}
          
          {/* Título con saltos de línea */}
          <h2 className="text-3xl lg:text-4xl font-light text-text-primary leading-[1.3] mb-6">
            {title}
          </h2>
          
          {/* Descripción con saltos de línea */}
          <p className="text-[15px] lg:text-base text-text-secondary leading-relaxed font-light">
            {description}
          </p>
          
        </div>
      </div>
    </section>
  );
}