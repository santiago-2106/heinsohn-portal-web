import TextComponent from '@/src/components/ui/textsComponent/TextComponent'
import CardAnuncies from '@/src/components/ui/cardsSolutions/CardAnuncies'
import { TextSolucionDigtal2, TextSolucionDigtal3, TextSolucionDigtal5, TextSolucionDigtal6 } from '@/src/components/data/textComponentData/dataTextComponent'
import { SolucinesDigital6, textModelDevelop, textoModelDevelop, textoModelDevelop2, textoSolucionDigital2 } from '@/src/components/data/dataCard'
import TecnologiaConfiable from './TecnologiaConfiable'
import ButtonComponent from '../../ui/Button/ButtonComponent'

export default function ModelosDesarrollo() {
  return (
    <div>
      <section>
        <TextComponent title={TextSolucionDigtal2.title} description={TextSolucionDigtal2.description} />

        <CardAnuncies
          title=""
          cards={textModelDevelop}
          cols={3}
        />

        <CardAnuncies
          title=""
          cards={textoModelDevelop}
          cols={2}
        />

        <CardAnuncies
          title={TextSolucionDigtal3.title}
          description={TextSolucionDigtal3.description}
          cards={textoModelDevelop2}
          cols={2}
        />
        <ButtonComponent textoBtn='Descubre cómo aumentar tu ROI con software personalizado' />
        <TecnologiaConfiable />

        <CardAnuncies
          title={TextSolucionDigtal5.title}
          description={TextSolucionDigtal5.description}
          cards={textoSolucionDigital2}
          cols={2}
        />
        <ButtonComponent textoBtn='Empieza tu proyecto hoy con una sesión de descubrimiento' />

        <CardAnuncies
          title={TextSolucionDigtal6.title}
          description={TextSolucionDigtal6.description}
          cards={SolucinesDigital6}
          cols={2}
        />

        <ButtonComponent textoBtn='Descubre cómo nuestras tecnologías pueden acelerar tu proyecto' />
      </section>
    </div>
  )
}
