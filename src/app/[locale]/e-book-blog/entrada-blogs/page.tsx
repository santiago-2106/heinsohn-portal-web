"use client"
import EbookBlogs from "@/src/components/forms/formularios/EbookBlogs";
import CardLayout from "@/src/components/layout/grids/CardLayout";
import SearchSection from "@/src/components/sections/shared/buscador/SearchSection";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardBlog from "@/src/components/sections/shared/sectioncard/CardBlog";
import HeroSvg from "@/src/components/svgs/HeroSvg";
import { richText } from "@/src/hooks/helper/richText";
import { useTranslations } from "next-intl";
import { useState } from "react";


export default function page() {

    const t = useTranslations("EntradaBlogs")
    const [search, setSearch] = useState("");

  return (
    <div>
      <Hero 
      title={t("dataHeroEntradaBlogs.title")}
      subtitle={t.rich("dataHeroEntradaBlogs.subtitle", richText)}
      showImage={false}
      />

      <SearchSection search={search} setSearch={setSearch}/>
      <HeroSvg />

      <CardBlog 
      titlePrincipal={t("cardBlogReciente.titlePrincipal")}
      dataCards={t.raw("cardBlogReciente.cards")}
      search={search}
      />

      <CardBlog 
      titlePrincipal={t("cardBlogReciente2.titlePrincipal2")}
      dataCards={t.raw("cardBlogReciente2.cards")}
      search={search}
      />

      <CardBlog 
      titlePrincipal={t("cardBlogReciente3.titlePrincipal3")}
      dataCards={t.raw("cardBlogReciente3.cards")}
      search={search}
      />

      <CardBlog 
      titlePrincipal={t("cardBlogReciente4.titlePrincipal4")}
      dataCards={t.raw("cardBlogReciente4.cards")}
      search={search}
      />

      <CardLayout >
        <EbookBlogs 
        title="susbcribete"
        description="a mi canal"
        />
      </CardLayout>

    </div>
  )
}
