import React from "react";
import { datagestionHumana } from "../data/dataGestionHumana/dataGestionHumana";

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
