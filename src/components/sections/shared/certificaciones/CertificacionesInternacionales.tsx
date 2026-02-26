//ESTA
//INTERFAZ
//NO SIRVE//
//LA USE PARA PROBAR ALGO.

import Image from "next/image";

interface propsCertificaciones {
  title: string;
  descripcion?: string;
  imagen?: string;
}

export default function CertificacionesInternacionales({
  title,
  descripcion,
  imagen,
}: propsCertificaciones) {
  // Definimos la ruta por defecto que apunta a la carpeta public
  const defaultImage = "/img/certificacionInternaciona.png";

  return (
    <section className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Dinámico */}
        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
          {title}
        </h2>

        {/* Descripción Dinámica (Opcional) */}
        {descripcion && (
          <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed mb-10">
            {descripcion}
          </p>
        )}

        {/* Imagen de Logos (Fija o Dinámica) */}
        <div className="flex justify-center w-full">
          <Image
            src={imagen || defaultImage} /* <-- Usa la prop o la ruta de public */
            width={1200}
            height={600}
            alt="Certificaciones internacionales"
            className="w-full max-w-6xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}