import Image from "next/image";
import { ReactNode } from "react";

interface propsCertificaciones {

  title: string | React.ReactNode; // Permite texto o elementos enriquecidos
  descripcion?: string | React.ReactNode; // Permite texto o elementos enriquecidos
  imagen?: string;
}

export default function CertificacionesInternacionales({
  title,
  descripcion,
  imagen,
}: propsCertificaciones) {
  
  // RUTA CORREGIDA: En Next.js NO se pone "public" ni "../../" para archivos de imagen.
  // Asegúrate de que el archivo se llame exactamente así en tu carpeta public/img/
  const defaultImage = "/img/certificado-internacional.png"; 

  return (
    <section className="bg-bg-main pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título Dinámico */}
        <h2 className="text-3xl sm:text-4xl font-light text-text-title mb-6">
          {title}
        </h2>

        {/* Descripción Dinámica (Opcional) */}
        {descripcion && (
          <p className="mx-auto max-w-3xl text-lg text-text-body leading-relaxed mb-10">
            {descripcion}
          </p>
        )}

        {/* Imagen de Logos */}
        <div className="flex justify-center w-full">
          <Image 
            src={imagen || defaultImage} 
            width={1200} 
            height={600} 
            alt="Certificaciones internacionales" 
            className="w-full max-w-6xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            priority // Ayuda a que la imagen cargue más rápido
          />
        </div>
      </div>
    </section>
  );
}