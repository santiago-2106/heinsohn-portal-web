"use client";
import { useState } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl"; 
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/src/hooks/useTheme";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const {isDark, toggleTheme} = useTheme();

  // INTERNACIONALIZACIÓN IDIOMAS
  const t = useTranslations('navbar');

  // Internacionalización Con el select
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  const changeLanguaje = (newLocale: string) => {
    const segments = pathName.split("/");
    segments[1] = newLocale; // reemplaza solo el locale
    const newPath = segments.join("/");
    router.push(newPath, {scroll:false});
  };

  return (
    <header className="sticky top-0 left-0 z-40 border-b border-border-ui bg-bg-main transition-colors duration-300">
      <nav className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <ul className="relative flex h-20 items-center justify-between">
          
          {/* LADO IZQUIERDO: Menú y Logo */}
          <li className="flex items-center gap-4">
            {/* CORRECCIÓN: Forzamos a que siempre abra el menú al darle clic */}
            <button 
              onClick={() => setOpenMenu(true)}
              className="text-text-title flex items-center justify-center hover:cursor-pointer"
              aria-label={t("openMenu")}
            >
              <span className="material-symbols-rounded" style={{fontSize: "40px" }}>
                notes
              </span>
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-text-title absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 tracking-wide"
            >
              <Image
                src="/icon-heinsonh.svg"
                alt="img logo"
                width={30}
                height={30}
              />
              HEINSOHN
            </Link>
          </li>

          {/* LADO DERECHO: Botón, Bandera, Idioma y Luna */}
          <li className="hidden md:flex items-center gap-3 sm:gap-4">
            <Link 
              href="/contacto" 
              className="flex items-center justify-center rounded-full w-30 h-12.5 bg-text-title text-bg-main px-2 py-2 sm:px-5 sm:text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {t("contact")}
            </Link>

            <Image
              src="/bandera-colombia.svg"
              alt="img colombia"
              width={40}
              height={40}
              className="inline-block rounded-sm object-cover border border-border-ui shadow-sm"
            />

            <select 
              className="bg-bg-card-1 rounded-full text-text-body font-medium outline-none cursor-pointer py-2 px-3"
              onChange={e => changeLanguaje(e.target.value)}
              value={currentLocale}
            >
              <option value="col">COL</option>
              <option value='es'>ES</option>
              <option value='en'>EN</option>
            </select>
            
            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center text-text-title hover:text-brand-accent hover:cursor-pointer transition-colors ml-4"
              aria-label="Cambiar modo luz"
            >
              {isDark ? <LightModeIcon sx={{color: "#F4E6A1"}}/> : <ModeNightIcon sx={{fill:'white', stroke:'black'}}/>}
            </button>
          </li>
        </ul>
      </nav>

      {/* RENDERIZADO DEL SIDEBAR */}
      <Sidebar 
        titleSidebar="Consulta"
        isOpenSidebar={openMenu}
        onClose={() => setOpenMenu(false)}
        data={[
          { 
            id: "que-hacemos", 
            title: "Que hacemos", 
            children: [
              { 
                id: "soluciones", 
                title: "Soluciones", 
                children: [
                  { id: "ti", title: "Servicios TI", href: "/soluciones/soluciones-ti" },
                  { id: "nomina", title: "Gestión Humana y Nómina", href: "/soluciones/gestion-humana" },
                  { id: "pensiones", title: "Soluciones Sector Pensiones", href: "/soluciones/pensiones" },
                  { id: "financiero", title: "Soluciones Sector Financiero", href: "/soluciones/soluciones-financieras" },
                  { id: "sap", title: "Soluciones SAP", href: "/soluciones/soluciones-sap" },
                  { id: "ia", title: "Inteligencia Artificial", href: "/soluciones/soluciones-ia" },
                  { id: "medida", title: "Desarrollo a Medida", href: "/soluciones/desarrollo-a-medida" },
                  { id: "staff", title: "Staff Augmentation", href: "/soluciones/staff-augmentation" }
                ]
              }
            ] 
          },
          { 
            id: "pensamos", 
            title: "Lo que pensamos", 
            children: [
              { id: "blog", title: "Blog", href: "/e-book-blog/blogs" }
            ]
          },
          { id: "quienes-somos", title: "Quienes somos", href: "/pqrs/quienes-somos" },
          { id: "trabaja", title: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
          { id: "contacto", title: "Contacto", href: "/contacto" },
        ]}
      />
    </header>
  );
}