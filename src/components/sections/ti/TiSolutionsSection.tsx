import {
  strategicConsultingCards,
  softwareIcons,
  analitycIcons,
  enginerTeamscIcons,
  strategicIcons,
} from "@/src/data/soluciones/ti";
import CardAnuncies from "@/src/components/sections/shared/sectioncard/SectionAnuncies";
import { useTranslations } from "next-intl";


export default function CardFinal() {

  const t = useTranslations()

  function traductionCards (cardsTraduction: string, icons:any[]) {
    return t.raw(cardsTraduction).map((itemsCards: any, index:number) => (
      {
        ...itemsCards,
        icon: icons[index]
      }
    ))
  }

  const softwareCards = traductionCards("software.softwareCards", softwareIcons)
  const analitycCards = traductionCards("analytics.analitycCards", analitycIcons)
  const enginerCards = traductionCards("enginerTeams.enginerTeamCards", enginerTeamscIcons)
  const strategiCards = traductionCards("strategicConsulting.strategicConsultingCards", strategicIcons)

  

  return (
    <>
      <CardAnuncies
      title={t("software.title")}
      cards={softwareCards}
      />

      <CardAnuncies
      title={t("analytics.title")}
      cards={analitycCards}
      />

      <CardAnuncies
        title={t("enginerTeams.title")}
        cards={enginerCards}
      />

      <CardAnuncies
        title={t("strategicConsulting.title")}
        cards={strategiCards}
      />
    </>
  );
}
