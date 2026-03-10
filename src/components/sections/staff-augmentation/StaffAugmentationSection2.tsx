import {
  infoStaffArgumentation4,
  infoStaffArgumentation5,
  infoStaffArgumentation6,
  titleStaffArgumentation3,
} from "../../../data/staff-augmentation";
import ButtonComponent from "../../ui/buttons/Button";
import CardFeatures from "../../ui/cards/CardFeatures";
import CardAnuncies from "../shared/sectioncard/SectionAnuncies";
import SubcomponenteCardStaff from "./SubcomponenteStaff";
import TextComponent from "../../ui/typography/TextComponent";

export default function StaffArgumentationSection2() {
  return (
    <section>
      <section>
        
        <CardAnuncies 
        title="Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día "
         cards={infoStaffArgumentation4} cols={2}
         description="Implementar un modelo de staffing te permite concentrarte hacer crecer tu negocio mientras nosotros gestionamos el talento. "
         />
        <ButtonComponent textoBtn="Descubre como reducir costos con staffing especializado" />
      </section>

      <section>
        <TextComponent 
        title={titleStaffArgumentation3.title}
        description={titleStaffArgumentation3.description}
        />
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-4xl">
          {infoStaffArgumentation6.map((item, index) => (
            <CardFeatures key={index} {...item}  iconPosition="left" />
          ))}
        </article>
        <ButtonComponent textoBtn="Habla con un expecialista en staffing TI" />
      </section>

      <article >
        <TextComponent
          title="Así construimos tu equipo de TI ideal, paso a paso"
          />
        <SubcomponenteCardStaff information={infoStaffArgumentation5} />
      </article>
    </section>
  );
}
