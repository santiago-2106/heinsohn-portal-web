import Hero from '@/src/components/sections/shared/hero/Hero'
import CardFuncaionShared from '@/src/components/sections/shared/sectioncard/CardFuncaionShared'
import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import ButtonComponent from '@/src/components/ui/buttons/Button'
import TextComponent from '@/src/components/ui/typography/TextComponent'
import { richText } from '@/src/hooks/helper/richText'
import { useTranslations } from 'next-intl'

export default function pageFundacion() {

  const t = useTranslations("FundacionHeinsohnConecta")

  return (
    <div>
      <Hero 
      title={t.rich("dataHeroFundacion.title", richText)}
      description={t("dataHeroFundacion.description")}
      breadcrumb={t.raw("dataHeroFundacion.breadcrumb")}
      />

    <CardAnuncies 
      title={t("cardPropositoSostenible.title")}
      description={t("cardPropositoSostenible.description")}
      cards={t.raw("cardPropositoSostenible.cardsInformation" )}
      bottomText={t("cardPropositoSostenible.bottomText")}
      cols={3}
    />

    <CardFuncaionShared 
    img='/img/img-fundacion.png'
    data={t.raw("seccionOportunidades")}
    />

    <TextComponent 
    title={t("descriptionFundacion")}
    />

    <ButtonComponent 
    textoBtn={t("textBtn")}
    />
      
    </div>
  )
}
