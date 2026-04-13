import { dataCard } from "@/src/types/cardTypes";

export default function Card({
  icon,
  iconColor,
  title,
  description,
  btn,
  items,
  alineacion = "left",
  textoFooter,
  btnPosition= 'bottom',
  btnHasBorder
}: dataCard) {
  const centrar = alineacion === "center";
  const colorIcon = iconColor === 'text-brand-accent' ? 'text-brand-accent' : 'text-text-title';
  const cleanBtnText = btn ? btn.replace(/->|→/g, "").trim() : "";

   {/* BOTÓN */}
      const Button = btn && (
        <div className={btnHasBorder ? "border-t border-border-ui pt-8 w-full" : "w-full"}>
        <a
          href="/"
          className={`
            inline-flex gap-2 text-sm font-bold group
            ${centrar ? "justify-center" : "items-center"}
          `}
        >
          <span className="text-text-title group-hover:opacity-80 transition-colors">
            {cleanBtnText}
          </span>
          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        </div>
      )

  return (
    <div
      className={`
        flex flex-col border border-border-ui bg-bg-card-2 p-8 md:p-10 
        shadow-sm h-full hover:shadow-md transition-shadow duration-300
        ${centrar ? "items-center text-center" : "items-start text-left"}
      `}
    >
      {/* ICONO / NÚMERO */}
      {icon && (
        <div
          className={`
            mb-6 w-full text-text-title
            ${centrar ? "flex justify-center" : ""}
          `}
        >
          <span className={`material-symbols-rounded font-light ${colorIcon}`} style={{ fontSize: "48px" }}>
            {icon}
          </span>
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="mb-4 text-lg md:text-2xl font-light ">
        {title}
      </h3>

      {description && (
        <p className="mb-6 text-sm md:text-base leading-relaxed text-text-body mt-2">
          {description}
        </p>
      )}

      {btnPosition === "top" && Button}

      {/* LISTA DE ITEMS */}
      {items && items.length > 0 && (
        <div className="flex grow mb-6 w-full">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-start  text-text-body ${
                  centrar ? "justify-center text-center" : ""
                }`}
              >
                <span className="mr-3 mt-3.5 h-1.5 w-1.5 flex shrink-0 rounded-full bg-[#E30613]"></span>

                <div className="flex flex-col">
                  {/* El subtitulo del punto */}
                  {item.titulo && (
                    <span className="font-semibold text-text-title leading-relaxed">
                      {item.titulo}
                    </span>
                  )}
                  {/* El texto */}
                  <span className="leading-relaxed mt-1 text-text-body">
                    {item.textos}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {
        textoFooter && (
          <div className="border-t border-border-ui pt-8 mb-8 min-w-full">
            <p className="text-text-body leading-relaxed">{textoFooter}</p>
          </div>
        )
      }

      {btnPosition === "bottom" && (
        <div className="">
          {Button}
        </div>
      )}

    </div>
  );
}