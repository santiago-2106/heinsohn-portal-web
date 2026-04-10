"use client";

const imagesCarrusel = [
  "/img/allianz.png",
  "/img/decatlon.png",
  "/img/fna.png",
  "/img/priceSmart.png",
  "/img/dhl.png",
  "/img/universidad.png",
];

export default function Carrusel() {
  return (
    <div className="max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">

      <div className="flex w-max animate-[scroll_20s_linear_infinite] [animation-delay:3s] [animation-fill-mode:forwards] hover:[animation-play-state:paused]">
        
        {[...imagesCarrusel, ...imagesCarrusel].map((img, i) => (
          <div
            key={i}
            className="min-w-45  flex items-center justify-center"
          >
            <img
              src={img}
              alt={`img-${i}`}
              className="w-full h-60 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}

      </div>

    </div>
  );
}