import React from "react"

interface CardFeaturesProps {
  icon?: React.ReactNode | any;
  title?: string;
  description?: string;
  variant?: "large" | "small"; // Tipado específico para controlar el estilo
}

export default function CardFeatures({
  icon,
  title, 
  description, 
  variant = "large"
}: CardFeaturesProps) {

  const isLarge = variant === "large"

  return (
    <div
      className={`
        border border-gray-200 bg-white h-full transition-shadow duration-300 hover:shadow-md
        ${isLarge ? "p-8" : "p-4"}
      `}
    >
      <div className="flex items-start gap-4">
        
        {icon && ( 
          <div className={`flex-shrink-0 text-gray-900 ${isLarge ? "mt-1" : ""}`}>
             {icon}
          </div>
        )}

        <div className="flex flex-col">
            {title && (
                <h3 className={`font-medium text-gray-900 ${isLarge ? "text-xl mb-3" : "text-lg mb-2"}`}>
                  {title}
                </h3>
            )}
            
            <p className="text-sm leading-relaxed text-gray-600">
              {description}
            </p>
        </div>

      </div>
    </div>
  )
}