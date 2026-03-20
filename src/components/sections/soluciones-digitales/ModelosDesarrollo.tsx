import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import TecnologiaConfiable from './TecnologiaConfiable'
import ButtonComponent from '../../ui/buttons/Button'
import { useTranslations } from 'next-intl'
import { richText } from '@/src/hooks/helper/richText'


export default function ModelosDesarrollo() {

  const t = useTranslations("desarrolloAMedida");

  return (
    <div>
      <section>

        {/*TITULO, DESCRIPCION, BUTTION DE: CARDS MODELOS DE DESARROLLO */}
        <CardAnuncies
          title={t("titles.ModelosDesarrollo.title")}
          description={t.rich("titles.ModelosDesarrollo.description", richText)}
          cards={t.raw("cardModeloDesarrollo1")}
          cols={3}
        />
        <CardAnuncies
          title=""
          cards={t.raw("cardModeloDesarrollo2")}
          cols={2}
        />
        <ButtonComponent textoBtn={t("textBtn.textoBtn3")} />

        {/*TITULO, DESCRIPCION, BUTTION DE: CARDS RESULTADOS MEDIBLES */}
        <CardAnuncies
          title={t("titles.ResultadosMedibles.title")}
          description={t.rich("titles.ResultadosMedibles.description", richText)}
          cards={t.raw("cardResultadosMedibles")}
          cols={2}
        />
        <ButtonComponent textoBtn={t("textBtn.textoBtn4")} />

        {/*TITULO, DESCRIPCION, BUTTION DE: CARDS ALIADO PARA FUTURO DIGITAL */}
        <TecnologiaConfiable />

        {/*TITULO, DESCRIPCION, BUTTION DE: CARDS TRANSFORMAR IDEA EN RESULTADOS DE NEGOCIO */}
        <CardAnuncies
          title={t("titles.IdeaNegocio.title")}
          description={t("titles.IdeaNegocio.description")}
          cards={t.raw("cardsIdeaNegocio")}
          cols={2}
        />
        <ButtonComponent textoBtn={t("textBtn.textoBtn6")} />

        {/*TITULO, DESCRIPCION, BUTTION DE: CARDS STACK TECNOLOGICO */}
        <CardAnuncies
          title={t("titles.StackTecnologico.title")}
          description={t.rich("titles.StackTecnologico.description", richText)}
          cards={t.raw("cardsStackTecnologico")}
          cols={2}
        />
        <ButtonComponent textoBtn={t("textBtn.textoBtn7")} />
      </section>
    </div>
  )
}
