import Image from "next/image";
import imgEdificio from '@/src/img/edif.jpg'

export default function CardCases() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        <h2 className="mb-8 text-center text-2xl sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
          Conoce Nuestro Trabajo
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

          <article className="flex flex-col border border-gray-200 bg-white">
            <div className="relative h-48 w-full sm:h-56 md:h-80">
              <Image 
                src={imgEdificio} 
                alt="Transformación digital en el sector financiero"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-3 p-5 sm:p-6">
              <p className="font-medium  text-gray-500 ">
                Transformación digital en el sector financiero
              </p>
              
              <p className="text-sm leading-relaxed text-gray-500 ">
                Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.
              </p>
              
              <a href="#" className="mt-auto inline-flex items-center gap-2 text-sm font-medium transition-transform hover:translate-x-1">
                Ver caso completo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}