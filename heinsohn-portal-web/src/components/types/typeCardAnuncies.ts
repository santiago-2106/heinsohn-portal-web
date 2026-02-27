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
}