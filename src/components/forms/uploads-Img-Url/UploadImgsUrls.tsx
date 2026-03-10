import ButtonComponent from "../../ui/buttons/Button"
import { cargarImgUrl } from "./UxImgUrl"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

interface UplodadImgUrl {
    mode: cargarImgUrl
}

export default function UploadImgsUrls({mode}: UplodadImgUrl) {
    const subirImgUrl = mode === 'upload'

  return (
    <div className="mx-auto max-w-4xl border border-dashed border-gray-300 bg-bg-card-2 p-12 md:p-20 text-center flex flex-col items-center justify-center">
      {
        subirImgUrl ? (
            <>
           <input 
           type="file"
           className="hidden"
           accept="image/png"
           />

           <label htmlFor="">
                <  AddPhotoAlternateIcon sx={{fill:'white', stroke: 'black',fontSize: 150}}/>
                <p className="text-text-body">
                    Arrastra o <span className="underline hover:text-gray-500 hover:cursor-pointer">carga las imagenes</span> de tu web aqui
                </p>
                <p className="mt-3 text-text-body">
                    Aceptamos imagenes en JPG, PNG o WEBP, con un peso maximo de 5 MB por archivo.
                </p>
           </label>
           <ButtonComponent textoBtn="Iniciar analisis" />
            </>
        ): (
            <p>Ingresa la url</p>
        )
      }
    </div>
  )
}
