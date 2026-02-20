import { infoStaffArgumentation, infoStaffArgumentation2, infoStaffArgumentation3, titleStaffArgumentation1 } from "../../data/dataStaffArgumentation/dataStaffArgumentation";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import CardResultados from "../../ui/CardResultados";
import Card from "../../ui/cardsSolutions/Card";
import HeaderSeparador from "../../ui/separadorStaffArgumentation/HeaderSeparador";
import TextComponent from "../../ui/textsComponent/TextComponent";


export default function StaffArgumentationSection() {
  return (
    <section>
      <article className="mx-auto max-w-4xl grid grid-cols-1 p-5 md:grid-cols-2 gap-8 py-16">
        {
            infoStaffArgumentation.map((item, index) => (
                <Card key={index} {...item} />
            ))
        }
      </article>
      <TextComponent description='Con Heinsohn, optimizas costos, eliminas cuellos de botella y accedes a talento que acelera tus proyectos desde el primer día. ' />
      <ButtonComponent textoBtn="Agenda tu sesión de diagnóstico y conoce perfiles disponibles " />
    <section className="mt-24">
        <TextComponent 
        title={titleStaffArgumentation1.title} 
        description={titleStaffArgumentation1.description} 
        />

        <HeaderSeparador title1="Modelos Disponibles" title2="Modalidades"/>
        <CardResultados data={infoStaffArgumentation2} />
    </section>
    <section>
      <TextComponent title="Especialistas TI para cada etapa de tu transformación tecnológica" description='Nuestros equipos cubren todas las necesidades del ciclo de desarrollo tecnológico:'/>
      <article className="mx-auto max-w-4xl grid grid-cols-1 p-5 md:grid-cols-2 gap-8 py-16"> {/*VER O AJUSTAR EL COMPONENTE con estilos para no usar lo mismo a cada rato PARA ESTO*/}
        {
            infoStaffArgumentation3.map((i, index) => (
              <Card key={index} {...i} />
            ))
          }
      </article>
      <ButtonComponent textoBtn="Contacta un especialista y encuentra eñ talento perfecto para tu equipo" />
    </section>
    
    
    </section>
    
  )
}
