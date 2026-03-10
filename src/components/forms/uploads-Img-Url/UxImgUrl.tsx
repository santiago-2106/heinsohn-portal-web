'use client'

import Link from "next/link"
import { useState } from "react"
import BtnImagesUrl from "./BtnImages"
import UploadImgsUrls from "./UploadImgsUrls"
import TextComponent from "../../ui/typography/TextComponent"

export type cargarImgUrl = 'upload' | 'url'


export default function UxImgUrl() {
  const [mode, setMode] = useState<cargarImgUrl>('url')


  return (
    <section className="py-20 bg-bg-main">
      <TextComponent 
        title="Identifica los errores de UX que están frenando tu negocio" 
        description="Analiza la UX de tu web en  60 segundos a partir de screenshosts reales de tu sitio."
        />
      <div className="mx-auto px-4 text-center">
        

        
        <div>
          <Link href='#' className="underline text-text-body">Conoce como se ve en un diagnostico UX </Link>
          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1 px-6">
            →
          </span>
        </div>

        
      </div>
      <div className="mx-auto mt-5 px-4 hidden md:block">
        <BtnImagesUrl mode={mode} setMode={setMode}></BtnImagesUrl>
        <UploadImgsUrls mode={mode}></UploadImgsUrls>
      </div>
    </section>
  )
}
