import Link from 'next/link';
import imgeu from '../../../img/united-states.png'


const paises = [
    {nombre: 'Bolivia', image:'bol'},
    {nombre: 'Canada', image:'c'},
    {nombre: 'Colombia', image:'c'},
    {nombre: 'Costa Rica', image:'cr'},
    {nombre: 'El Salvador', image:'es'},
    {nombre: 'Ecuador', image:'ec'},
    {nombre: 'Estados Unidos', image:'eu'},
    {nombre: 'Guatemala', image:'gu'},
    {nombre: 'Honduras', image:'ho'},
    {nombre:'Mexico', image:'me'},
    {nombre: 'Panama', image:'pa'},
    {nombre: 'Peru', image:'pe'},
    {nombre: 'Republica Dominicana', image:'rd'},    
]


const politicas = [
  ['PQRSF', 'Términos y condiciones', 'Política de protección de datos personales'],
  ['Política de cookies', 'Políticas de calidad', 'Definiciones de términos y condiciones'],
  ['Aviso de privacidad', 'Política de gestión de fraude', 'Política general de seguridad de la información']
];

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-200 ">
        <div className="mx-auto max-w-6xl px-6">
            <div className="py-8 ">

                <h3 className="mb-6 text-gray-500 text-center font-medium">Presencia Global</h3>

                <ul className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4">
                    {
                        paises.map((pais) => (
                            <li key={pais.nombre} className='flex items-center gap-2'>
                                <div>{pais.image}</div>
                                <div>{pais.nombre}</div> 
                                
                            </li>
                            
                        ))
                    }
                </ul>
                
                <div className="grid grid-cols-1 gap-y-3 border-t border-gray-200 pt-6 text-gray-500 sm:grid-cols-3 sm:gap-x-8">
                    {
                        politicas.map((column) => (
                            <div className='flex flex-col gap-1 sm:items-start'>
                                {
                                    column.map((item) => (
                                        <Link key={item} href='/'>{item}</Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <p className='mt-8 text-center text-gray-500'> © 2025 Heinsohn. Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
  )
}
