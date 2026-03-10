import React from "react";

interface CardFeaturesProps {
  icon?: React.ReactNode | any;
  title?: string;
  description?: string;
  variant?: "large" | "compact"; 
  iconPosition?: 'top' | 'left'
}

export default function CardFeatures({
  icon,
  title,
  description,
  variant = "large",
  iconPosition ='top'
}: CardFeaturesProps) {
  const isLarge = variant === "large";

  const isIconTop = iconPosition === 'top'

  return (
    <div
      className={`
        border border-border-ui bg-bg-card-2 h-full transition-shadow duration-300 hover:shadow-md
        ${isLarge ? "p-8" : "p-4"}
      `}
    >
      <div className={`flex ${isIconTop ? "flex-col" : "flex-row items-start"} gap-4`}>
        {icon && (
          <div
            className={`flex shrink-0 text-text-title pt-3 ${isIconTop ? "mt-1" : "py-8"}`}
          >
            {icon}
          </div>
        )}

        <div className="flex flex-col">
          {title && (
            <h3
              className={`font-medium text-text-title mt-3 ${isLarge ? "text-xl mb-3" : "text-lg mb-2"}`}
            >
              {title}
            </h3>
          )}

          <p className=" leading-relaxed text-text-body p-1">{description}</p>
        </div>
      </div>
    </div>
  );
}