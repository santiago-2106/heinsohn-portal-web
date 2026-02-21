<<<<<<< HEAD
import React from "react";


export interface cardPropsInformation {
  title: string;
  description?: string | React.ReactNode;
  // Al poner 'any[]', aceptará tus datos nuevos sin conflictos.
  cards?: any[]; 
  cols?: number;
  bottomText?: string;
  bottomBtn?: string;
=======
import { dataCard } from "@/src/components/types/cardTypes"
import React from "react"



export interface cardPropsInformation {
  title?: string
  description?: React.ReactNode
  cards?: dataCard[]
  cols?: 1 | 2 | 3
  bottomText?: React.ReactNode
  bottomBtn?: string
}


//Card interface de la vista 2 soluciones
export interface FeatureCardProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  variant?: "large" | "compact"
>>>>>>> origin/main
}