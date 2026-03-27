import { useTranslations } from "next-intl";
import TextComponent from "../../ui/typography/TextComponent";

export default function TextTeam() {

  const t = useTranslations("desarrolloUxUi")

  return (
    <section>
      <TextComponent
        title={t("titleVozNuestroEquipo.title")}
        description={t("titleVozNuestroEquipo.description")}
      />
      <div className="flex-col text-center">
        <h3 className="text-text-body text-2xl">Juan Lopez</h3>
        <h3 className="mt-1 text-text-body text-2xl">{t("liderUxHeinsohn.description")}</h3>
      </div>
    </section>
  );
}
