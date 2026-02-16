import CardFeatures from '../../ui/cardsSolutDigitalIS/CardFeatures'
import ButtonComponent from '../../ui/Button/ButtonComponent'
import TextComponent from '../../ui/textsComponent/TextComponent'
import { TextSolucionDigtal4 } from '../../data/textComponentData/dataTextComponent'
import { DeviceHub } from '@mui/icons-material'

export default function TecnologiaConfiable() {
  //COLOCAR ESTA INFORMACION EN LA DATA DESPUES
      const textSoftwareSolucionDigital = [
        {
          id:1,
          icon: <DeviceHub />,
          description: "Certificación CMMI Nivel 5 que garantiza procesos de calidad. ",
        },
        {
          id:2,
          icon: <DeviceHub />,
          description: "Metodologías ágiles probadas: Scrum, DevSecOps, QA Automation, UX/UI.",
        },
        {
          id:3,
          icon: <DeviceHub />,
          description: "Cobertura internacional y alianzas estratégicas para proyectos globales.  ",
        },
        {
          id:4,
          icon: <DeviceHub />,
          description: "+200 proyectos implementados con impacto en múltiples industrias .",
        }
      ]
  return (
     <div> 
        <TextComponent title={TextSolucionDigtal4.title} description={TextSolucionDigtal4.description}/>
        <section className='grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl'>
        {
        textSoftwareSolucionDigital.map((cardInfo) => (
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
