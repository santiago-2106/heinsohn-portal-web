import React from "react";
import { datagestionHumana } from "../data/soluciones/gestion-humana";

export interface propsGestionHumana {
  icon?: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  contenedor?: React.ReactNode;
  btnText: string;

  badge?: string;
  subTitle?: string;
  items?: string[];
}

export interface ProductRowProps {
  product: datagestionHumana;
  reverse?: boolean;
}
