import { ElementType } from "react"
import DevicesIcon from "@mui/icons-material/Devices"

export interface SubtitleItem {
  icon: ElementType
  text: string
  features: string[]
}

export interface dataCardSolutions {
  icon: ElementType
  titles: string
  subtitle: SubtitleItem[]
  price: string
}


export const informationCard: dataCardSolutions[] = [
    {
        icon: DevicesIcon,
        titles:"Basico",
        subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: [
          "Angular, React",
          "Hasta 5 flujos de 1 a 50 pantallas",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: [
          "Prueba con 5 a 10 usuarios sinteticos",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: [
          "16 horas -1 especialista UX.",
        ],
      },
    ],
    price: "$500 USD",
    },

    {
        icon: DevicesIcon,
        titles:"Basico",
        subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: [
          "Angular, React",
          "Hasta 5 flujos de 1 a 50 pantallas",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: [
          "Prueba con 5 a 10 usuarios sinteticos",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: [
          "16 horas -1 especialista UX.",
        ],
      },
    ],
    price: "$500 USD",
    },

    {
        icon: DevicesIcon,
        titles:"Basico",
        subtitle: [
      {
        icon: DevicesIcon,
        text: "Prototipado Rapido",
        features: [
          "Angular, React",
          "Hasta 5 flujos de 1 a 50 pantallas",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Prueba de uso",
        features: [
          "Prueba con 5 a 10 usuarios sinteticos",
        ],
      },
      {
        icon: DevicesIcon,
        text: "Tiempo",
        features: [
          "16 horas -1 especialista UX.",
        ],
      },
    ],
    price: "$500 USD",
    }
]
