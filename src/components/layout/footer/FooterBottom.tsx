import Link from "next/link";
import imgeu from "../../../img/united-states.png";
import TextComponent from "../../ui/typography/TextComponent";

const paises = [
  {
    nombre: "Bolivia",
    image: "/bandera-bolivia.svg",
    href: "",
  },
  {
    nombre: "Canada",
    image: "/bandera-canada.svg",
    href: "",
  },
  {
    nombre: "Colombia",
    image: "/bandera-colombia.svg",
    href: "",
  },
  {
    nombre: "Costa Rica",
    image: "/bandera-costa-rica.svg",
    href: "https://www.cr.heinsohn.co/",
  },
  {
    nombre: "El Salvador",
    image: "/bandera-salvador.svg",
    href: "",
  },
  {
    nombre: "Ecuador",
    image: "/bandera-ecuador.svg",
    href: "https://www.ec.heinsohn.co/",
  },
  {
    nombre: "Estados Unidos",
    image: "/bandera-eeu.svg",
    href: "https://www.us.heinsohn.co/",
  },
  {
    nombre: "Guatemala",
    image: "/bandera-guatemala.svg",
    href: "https://gt.heinsohn.co/",
  },
  {
    nombre: "Honduras",
    image: "/bandera-honduras.svg",
    href: "",
  },
  {
    nombre: "Mexico",
    image: "/bandera-mexico.svg",
    href: "",
  },
  {
    nombre: "Panama",
    image: "/bandera-panama.svg",
    href: "about:blank",
  },
  {
    nombre: "Peru",
    image: "/bandera-peru.svg",
    href: "",
  },
  {
    nombre: "Republica Dominicana",
    image: "/bandera-republicaD.svg",
    href: "",
  },
];

const politicas = [
  [
    "PQRSF",
    "Términos y condiciones",
    "Política de protección de datos personales",
  ],
  [
    "Política de cookies",
    "Políticas de calidad",
    "Definiciones de términos y condiciones",
  ],
  [
    "Aviso de privacidad",
    "Política de gestión de fraude",
    "Política general de seguridad de la información",
  ],
];

export default function FooterBottom() {
  return (
    <div className="border-t border-border-ui ">
      <div className="mx-auto max-w-5xl px-6">
        <div className="py-8 ">
          <h3 className="mb-4 text-lg md:text-2xl leading-[110%] font-light text-center">
            Presencia Global
          </h3>

          <ul className="mb-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4">
            {paises.map((pais) => (
              <li key={pais.nombre} className="mt-4 flex items-center gap-2">
                <img
                  src={pais.image}
                  alt={pais.nombre}
                  className="inline-block h-6 w-8 rounded-md"
                />
                <Link href={pais.href}
                  target="__blank"
                >
                  {pais.nombre}
                </Link>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-y-3 border-t border-border-ui pt-8 pb-12 text-text-body sm:grid-cols-3 sm:gap-x-8">
            {politicas.map((column, index) => (
              <div key={index} className="flex flex-col gap-4 sm:items-start">
                {column.map((item) => (
                  <Link key={item} href="/">
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-text-body">
            {" "}
            © 2025 Heinsohn. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
