'use client'
import { useForm } from "react-hook-form"
import CardGrid from "../../layout/grids/CardGrid"
import InputForms from "../InputForms"

interface propsFormBlogs {
    title:string
    description:string
}

export default function EbookBlogs({title, description}:propsFormBlogs) {

    const {register, formState: {errors}} = useForm()

  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-10 w-full max-w-md md:max-w-lg lg:max-w-169 mx-auto">
        <h2 className="text-2xl md:text-5xl text-text-title font-light leading-tight">
          {title}
        </h2>
        <p className="text-text-body text-lg leading-relaxed">
          {description}
        </p>

        <form action="" className="space-y-10">
            <CardGrid columns={2}>
                {/*Nombres */}
                <InputForms
                id="fullName"
                label="fullName"
                formregister={register("fullName")}
                />
                {/*Correos */}
                <InputForms
                id="corporateEmail"
                label="corporateEmail"
                type="email"
                formregister={register("corporateEmail")}
                />
                {/*Number celular */}
                <InputForms
                id="phone"
                label="phone"
                type="tel"
                formregister={register("phone")}
                />
                {/*URL DEL SITIO WEB*/}
                <InputForms
                id="website"
                label="website"
                formregister={register("website")}
                />
            </CardGrid>
            <div className="space-y-4">
                <label className="flex items-start gap-3 text-sm text-text-body">
                <input type="checkbox" className="mt-1 h-4 w-4 shrink-0" />
                <p>"Acepto terminos y condiciones"</p>
                </label>
            </div>
             <button className="rounded-full bg-text-title text-bg-main px-10 py-3 text-sm font-medium hover:cursor-pointer">
                "button"
               </button>
        </form>
    </div>
    </div>
  )
}
