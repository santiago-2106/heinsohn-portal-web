

export default function SubcomponenteCardStaff({ information }: staffArgumentationProps) {
  return (
    <section className="w-full py-16 px-4">
      <nav className="max-w-3xl mx-auto">
        <ol className="flex flex-col">
          {
            information.map((info, index) => {
              const linea = index === information.length - 1
              
              return (
                <li key={index} className="group relative flex gap-6 pb-12 last:pb-0">
                  {
                    !linea && (
                      <span 
                      className="absolute left-2.75 top-7 h-full w-[1.5px] bg-gray-200 " 
                      aria-hidden="true" 
                      />
                    )}

                    <div className="relative flex flex-col items-center">
                      <div className="z-10 h-6 w-6 rounded-full border-4 border-white bg-gray-300 mt-8" />
                    </div>

                    <div className="flex-1 rounded-sm border border-gray-200 bg-white p-6  md:flex md:items-center md:gap-10">
                      <div className="flex flex-col items-start min-w-20">
                        <span className="text-[10px] uppercase font-bold text-gray-900 tracking-widest mb-1">{info.fase}</span>
                        <span className="text-3xl font-light tracking-tighter text-red-500">{info.indicador}</span>
                      </div>

                      <div >
                        <h3 className="text-xl  text-gray-800">{info.title}</h3>
                        <p className="mt-1 text-gray-500 leading-relaxed text-sm md:text-base">{info.description}</p>
                      </div>
                    </div>
                </li>
              )
            })
          }
        </ol>
      </nav>
    </section>
  )
}
