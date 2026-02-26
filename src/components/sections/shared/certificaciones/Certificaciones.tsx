import React from "react";
import Image from "next/image";

// ELIMINADO: import imgCertificaciones from "@/src/img/certificacionesIn.png"; 

interface CertificacionesProps {
  title: string;
}

export default function Certificaciones({ title }: CertificacionesProps) {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Dinámico */}
        <h2 className="text-2xl sm:text-3xl font-light text-gray-600 mb-10">
          {title}
        </h2>

        {/* Imagen de Certificaciones (Fija) */}
        <div className="flex justify-center w-full">
          <Image
            src="/img/certificacionesIn.png" /* <-- RUTA CORREGIDA A PUBLIC */
            width={800} /* Agregamos dimensiones para evitar errores de Next.js */
            height={400}
            alt="Certificaciones Internacionales ISO y OHSAS"
            className="w-full max-w-3xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}