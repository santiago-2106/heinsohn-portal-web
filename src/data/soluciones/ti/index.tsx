import { richText } from "@/src/hooks/helper/richText";

// =========================================================================
//  DATA HERO TRADUCIDA SOLUCIONES TI
// =========================================================================
export const dataHeroSolucionesTi1 = (t: any) => ({
  title: t("dataHeroSolucionesTI.title"),
  description: t.rich("dataHeroSolucionesTI.description", richText),
  buttonText: t("dataHeroSolucionesTI.buttonText"),
  breadcrumb: t.raw("dataHeroSolucionesTI.breadcrumb"),
});

