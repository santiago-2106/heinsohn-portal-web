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
  const {isDark, toggleTheme} = useTheme()

//INTERNACIALIZACION IDIOMAS
  const t = useTranslations('navbar')

//Internacializacion Con el select
  const router = useRouter()
  const pathName = usePathname()

  const currentLocale = useLocale()

  const changeLanguaje = (newLocale: string) => {
  const segments = pathName.split("/");

  segments[1] = newLocale; // reemplaza solo el locale

  const newPath = segments.join("/");

  router.push(newPath, {scroll:false});
};

  return (
    <header className="sticky top-0 left-0 z-50 border-b border-border-ui bg-bg-main transition-colors duration-300">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ul className="relative flex h-20 items-center justify-between">
          
          {/* LADO IZQUIERDO: Menú y Logo (Mantenemos tu diseño original) */}
          <li className="flex items-center gap-4">
            <button 
              onClick={() => setOpenMenu(!openMenu)}
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
            
            {/* Botón Contacto (Mantenemos tu diseño, pero con colores dinámicos) */}
            <Link 
              href="/" 
              className="flex items-center justify-center rounded-full w-30 h-12.5 bg-text-title text-bg-main px-2 py-2 sm:px-5 sm:text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {t("contact")}
            </Link>

            {/* Bandera de Colombia (Ahora es rectangular con rounded-sm) */}
            <Image
                src="/bandera-colombia.svg"
                alt="img colombia"
                width={40}
                height={40}
              className="inline-block rounded-sm object-cover border border-border-ui shadow-sm"
            />

            {/* Selector de idioma */}
            <select className="bg-bg-card-1 rounded-full text-text-body font-medium outline-none cursor-pointer"
            onChange={e => changeLanguaje(e.target.value)}
            value={currentLocale}
            >
              <option value="col">COL</option>
              <option value='es'>ES</option>
              <option value='en'>EN</option>
            </select>
            
            {/* Ícono de Luna/Sol con su funcionalidad */}
            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center text-text-title hover:text-brand-accent hover:cursor-pointer transition-colors ml-10"
              aria-label="Cambiar modo luz"
            >
              {isDark ? <LightModeIcon sx={{color: "#F4E6A1"}}/> : <ModeNightIcon sx={{fill:'white', stroke:'black'}}/>}
            </button>
          </li>
        </ul>

        {/* MENÚ MÓVIL DESPLEGABLE */}
       
      </nav>
      <Sidebar titleSidebar="Consulta"
      listSidebar={[
      { sidebarHref: "#", sidebarList: "Que hacemos" },
      { sidebarHref: "#", sidebarList: "Lo que pensamos" },
      { sidebarHref: "#", sidebarList: "Quienes somos" },
      { sidebarHref: "#", sidebarList: "Trabaja con nosotros" },
      { sidebarHref: "#", sidebarList: "Zona Clientes" },
      { sidebarHref: "#", sidebarList: "Contacto" },
      ]}
      isOpenSidebar={openMenu}
      onClose={() => setOpenMenu(false)}
      />
    </header>
  );
}