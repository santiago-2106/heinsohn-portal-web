"use client";
import { useState, useEffect } from "react";
// 🚨 ELIMINA ESTA LÍNEA:
// import Link from "next/link"; 

// ✅ AGREGA ESTA LÍNEA: Importa el Link desde tu configuración de routing de next-intl
// (Asegúrate de que la ruta '../../i18n/routing' coincida con tu proyecto, según tu árbol de carpetas debería ser así)
import { Link } from "@/src/i18n/navigation";

export interface MenuItem {
  id: string;
  title: string;
  href?: string;         
  children?: MenuItem[]; 
}

interface PropsSidebar {
  titleSidebar: string;
  descriptionSidebar?: string;
  data: MenuItem[];
  isOpenSidebar: boolean;
  onClose: () => void;
}

export default function Sidebar({
  titleSidebar,
  descriptionSidebar,
  data,
  isOpenSidebar,
  onClose,
}: PropsSidebar) {
  const [activeLevel1, setActiveLevel1] = useState<string | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpenSidebar) {
      const timer = setTimeout(() => {
        setActiveLevel1(null);
        setActiveLevel2(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpenSidebar]);

  const currentLevel1Data = data.find((item) => item.id === activeLevel1);
  const currentLevel2Data = currentLevel1Data?.children?.find(
    (item) => item.id === activeLevel2
  );

  const renderItem = (
    item: MenuItem,
    isActive: boolean,
    onClickAction: () => void
  ) => {
    const baseClasses = "flex justify-between items-center px-4 py-3 rounded-xl transition-all duration-200 group";
    const activeClasses = isActive
      ? "bg-bg-card-1 text-text-title font-medium"
      : "text-text-body hover:bg-bg-menu-hover hover:text-text-title";

    if (item.children && item.children.length > 0) {
      return (
        <li key={item.id}>
          <button onClick={onClickAction} className={`w-full ${baseClasses} ${activeClasses}`}>
            <span className="font-light">{item.title}</span>
            <span className={`material-symbols-rounded text-brand-accent text-lg transition-transform duration-300 ${isActive ? "translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`}>
              arrow_forward
            </span>
          </button>
        </li>
      );
    }

    return (
      <li key={item.id}>
        {/* ESTE LINK AHORA AUTOMÁTICAMENTE AGREGA EL IDIOMA (/es/, /en/) A LA URL */}
        <Link href={item.href || "/"} onClick={onClose} className={`w-full ${baseClasses} ${activeClasses}`}>
          <span className="font-light">{item.title}</span>
          <span className="material-symbols-rounded text-brand-accent text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </li>
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ${
          isOpenSidebar ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 bottom-0 z-[999] flex h-screen transition-transform duration-500 ease-in-out ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ================= COLUMNA 1 (Principal) ================= */}
        <aside className="w-[300px] md:w-[350px] h-full bg-bg-card-2 border-r border-border-ui p-6 flex flex-col justify-between shrink-0 shadow-lg relative z-30">
          <div className="overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex justify-between items-center mb-8 mt-2">
               <h2 className="text-3xl font-light text-text-title">{titleSidebar}</h2>
               <button onClick={onClose} className="text-text-body hover:text-text-title transition-colors">
                  <span className="material-symbols-rounded text-3xl">close</span>
               </button>
            </div>
            
            {descriptionSidebar && (
              <p className="text-text-body mb-6">{descriptionSidebar}</p>
            )}

            <ul className="space-y-2">
              {data.map((item) =>
                renderItem(item, activeLevel1 === item.id, () => {
                  setActiveLevel1(activeLevel1 === item.id ? null : item.id);
                  setActiveLevel2(null);
                })
              )}
            </ul>
          </div>

          <div className="text-sm text-text-body mt-8 pt-6 border-t border-border-ui">
            <p className="mb-1 font-medium">Contacto</p>
            <p>info@heinsohn.com.co</p>
          </div>
        </aside>

        {/* ================= COLUMNA 2 (Nivel Medio) ================= */}
        <aside
          className={`h-full bg-bg-main border-r border-border-ui p-6 flex flex-col shrink-0 shadow-md transition-all duration-300 ease-in-out relative z-20 ${
            activeLevel1 && currentLevel1Data?.children
              ? "w-[300px] md:w-[350px] opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-10 p-0 border-none overflow-hidden"
          }`}
        >
          <div className="w-[252px] md:w-[302px] overflow-y-auto pr-2"> 
            <h2 className="text-2xl font-light mb-8 mt-2 text-text-title border-b border-border-ui pb-4">
              {currentLevel1Data?.title}
            </h2>
            <ul className="space-y-2">
              {currentLevel1Data?.children?.map((item) =>
                renderItem(item, activeLevel2 === item.id, () => {
                  setActiveLevel2(activeLevel2 === item.id ? null : item.id);
                })
              )}
            </ul>
          </div>
        </aside>

        {/* ================= COLUMNA 3 (Vistas Finales) ================= */}
        <aside
          className={`h-full bg-bg-main border-r border-border-ui p-6 flex flex-col shrink-0 shadow-sm transition-all duration-300 ease-in-out relative z-10 ${
            activeLevel2 && currentLevel2Data?.children
              ? "w-[300px] md:w-[350px] opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-10 p-0 border-none overflow-hidden"
          }`}
        >
          <div className="w-[252px] md:w-[302px] overflow-y-auto pr-2">
            <h2 className="text-2xl font-light mb-8 mt-2 text-text-title border-b border-border-ui pb-4">
              {currentLevel2Data?.title}
            </h2>
            <ul className="space-y-2">
              {currentLevel2Data?.children?.map((item) =>
                renderItem(item, false, () => {})
              )}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}