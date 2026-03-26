'use client'

import Link from "next/link"
import { useState } from "react"
import BtnImagesUrl from "./BtnImages"
import UploadImgsUrls from "./UploadImgsUrls"
import TextComponent from "../../ui/typography/TextComponent"
import { useTranslations } from "next-intl"
import { richText } from "@/src/hooks/helper/richText"

export type cargarImgUrl = 'upload' | 'url'


export default function UxImgUrl() {
  const [mode, setMode] = useState<cargarImgUrl>('url')

  const t = useTranslations("desarrolloUxUi")

  return (
    <section className="py-20 bg-bg-main">
      <TextComponent 
        title={t("titleIdentificaErrores.title")} 
        description={t.rich("titleIdentificaErrores.description", richText)}
        />

      <div className="mx-auto px-4 text-center">
        <div>
          <Link href='#' className="underline text-text-body">{t("titleIdentificaErrores.subtitle")} </Link>
          <span className="text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1 px-6">
            →
          </span>
        </div>
      </div>
      
      <div className="mx-auto mt-5 px-4">
        <BtnImagesUrl mode={mode} setMode={setMode}></BtnImagesUrl>
        <UploadImgsUrls mode={mode}></UploadImgsUrls>
      </div>
    </section>
  )
}
