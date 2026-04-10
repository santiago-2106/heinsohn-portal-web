import React from "react";
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
import { 
  dataStaffHero,
  titleStaffArgumentation1,
  infoStaffArgumentation,
  titleStaffArgumentation2,
  infoStaffArgumentation2,
  titleStaffArgumentation3,
  infoStaffArgumentation3,
  titleStaffArgumentation4,
  infoStaffArgumentation4,
  titleStaffArgumentation5,
  infoStaffArgumentation6,
  dataPreguntasFrecuentesStaff
} from "@/src/data/soluciones/staff-augmentation/index";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

export default function StaffAugmentationPage() {
  const t = useTranslations("staffAugmentation")

  return (
    <main className="bg-bg-main min-h-screen transition-colors duration-300">
      
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
            <div className="flex items-center gap-4 w-full">
              <span className="whitespace-nowrap">Modelos disponibles</span>
              <div className="h-[1px] bg-border-ui flex-1"></div>
              <span>↓</span>
            </div>
            <div className="flex items-center gap-4 w-full">
              <span className="whitespace-nowrap">Modalidades</span>
              <div className="h-[1px] bg-border-ui flex-1"></div>
              <span>↓</span>
            </div>
          </div>
          
          <CardResultados data={t.raw("cardStaffArgumentation2")} />
        </div>
      </section>

      {/* 4. ESPECIALISTAS TI */}
      <section className="py-16">
        <SectionAnuncies 
          title={t.rich("titlesStaffArgumentation.title3.title", richText)}
          description={t("titlesStaffArgumentation.title3.description")} 
          cards={t.raw("cardStaffArgumentation3")} 
          cols={2}
          bottomBtn="Contacta un especialista y encuentra el talento perfecto para tu equipo"
          alignHeader="center"
        />
      </section>

      {/* 5. POR QUÉ EL STAFF AUGMENTATION */}
      <section className="py-16">
        <div className="text-center mx-auto max-w-3xl px-4 mb-8">
          <TextComponent
            title={<div className="text-3xl md:text-4xl text-text-title font-light">{titleStaffArgumentation4.title}</div>}
            description={<div className="text-base text-text-body leading-relaxed mt-2">{titleStaffArgumentation4.description}</div>}
          />
        </div>
        <SectionAnuncies 
          title="" 
          description="" 
          cards={infoStaffArgumentation4} 
          cols={2}
          bottomBtn="Descubre cómo reducir costos con staffing especializado"
        />
      </section>

      {/* 6. TU ALIADO ESTRATÉGICO */}
      <section className="py-16">
        <div className="text-center mx-auto max-w-4xl px-4">
          <TextComponent
            title={<div className="text-3xl md:text-4xl text-text-title font-light">{titleStaffArgumentation5.title}</div>}
            description={<div className="text-base text-text-body leading-relaxed mt-2">{titleStaffArgumentation5.description}</div>}
          />
        </div>
        
        <div className="mx-auto max-w-5xl mt-2 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border-ui bg-bg-main">
            {/* ITEM 1 */}
            <div className="flex items-center gap-6 p-8 border-b md:border-r border-border-ui">
              <span className="material-symbols-rounded text-text-title font-light text-[35px] shrink-0">sync_saved_locally</span>
              <div className="text-base text-text-body font-light text-left">Metodología <br/><span className="text-text-body/70">Data-Driven 360°.</span></div>
            </div>
            {/* ITEM 2 */}
            <div className="flex items-center gap-6 p-8 border-b border-border-ui">
              <span className="material-symbols-rounded text-text-title font-light text-[35px] shrink-0">diamond_shine</span>
              <div className="text-base text-text-body font-light text-left">Certificación CMMI Nivel 5 y metodologías ágiles <span className="text-text-body/70">(Scrum, OKR, Lean).</span></div>
            </div>
            {/* ITEM 3 */}
            <div className="flex items-center gap-6 p-8 border-b md:border-b-0 md:border-r border-border-ui">
              <span className="material-symbols-rounded text-text-title font-light text-[35px] shrink-0">language</span>
              <div className="text-base text-text-body font-light text-left">Cobertura regional <span className="text-text-body/70">con sedes en LATAM y Norteamérica.</span></div>
            </div>
            {/* ITEM 4 */}
            <div className="flex items-center gap-6 p-8">
              <span className="material-symbols-rounded text-text-title font-light text-[35px] shrink-0">contact_support</span>
              <div className="text-base text-text-body font-light text-left">Soporte continuo y <br/><span className="text-text-body/70">acompañamiento operativo.</span></div>
            </div>
          </div>
          
          <center className="mt-12">
             <ButtonComponent textoBtn="Habla con un especialista en staffing TI" />
          </center>
        </div>
      </section>

      {/* 7. ASÍ CONSTRUIMOS TU EQUIPO */}
      <section className="py-16">
        <div className="text-center">
           <TextComponent title={<div className="text-3xl md:text-4xl text-text-title font-light">Así construimos tu equipo de TI ideal,<br /> paso a paso</div>} />
        </div>
        <div className="mt-8">
           <SubcomponenteCardStaff information={infoStaffArgumentation6} />
        </div>
      </section>

      {/* 8. MAPA */}
      <section className="py-16">
        <Mapa 
          showIcon={true}
          title="Tiempo promedio de vinculación"
          descripcion={<span className="text-2xl md:text-[28px] text-text-title font-bold">2 a 3 semanas.</span>}
          imgMap="/img/mapa-staff2.png"
          paises={paisesStaffArgumentation}
        />
        <center className="mt-12">
          <ButtonComponent textoBtn="Empieza tu hoja de ruta AI personalizada" />
        </center>
      </section>

      {/* 9. PREGUNTAS FRECUENTES */}
      <div className="py-16 mt-12">
        <PreguntForm title="Preguntas frecuentes" items={dataPreguntasFrecuentesStaff}/>
      </div>lyu7u7 

    </main>
  );
}