import { dataTextTitle } from "../../data/textComponentData/dataTextComponent";
import TextComponent from "./TextComponent";


export default function TextTeam() {
  return (
    <section>
      <TextComponent title={dataTextTitle.title} description={dataTextTitle.description}/>
      <div className="flex-col text-center">
        <h3 className="text-3xl">Juan Lopez</h3>
        <h3 className="mt-1 text-3xl">Lider UX en Heinsohn</h3>
      </div>
    </section>
  )
}
