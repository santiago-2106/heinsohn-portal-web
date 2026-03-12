import {
  infoStaffArgumentation,
  infoStaffArgumentation2,
  infoStaffArgumentation3,
  titleStaffArgumentation1,
  titleStaffArgumentation2,
} from "../../../data/soluciones/staff-augmentation";
import ButtonComponent from "../../ui/buttons/Button";
import CardResultados from "../shared/sectioncard/CardResultados";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import HeaderSeparador from "../../ui/typography/HeaderSeparador";
import TextComponent from "../../ui/typography/TextComponent";

export default function StaffArgumentationSection() {
  return (
    <section>
      {/* Informacion staff Cuando tu equipo necesita crecer, el Staff Augmentation TI es la respuesta  */}
      <CardAnuncies  
      title={titleStaffArgumentation2.title}
      description={titleStaffArgumentation2.description}
      cards={infoStaffArgumentation} 
      cols={2} 
      bottomBtn="Agenda tu sesión de diagnóstico y conoce perfiles disponibles "
      bottomText='Con Heinsohn, optimizas costos, eliminas cuellos de botella y accedes a talento que acelera tus proyectos desde el primer día.'
      /> 
      <section className="">
        <TextComponent
          title={titleStaffArgumentation1.title}
          description={titleStaffArgumentation1.description}
        />

        <HeaderSeparador title1="Modelos Disponibles" title2="Modalidades" />
        <CardResultados data={infoStaffArgumentation2} />
      </section>
      

      <section>
        <CardAnuncies 
        title="Especialistas TI para cada etapa de tu transformación tecnológica" 
        description="Nuestros equipos cubren todas las necesidades del ciclo de desarrollo tecnológico:"
        cards={infoStaffArgumentation3} 
        cols={2} />
        <ButtonComponent textoBtn="Contacta un especialista y encuentra el talento perfecto para tu equipo" />
      </section>
    </section>
  );
}
