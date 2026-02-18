import TextComponent from '@/src/components/ui/textsComponent/TextComponent'
import Card from '@/src/components/ui/cardsSolutions/Card'
import CardAnuncies from '@/src/components/ui/cardsSolutions/CardAnuncies'
import { TextSolucionDigtal2, TextSolucionDigtal3, TextSolucionDigtal5, TextSolucionDigtal6 } from '@/src/components/data/textComponentData/dataTextComponent'
import { SolucinesDigital6, textModelDevelop, textoModelDevelop, textoModelDevelop2, textoSolucionDigital2 } from '@/src/components/data/financiera/DataFinanciera'
import TecnologiaConfiable from './TecnologiaConfiable'
import ButtonComponent from '../../ui/Button/ButtonComponent'

export default function ModelosDesarrollo() {
  return (
    <div>
       <section>
            <TextComponent title={TextSolucionDigtal2.title} description={TextSolucionDigtal2.description}/>
            <article className='max-w-4xl mx-auto grid grid-cols-1 p-5 md:grid-cols-3 gap-16 py-16'>
                {
                  textModelDevelop.map((cardDevelop, index) => (
                    <Card key={index} {...cardDevelop} />
                  ))
                }
            </article>
            
            <article className='max-w-5xl mx-auto grid grid-cols-1 p-5 md:grid-cols-2 gap-14 py-8'>
                {
                  textoModelDevelop.map((card, index) => (
                    <Card key={index} {...card}/>
                  ))
                }
            </article>

            {/**AJUSTAR LOS BOTNES REVISAR SI SE LE PASA PROSP O SE DEJA ASI */}

               <CardAnuncies 
                title={TextSolucionDigtal3.title}
                description={TextSolucionDigtal3.description}
                cards={textoModelDevelop2}
                cols={2}
                />
                <ButtonComponent textoBtn='Descubre cómo aumentar tu ROI con software personalizado'/>
                <TecnologiaConfiable />

                <CardAnuncies 
                title={TextSolucionDigtal5.title}
                description={TextSolucionDigtal5.description}
                cards={textoSolucionDigital2}
                cols={2}
                />
                <ButtonComponent textoBtn='Empieza tu proyecto hoy con una sesión de descubrimiento'/>

                <CardAnuncies 
                title={TextSolucionDigtal6.title}
                description={TextSolucionDigtal6.description}
                cards={SolucinesDigital6}
                cols={2}
                />

                <ButtonComponent textoBtn='Descubre cómo nuestras tecnologías pueden acelerar tu proyecto'/>
        </section>       
    </div>
  )
}
