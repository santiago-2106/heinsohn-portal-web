import { infoStaffArgumentation, infoStaffArgumentation2, infoStaffArgumentation3, titleStaffArgumentation1 } from "../../data/dataStaffArgumentation/dataStaffArgumentation";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import CardResultados from "../../ui/CardResultados";
import CardAnuncies from "../../ui/cardsSolutions/CardAnuncies";
import HeaderSeparador from "../../ui/separadorStaffArgumentation/HeaderSeparador";
import TextComponent from "../../ui/textsComponent/TextComponent";


export default function StaffArgumentationSection() {
  return (
    <section>
      {/* Antes: grid inline hardcodeado. Ahora usa CardAnuncies */}
      <CardAnuncies
        title=""
        cards={infoStaffArgumentation}
        cols={2}
      />
      <TextComponent description='Con Heinsohn, optimizas costos, eliminas cuellos de botella y accedes a talento que acelera tus proyectos desde el primer día. ' />
      <ButtonComponent textoBtn="Agenda tu sesión de diagnóstico y conoce perfiles disponibles " />

      <section className="mt-24">
        <TextComponent
          title={titleStaffArgumentation1.title}
          description={titleStaffArgumentation1.description}
        />

        <HeaderSeparador title1="Modelos Disponibles" title2="Modalidades" />
        <CardResultados data={infoStaffArgumentation2} />
      </section>

      <section>
        <TextComponent title="Especialistas TI para cada etapa de tu transformación tecnológica" description='Nuestros equipos cubren todas las necesidades del ciclo de desarrollo tecnológico:' />
        <CardAnuncies
          title=""
          cards={infoStaffArgumentation3}
          cols={2}
        />
        <ButtonComponent textoBtn="Contacta un especialista y encuentra el talento perfecto para tu equipo" />
      </section>


    </section>

  )
}
