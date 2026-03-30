import { propsStaffArgumentationImg } from "../../../types/cardTypes";

export default function Mapa ({ title, descripcion, imgMap, paises, showIcon, showCoberturaTitle }: propsStaffArgumentationImg){
  return (
    <section className="w-full bg-bg-main py-20">
      
      {showIcon && ( 
        <div className="text-center mb-6">
          {/* Se insertó el icono table_chart_view que pediste */}
          <span className="material-symbols-rounded text-brand-accent" style={{ fontSize: "70px" }}>
            table_chart_view
          </span>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-text-title">
            {title}
          </h2>
          <p className="text-xl text-text-body mt-2">
            {descripcion}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="flex justify-center">
            {imgMap && (
              <img
                src={imgMap}
                alt="Mapa cobertura"
                className="max-w-md w-full"
              />
            )}
          </div>

          <div>
            {
              showCoberturaTitle && (
              <h6 className="text-text-body text-3xl mb-12">
                Cobertura
              </h6>
              )
            }

            <ul className="space-y-4">
              {
                paises.map((pais) => (
                    <li key={pais.id} className='flex items-center justify-between border-b border-gray-100 pb-3 '>
                        <p className="leading-7 text-text-body">{pais.nombre}</p>
                        <img src={pais.image} alt="paises imagenes" className='inline-block h-6 w-8 rounded-md'/>
                    </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}