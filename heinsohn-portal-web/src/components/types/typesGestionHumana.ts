import React from 'react'
import { datagestionHumana } from '../data/dataGestionHumana/dataGestionHumana'

export interface propsGestionHumana {
    icon?: React.ReactNode
    title: string
    description: string
    contenedor?: React.ReactNode
    btnText: string
}

//Para los productos de gestion humana

export interface ProductRowProps {
  product: datagestionHumana
  reverse?: boolean
}