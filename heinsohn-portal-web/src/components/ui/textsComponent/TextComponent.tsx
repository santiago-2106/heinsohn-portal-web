import React from "react"

interface propsTextComponent {
  title?: string,
  description?: string | React.ReactNode
}


export default function TextComponent({title, description}: propsTextComponent) {
  return (
    <>
      <section className='py-1'>
        <div className='mx-auto max-w-4xl px-4 text-center'>
          <h2 className='mb-8 text-2xl sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl'>
          {title}
        </h2>
        <p className='text-gray-500 text-lg mb-8 mx-auto'>
          {description}
        </p>
        </div>
      </section> 
    </>
  )
}

