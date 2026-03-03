"use client";

import React, { useState } from "react";

interface FuncionalidadItem {
  title: string;
  description: string;
}

interface TabData {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: FuncionalidadItem[];
  btnText: string;
  btnLink: string;
}

interface FuncionalidadesSectionProps {
  title: string;
  tabs: TabData[];
}

export default function FuncionalidadesSection({ title, tabs }: FuncionalidadesSectionProps) {
  // Estado para controlar qué pestaña está seleccionada
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

  // Encontramos la data de la pestaña actualmente activa
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <section className="bg-bg-main py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal Centrado */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-text-title font-light mb-12 lg:mb-16 text-center max-w-4xl mx-auto leading-tight">
          {title}
        </h2>

        {/* Contenedor Principal (Tabs a la izquierda, Contenido a la derecha) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* LADO IZQUIERDO: Pestañas */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`group flex items-center justify-between p-5 md:p-6 transition-all duration-300 w-full text-left
                    ${isActive 
                      ? "border border-text-title shadow-sm bg-bg-main" 
                      : "border border-border-ui hover:border-text-title bg-transparent hover:shadow-sm"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${isActive ? "text-text-title" : "text-text-body group-hover:text-text-title"} transition-colors flex items-center`}>
                      {tab.icon}
                    </div>
                    <span className={`text-[15px] md:text-[17px] font-light transition-colors ${
                      isActive ? "text-text-title font-medium" : "text-text-body group-hover:text-text-title"
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  
                  {/* Flecha roja de navegación */}
                  <svg 
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className={`text-brand-accent transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              );
            })}
          </div>

          {/* LADO DERECHO: Contenido de la pestaña activa */}
          <div className="w-full lg:w-[65%]">
            {/* Caja con borde negro como en el diseño */}
            <div className="border border-text-title p-8 md:p-12 h-full flex flex-col bg-bg-main">
              
              <div className="flex flex-col gap-8 mb-12">
                {activeTab.items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1.5">
                    <h4 className="text-[17px] md:text-[19px] font-light text-text-title">
                      {item.title}
                    </h4>
                    <p className="text-[14px] md:text-[15px] font-light text-text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botón inferior alineado a la izquierda */}
              <div className="mt-auto pt-6 flex">
                <a 
                  href={activeTab.btnLink}
                  className="group flex items-center justify-between w-max gap-6 border border-border-ui rounded-full py-2.5 pl-6 pr-2 hover:border-text-title transition-colors"
                >
                  <span className="text-[14px] font-medium text-text-body group-hover:text-text-title transition-colors">
                    {activeTab.btnText}
                  </span>
                  {/* Ícono circular negro con flecha blanca */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-text-title text-bg-main transition-transform duration-300 group-hover:translate-x-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}