import {
  infoStaffArgumentation,
  infoStaffArgumentation2,
  infoStaffArgumentation3,
  titleStaffArgumentation1,
} from "../../../data/staff-augmentation";
import ButtonComponent from "../../ui/buttons/Button";
import CardResultados from "../shared/sectioncard/CardResultados";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import HeaderSeparador from "../../ui/typography/HeaderSeparador";
import TextComponent from "../../ui/typography/TextComponent";

export default function StaffArgumentationSection() {
  return (
    <section>
      {/* Antes: grid inline hardcodeado. Ahora usa CardAnuncies */}
      <CardAnuncies  
      title="Cuando tu equipo necesita crecer, el Staff Augmentation TI es la respuesta"
      description='Las empresas necesitan escalar con agilidad y precisión, pero el reclutamiento tradicional suele ser lento y costoso. Nuestro modelo de Staff Augmentation TI te permite reforzar tu equipo sin recurrir a esquemas de outsourcing tradicional. Síntomas de una gestión sin staffing de TI eficiente: '
      cards={infoStaffArgumentation} 
      cols={2} 
      />
      <TextComponent description="Con Heinsohn, optimizas costos, eliminas cuellos de botella y accedes a talento que acelera tus proyectos desde el primer día. " />
      <ButtonComponent textoBtn="Agenda tu sesión de diagnóstico y conoce perfiles disponibles " />

      <section className="">
        <TextComponent
          title={titleStaffArgumentation1.title}
          description={titleStaffArgumentation1.description}
        />

        <HeaderSeparador title1="Modelos Disponibles" title2="Modalidades" />
        <CardResultados data={infoStaffArgumentation2} />
      </section>

      <section>
        <TextComponent
          title="Especialistas TI para cada etapa de tu transformación tecnológica"
          description="Nuestros equipos cubren todas las necesidades del ciclo de desarrollo tecnológico:"
        />
        <CardAnuncies title="" cards={infoStaffArgumentation3} cols={2} />
        <ButtonComponent textoBtn="Contacta un especialista y encuentra el talento perfecto para tu equipo" />
      </section>
    </section>
  );
}
