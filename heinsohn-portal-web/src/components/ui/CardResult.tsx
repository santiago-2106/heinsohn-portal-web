import React from 'react';
// Importamos iconos de MUI
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function CardResults() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <h2 className="mb-16 text-center text-3xl font-light text-gray-900 sm:text-4xl md:text-5xl leading-tight">
          Resultados que demuestran nuestra <br className="hidden md:block" />
          experiencia en el sector financiero
        </h2>

        <div className="border border-gray-200 bg-white grid grid-cols-1 lg:grid-cols-12">

         
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="h-full flex flex-col justify-end p-10 lg:p-12 lg:pt-32">
                
                <div className="flex flex-col gap-8">
                    
                    <div>
                        <div className="mb-5 text-gray-900">
                            <RocketLaunchOutlinedIcon sx={{ fontSize: 40, strokeWidth: 1.5 }} />
                        </div>
                        <h3 className="text-2xl font-normal text-gray-900">
                            Experiencia comprobada
                        </h3>
                    </div>
                    
                    <div>
                        <div className="flex items-start mb-3">
                            <span className="text-[#E30613] text-6xl font-light leading-none mr-1 mt-1">+</span>
                            <span className="text-gray-900 text-8xl font-normal leading-none tracking-tight">40</span>
                        </div>
                        <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xs">
                            años desarrollando software financiero en LATAM.
                        </p>
                    </div>

                </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-8 md:p-10 border-b md:border-r border-gray-200 flex flex-col items-start hover:bg-gray-50 transition-colors">
              <div className="mb-5 text-gray-900">
                <GavelOutlinedIcon sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                Cumplimiento normativo
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Respuesta ágil a cambios regulatorios.
              </p>
            </div>

            <div className="p-8 md:p-10 border-b border-gray-200 flex flex-col items-start hover:bg-gray-50 transition-colors">
              <div className="mb-5 text-gray-900">
                 <LocalOfferOutlinedIcon sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                Reducción de costos
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Procesos automatizados que optimizan recursos.
              </p>
            </div>

            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-start hover:bg-gray-50 transition-colors">
              <div className="mb-5 text-gray-900">
                 <VerifiedUserOutlinedIcon sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                Escalabilidad y seguridad
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Arquitectura 100% web, en nube o local.
              </p>
            </div>

            <div className="p-8 md:p-10 flex flex-col items-start hover:bg-gray-50 transition-colors">
              <div className="mb-5 text-gray-900">
                 <HelpOutlineOutlinedIcon sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                Soporte especializado
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Acompañamiento en implementación y operación.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="/contacto" className="bg-[#111827] text-white text-base font-medium py-4 px-10 rounded-full hover:bg-black transition-colors shadow-lg">
            Habla con un especialista sobre tu gestión financiera
          </a>
        </div>

      </div>
    </section>
  )
}