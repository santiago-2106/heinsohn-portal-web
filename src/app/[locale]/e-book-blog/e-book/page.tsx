import EbookBlogs from '@/src/components/forms/formularios/EbookBlogs'
import CardLayout from '@/src/components/layout/grids/CardLayout'
import BannerFiguras from '@/src/components/sections/shared/figura/BannerFiguras'
import Hero from '@/src/components/sections/shared/hero/Hero'
import CardAnuncies from '@/src/components/sections/shared/sectioncard/SectionAnuncies'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {

  const t = useTranslations("EBook")
  return (
    <div>
      <Hero 
        title={t("dataHeroEBook.title")}
        buttonText={t("dataHeroEBook.buttonText")}
        showImage={false}
      />
      <CardLayout>
        <EbookBlogs 
        title={t("textsFormBlog.title")}
        description={t("textsFormBlog.description")}
        />
      </CardLayout>

      <CardAnuncies 
      title={t("cardEbook.title")}
      description={t("cardEbook.description")}
      cards={t.raw("cardEbook.cardsEbooks")}
      cols={3}
      />

      <BannerFiguras />
    </div>
  )
}
