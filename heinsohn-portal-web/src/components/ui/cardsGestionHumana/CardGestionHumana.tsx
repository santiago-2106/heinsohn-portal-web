import { propsGestionHumana } from "../../types/typesGestionHumana";



export default function CardGestionHumana({ icon, title, description, contenedor, btnText }: propsGestionHumana) {
  return (
    <>
    <section className="flex flex-col border border-gray-100 bg-white p-10 ">
      <div className="mb-6 text-gray-700">
        {icon}
      </div>

  
      <div className="mb-6 self-start border border-gray-200 px-4 py-1 text-[12px] text-gray-500 uppercase tracking-widest">
        {contenedor}
      </div>
    
      <h3 className="mb-4 text-2xl font-light text-gray-800 ">
        {title}
      </h3>

      <p className="mb-8 text-2xl leading-relaxed text-gray-400 font-light">
        {description}
      </p>

      {btnText && (
        <a href="#" className="mt-auto flex items-center gap-3 text-[14px] font-bold text-gray-500">
          {btnText} 
          <span className="text-red-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </section>
    </>
  )
}