import { dataCard } from "@/src/components/types/cardTypes"

/**
 * Componente PRESENTACIONAL: solo renderiza UI basada en props.
 * NO debe contener lógica de layout/grid — eso es responsabilidad del contenedor (CardAnuncies).
 */
export default function Card({ icon, title, description, btn, items, alineacion = 'left' }: dataCard) {

  const centrar = alineacion === 'center'

  const cleanBtnText = btn ? btn.replace(/->|→/g, '').trim() : '';

  return (
    <div className={`flex flex-col border border-gray-200 bg-white p-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300
      ${centrar ? "items-center text-center" : ""}`}>

      <div className='mb-6 flex h-12 w-12 items-center justify-start text-gray-900'>
        <i className="scale-125">{icon}</i>
      </div>

      <h3 className='mb-4 text-xl font-normal text-gray-900'>
        {title}
      </h3>

      <p className='mb-6 text-sm leading-relaxed text-gray-600'>
        {description}
      </p>

      <div className="flex-grow mb-6">
        {items && items.length > 0 && (
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                {/* El puntico rojo */}
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E30613]"></span>
                
                <div className="flex flex-col">
                  {/* El subtitulo del punto */}
                  <span className="fonte-semibold text-gray-800 leading-relaxed">{item.titulo}</span>
                  {/* El texto */}
                  <span className="leading-relaxed mt-1 text-gray-800">{item.textos}</span>
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>

      {btn && (
        <a href="/" className='mt-auto inline-flex items-center gap-2 text-sm font-bold group'>
          <span className="text-gray-900 group-hover:text-black transition-colors">
            {cleanBtnText}
          </span>
          <span className="text-[#E30613] text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      )}
    </div>
  )
}