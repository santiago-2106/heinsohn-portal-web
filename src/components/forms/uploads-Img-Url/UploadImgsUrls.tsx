import { useTranslations } from "next-intl"
import ButtonComponent from "../../ui/buttons/Button"
import { cargarImgUrl } from "./UxImgUrl"

interface UplodadImgUrl {
    mode: cargarImgUrl
}

export default function UploadImgsUrls({mode}: UplodadImgUrl) {
  const subirImgUrl = mode === 'upload'

  const t = useTranslations("desarrolloUxUi")

  return (
    <div className="mx-auto max-w-4xl border border-dashed border-ui bg-bg-card-2 p-12 md:p-10 text-center flex flex-col items-center justify-center">
      {
        subirImgUrl ? (
            <>
           <input 
           id="fileInput"
           type="file"
           className="hidden"
           accept="image/png, image/jpeg, image/webp"
           multiple
           />

           <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
            <span className="material-symbols-rounded" style={{fontSize:150}}>add_photo_alternate</span>
                <p className="text-text-body">
                  {
                    t.rich("uploadImgsUrl.upload.title", {
                    upload: (chunks) => (
                    <span className="underline text-text-body hover:text-gray-500 cursor-pointer">
                    {chunks}
                    </span>
                  )
                })
                }
                </p>
                
                <p className="mt-3 text-text-body">
                  {t("uploadImgsUrl.upload.formats")}
                </p>
           </label>
           <ButtonComponent textoBtn={t("uploadImgsUrl.upload.cta")} />
            </>
        ): (
          <>
          <input
            type="url"
            placeholder={t("uploadImgsUrl.url.placeholder")}
            className="w-full max-w-md px-4 py-3 border border-border-ui bg-bg-main text-text-body outline-none focus:ring-2 focus:ring-brand-accent"
            required
          />
          <ButtonComponent textoBtn={t("uploadImgsUrl.url.cta")} />
        </>
        )
      }
    </div>
  )
}
