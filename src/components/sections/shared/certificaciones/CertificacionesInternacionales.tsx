import Image from "next/image";

interface propsCertificaciones {
  title: string | React.ReactNode;
  descripcion?: string | React.ReactNode;
  imagen?: string;
}

export default function CertificacionesInternacionales({
  title,
  descripcion,
  imagen,
}: propsCertificaciones) {

  const defaultImage = "/img/certificado-internacional.png";

  return (
    <section className="bg-bg-main py-10 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

        {/* TÍTULO */}
        <h2 className="text-3xl sm:text-4xl font-light text-text-title mb-3">
          {title}
        </h2>

        {/* DESCRIPCIÓN */}
        {descripcion && (
          <p className="mx-auto max-w-3xl text-base md:text-lg text-text-body leading-relaxed mb-4">
            {descripcion}
          </p>
        )}

        {/* IMAGEN */}
        <div className="flex justify-center w-full">
          <Image 
            src={imagen || defaultImage} 
            width={1200} 
            height={600} 
            alt="Certificaciones internacionales" 
            className="w-full max-w-233 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </div>

      </div>
    </section>
  );
}