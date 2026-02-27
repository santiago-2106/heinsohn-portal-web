import { ShowChartOutlined } from "@mui/icons-material";
import { propsStaffArgumentationImg } from "../../types/cardTypes";
import { paises } from "../../data/dataMapa";

//Mover Data a un archivo aparte

export default function Mapa ({ title, descripcion,imgMap }: propsStaffArgumentationImg){
  return (
    <section className="w-full bg-white py-20">
      <div className="text-center"><ShowChartOutlined sx={{fill:'red', fontSize:70}} /></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl  text-gray-500">
            {title}
          </h2>
          <p className="text-xl font-bold text-gray-900">
            {descripcion}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="flex justify-center">
            {imgMap && (
              <img
                src={imgMap}
                alt="Mapa cobertura"
                className="max-w-md w-full"
              />
            )}
          </div>

          <div>
            <h6 className=" text-gray-500 text-3xl mb-12">
              Cobertura
            </h6>

            <ul className="space-y-4">
              {
                paises.map((countries) => (
                    <li key={countries.id} className='flex items-center justify-between border-b border-gray-100 pb-3 '>
                        <p className="leading-7 text-black">{countries.nombre}</p>
                        <img src={countries.image} alt="paises imagenes" className='inline-block h-6 w-8 rounded-md'/>
                    </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}