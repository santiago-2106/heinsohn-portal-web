
import { cargarImgUrl } from "./UxImgUrl"

interface uploadImgUrl {
    mode: cargarImgUrl
    setMode: (mode: cargarImgUrl) => void
}


export default function BtnImagesUrl({mode, setMode}: uploadImgUrl) {

  const Opciones = [
    {id: 'upload', label:'Cargar Imagenes'},
    {id:'url', label:'Proporcionar Url'}
  ] as const


  return (
    <div className="mx-auto w-96 mb-8 rounded-full items-center bg-gray-100 p-1">
      {Opciones.map((options) => (
        <button 
        key={options.id}
        onClick={() => setMode(options.id)}
        className={`rounded-full px-6 py-2 font-medium transition-all ${
          mode === options.id ? 'bg-white' : 'text-gray-500'
        }`}
        >
          {options.label}
        </button>
      ))}
    </div>
  )
}
