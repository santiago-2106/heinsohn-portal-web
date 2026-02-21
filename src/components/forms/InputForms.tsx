'use client'

import React, { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form' //uso de react Hook Form


interface propsInputForm 
    extends React.InputHTMLAttributes<HTMLInputElement>{
    id:string,
    label:string,
    formregister?: UseFormRegisterReturn
}


export default function InputForms({ id, label, formregister, ...props }: propsInputForm) {
  
  
return (
    <div className='relative'>
        <input  
        id={id}
        placeholder={label}
        className='peer w-full border-0 border-gray-500 border-b bg-transparent px-0 py-2 text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 transition-colors'     
        {...formregister}
        {...props}
        />

        <label htmlFor={id}
        className='absolute left-0 top-2 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text- peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-600'
        >
            {label}
        </label>
    </div>
  )
}
