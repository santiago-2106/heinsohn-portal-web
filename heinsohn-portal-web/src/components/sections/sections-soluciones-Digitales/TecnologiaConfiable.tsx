import CardFeatures from '../../ui/cardsSolutDigitalIS/CardFeatures'
import ButtonComponent from '../../ui/Button/ButtonComponent'
import TextComponent from '../../ui/textsComponent/TextComponent'
import { TextSolucionDigtal4 } from '../../data/textComponentData/dataTextComponent'
import { textoSoftwareSolucionDigital } from '../../data/dataCardSolutions/dataCardSolucion'


export default function TecnologiaConfiable() {
  //COLOCAR ESTA INFORMACION EN LA DATA DESPUES
  return (
     <div> 
        <TextComponent title={TextSolucionDigtal4.title} description={TextSolucionDigtal4.description}/>
        <section className='grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl'>
        {
        textoSoftwareSolucionDigital.map((cardInfo) => (
            <CardFeatures 
                key={cardInfo.id}
                {...cardInfo}
                />
              ))
            }
        </section>
        <ButtonComponent textoBtn='Agenda una llamada estratégica con nuestro equipo de expertos'/>
    </div>
  )
}
