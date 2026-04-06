import Link from "next/link";
import imgeu from "../../../img/united-states.png";
import TextComponent from "../../ui/typography/TextComponent";

const paises = [
  {
    nombre: "Bolivia",
    image:"/bandera-bolivia.svg",
  },
  {
    nombre: "Canada",
    image:"/bandera-canada.svg",
  },
  {
    nombre: "Colombia",
    image:"/bandera-colombia.svg",
  },
  {
    nombre: "Costa Rica",
    image:"/bandera-costa-rica.svg",
  },
  {
    nombre: "El Salvador",
    image:"/bandera-salvador.svg",
  },
  {
    nombre: "Ecuador",
    image:"/bandera-ecuador.svg",
  },
  {
    nombre: "Estados Unidos",
    image:"/bandera-eeu.svg"
  },
  {
    nombre: "Guatemala",
    image:"/bandera-guatemala.svg"
  },
  {
    nombre: "Honduras",
    image:"/bandera-honduras.svg"
  },
  {
    nombre: "Mexico",
    image:"/bandera-mexico.svg"
  },
  {
    nombre: "Panama",
    image:"/bandera-panama.svg"
  },
  {
    nombre: "Peru",
    image:"/bandera-peru.svg"
  },
  {
    nombre: "Republica Dominicana",
    image:"/bandera-republicaD.svg"
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
          <TextComponent title="Presencia Global"/>

          <ul className="mb-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4">
            {paises.map((pais) => (
              <li key={pais.nombre} className="flex items-center gap-2">
                <img
                  src={pais.image}
                  alt={pais.nombre}
                  className="inline-block h-6 w-8 rounded-md"
                />
                <div>{pais.nombre}</div>
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
