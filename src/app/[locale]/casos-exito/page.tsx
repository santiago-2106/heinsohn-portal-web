import type { Metadata } from "next";
import { useTranslations } from "next-intl";

import CasoExitoDetail from "@/src/components/sections/shared/hero/CasoExitoDetail";
import BannerFiguras from "@/src/components/sections/shared/figura/BannerFiguras";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import Videos from '@/src/components/layout/videos/Videos'; 
import CarouselSoluciones from "@/src/components/sections/shared/carrusel/CarouselSoluciones"; 
import ContactForm from "@/src/components/forms/formularios/ContactForm"; 

// 1. IMPORTAMOS LOS NUEVOS COMPONENTES
import CardLayout from '@/src/components/layout/grids/CardLayout';
import CardFuncaionShared from '@/src/components/sections/shared/sectioncard/CardFuncaionShared';
import HeroSvg from "@/src/components/svgs/HeroSvg";

export const metadata: Metadata = {
  title: "Caso de Éxito | Heinsohn",
  description: "Descubre cómo modernizamos el ecosistema digital para la movilidad del futuro.",
};

export default function CasoExitoPage() {
  const t = useTranslations("casoExito");

  const breadcrumb = t.raw("breadcrumb");
  const secciones = t.raw("secciones");
  
  const rawCards = t.raw("comoAportamosValor.cards");
  const processedCards = rawCards.map((card: any) => ({
    customContent: (
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 h-full border border-border-ui bg-bg-main">
        <span 
          className="material-symbols-rounded text-text-title font-light mb-6"
          style={{ fontSize: "40px" }}
        >
          {card.icon}
        </span>
        <p className="text-[17px] text-text-body font-light leading-relaxed">
          {card.description}
        </p>
      </div>
    )
  }));

  return (
    <div>
      
      <CasoExitoDetail 
        breadcrumb={breadcrumb}
        title={t("title")}
        industry={t("industry")}
        sections={secciones}
      />

      <HeroSvg />

      <div >
        <CardAnuncies
          topBadge={t("comoAportamosValor.badge")}
          badgeVariant="outline" 
          title={t("comoAportamosValor.title")}
          description={t("comoAportamosValor.description")}
          cards={processedCards}
          cols={3}
          alignHeader="center"
        />
      </div>

      <div className="py-12 border-t border-border-ui">
        <div className="whitespace-pre-line">
          <TextComponent 
            title={t("videoIntro.title")}
            align="center"
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 md:px-0 my-8">
          <Videos 
            video={t.raw("videoSection2.video")}
            textVideos={t("videoSection.textVideos")}
            textButtonVideo={t("videoSection2.textButtonVideo")}
          />
        </div>

        <div className="mt-16 whitespace-pre-line">
          <TextComponent 
            title={t("testimonio.title")}
            description={t("testimonio.description")}
            align="center"
          />
          <div className="text-center mt-[-10px] pb-12">
            <p className="text-text-body text-base font-medium">{t("testimonio.author")}</p>
            <p className="text-text-body/70 text-sm font-light mt-1">{t("testimonio.role")}</p>
          </div>
        </div>
      </div>

      {/* 2. NUEVA SECCIÓN: Explora Industria */}
      <CardLayout img="/img/diseno-figuras.png">
        <div className="flex flex-col w-full">
          <CardFuncaionShared data={t.raw("exploraIndustria")} />
          
          {/* Botón extra que pide el diseño, agregado de forma independiente */}
          <div className="mt-8 mx-auto md:mx-0 max-w-md md:max-w-lg lg:max-w-169 w-full">
            <a
              href={t("exploraIndustria.btnLink")}
              className="inline-block bg-text-title text-bg-main px-10 py-3 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {t("exploraIndustria.btnText")}
            </a>
          </div>
        </div>
      </CardLayout>
      <CarouselSoluciones 
        title={t("solucionesRelacionadas.title")}
        description={t("solucionesRelacionadas.description")}
        cards={t.raw("solucionesRelacionadas.cards")}
      />

      <ContactForm title={t("contactoTitle")} />

    </div>
  );
}