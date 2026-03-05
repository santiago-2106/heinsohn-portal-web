import React from "react";
import Image from "next/image";

// ELIMINADO: import imgClientes from "@/src/img/clientes.png"; 

interface ClientesProps {
  title: string;
  description?: string | React.ReactNode;
}

export default function Clientes({ title, description }: ClientesProps) {
  return (
    <section className="bg-bg-main pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Dinámico */}
        <h2 className="text-3xl sm:text-4xl font-light text-text-title mb-6">
          {title}
        </h2>

        {/* Descripción Dinámica (Opcional) */}
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-text-body leading-relaxed mb-10">
            {description}
          </p>
        )}

        {/* Imagen de Logos (Fija) */}
        <div className="flex justify-center w-full">
          <Image
            src="/img/clientes.png" /* <-- RUTA CORREGIDA A PUBLIC */
            width={1200} /* Al usar un string, Next.js requiere dimensiones o 'fill' */
            height={400}
            alt="Empresas que confían en nosotros"
            className="w-full max-w-6xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}