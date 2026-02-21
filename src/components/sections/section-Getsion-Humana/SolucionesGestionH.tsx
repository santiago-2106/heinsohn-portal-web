import { gestionHumanaInfo, infoGestionHumana2 } from '../../data/dataGestionHumana/dataGestionHumana' // ✅ Ahora sí existe
import CardGestionHumana from '../../ui/cardsGestionHumana/CardGestionHumana'
import TextComponent from '../../ui/textsComponent/TextComponent'
import { textoGestionHumana, textoGestionHumana2, textoGestionHumana3 } from '../../data/textComponentData/dataTextComponent'
import CardAnuncies from '../../ui/cardsSolutions/CardAnuncies'
import Clientes from '../clientes'
import ButtonComponent from '../../ui/Button/ButtonComponent'


export default function SolucionesGestionH() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-12">
        <TextComponent title={textoGestionHumana.title} description={textoGestionHumana.description}/>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
        {
          gestionHumanaInfo.map((info, index) => (
            <CardGestionHumana 
                key={index}
                {...info}
            />
          ))
        }
      </div>
      
      {/* Esta sección ya no dará error */}
      <CardAnuncies
        title={textoGestionHumana2.title} 
        description={textoGestionHumana2.description}
        cards={infoGestionHumana2}
        cols={3}
      />
      
      <div>
        <Clientes title={textoGestionHumana3.title} description={textoGestionHumana3.description}/>
        <ButtonComponent textoBtn='Habla con un experto'/>
      </div>
    </section>
  )
}