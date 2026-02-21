import { dataIA, infoStaffArgumentation4, infoStaffArgumentation5, infoStaffArgumentation6 } from "../../data/dataStaffArgumentation/dataStaffArgumentation";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import CardGrid from "../../ui/CardGrid";
import CardFeatures from "../../ui/cardsSolutDigitalIS/CardFeatures";
import CardAnuncies from "../../ui/cardsSolutions/CardAnuncies";
import SubcomponenteCardStaff from "../../ui/cardStaff/SubcomponenteCardStaff";
import TextComponent from "../../ui/textsComponent/TextComponent";


export default function StaffArgumentationSection2() {
  return (
    <section>
      <section>
        <TextComponent
          title='Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día '
          description='Implementar un modelo de staffing te permite concentrarte hacer crecer tu negocio mientras nosotros gestionamos el talento. ' />

        <CardAnuncies
          title=""
          cards={infoStaffArgumentation4}
          cols={2}
        />
        <ButtonComponent textoBtn="Descubre como reducir costos con staffing especializado" />
      </section>


      <section>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-8 md:py-5 px-10 mx-auto max-w-4xl">
          {
            infoStaffArgumentation6.map((item, index) => (
              <CardFeatures key={index} {...item} variant="compact" />
            ))
          }      
        </article>                
      </section>


      <article className="mt-24">
        <TextComponent
          title="Cómo implementamos la inteligencia artificial en tu empresa"
          description="Nuestro enfoque combina visión estratégica, desarrollo técnico y acompañamiento continuo:"
        />
        <SubcomponenteCardStaff information={infoStaffArgumentation5} />
      </article>
      <SubcomponenteCardStaff information={dataIA} />
    </section>
  )
}
