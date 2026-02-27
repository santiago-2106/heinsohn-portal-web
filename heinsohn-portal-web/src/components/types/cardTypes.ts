import React, { ReactNode } from "react";


export interface ItemsCard {
    titulo?: React.ReactNode
    textos: string
}


export interface dataCard {
    icon?: ReactNode
    title: ReactNode
    description?: string | ReactNode
    btn?: string
    items?: ItemsCard[]
    alineacion?: 'left' | 'center'
    textoFooter?: ReactNode
}


//IMAGEN MAPA 
export interface propsStaffArgumentationImg {
    title?: string
    descripcion?:string
    imgMap?:string
}
