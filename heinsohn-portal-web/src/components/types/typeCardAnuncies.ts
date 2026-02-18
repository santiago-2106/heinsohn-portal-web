import React from "react";


export interface cardPropsInformation {
  title: string;
  description?: string | React.ReactNode;
  // Al poner 'any[]', aceptará tus datos nuevos sin conflictos.
  cards?: any[]; 
  cols?: number;
  bottomText?: string;
  bottomBtn?: string;
}