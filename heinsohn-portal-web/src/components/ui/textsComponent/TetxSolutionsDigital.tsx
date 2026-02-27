import React from 'react'

export default function TetxSolutionsDigital({}) {

    const textDataSDigitales = [
        {}
    ]

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 mb-12 px-4 p-12 gap-8 max-w-7xl mx-auto'>
      <article className='flex flex-col items-center text-center'>
        <h3 className='text-4xl md:text-6xl font-light text-gray-800 mb-4'>45<span className='text-red-500'>+</span></h3>
        <p className='text-sm text-gray-500'>Años de experiencia en <br /> desarrollo de software</p>
      </article>

      <article className=' flex flex-col items-center text-center'>
        <h3 className='text-4xl md:text-6xl font-light text-gray-800 mb-4'>99<span className='text-red-500'>+</span></h3>
        <p className='text-sm text-gray-500'>Profesionales <br />especializados</p>
      </article>

      <article className='flex flex-col items-center text-center'>
        <h3 className='text-4xl md:text-6xl font-light text-gray-800 mb-4'>200<span className='text-red-500'>+</span></h3>
        <p className='text-sm text-gray-500'>Proyectos implementados en <br />LATAM y Norteamérica</p>
      </article>
      
    </section>
  )
}
