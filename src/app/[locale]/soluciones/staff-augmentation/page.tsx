import Hero from "@/src/components/sections/shared/hero/Hero";
import TextComponent from "@/src/components/ui/typography/TextComponent";
import SectionAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import CardResultados from "@/src/components/sections/shared/sectioncard/CardResultados";
import SubcomponenteCardStaff from "@/src/components/sections/staff-augmentation/SubcomponenteStaff"; 
import Mapa from "@/src/components/sections/mapa/Mapa";
import PreguntForm from "@/src/components/forms/formularios/PreguntForm";
import ButtonComponent from "@/src/components/ui/buttons/Button";

// Importamos TODA la data centralizada
import { paisesStaffArgumentation } from "@/src/data/soluciones/mapa";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";
import { useCard } from "@/src/hooks/useCard";
import CardFeatures from "@/src/components/ui/cards/CardFeatures";

export default function StaffAugmentationPage() {
  const t = useTranslations("staffAugmentation")

  const cardsMetodologia = t.raw("cardStaffArgumentation5");
  const cards = useCard(cardsMetodologia);

  return (
    <main>
      
      {/* 1. HERO */}
      <Hero
        title={t("dataHeroStaffArgumentation.title")}
        subtitle={t("dataHeroStaffArgumentation.subtitle")}
        description={t.rich("dataHeroStaffArgumentation.description", richText)}
        buttonText={t("dataHeroStaffArgumentation.buttonText")}
        breadcrumb={t.raw("dataHeroStaffArgumentation.breadcrumb")}
      />

      {/* 2. SÍNTOMAS */}
      {/* Sin border-t border-border-ui para quitar las líneas separadoras */}
      <section className="py-16">
        <SectionAnuncies 
          title={t.rich("StaffArgumentation1.title", richText)} 
          description={t.rich("StaffArgumentation1.description", richText)}
          cards={t.raw("StaffArgumentation1.cards1")} 
          cols={2}
          bottomText="Con Heinsohn, optimizas costos, eliminas cuellos de botella y accedes a talento que acelera tus proyectos desde el primer día."
          bottomBtn="Agenda tu sesión de diagnóstico y conoce perfiles disponibles"
        />
      </section>

      {/* 3. EL MODELO DE STAFFING */}
      <section className="py-16">
          <TextComponent
            title={t.rich("titlesStaffArgumentation.title1.title", richText)}
            description={t.rich("titlesStaffArgumentation.title1.description", richText)}
          />

        <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-24">
          {/* LÍNEAS EXACTAS Y PEGADAS */}
          <div className="flex flex-col md:flex-row gap-8 items-center text-text-body font-light text-base md:text-lg w-full mb-4 px-2">
            <div className="flex items-center gap-2 w-full">
              <span className="whitespace-nowrap">{t("titlesStaffArgumentation.description1.description")}</span>
              <div className="h-[1px] bg-border-ui flex-1"></div>
              <span>↓</span>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="whitespace-nowrap">{t("titlesStaffArgumentation.description2.description")}</span>
              <div className="h-[1px] bg-border-ui flex-1"></div>
              <span>↓</span>
            </div>
          </div>
          
          <div className="-mt-32 md:-mt-48">
          <CardResultados data={t.raw("cardStaffArgumentation2")} />  
          </div>
          
        </div>
      </section>

      {/* 4. ESPECIALISTAS TI */}
      <section className="py-1">
        <SectionAnuncies 
          title={t.rich("titlesStaffArgumentation.title3.title", richText)}
          description={t("titlesStaffArgumentation.title3.description")} 
          cards={t.raw("cardStaffArgumentation3.cards3")} 
          cols={2}
          bottomBtn="Contacta un especialista y encuentra el talento perfecto para tu equipo"
          alignHeader="center"
        />
      </section>

      {/* 5. POR QUÉ EL STAFF AUGMENTATION */}
      <section className="py-1">
        <SectionAnuncies 
          title={t.rich("titlesStaffArgumentation.title4.title", richText)}
          description={t.rich("titlesStaffArgumentation.title4.description", richText)}
          cards={t.raw("cardStaffArgumentation4.cards4")} 
          cols={2}
          bottomBtn="Descubre cómo reducir costos con staffing especializado"
        />
      </section>

      {/* 6. TU ALIADO ESTRATÉGICO */}
      <TextComponent 
      title={t.rich("titlesStaffArgumentation.title5.title", richText)}
      description={t.rich("titlesStaffArgumentation.title5.description", richText)}
      />

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-5xl ">
        {cards.map((item) => (
          <CardFeatures
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconPosition="left"
            variant="compact"
            iconColor="black"
          />
        ))}
      </section>


      {/* 7. ASÍ CONSTRUIMOS TU EQUIPO */}
      <section className="py-16">
           <TextComponent title={t.rich("titlesStaffArgumentation.title6.title", richText)}/>
           <SubcomponenteCardStaff information={t.raw("staffArgumentationTimeline")} />
      </section>

      {/* 8. MAPA */}
      <section className="py-1">
        <Mapa 
          showIcon={true}
          title={t("titlesStaffArgumentation.title7.title")}
          descripcion={t.rich("titlesStaffArgumentation.title7.description", richText)}
          imgMap="/img/mapa-staff2.png"
          paises={paisesStaffArgumentation}
        />
        <center className="mt-12">
          <ButtonComponent textoBtn={t("textoBtnMapa")} />
        </center>
      </section>

      {/* 9. PREGUNTAS FRECUENTES */}
    
        <PreguntForm title="Preguntas frecuentes" items={t.raw("dataPreguntasFrecuentesStaff")}/>
     

    </main>
  );
}