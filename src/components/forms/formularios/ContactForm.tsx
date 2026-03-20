"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputForm from "../InputForms";
import { useTranslations } from "next-intl";
import { richText } from "@/src/hooks/helper/richText";

export interface ContactFormProps {
  title?: React.ReactNode;
}

export default function ContactForm({ title = "" }: ContactFormProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const t = useTranslations("contactForm")


  return (
    <section className="bg-bg-main py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Cambié a flex-col en móvil para garantizar que no se desborde, y grid en escritorio */}
        <div className="flex flex-col md:grid md:grid-cols-12 border border-gray-200 overflow-hidden">
          
          <div className="relative hidden md:block md:col-span-5 h-full min-h-[400px]">
            <Image
              src="/img/contactimg.png"
              alt="contacto"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="w-full md:col-span-7 bg-bg-card-2 p-6 sm:p-8 md:p-14">
            {/* 3. REEMPLAZAMOS EL TEXTO QUEMADO POR LA PROP */}
            <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-10">
              {t("title")}
            </h2>

          {/* Ajuste de padding para móvil: p-6 sm:p-8 md:p-14 */}
          <div >

            <form className="space-y-10 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 ">
                
                <div className="md:col-span-2">
                  <InputForm
                    id="fullName"
                    label={t("fields.fullName")}
                    formregister={register("fullName")}
                  />
                </div>

                <InputForm
                  id="corporateEmail"
                  label={t("fields.corporateEmail")}
                  type="email"
                  formregister={register("corporateEmail")}
                />
                
                <InputForm
                  id="company"
                  label={t("fields.company")}
                  formregister={register("company")}
                />
                
                <InputForm
                  id="website"
                  label={t("fields.website")}
                  formregister={register("website")}
                />
                
                <InputForm
                  id="email"
                  label={t("fields.email")}
                  type="email"
                  formregister={register("email")}
                />

                <InputForm
                  id="phone"
                  label={t("fields.phone")}
                  type="tel"
                  formregister={register("phone")}
                />

                <div className="relative border-b border-gray-500 pb-2">
                  <select
                    {...register("employees")}
                    className="w-full bg-transparent text-gray-500 focus:outline-none appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t("fields.employees")}
                    </option>
                    {/* Puedes agregar las opciones de número de empleados aquí */}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm text-text-body">
                  {/* Agregado shrink-0 para que el checkbox no se deforme si el texto es muy largo */}
                  <input type="checkbox" className="mt-1 h-4 w-4 shrink-0" />

                  <p>
                    {t.rich("checkbox.legal", richText)}
                  </p>
                </label>

                <label className="flex items-start gap-3 text-sm text-text-body">
                  <input type="checkbox" className="mt-1 h-4 w-4" aria-label="comunicaciones-heinsohn"/>
                  <p>{t("checkbox.communications")}</p>
                </label>
              </div>
              <button className="rounded-full bg-text-title text-bg-main px-10 py-3 text-sm font-medium hover:cursor-pointer">
                {t("button")}
               </button> 
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}