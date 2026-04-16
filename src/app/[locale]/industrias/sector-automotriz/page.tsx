import Hero from '@/src/components/sections/shared/hero/Hero'
import { useTranslations } from 'next-intl'
import PreguntasFort from '@/src/components/forms/formularios/PreguntForm'
import Slider from '@/src/components/sliders/SliderBlog'
import TextComponent from '@/src/components/ui/typography/TextComponent'
import { richText } from '@/src/hooks/helper/richText'
import Videos from '@/src/components/layout/videos/Videos'
import CardImg from '@/src/components/sections/shared/sectioncard/CardImg'
import ContactForm from '@/src/components/forms/formularios/ContactForm'

export default function pageSectorAutomotriz() {

  const t = useTranslations("sectorAutomotriz")

  return (
    <div>
      <Hero 
      title={t("dataHeroSectorAutomotriz.title")}
      subtitle={t("dataHeroSectorAutomotriz.subtitle")}
      breadcrumb={t.raw("dataHeroSectorAutomotriz.breadcrumb")}
      />

      <PreguntasFort 
      title={t("titlesSectorAutomotriz.title1.title")}
      description={t("titlesSectorAutomotriz.title1.description")}
      items={t.raw("listaTecnologiaExperiencia")}
      />

      <Slider 
      title={t("sliderSectorAutomotriz.title")}
      data={t.raw("sliderSectorAutomotriz.items")} />

      <TextComponent 
      title={t.rich("titlesSectorAutomotriz.title3.title", richText)}
      description={t("titlesSectorAutomotriz.title3.description")}
      />

      <Videos 
      video={t.raw("videoSectorAutomotriz.video")}
      textVideos={t("videoSectorAutomotriz.textVideos")}
      textButtonVideo={t("videoSectorAutomotriz.textButtonVideo")}
      />

      <TextComponent 
      title={t("titlesSectorAutomotriz.title5.title")}
      description={t.rich("titlesSectorAutomotriz.title5.description", richText)}
      />

    <TextComponent 
      title={t.rich("titlesSectorAutomotriz.title6.title", richText)}
      />
      <CardImg 
      dataCardsImgs={t.raw("cardProyectoPosible")}
      />

      <ContactForm 
      title={t("titlesSectorAutomotriz.titleContactForm.title")}
      />
    </div>
  )
}
