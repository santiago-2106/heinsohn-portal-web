import { dataCard } from "@/src/types/cardTypes";


//SETION DE CARDS PARA LA VISTA 




export default function CardLandingHgs({icon, title, description, items, btn} : dataCard) {
  return (
    <section className="p-6 mb-6 mt-1 bg-bg-card-2 border border-border-ui">
      
      {
        icon && (
            <div className="material-symbols-rounded mb-6 w-full text-text-title" style={{fontSize:'40px'}}>
                {icon}
            </div>
        )
      }
      {/*Title del section card*/}

      <h3 className="mt-4 text-lg md:text-xl font-medium text-text-title">
        {title}
      </h3>

      {/*Descripcion de la section card */}
      {
        description && (
            <p className="mb-6 text-sm md:text-base font-light leading-releaxed text-text-body mt-2">
              {description}  
            </p>
        )
      }
      {/*Listas de items section card */}
      {
        items && items.length > 0 && (
            <div className="flex flex-col mb-6 w-full">
                <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-3 gap-x-12 gap-y-4">
                    {
                        items.map((item, index) =>(
                            <li key={index}
                            className="flex items-start text-sm text-text-body px-4"
                            >
                                <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex shrink-0 rounded-full bg-[#E30613] "></span>
                                <div className="">
                                    <span>{item.textos}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
      }

      {/*Button de la section card */}
      {btn && (
        <a
          href="/"
          className="mt-auto inline-flex gap-2 text-sm font-bold group justify-center items-center"
          
        >
            <span>{btn}</span>
          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1 ">
            →
          </span>
        </a>
      )}
    </section>
  )
}
