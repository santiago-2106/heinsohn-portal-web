import { ReactNode } from "react";

/**
 * Interface base para las Cards presentacionales.
 * Centralizada en types/ para ser consumida tanto por componentes como por archivos de datos.
 */
export interface ItemsCard {
    titulo?: string
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
