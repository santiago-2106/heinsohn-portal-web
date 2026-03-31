import ContactForm from '@/src/components/forms/formularios/ContactForm'
import CertificacionesInternacionales from '@/src/components/sections/shared/certificaciones/CertificacionesInternacionales'
import Clientes from '@/src/components/sections/shared/clientes/Clientes'
import BannerFiguras from '@/src/components/sections/shared/figura/BannerFiguras'
import Hero from '@/src/components/sections/shared/hero/Hero'
import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import TextSections from '@/src/components/ui/typography/TextSections'
import { richText } from '@/src/hooks/helper/richText'
import { useTranslations } from 'next-intl'

export default function page() {

  const t = useTranslations("HomeHeinsohn")

  return (
    <div>
      <Hero 
      title={t("dataHeroHome.title")}
      subtitle={t.rich("dataHeroHome.subtitle", richText)}
      description={t("dataHeroHome.description")}
      />
      
      <CardAnuncies 
      title={t("cardsHeinsohnProfesional.title")}
      description={t("cardsHeinsohnProfesional.description")}
      cards={t.raw("cardsHeinsohnProfesional.cardsIA")}
      cols={3}
      />
      
      <TextSections items={t.raw("dataHome")}/>

      <CardAnuncies 
      title={t("cardSolucionesHome.title")}
      description={t("cardSolucionesHome.description")}
      cards={t.raw("cardSolucionesHome.cardsHome")}
      cols={1}
      alignHeader='left'
      />

      
      <BannerFiguras />

      <CardAnuncies 
      title={t("casosExito.title")}
      description={t("casosExito.description")}
      cards={t.raw("casosExito.cardsCasosExito")}
      cols={3}
      bottomBtn={t("casosExito.bottomBtn")}
      />

      <Clientes title={t("titlesHome.titleClientes")}/>

      <CertificacionesInternacionales 
      title={t("titlesHome.titleCertificacionesInternacionales")}
      imagen='/img/CMMI.png'
      />

      <ContactForm 
      title={t("titlesHome.titleContact")}
      />
    </div>
  )
}
