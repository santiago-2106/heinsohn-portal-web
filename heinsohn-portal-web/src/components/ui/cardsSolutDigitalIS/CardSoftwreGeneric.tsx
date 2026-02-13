
import { dataTextSolucionDigtal } from '@/src/components/data/textComponentData/dataTextComponent'
import TextComponent from '@/src/components/ui/textsComponent/TextComponent'
import FeatureCard from "@/src/components/ui/cardsSolutDigitalIS/CardFeatures"
import { Devices } from "@mui/icons-material"


export default function TrustSection() {

  const data = [
    {
      description: "Eliminan cuellos de botella con procesos agiles.",
    },
    {
      description: "Escalan sin fricciones gracias a arquitecturas modernas.",
    },
    {
      description: "Reducen costos ocultos al reemplazar licencias ineficientes.",
    },
    {
      description: "Refuerzan la seguridad con estandares globlaes de DevSecOps.",
    }
  ]

  return (
    <>
    <TextComponent title={dataTextSolucionDigtal.title} description={dataTextSolucionDigtal.description} />
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-4xl ">
      {data.map((item, index) => (
        <FeatureCard
          key={index}
          icon={<Devices />}
          description={item.description}
          variant="compact"
        />
      ))}
    </section>
    <div className="flex justify-center py-8 px-4">
        <button className="bg-black text-white text-base font-medium py-4 px-10 rounded-full">Solicita una consultoria</button>
    </div>
    </>
  )
}
