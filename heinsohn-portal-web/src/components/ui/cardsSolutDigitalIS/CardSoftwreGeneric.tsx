
import { dataTextSolucionDigtal } from '@/src/components/data/textComponentData/dataTextComponent'
import TextComponent from '@/src/components/ui/textsComponent/TextComponent'
import FeatureCard from "@/src/components/ui/cardsSolutDigitalIS/CardFeatures"
import { Devices } from "@mui/icons-material"
import ButtonComponent from '../Button/ButtonComponent'
import { dataSoftwaregenerico } from '../../data/dataCardSolutions/dataCardSolucion'


export default function TrustSection() {
  
  return (
    <>
    <TextComponent title={dataTextSolucionDigtal.title} description={dataTextSolucionDigtal.description} />
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-4xl ">
     {/*Corregir name aqui de feautrcard {/*VER SI MEJOR USAR ITEM O INDEX */} {dataSoftwaregenerico.map((item, index) => (
        <FeatureCard
          key={index} 
          icon={<Devices />}
          description={item.description}
          variant="small"
        /> 
      ))}
    </section>
    <ButtonComponent textoBtn='Solicita una consultoria'/>
    </>
  )
}
