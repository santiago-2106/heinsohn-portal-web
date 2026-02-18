import { dataCard } from "@/src/components/data/dataCard"
import React from "react"



export interface cardPropsInformation {
  title?: string
  description?: React.ReactNode
  cards?: dataCard[]
  cols?: number
  bottomText?: React.ReactNode
  bottomBtn?: string  
}


//Card interface de la vista 2 soluciones
export interface FeatureCardProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  variant?: "large" | "compact"
}