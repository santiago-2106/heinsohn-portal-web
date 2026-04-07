import React from "react";
import Image from "next/image";
import Carrusel from "@/src/components/carrusel/Carrusel";

// ELIMINADO: import imgClientes from "@/src/img/clientes.png"; 

interface ClientesProps {
  title: string;
  description?: string | React.ReactNode;
}

export default function Clientes({ title, description }: ClientesProps) {
  return (
    <section className="bg-bg-main pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Dinámico */}
        <h2 className="text-3xl sm:text-4xl font-light text-text-title mb-6">
          {title}
        </h2>

        {/* Descripción Dinámica (Opcional) */}
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-text-body leading-relaxed ">
            {description}
          </p>
        )}

        {/* Imagen de Logos (Fija) */}
         <div className="">
          <Carrusel />
        </div>
      </div>
    </section>
  );
}