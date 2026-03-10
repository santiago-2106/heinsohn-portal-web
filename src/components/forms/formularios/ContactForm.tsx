
"use client";
import react from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputForm from "../InputForms";

// 1. DEFINIMOS LA INTERFAZ PARA LAS PROPS
interface ContactFormProps {
  title: React.ReactNode; // Es opcional (?) para que no te marque error si no lo pasas
}

// 2. RECIBIMOS LA PROP 'title' CON UN VALOR POR DEFECTO
export default function ContactForm({ title = "Contáctanos" }: ContactFormProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <section className="bg-bg-main py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 border border-gray-200 overflow-hidden">
          <div className="relative hidden md:block md:col-span-5">
            <Image
              src="/img/contactimg.png"
              alt="contacto"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="md:col-span-7 bg-bg-card-2  p-8 md:p-14">
            {/* 3. REEMPLAZAMOS EL TEXTO QUEMADO POR LA PROP */}
            <h2 className="text-4xl font-light text-gray-400 mb-10">

              Contáctanos

              {title}
            </h2>

            <form className="space-y-10 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 ">
                <div className="md:col-span-2">
                  <InputForm
                    id="fullName"
                    label="Nombre completo *"
                    formregister={register("fullName")}
                  />
                </div>

                <InputForm
                  id="corporateEmail"
                  label="Correo corporativo *"
                  type="email"
                  formregister={register("corporateEmail")}
                />
                <InputForm
                  id="company"
                  label="Nombre de la empresa *"
                  formregister={register("company")}
                />
                <InputForm
                  id="website"
                  label="URL del sitio web *"
                  formregister={register("website")}
                />
                <InputForm
                  id="email"
                  label="Correo *"
                  type="email"
                  formregister={register("email")}
                />

                <InputForm
                  id="phone"
                  label="Número de teléfono de WhatsApp *"
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
                      Rango Número de empleados *
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm text-gray-500">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <p>
                    He leído y acepto el{" "}
                    <Link href="#" className="text-red-400 underline:none">
                      aviso legal <span className="text-text-body">y la</span> política de privacidad.*
                    </Link>
                  </p>
                </label>

                <label className="flex items-start gap-3 text-sm text-text-body">
                  <input type="checkbox" className="mt-1 h-4 w-4" />
                  <p>Acepto recibir otras comunicaciones de Heinsohn.</p>
                </label>
              </div>
              <button className="rounded-full bg-text-title text-bg-main px-10 py-3 text-sm font-medium hover:cursor-pointer">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}