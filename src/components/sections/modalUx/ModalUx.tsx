"use client"

import React from 'react'
import InputForm from '../../forms/InputForms'
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { richText } from '@/src/hooks/helper/richText';


export default function ModalUx() {
    const {
        register,
        formState: { errors },
      } = useForm();
    
      const t = useTranslations("contactForm")

  return (
    <div id='Modal'>
      <div className='relative w-full mx-auto max-w-4xl bg-bg-card-2 rounded-xl shadow-2xl py-10 px-6 md:px-16'>
        <div className='flex flex-col justify-center text-center items-center'>
            <button className=" absolute top-4 right-4 md:top-6 md:right-6 text-text-title text-lg md:text-xl z-10">✕</button>
            <span className='material-symbols-rounded' style={{fontSize:"48px"}}>check_circle</span>
            <h2 className='text-text-title font-light'>Recibe tu diagnostico ux en tu correo</h2>
            <p className='text-text-body py-6'>Déjanos tus datos para enviarte el análisis completo con hallazgos y recomendaciones personalizadas.</p>

            <div >
                <form className="space-y-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-2 ">
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
            
                        <div className="space-y-4 mt-2 md:mt-4">
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
  )
}
