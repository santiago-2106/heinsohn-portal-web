import CertificacionesInternacionales from '@/src/components/sections/shared/certificaciones/CertificacionesInternacionales'
import Hero from '@/src/components/sections/shared/hero/Hero'
import CardFuncaionShared from '@/src/components/sections/shared/sectioncard/CardFuncaionShared'
import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import ButtonComponent from '@/src/components/ui/buttons/Button'
import TextComponent from '@/src/components/ui/typography/TextComponent'
import { richText } from '@/src/hooks/helper/richText'
import { useTranslations } from 'next-intl'


export default function page() {

  const t = useTranslations("TrabajaConNosotros")

  return (
    <div >
      <Hero 
      title={t("datHeroTrabajaConNosotros.title")}
      description={t("datHeroTrabajaConNosotros.description")}
      buttonText={t("datHeroTrabajaConNosotros.buttonText")}
      />

      <CertificacionesInternacionales 
      title={t.rich("titlesTrabajaConNosotros.title1.title", richText)}
      descripcion={t.rich("titlesTrabajaConNosotros.title1.descripcion", richText)}
      imagen='/img/certificados-ISOS.png'
      />

      <CardFuncaionShared data={t.raw("igualdadOportunidades")}/>

      <TextComponent 
      title={t.rich("titlesTrabajaConNosotros.title2.title", richText)}
      description={t.rich("titlesTrabajaConNosotros.title2.description", richText)}
      />

      <CardAnuncies 
      title={t.rich("cardsHeinsohnProfesional.title", richText)}
      cards={t.raw("cardsHeinsohnProfesional.cards")}
      />

      <ButtonComponent textoBtn={t("textBtn")} />
    </div>
  )
}
