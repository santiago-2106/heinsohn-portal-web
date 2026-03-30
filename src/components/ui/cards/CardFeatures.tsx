import React from "react";

interface CardFeaturesProps {
  icon?: React.ReactNode | any;
  title?: string;
  description?: string;
  variant?: "large" | "compact"; 
  iconPosition?: 'top' | 'left'
  iconColor: 'text-brand-accent' | 'black'
}

export default function CardFeatures({
  icon,
  title,
  description,
  variant = "large",
  iconPosition ='top',
  iconColor = 'text-brand-accent'
}: CardFeaturesProps) {
  const isLarge = variant === "large";
  const isIconTop = iconPosition === 'top';

  const colorIcon = iconColor === 'text-brand-accent' ? 'text-brand-accent' : 'text-text-title';

  return (
    <div
      className={`
        border border-border-ui bg-bg-card-2 h-full transition-shadow duration-300 hover:shadow-md
        ${isLarge ? "p-8" : "p-6"}
      `}
    >
      <div className={`flex ${isIconTop ? "flex-col items-start" : "flex-row items-center"} gap-5`}>
        
        {/* CONTENEDOR DEL ÍCONO CORREGIDO: Libre de restricciones de altura */}
        {icon && (
          <div className="flex shrink-0 text-text-title items-center justify-center py-4">
            <span className={`material-symbols-rounded font-light ${colorIcon}`} style={{ fontSize: "48px" }}>{icon}</span>
          </div>
        )}

        <div className="flex flex-col">
          {title && (
            <h3
              className={`font-medium text-text-title ${isLarge ? "text-xl mb-3" : "text-lg mb-2"}`}
            >
              {title}
            </h3>
          )}
          <p className="leading-relaxed text-text-body">{description}</p>
        </div>
      </div>
    </div>
  );
}