import React from "react";

interface SectionCenteredTextProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

export default function SectionCenteredText({
  title,
  description,
}: SectionCenteredTextProps) {
  return (
    <section className="bg-bg-main py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
        
        {/* Título Centrado */}
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-light text-text-title mb-8 leading-tight">
          {title}
        </h2>

        {/* Descripción Centrada */}
        <p className="text-base md:text-[17px] text-text-body leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>

      </div>
    </section>
  );
}