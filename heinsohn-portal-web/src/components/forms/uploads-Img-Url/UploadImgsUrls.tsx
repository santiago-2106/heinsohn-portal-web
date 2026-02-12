import { cargarImgUrl } from "./UxImgUrl"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

interface UplodadImgUrl {
    mode: cargarImgUrl
}

export default function UploadImgsUrls({mode}: UplodadImgUrl) {
    const subirImgUrl = mode === 'upload'

  return (
    <div className="mx-auto max-w-4xl h- border border-dashed border-gray-300 bg-white p-12 md:p-20 text-center flex flex-col items-center justify-center">
      {
        subirImgUrl ? (
            <>
           <input 
           type="file"
           className="hidden"
           accept="image/png"
           />

           <label htmlFor="">
                <  AddPhotoAlternateIcon sx={{fontSize: 150}}/>
                <div className="">
                    Arrastra o <span className="underline hover:text-gray-500 hover:cursor-pointer">carga las imagenes</span> de tu web aqui
                </div>
                <p className="mt-3 text-gray-500 ">
                    Aceptamos imagenes en JPG, PNG o WEBP, con un peso maximo de 5 MB por archivo.
                </p>
           </label>
           <button className="mt-8 bg-black text-white px-10 py-3 rounded-full hover:cursor-pointer hover:bg-gray-400 hover:text-black">
            Iniciar analisis UX
           </button>
            </>
        ): (
            <p>Ingresa la url</p>
        )
      }
    </div>
  )
}
