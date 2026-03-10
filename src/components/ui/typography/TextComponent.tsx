import React from "react";

interface propsTextComponent {
  title?: React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'center' | 'left'
}

export default function TextComponent({
  title,
  description,
  align='center'
}: propsTextComponent) {
  return (
    <>
      <section className="py-1">
        <div className={`mx-auto max-w-4xl px-4 ${align === "center" ? "text-center" : "text-left"}`}>
          <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6 "> {/*CAMBIARLOS Y DEJARLOS GLOBALMENTE */}
            {title}
          </h2>
          <p className="text-text-body text-lg mb-8 mx-auto">{description}</p>
        </div>
      </section>
    </>
  );
}