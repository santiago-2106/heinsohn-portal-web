import {Container, IconButton} from '@mui/material'
import {LinkedIn, Instagram,Facebook, YouTube} from '@mui/icons-material'
import Link from 'next/link'


const soluciones = [
  ["Servicios de transformacion digital", "Gestion humana y nómina", "Soluciones para gobierno", "Soluciones de outsourcing"],
  ["Soluciones sector pensiones", "Soluciones sector financiero", "Soluciones SAP", "Soluciones en SST"]
]

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 bg-white'>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[1fr_1.8fr_0.8fr]">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="" alt="icon heinsohn" />
              <h3 className='text-sm font-bold tracking-wider'>HEINSOHN</h3>
            </div>
            
            <p className='text-sm text-gray-600 leading-relaxed'>
              Transformando empresas a través de soluciones tecnológicas innovadoras e inteligencia artificial a la vanguardia.
            </p>

            <div className='mt-4 flex gap-2'>
                <IconButton sx={{color: 'text.primary'}}><LinkedIn /></IconButton>
                <IconButton sx={{color: 'text.primary'}}><Instagram /></IconButton>
                <IconButton sx={{color: 'text.primary'}}>s</IconButton>
                <IconButton sx={{color: 'text.primary'}}><YouTube /></IconButton>
                <IconButton sx={{color: 'text.primary'}}>Tk </IconButton>
                <IconButton sx={{color: 'text.primary'}}><Facebook /></IconButton>
            </div>
          </div>

          <nav>
            <h4 className='text-gray-500 mb-4'>Soluciones</h4>
            <div className='grid grid-cols-2 gap-y-3 gap-x-16'>
              {soluciones.map((column, index) => (
                <ul key={index} className='flex flex-col gap-y-3 text-sm text-gray-600'>
                  {column.map((item) => (
                    <li key={item}>
                      <Link href='/'>{item}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>  
                        
          <nav>
            <h4 className='text-gray-500 mb-4'>Compañía</h4>
            <ul className='flex flex-col gap-y-3 text-sm text-gray-600'>
                <li>Home</li>
                <li>Quienes somos</li>
                <li>Mapa de sitio</li>
                <li>Contacto</li>
            </ul>
          </nav>

        </div>
      </div>    
    </footer>
  )
}
