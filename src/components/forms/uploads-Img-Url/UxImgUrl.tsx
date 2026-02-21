'use client'

import Link from "next/link"
import { useState } from "react"
import BtnImagesUrl from "./BtnImages"
import UploadImgsUrls from "./UploadImgsUrls"

export type cargarImgUrl = 'upload' | 'url'


export default function UxImgUrl() {
  const [mode, setMode] = useState<cargarImgUrl>('url')


  return (
    <section className="py-24 bg-white">
      <div className="mx-auto px-4 text-center">
        <h2 className="mb-8 text-center text-2xl sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">Identifica los errores de UX que estan frenando tu negocio</h2>

        <p className="text-gray-500 text-lg mb-8 mx-auto">Analiza la UX de tu web en 60 segundos a partir de screenshosts reales de tu sitio.</p>
        <Link href='#' className="underline font-semibold">Conoce como se ve en un diagnostico UX </Link>

        
      </div>
      <div className="mx-auto mt-5 px-4 hidden md:block">
        <BtnImagesUrl mode={mode} setMode={setMode}></BtnImagesUrl>
        <UploadImgsUrls mode={mode}></UploadImgsUrls>
      </div>
    </section>
  )
}
