// src/app/blog/[slug]/page.tsx

import { BLOG_CONTENT } from "@/src/data/BLOG_CONTENT";
import SidebarBlog from "./SidebarBlog";
import EbookBlogs from "../../forms/formularios/EbookBlogs";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contenedor Padre Principal (1440px) */}
      <div className="max-w-360 mx-auto pt-6 px-6 lg:px-52 pb-10 flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Sticky */}
        <SidebarBlog />

        {/* Contenedor de Información (700px) */}
        <main className="max-w-175 flex flex-col gap-10">
          
          {/* Header del Blog */}
          <header className=" relative flex flex-col gap-4">
             <img 
                src="/img/blog-hero.png" 
                className="w-full h-full object-cover rounded-sm" 
                alt="Gestión de créditos" 
              />
               <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/50 to-transparent"></div>
            <div className="absolute pt-12  flex flex-col justify-center px-6 md:px-12 text-text-body">
            <nav className="text-sm text-text-body flex gap-2">
              <span>Home</span> <span></span> <span>PQRSF</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-text-body leading-tight">
              Señales de que tu empresa necesita un software gestor de créditos
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="border border-gray-500 px-3 py-1 text-xs text-text-body">Financiero y pensiones</span>
              <span className="text-xs text-text-body flex items-center gap-1">
                <span className="material-symbols-rounded text-sm">schedule</span> 15m de lectura
              </span>
            </div>
            
            
            </div>
          </header>

            <div className="py-6 m-1 border border-border-ui">
            <EbookBlogs
            title="¡Suscríbete a nuestra Newsletter!"
            description="Y recibe en tu correo, todo nuestro contenido y así potenciar el crecimiento de colaboradores y el de tu empresa."
            />
            </div>
          {/* Cuerpo del Blog (Secciones dinámicas) */}
          <div className="flex flex-col gap-10">
            {BLOG_CONTENT.map((section) => (
              <section 
                key={section.id} 
                id={section.id} 
                className="scroll-mt-10 flex flex-col gap-6"
              >
                <h2 className="text-3xl font-light text-text-title leading-snug">
                  {section.title}
                </h2>
                <p className="text-text-body leading-relaxed text-lg">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}