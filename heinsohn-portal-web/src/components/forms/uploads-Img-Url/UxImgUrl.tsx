'use client'

import Link from "next/link"
import { useState } from "react"
import BtnImagesUrl from "./BtnImages"
import UploadImgsUrls from "./UploadImgsUrls"
import TextComponent from "../../ui/textsComponent/TextComponent"

export type cargarImgUrl = 'upload' | 'url'


export default function UxImgUrl() {
  const [mode, setMode] = useState<cargarImgUrl>('url')


  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 text-center">
        <TextComponent 
        title="Identifica los errores de UX que están frenando tu negocio" 
        description="Analiza la UX de tu web en  60 segundos a partir de screenshosts reales de tu sitio."
        />

        <Link href='#' className="underline font-semibold">Conoce como se ve en un diagnostico UX </Link>
      </div>
      
      <div className="mx-auto mt-5 px-4 hidden md:block">
        <BtnImagesUrl mode={mode} setMode={setMode}></BtnImagesUrl>
        <UploadImgsUrls mode={mode}></UploadImgsUrls>
      </div>
    </section>
  )
}
