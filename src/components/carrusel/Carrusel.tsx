import Image from 'next/image'

const imagesCarrusel = [
  "/img/allianz.webp",
  "/img/decatlon.webp",
  "/img/fna.webp",
  "/img/priceSmart.webp",
  "/img/dhl.webp",
  "/img/universidad.webp",
  "/img/Asopagos.webp",
  "/img/AseoInternacional.webp",
  "/img/AseguradoraColombia.webp",
  "/img/GobernacionAntioquia.webp",
  "/img/Lyncus.webp",
  "/img/Merck.webp",
  "/img/Positiva.webp",
  "/img/Procolombia.webp"
];

export default function Carrusel() {
  return (
    <div className="max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">

      <div className="flex w-max animate-[scroll_30s_linear_infinite] [animation-delay:3s] [animation-fill-mode:forwards] hover:[animation-play-state:paused]">
        
        {[...imagesCarrusel, ...imagesCarrusel].map((img, i) => (
          <div
            key={i}
            className="min-w-45  flex items-center justify-center"
          >
            <Image
              src={img}
              alt={`Logo cliente ${i + 1}`}
              width={180}
              height={40}
              className="w-full h-40 object-contain opacity-80 hover:opacity-100 transition"
              loading="lazy"
            />
          </div>
        ))}

      </div>

    </div>
  );
}