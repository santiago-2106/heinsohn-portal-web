import { ReactNode } from "react";
import { UrlObject } from "url";

/**
 * Interface base para las Cards presentacionales.
 * Centralizada en types/ para ser consumida tanto por componentes como por archivos de datos.
 */
export interface ItemsCard {
  titulo?: string;
  textos: string;
}

export interface dataCard {
  icon?: ReactNode;
  iconColor: 'text-brand-accent' | 'black'
  number?:string
  title?: ReactNode;
  description?: string | ReactNode;
  btn?: string;
  linkNavigation?:string | UrlObject;
  items?: ItemsCard[];
  alineacion?: "left" | "center";
  textoFooter?: ReactNode;
  btnPosition?: 'top' | 'bottom' ; 
  btnHasBorder?: boolean; 
}
//IMAGEN MAPA 
export interface Countries {
  id:number
  nombre:ReactNode
  image: string
}

export interface propsStaffArgumentationImg {
    title?: string
    descripcion?:string | ReactNode;
    imgMap?:string
    paises: Countries[]
    showIcon?: boolean; // nuevo prop
    showCoberturaTitle?: boolean;
}