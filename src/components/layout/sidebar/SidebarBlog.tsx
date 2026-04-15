// src/components/blog/BlogSidebar.tsx

import { BLOG_CONTENT } from "@/src/data/BLOG_CONTENT";


export default function SidebarBlog() {
  return (
    <aside className="hidden lg:flex w-[288px] sticky top-10 flex-col gap-6 p-6 border border-border-ui h-fit">
      {/* Perfil Autor */}
      <div className="flex items-center gap-4 w-60">
        <img src="/img/img-jessica.jpg" className="w-18 h-18 object-cover brightness-75 contrast-75 grayscale-75" alt="Jessica" />
        <div className="flex flex-col">
          <span className="font-ligth text-text-body">Jessica Alejandra Alonso Perez</span>
          <span className=" text-text-body">Senior product marketing manager</span>
        </div>
      </div>

      <div className="h-px bg-bg-main w-full" />

      {/* Tabla de Contenidos */}
      <nav className="flex flex-col gap-6 border-t border-border-ui" >
        <h4 className="text-[18px] mt-4">Tabla de contenidos</h4>
        <ul className="flex flex-col gap-4 border-l border-border-ui">
          {BLOG_CONTENT.map((item:any) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className="block pl-4 text-sm text-text-body  hover:border-l-2 hover:text-brand-accent transition-all -ml-px"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}