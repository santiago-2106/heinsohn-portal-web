import React from 'react';
// Importamos iconos de MUI similares a los de la imagen de referencia
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'; // Cohete
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'; // Martillo/Legal
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; // Etiqueta/Costos
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; // Escudo/Seguridad
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'; // Signo exclamación/Soporte

export default function CardResults() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* TÍTULO PRINCIPAL */}
        <h2 className="mb-16 text-center text-3xl font-light text-gray-900 sm:text-4xl md:text-5xl leading-tight">
          Resultados que demuestran nuestra <br className="hidden md:block" />
          experiencia en el sector financiero
        </h2>

        {/* --- CONTENEDOR PRINCIPAL DEL GRID (Borde exterior único) --- */}
        <div className="border border-gray-200 bg-white grid grid-cols-1 lg:grid-cols-12">

          {/* === COLUMNA IZQUIERDA (Tarjeta Grande de Experiencia) === */}
          {/* Ocupa 5 de 12 columnas en pantallas grandes */}
          <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
            <div>
              {/* Icono Cohete */}
              <div className="mb-6 text-gray-700">
                <RocketLaunchOutlinedIcon sx={{ fontSize: 32, strokeWidth: 1 }} />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">
                Experiencia comprobada
              </h3>
            </div>
            
            <div className="mt-12 lg:mt-0">
              {/* Número Grande con + Rojo */}
              <div className="flex items-start mb-4">
                <span className="text-[#E30613] text-6xl md:text-7xl font-light leading-none mr-1">+</span>
                <span className="text-gray-900 text-8xl md:text-9xl font-light leading-none">40</span>
              </div>
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xs">
                años desarrollando software financiero en LATAM.
              </p>
            </div>
          </div>

          {/* === COLUMNA DERECHA (Grid 2x2 de Características) === */}
          {/* Ocupa 7 de 12 columnas. Es un grid anidado. */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2">
            
            {/* --- Item 1: Arriba Izquierda --- */}
            {/* Borde abajo siempre, Borde derecho solo en tablet/desktop */}
            <div className="p-8 md:p-10 border-b md:border-r border-gray-200 flex flex-col items-start">
              <div className="mb-5 text-gray-700">
                <GavelOutlinedIcon sx={{ fontSize: 28 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-3">
                Cumplimiento normativo
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Respuesta ágil a cambios regulatorios.
              </p>
            </div>

            {/* --- Item 2: Arriba Derecha --- */}
            {/* Solo Borde abajo */}
            <div className="p-8 md:p-10 border-b border-gray-200 flex flex-col items-start">
              <div className="mb-5 text-gray-700">
                 <LocalOfferOutlinedIcon sx={{ fontSize: 28 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-3">
                Reducción de costos
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Procesos automatizados que optimizan recursos.
              </p>
            </div>

            {/* --- Item 3: Abajo Izquierda --- */}
            {/* Borde derecho solo en tablet/desktop. Borde abajo SOLO en móvil (para separarlo del último) */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-start">
              <div className="mb-5 text-gray-700">
                 <VerifiedUserOutlinedIcon sx={{ fontSize: 28 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-3">
                Escalabilidad y seguridad
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Arquitectura 100% web, en nube o local.
              </p>
            </div>

             {/* --- Item 4: Abajo Derecha --- */}
            {/* No necesita bordes propios en desktop (usa los del contenedor padre) */}
            <div className="p-8 md:p-10 flex flex-col items-start">
              <div className="mb-5 text-gray-700">
                 <HelpOutlineOutlinedIcon sx={{ fontSize: 28 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-3">
                Soporte especializado
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Acompañamiento en implementación y operación.
              </p>
            </div>

          </div>
        </div>

        {/* BOTÓN INFERIOR (Estilo píldora negra como en la imagen) */}
        <div className="mt-16 flex justify-center">
          <a href="/contacto" className="bg-[#111827] text-white text-sm md:text-base font-medium py-4 px-10 rounded-full hover:bg-gray-900 transition-colors">
            Habla con un especialista sobre tu gestión financiera
          </a>
        </div>

      </div>
    </section>
  )
}