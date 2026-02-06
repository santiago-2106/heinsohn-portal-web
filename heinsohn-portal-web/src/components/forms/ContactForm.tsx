"use client";

import InputForm from "../forms/InputForms";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        <header className="mb-10">
          <h2 className=" font-light text-gray-500">
            Contactanos
          </h2>
        </header>

        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2">
              <InputForm
                id="fullName"
                label="Nombre completo *"
                type="text"
              />
            </div>

            <InputForm
              id="corporateEmail"
              label="Correo corporativo *"
              type="email"
            />

            <InputForm
              id="company"
              label="Nombre de la empresa *"
              type="text"
            />

            <InputForm
              id="website"
              label="URL del sitio web *"
              type="url"
            />

            <InputForm
              id="email"
              label="Correo *"
              type="email"
            />

            <InputForm
              id="phone"
              label="Número de teléfono de WhatsApp *"
              type="tel"
            />

            <div className="relative">
              <select
                id="employees"
                className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-gray-500 focus:outline-none"
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
              <p>He leído y acepto el <Link href="#" className="text-red-400 underline:none">aviso legal y la política de privacidad.*</Link></p>
            </label>

            <label className="flex items-start gap-3 text-sm text-gray-500">
              <input type="checkbox" className="mt-1 h-4 w-4" />
              <p>Acepto recibir otras comunicaciones de Heinsohn.</p>
            </label>
          </div>
          {/*REVISAR U REALIZAR EL COMPONENTE BUTTON */}
          <div>
            <button className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:cursor-pointer">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
