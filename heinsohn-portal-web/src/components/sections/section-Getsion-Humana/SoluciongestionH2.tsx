import Image from "next/image"
import TextComponent from "../../ui/textsComponent/TextComponent"
import ImgIa from '@/src/img/imgIAgestionHumana.jpg'
import { PlayCircleOutlineOutlined, PlayCircleOutlineRounded } from "@mui/icons-material"

export default function TalentCloudSection() {

  const dataInfoGestionHumana = [
    { description: "Organizaciones" },
    { description: "Bienestar" },
    { description: "Nómina / planilla" },
    { description: "Gestión de incapacidades" },
    { description: "Seguridad y salud en el trabajo" },
    { description: "Evaluación de desempeño" },
    { description: "Desempeño profesional" },
    { description: "Turnos y tiempos extras" },
    { description: "Soluciones de gobierno" },
  ]

  return (
    <div>
      <TextComponent title="Somos la solución en gestión, del talento humano en la nube."/>

      <section className="max-w-2xl mx-auto mt-">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-200">

          {dataInfoGestionHumana.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 flex items-center justify-center text-center p-7"
            >
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}

        </article>
      </section>
      
      <section>
        <article className="mt-10 mb-10 w-full max-w-4xl mx-auto px-4">
          <TextComponent title="Optimiza Procesos de rescursos humanos con inteligencia artificial" />

          <div className="relative mt-12 overflow-hidden cursor-pointer">
            <div className="relative aspect-video w-full">
              <Image
              src={ImgIa}
              alt="IA en Recursos Humanos"
              fill
              className="object-cover "
              />

           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300">
                <PlayCircleOutlineOutlined sx={{fontSize:80, color:'red'}}/>
              </div>
            </div>

          </div>
            <div className="bg-black text-white py-12 px-6 text-center">
              <p className="text-lg md:text-xl font-light mb-4 text-gray-500">¡Conoce el impacto positivo que puede tener en tu empresa!</p>
              <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline decoration-red-500 underline-offset-4"
          >
            <PlayCircleOutlineRounded sx={{ fontSize: 20, color: '#ff0000' }} />
            <span className="uppercase tracking-widest">Descubre más</span>
          </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
