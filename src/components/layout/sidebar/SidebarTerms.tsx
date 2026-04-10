"use client";

export default function SidebarTerms({ 
  sections, 
  activeId, 
  setActiveId 
}: { 
  sections: any[], 
  activeId: string, 
  setActiveId: (id: string) => void 
}) {
  return (
    // La clase "hidden lg:flex" oculta esta barra en celulares y la muestra en PC
    <aside className="hidden lg:flex w-[320px] sticky top-24 flex-col h-fit">
      
      <div className="border border-border-ui rounded-sm p-6 flex flex-col gap-6 bg-white shadow-sm">
        <h3 className="text-xl font-light text-text-title px-1">Tabla de contenidos</h3>
        
        <div className="relative border-l-2 border-gray-200 ml-2">
          <ul className="flex flex-col gap-5">
            {sections.map((item: any) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#E30613]" />
                  )}
                  <button
                    onClick={() => setActiveId(item.id)}
                    className={`block pl-6 text-sm text-left transition-all w-full ${
                      isActive ? "text-text-title font-medium" : "text-text-body hover:text-text-title"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
    </aside>
  );
}