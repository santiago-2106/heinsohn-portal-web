import { FeatureCardProps } from "../../types/typeCardAnuncies"


export default function CardFeatures({icon,title, description, variant = "large"}: FeatureCardProps) {

  const isLarge = variant === "large" //variable estilo boolena

  return (
    <div
      className={`
        border border-gray-200 bg-white 
        ${isLarge ? "p-8" : "p-4"}
      `}
    >
    <div className="flex items-start gap-4">
      {icon && ( //Renderizar icono si el existe nos devuelve una respuesta en caso contrario no muestra nada en la interfaz
        <div className= "mb-4 h-8 w-12 mt-5" >
          {icon}
        </div>
      )}

      <div className="flex flex-col max-w-md">
            {
                title && (
                    <h3 className='mb-2 '>{title}</h3>
                )
            }
            <p className="text-gray-600 my-3">{description}</p>
      </div>

      </div>
    </div>
  )
}
