import React from "react"

interface propsTextComponent {
  title?: string,
  description?: React.ReactNode
}


export default function TextComponent({title, description}: propsTextComponent) {
  return (
    <>
      <section className='py-20'>
        <div className='mx-auto max-w-360 px-8 md:px-10 xl:px-52 text-center space-y-10'>
          <h2 className='mb-8 text-3xl md:text-5xl font-light text-gray-900'>
          {title}
        </h2>
        <p className='text-[#414158] text-lg gap-32 leading-7 md:leading-7.5 max-w-3xl mx-auto font-light '>
          {description}
        </p>
        </div>
      </section> 
    </>
  )
}

