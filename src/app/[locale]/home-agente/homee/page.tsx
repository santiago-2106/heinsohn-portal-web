// 1. AÑADES ESTA IMPORTACIÓN PARA EL SEO
import { Metadata } from 'next'; 

import ContactForm from '@/src/components/forms/formularios/ContactForm'
import CertificacionesInternacionales from '@/src/components/sections/shared/certificaciones/CertificacionesInternacionales'
import Clientes from '@/src/components/sections/shared/clientes/Clientes'
import Hero from '@/src/components/sections/shared/hero/Hero'
import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import HeroSvg from '@/src/components/svgs/HeroSvg'
import ButtonComponent from '@/src/components/ui/buttons/Button'
import TextSections from '@/src/components/ui/typography/TextSections'
import { richText } from '@/src/hooks/helper/richText'
import mapRich from '@/src/hooks/mapRich'
import { useTranslations } from 'next-intl'

//  AQUÍ ES DONDE SE IMPLEMENTA LA CONFIGURACIÓN DEL SEO 
// Se exporta esta constante llamada 'metadata' siempre por fuera y 
// antes de la función de tu componente visual.
export const metadata: Metadata = {
  title: 'Inicio | Portal Web Heinsohn',
  description: 'Plataforma integral para la gestión de soluciones financieras y tecnológicas.',
};

export default function pageHome() {

  const t = useTranslations("HomeHeinsohn")
  //Cards Soluciones del Home ajuste para estilos segun la ux
  const cardSoluciones = mapRich(t, "cardSolucionesHome.cardsHome")
  
  return (
    <div id='home'>
      <Hero 
      title={t("dataHeroHome.title")}
      subtitle={t.rich("dataHeroHome.subtitle", richText)}
      description={t("dataHeroHome.description")}
      showImage={false}
      />
      <CardAnuncies 
      title={t("cardsHeinsohnProfesional.title")}
      description={t("cardsHeinsohnProfesional.description")}
      cards={t.raw("cardsHeinsohnProfesional.cardsIA")}
      cols={3}
      />
      <HeroSvg />
      
      <TextSections items={t.raw("dataHome")}/>

      <CardAnuncies 
      title={t("cardSolucionesHome.title")}
      description={t.rich("cardSolucionesHome.description", richText)}
      cards={cardSoluciones}
      cols={1}
      alignHeader='left'
      />

      <HeroSvg />

      <CardAnuncies 
      title={t("casosExito.title")}
      description={t("casosExito.description")}
      cards={t.raw("casosExito.cardsCasosExito")}
      cols={3}
      />
      <ButtonComponent textoBtn={t("textoBtn")} href='/es/casos-exito'/>

      <Clientes 
      title={t("titlesHome.titleClientes.title")}
      description={t("titlesHome.titleClientes.description")}
      />

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