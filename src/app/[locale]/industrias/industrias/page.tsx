import ContactForm from "@/src/components/forms/formularios/ContactForm"
import Hero from "@/src/components/sections/shared/hero/Hero"
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies"
import { richText } from "@/src/hooks/helper/richText"
import { useTranslations } from "next-intl"


export default function pageIndustrias() {

  const t = useTranslations("industrias")
  
  return (
    <div>
      <Hero 
      title={t("dataHeroIndustrias.title")}
      subtitle={t.rich("dataHeroIndustrias.subtitle", richText)}
      breadcrumb={ t.raw("dataHeroIndustrias.breadcrumb") }
      />
      <CardAnuncies 
      title={t("titlesIndustrias.title1.title")}
      description={t.rich("titlesIndustrias.title1.description", richText)}
      cards={t.raw("cardSectorQueTransforma")}
      cols={2}
      />

      <ContactForm title={t("titlesIndustrias.title2.title")} />
    </div>
  )
}
