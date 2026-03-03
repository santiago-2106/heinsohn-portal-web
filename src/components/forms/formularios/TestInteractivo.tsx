"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function TestInteractivo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Datos del test:", data);
  };

  return (
    <section className="bg-bg-main py-12 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal maestro */}
        <div className="flex flex-col border border-border-ui overflow-hidden bg-bg-main shadow-sm rounded-sm transition-colors duration-300">
          <div className="relative w-full h-32 md:h-48 lg:h-80 border-b border-border-ui bg-bg-card-1">
            <Image
              src="/img/diseno-figuras.png"
              alt="Diseño de figuras superior"
              fill
              className="object-cover object-top opacity-90 transition-opacity duration-300"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 w-full">
            <div className="md:col-span-8 flex flex-col justify-center bg-bg-main py-16 px-8 md:py-20 md:pl-24 md:pr-12 lg:py-10 lg:pl-50 lg:pr-16">
              <div className="w-full max-w-[560px]">
                {/* Barra de progreso */}
                <div className="mb-10 w-full max-w-[280px]">
                  <span className="text-[13px] md:text-[14px] font-medium text-text-title mb-2.5 block">
                    15% completado
                  </span>
                  <div className="w-full h-1.5 bg-border-ui rounded-full overflow-hidden">
                    <div className="h-full bg-text-title w-[15%] transition-all duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* Textos Principales */}
                <h2 className="text-3xl md:text-[38px] lg:text-[44px] font-light text-text-title mb-5 leading-[1.15] max-w-[480px]">
                  Descubre tu ERP perfecto con nuestro test interactivo
                </h2>
                <p className="text-text-body text-[14px] md:text-[15px] mb-12">
                  Perfil general de la empresa
                </p>

                {/* Formulario */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 w-full"
                >
                  <div className="relative border-b border-border-ui pb-1">
                    <label className="block text-text-body mb-0.5 text-[13px] md:text-[14px] transition-colors">
                      ¿En qué sector está tu empresa?{" "}
                      <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("sector", { required: true })}
                      className="w-full bg-transparent focus:outline-none text-text-title text-sm md:text-base h-6"
                    />
                  </div>

                  <div className="relative border-b border-border-ui pb-1">
                    <label className="block text-text-body mb-0.5 text-[13px] md:text-[14px] transition-colors">
                      Número de empleados{" "}
                      <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("empleados", { required: true })}
                      className="w-full bg-transparent focus:outline-none text-text-title text-sm md:text-base h-6"
                    />
                  </div>

                  <div className="relative border-b border-border-ui pb-1">
                    <label className="block text-text-body mb-0.5 text-[13px] md:text-[14px] transition-colors">
                      ¿Cuál es tu facturación anual aproximada?
                    </label>
                    <input
                      type="text"
                      {...register("facturacion")}
                      className="w-full bg-transparent focus:outline-none text-text-title text-sm md:text-base h-6"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-text-title text-bg-main px-7 py-3 text-[13px] font-medium hover:opacity-80 transition-all duration-300 group shadow-sm"
                    >
                      Siguiente
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* LADO DERECHO: Imagen Lateral */}
            {/* 🎛️ CONTROL IMAGEN DERECHA: Aquí dice "md:col-span-4" (Ocupa 4 de las 12 columnas).
                Si la quieres MÁS PEQUEÑA aún, pon "md:col-span-3" (y arriba cámbialo a md:col-span-9). 
                Si la quieres como estaba antes, pon "md:col-span-5" (y arriba cámbialo a md:col-span-7).
            */}
            <div className="relative hidden md:block md:col-span-4 bg-bg-main border-l border-border-ui">
              <Image
                src="/img/contactimg.png"
                alt="Imagen lateral"
                fill
                className="object-cover object-center opacity-90 transition-opacity duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
