import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import ContactForm from "@/src/components/forms/formularios/ContactForm";

export default function ContactoPage() {
  const t = useTranslations("ContactoPage");

  return (
    <div className="min-h-screen bg-bg-main flex flex-col">
      
      {/* 1. SECCIÓN HERO (Encabezado) */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12">
        
        {/* Breadcrumb (Navegación superior) */}
        <nav className="text-sm text-text-body flex gap-2 items-center mb-12">
          <span className="material-symbols-rounded text-base">home</span>
          <Link href="/" className="hover:text-text-title transition-colors">
            {t("breadcrumb.home")}
          </Link>
          <span className="text-[#E30613] text-lg font-bold">›</span>
          <span className="text-text-title">{t("breadcrumb.current")}</span>
        </nav>

        {/* Textos y Botón */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light text-text-title mb-6 tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-text-body font-light leading-relaxed mb-10 max-w-3xl">
            {t("hero.description")}
          </p>
          <button className="bg-black text-white px-8 py-3.5 rounded-full flex items-center gap-3 text-sm font-medium hover:bg-gray-800 transition-colors w-fit">
            {t("hero.button")}
            {/* Ícono de teléfono (call) */}
            <span className="material-symbols-rounded text-lg">call</span>
          </button>
        </div>

      </section>

      {/* 2. FRANJA GEOMÉTRICA (Sin opacidad para que resalte) */}
      <div className="w-full border-y border-border-ui overflow-hidden flex justify-center bg-white">
        <img 
          src="/img/diseno-figuras.png" 
          alt="Diseño Geométrico" 
          /* Aquí le quitamos el opacity-60 para que se vea perfectamente clara */
          className="w-full max-w-[1440px] h-auto object-cover" 
        />
      </div>

      {/* 3. FORMULARIO DE CONTACTO */}
      <section >
        <ContactForm  title="Contactanos"/>
      </section>
      
    </div>
  );
}