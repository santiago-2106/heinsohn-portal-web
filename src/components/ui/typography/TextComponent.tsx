import React from "react";

interface propsTextComponent {
  title?: React.ReactNode;
  description?:React.ReactNode;
  align?: 'center' | 'left'
}


export default function TextComponent({
  title,
  description,
  align='center'
}: propsTextComponent) {
  return (
    <>
      <section className="py-8 px-16">
        <div className={`mx-auto max-w-4xl px-4 ${align === "center" ? "text-center" : "text-left"}`}>
          <h2 className="text-3xl md:text-4xl text-text-title font-light mb-6 "> {/*CAMBIARLOS Y DEJARLOS GLOBALMENTE */}
            {title}
          </h2>
          <p className="text-text-body text-lg mb-8 mx-auto">{description}</p>

          {/*
          ESTILOS DEL H2 SEGUN LA UX ES ESTE CAMBIARLO Y REVISAR OTRAS COSAS YA ESTA LISTO TODO
          <h2 className="text-3xl md:text-5xl text-text-title font-light mb-8 w-full "> {/*CAMBIARLOS Y DEJARLOS GLOBALMENTE 
          {title}
          </h2> */}
        </div>
      </section>
    </>
  );
}