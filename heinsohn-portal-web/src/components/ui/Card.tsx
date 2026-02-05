import React, { ReactElement } from 'react'

interface CardProps {
    icon: ReactElement,
    title: string,
    description: string,
    btn: string
}

export default function Card({icon,title, description, btn}: CardProps) {
  return (
    <div className='flex flex-col border border-gray-200 bg-white p-6 shadow-sm '>
      <div className='mb-4 flex h-16 w-16 items-center justify-center '>
            <i>{icon}</i>
      </div>
      <h3 className='mb-3 text-xl '>{title}</h3>
      <p className='mb-4 text-sm text-gray-500'>{description}</p>
      <a href="/" className='mt-auto inline-flex items-center gap-2 text-sm font-medium transition-transform hover:translate-x-1'>{btn}</a>
    </div>
  )
}
