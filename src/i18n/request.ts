import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const officialMessagesForMoment = (await import(`../../messages/${locale}.json`)).default

  const navbar = (await import(`../../messages/${locale}/navbar.json`)).default;
  const solucionesTI = (await import(`../../messages/${locale}/solucionesTi.json`)).default;
  const contactForm = (await import(`../../messages/${locale}/contactForm.json`)).default;
  const strategicConsulting = (await import(`../../messages/${locale}/strategicConsulting.json`)).default;
  const desarrolloAMedida = (await import(`../../messages/${locale}/desarrolloAMedida.json`)).default;
  const desarrollo_UX_UI= (await import(`../../messages/${locale}/desarrolloUxUi.json`)).default;
  const solucionesFinancieras= (await import(`../../messages/${locale}/financiera.json`)).default;
  const solucionesSap= (await import(`../../messages/${locale}/solucionesSap.json`)).default;
  const gestionHumana= (await import(`../../messages/${locale}/gestionHumana.json`)).default;
  const landingSoftware= (await import(`../../messages/${locale}/landingSoftware.json`)).default;
  const footer = (await import(`../../messages/${locale}/footer.json`)).default;
  return {
    locale,
    messages: {
      ... officialMessagesForMoment,
      ...solucionesTI,
      ...contactForm,
      ...strategicConsulting,
      ...desarrolloAMedida,
      ...desarrollo_UX_UI,
      ...solucionesFinancieras,
      ...solucionesSap,
      ...gestionHumana,
      ...landingSoftware,
      ...footer,
      ...navbar
    }
    // ...
  };
});