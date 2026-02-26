import { dataCard } from "@/src/types/cardTypes";

/**
 * Componente PRESENTACIONAL: solo renderiza UI basada en props.
 * NO debe contener lógica de layout/grid — eso es responsabilidad del contenedor (CardAnuncies).
 */
export default function Card({
  icon,
  title,
  description,
  btn,
  items,
  alineacion = "left",
}: dataCard) {
  const centrar = alineacion === "center";

  const cleanBtnText = btn ? btn.replace(/->|→/g, "").trim() : "";

  return (
    <div
      className={`
        flex flex-col border border-gray-200 bg-white p-8 md:p-10 
        shadow-sm h-full hover:shadow-md transition-shadow duration-300
        ${centrar ? "items-center text-center" : "items-start text-left"}
      `}
    >
      {/* ICONO / NÚMERO */}
      {icon && (
        <div
          className={`
          mb-6 w-full
          ${centrar ? "flex justify-center" : ""}
        `}
        >
          {icon}
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="mb-4 text-lg md:text-xl font-medium text-gray-900">
        {title}
      </h3>

      {/* DESCRIPCIÓN */}
      {description && (
        <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600">
          {description}
        </p>
      )}

      {/* LISTA DE ITEMS */}
      {items && items.length > 0 && (
        <div className="flex-grow mb-6 w-full">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-start text-sm text-gray-600 ${
                  centrar ? "justify-center text-center" : ""
                }`}
              >
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E30613]"></span>

                <div className="flex flex-col">
                  {/* El subtitulo del punto */}
                  {item.titulo && (
                    <span className="font-semibold text-gray-800 leading-relaxed">
                      {item.titulo}
                    </span>
                  )}
                  {/* El texto */}
                  <span className="leading-relaxed mt-1 text-gray-800">
                    {item.textos}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BOTÓN */}
      {btn && (
        <a
          href="/"
          className={`
            mt-auto inline-flex gap-2 text-sm font-bold group
            ${centrar ? "justify-center" : "items-center"}
          `}
        >
          <span className="text-gray-900 group-hover:text-black transition-colors">
            {cleanBtnText}
          </span>
          <span className="text-[#E30613] text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      )}
    </div>
  );
}
