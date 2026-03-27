
import { useTranslations } from "next-intl"
import { cargarImgUrl } from "./UxImgUrl"

interface uploadImgUrl {
    mode: cargarImgUrl
    setMode: (mode: cargarImgUrl) => void
}

export default function BtnImagesUrl({mode, setMode}: uploadImgUrl) {

  const t = useTranslations("desarrolloUxUi")

  const Opciones = [
    {id: 'upload', icon:'upload'},
    {id:'url', icon:'link'}
  ] as const

  return (
    <div className="mx-auto w-fit mb-8 rounded-full flex items-center bg-bg-card-2 p-1">
      {Opciones.map((options) => (
        <button 
        key={options.id}
        onClick={() => setMode(options.id)}
        className={`m-1 flex items-center rounded-full px-2 py-2 font-medium transition-all hover:cursor-pointer ${
          mode === options.id ? 'bg-bg-card-1' : 'text-text-body'
        }`}
        >
          <span className="material-symbols-rounded">
            {options.icon}
          </span>
          {t(`btnImagesUrl.${options.id}`)}
        </button>
      ))}
    </div>
  )
}
