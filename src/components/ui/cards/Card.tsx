import { dataCard } from "@/src/types/cardTypes";
import { Link } from "@/src/i18n/navigation";
import ButtonCard from "../buttons/ButtonCard";

export default function Card({
  icon,
  number,
  iconColor,
  title,
  description,
  btn,
  linkNavigation,
  items,
  alineacion = "left",
  textoFooter,
  btnPosition= 'bottom',
  btnHasBorder
}: dataCard) {
  const centrar = alineacion === "center";
  const colorIcon = iconColor === 'text-brand-accent' ? 'text-brand-accent' : 'text-text-title';

  return (
    <div
      className={`group flex flex-col border border-border-ui bg-bg-card-2 p-4 md:p-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300 ${centrar ? "items-center text-center" : "items-start text-left"}`}>
      {/* ICONO / NÚMERO */}
      {number && (
        <div className="">
          <span className="text-base md:text-lg text-text-body font-light leading-relaxed">
            {number}
          </span>
        </div>
      )}

      {icon && (
        <div
          className={`
            mb-6 w-full text-text-title
            ${centrar ? "flex justify-center" : ""}
          `}
        >
          <span className={`material-symbols-rounded font-light ${colorIcon} inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1`} style={{ fontSize: "48px" }}>
            {icon}
          </span>
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="mb-4 text-lg md:text-2xl leading-[110%] font-light ">
        {title}
      </h3>

      {description && (
        <p className="mb-6 text-sm md:text-base leading-relaxed text-text-body mt-2">
          {description}
        </p>
      )}

      {btnPosition === "top" && btn && (
        <ButtonCard 
        text={btn}
        hrefButton={linkNavigation}
        alineacion={alineacion}
        hasBorder={btnHasBorder}
        />
      )}

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
            <p className="text-sm md:text-base leading-relaxed text-text-body">{textoFooter}</p>
          </div>
        )
      }

      {btnPosition === "bottom" && btn && (
      <ButtonCard
        text={btn}
        hrefButton={linkNavigation}
        alineacion={alineacion}
        hasBorder={btnHasBorder}
      />
    )}
    </div>
  );
}