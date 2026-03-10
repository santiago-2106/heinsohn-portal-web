import { dataTextTitle } from "../../../data/share/textosGenerales";
import TextComponent from "../../ui/typography/TextComponent";

export default function TextTeam() {
  return (
    <section>
      <TextComponent
        title={dataTextTitle.title}
        description={dataTextTitle.description}
      />
      <div className="flex-col text-center">
        <h3 className="text-text-body text-2xl">Juan Lopez</h3>
        <h3 className="mt-1 text-text-body text-2xl">Lider UX en Heinsohn</h3>
      </div>
    </section>
  );
}
