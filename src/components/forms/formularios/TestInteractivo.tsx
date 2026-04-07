"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

// 1. DEFINIMOS LAS INTERFACES DE LAS PROPS
export interface TestField {
  name: string;
  label: React.ReactNode;
  required?: boolean;
}

export interface TestInteractivoProps {
  progressText?: string;
  progressPercentage?: number;
  title?: React.ReactNode;
  subtitle?: string;
  fields?: TestField[];
  buttonText?: string;
  topImage?: string;
  sideImage?: string;
}

export default function TestInteractivo({
  progressText = "0% completado",
  progressPercentage = 0,
  title = "Test Interactivo",
  subtitle = "Completa la información",
  fields = [],
  buttonText = "Siguiente",
  topImage = "/img/diseno-figuras.png",
  sideImage = "/img/contactimg.png",
}: TestInteractivoProps) {
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
              src={topImage}
              alt="Diseño decorativo superior"
              fill
              className="object-cover object-top opacity-90 transition-opacity duration-300"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 w-full">
            <div className="md:col-span-8 flex flex-col justify-center bg-bg-main py-16 px-8 md:py-20 md:pl-24 md:pr-12 lg:py-10 lg:pl-50 lg:pr-16">
              <div className="w-full max-w-140">
                
                {/* Barra de progreso dinámica */}
                <div className="mb-10 w-full max-w-70">
                  <span className="text-[13px] md:text-[14px] font-medium text-text-title mb-2.5 block">
                    {progressText}
                  </span>
                  <div className="w-full h-1.5 bg-border-ui rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-text-title transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Textos Principales */}
                <h2 className="text-3xl md:text-[38px] lg:text-[44px] font-light text-text-title mb-5 leading-[1.15] max-w-120">
                  {title}
                </h2>
                <p className="text-text-body text-[14px] md:text-[15px] mb-12">
                  {subtitle}
                </p>

                {/* Formulario Dinámico */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 w-full"
                >
                  {fields.map((field, index) => (
                    <div key={index} className="relative border-b border-border-ui pb-1">
                      <label className="block text-text-body mb-0.5 text-[13px] md:text-[14px] transition-colors">
                        {field.label}
                        {field.required && (
                          <span className="text-brand-accent"> *</span>
                        )}
                      </label>
                      <input
                        type="text"
                        {...register(field.name, { required: field.required })}
                        className="w-full bg-transparent focus:outline-none text-text-title text-sm md:text-base h-6"
                      />
                      {errors[field.name] && (
                        <span className="text-brand-accent text-xs">Este campo es requerido</span>
                      )}
                    </div>
                  ))}

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-text-title text-bg-main px-7 py-3 text-[13px] font-medium hover:opacity-80 transition-all duration-300 group shadow-sm cursor-pointer"
                    >
                      {buttonText}
                      {/* Reemplazamos el SVG quemado por Google Symbols */}
                      <span aria-hidden="true" className="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>

              </div>
            </div>

            {/* LADO DERECHO: Imagen Lateral */}
            <div className="relative hidden md:block md:col-span-4 bg-bg-main border-l border-border-ui">
              <Image
                src={sideImage}
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