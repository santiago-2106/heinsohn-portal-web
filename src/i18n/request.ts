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

  //Soluciones TI, Contact Form, Strategic Consulting, Desarrollo a Medida, Desarrollo UX/UI, Soluciones Financieras, Soluciones SAP, Gestión Humana, Pensiones, Pensiones Voluntarias, Soluciones IA, Landing Software, Landing HGS y Footer
  const navbar = (await import(`../../messages/${locale}/navbar.json`)).default;
  const solucionesTI = (await import(`../../messages/${locale}/solucionesTi.json`)).default;
  const contactForm = (await import(`../../messages/${locale}/contactForm.json`)).default;
  const strategicConsulting = (await import(`../../messages/${locale}/strategicConsulting.json`)).default;
  const desarrolloAMedida = (await import(`../../messages/${locale}/desarrolloAMedida.json`)).default;
  const desarrollo_UX_UI= (await import(`../../messages/${locale}/desarrolloUxUi.json`)).default;
  const solucionesFinancieras= (await import(`../../messages/${locale}/financiera.json`)).default;
  const solucionesSap= (await import(`../../messages/${locale}/solucionesSap.json`)).default;
  const gestionHumana= (await import(`../../messages/${locale}/gestionHumana.json`)).default;
  const pensiones= (await import(`../../messages/${locale}/pensiones.json`)).default;
  const pensionesVoluntarias= (await import(`../../messages/${locale}/pensionesVoluntarias.json`)).default;
  const solucionesIA= (await import(`../../messages/${locale}/solucionesIa.json`)).default;
  const landingSoftware= (await import(`../../messages/${locale}/landingSoftware.json`)).default;
  const landingHgs= (await import(`../../messages/${locale}/landingHgs.json`)).default;
  const footer = (await import(`../../messages/${locale}/footer.json`)).default;
  const pqrs = (await import(`../../messages/${locale}/pqrs.json`)).default;
  const quinesSomos = (await import(`../../messages/${locale}/quienesSomos.json`)).default; 
  const soporte = (await import(`../../messages/${locale}/soporte.json`)).default;
  const industrias = (await import(`../../messages/${locale}/industrias.json`)).default;
  const sectorAutomotriz = (await import(`../../messages/${locale}/sectorAutomotriz.json`)).default;
  const fundacionX = (await import(`../../messages/${locale}/fundacion.json`)).default;
  const trabajaConNosotros = (await import(`../../messages/${locale}/trabajaConNosotros.json`)).default;
  const Home = (await import(`../../messages/${locale}/home.json`)).default;
  const entradaBlogs = (await import(`../../messages/${locale}/entradaBlogs.json`)).default;
  const eBook = (await import(`../../messages/${locale}/eBook.json`)).default;
  const casoExito = (await import(`../../messages/${locale}/casoExito.json`)).default;
  return {
    locale,
    messages: {
      //Soluciones Traducciones
      ...footer,
      ...navbar,
      ... officialMessagesForMoment,
      ...solucionesTI,
      ...contactForm,
      ...strategicConsulting,
      ...desarrolloAMedida,
      ...desarrollo_UX_UI,
      ...solucionesFinancieras,
      ...solucionesSap,
      ...gestionHumana,
      ...pensiones,
      ...pensionesVoluntarias,
      ...solucionesIA,
      ...landingHgs,
      ...landingSoftware,
      ...industrias,
      ...sectorAutomotriz,
      ...fundacionX,
      ...trabajaConNosotros,
      ...Home,
      ...entradaBlogs,
      ...eBook,
      ...pqrs,
      ...quinesSomos,
      ...soporte, 
      ...casoExito
    }
    
  };
});