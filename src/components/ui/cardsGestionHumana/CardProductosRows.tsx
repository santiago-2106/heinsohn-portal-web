import Image from "next/image"
import { ProductRowProps } from "../../types/typesGestionHumana"


export default function ProductRow({ product, reverse }: ProductRowProps) {
  return (
    <div
      className={`grid md:grid-cols-2 items-center gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : "" 
      }`}
    >
        {/* md:[&>*:first-child]:order-2
  Desde el breakpoint "md" (≥768px),
  selecciona el primer hijo directo del contenedor actual
  y le aplica "order: 2".

  Esto permite invertir visualmente la posicion del primer elemento
  (por ejemplo la imagen) sin modificar el HTML,
  logrando el efecto zig-zag en desktop. */}
      <div className="relative w-full h-75 md:h-100 overflow-hidden">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-medium">
          {product.title}
        </h3>

        <p className="text-gray-500 leading-relaxed">
          {product.description}
        </p>

        <button className="text-sm font-medium hover:translate-x-1 transition-transform">
          {product.btnText} 
        </button>
      </div>
    </div>
  )
}

