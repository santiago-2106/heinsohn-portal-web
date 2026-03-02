"use client";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Revisa si el tema oscuro ya estaba activo al cargar la página
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Función para alternar entre Claro y Oscuro
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="border-b border-border-ui bg-bg-main transition-colors duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="relative flex h-20 items-center justify-between">
          
          {/* LADO IZQUIERDO: Menú y Logo (Mantenemos tu diseño original) */}
          <li className="flex items-center gap-4">
            <button 
              onClick={() => setOpenMenu(!openMenu)}
              className="text-text-title flex items-center justify-center"
            >
              <MenuIcon />
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-text-title absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 tracking-wide"
            >
              <img
                src="https://portal.heinsohn.com.co/assets/icon/icon-512x512.png"
                alt="img logo"
                className="inline-block h-6 w-6 rounded-full sm:h-8 sm:w-8"
              />
              HEINSOHN
            </Link>
          </li>

          {/* LADO DERECHO: Botón, Bandera, Idioma y Luna */}
          <li className="hidden md:flex items-center gap-3 sm:gap-4">
            
            {/* Botón Contacto (Mantenemos tu diseño, pero con colores dinámicos) */}
            <Link 
              href="/" 
              className="rounded-full bg-text-title text-bg-main px-4 py-2 sm:px-5 sm:text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Contacto
            </Link>

            {/* Bandera de Colombia (Ahora es rectangular con rounded-sm) */}
            <img
              src="https://media.istockphoto.com/id/472331329/es/vector/bandera-de-colombia.jpg?s=1024x1024&w=is&k=20&c=ysoJC62S104d7hPJygDxujRP9_WPpqN5yrMRw1Bb8WE="
              alt="img colombia"
              className="inline-block w-7 h-5 rounded-sm object-cover border border-border-ui shadow-sm"
            />

            {/* Selector de idioma */}
            <select className="bg-transparent text-text-title text-sm font-medium outline-none cursor-pointer">
              <option>ES</option>
              <option className="text-black">EN</option>
              <option className="text-black">FRA</option>
            </select>
            
            {/* Ícono de Luna/Sol con su funcionalidad */}
            <button 
              onClick={toggleTheme} 
              className="flex items-center justify-center text-text-title hover:text-brand-accent transition-colors ml-1"
            >
              {isDark ? <LightModeIcon /> : <ModeNightIcon />}
            </button>
          </li>
        </ul>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                      ${openMenu ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col gap-4 text-sm mt-2 border-t border-border-ui pt-4">
            <li>
              <Link 
                href="/" 
                className="inline-block rounded-full bg-text-title text-bg-main px-6 py-2 font-medium"
              >
                Contacto
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <img
                src="https://media.istockphoto.com/id/472331329/es/vector/bandera-de-colombia.jpg?s=1024x1024&w=is&k=20&c=ysoJC62S104d7hPJygDxujRP9_WPpqN5yrMRw1Bb8WE="
                alt="img colombia"
                className="inline-block w-7 h-5 rounded-sm object-cover border border-border-ui shadow-sm"
              />
              <select className="bg-transparent text-text-title font-medium outline-none">
                <option>ES</option>
                <option className="text-black">EN</option>
                <option className="text-black">FRA</option>
              </select>
            </li>

            <li>
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 text-text-title font-medium"
              >
                {isDark ? <LightModeIcon /> : <ModeNightIcon />}
                {isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}