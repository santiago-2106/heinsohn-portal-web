import EbookBlogs from "@/src/components/forms/formularios/EbookBlogs";
import CardLayout from "@/src/components/layout/grids/CardLayout";
import SearchSection from "@/src/components/sections/shared/buscador/SearchSection";
import BannerFiguras from "@/src/components/sections/shared/figura/BannerFiguras";
import Hero from "@/src/components/sections/shared/hero/Hero";
import CardBlog from "@/src/components/sections/shared/sectioncard/CardBlog";
import { richText } from "@/src/hooks/helper/richText";
import { useTranslations } from "next-intl";


export default function page() {

    const t = useTranslations("EntradaBlogs")

  return (
    <div>
      <Hero 
      title={t("dataHeroEntradaBlogs.title")}
      subtitle={t.rich("dataHeroEntradaBlogs.subtitle", richText)}
      showImage={false}
      />

      <SearchSection />
      <BannerFiguras />

      <CardBlog 
      titlePrincipal={t("cardBlogReciente.titlePrincipal")}
      dataCards={t.raw("cardBlogReciente.cards")}/>

      <CardBlog 
      titlePrincipal={t("cardBlogReciente2.titlePrincipal2")}
      dataCards={t.raw("cardBlogReciente2.cards")}/>

      <CardBlog 
      titlePrincipal={t("cardBlogReciente3.titlePrincipal3")}
      dataCards={t.raw("cardBlogReciente3.cards")}/>

      <CardBlog 
      titlePrincipal={t("cardBlogReciente4.titlePrincipal4")}
      dataCards={t.raw("cardBlogReciente4.cards")}/>

      <CardLayout >
        <EbookBlogs 
        title="susbcribete"
        description="a mi canal"
        />
      </CardLayout>

    </div>
  )
}
