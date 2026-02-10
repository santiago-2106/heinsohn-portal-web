import React from 'react'
import Image from 'next/image'
// Importamos la imagen de clientes
import imgClientes from '@/src/img/clientes.png'

interface ClientesProps {
  title: string
  description?: string
}

export default function Clientes({ title, description }: ClientesProps) {
  return (
    <section className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título Dinámico */}
        <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
          {title}
        </h2>

        {/* Descripción Dinámica (Opcional) */}
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed mb-10">
            {description}
          </p>
        )}

        {/* Imagen de Logos (Fija) */}
        <div className="flex justify-center w-full">
          <Image 
            src={imgClientes}
            alt="Empresas que confían en nosotros"
            className="w-full max-w-6xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

      </div>
    </section>
  )
}