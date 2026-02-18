import React from "react"

interface CardProps {
  icon?: React.ReactNode | any; // Acepta componentes o iconos
  title: string | React.ReactNode; //Dejarlos por el momento ver cual es mas conveniente ReactNoDE LO QUE HACE ES PASAR PROP PARA VER EL RENDERIZADO ENJSX
  description?: string | React.ReactNode;
  btn?: string;
  items?: string[];
  alineacion?: string; 
}

export default function Card({
  icon, 
  title, 
  description, 
  btn, 
  items, 
  alineacion='left'
}: CardProps) { // <--- Usamos la interfaz local

  const centrar = alineacion === 'center'
  
  const cleanBtnText = btn ? btn.replace(/->|→/g, '').trim() : '';

  return (
    <div className={`flex flex-col border border-gray-200 bg-white p-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300
      ${centrar ? "items-center text-center" : ""}`}>
      
      {/* Renderizado del Icono */}
      <div className='mb-6 flex h-12 w-12 items-center justify-start text-gray-900'>
            <i className="scale-125">{icon}</i>
      </div>

      <h3 className='mb-4 text-xl font-normal text-gray-900'>
        {title}
      </h3>

      <p className='mb-6 text-sm leading-relaxed text-gray-600'>
        {description}
      </p>

      {/* Lista de items (puntos) */}
      <div className="flex-grow mb-6">
        {items && items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className={`flex items-start text-sm text-gray-600 ${centrar ? "justify-center" : ""}`}>
                {/* El puntico rojo */}
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E30613]"></span>
                {/* El texto del punto */}
                <span className="leading-relaxed text-left">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón */}
      {btn && (
        <a href="/" className={`mt-auto inline-flex gap-2 text-sm font-bold group ${centrar ? "justify-center" : "items-center"}`}>
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