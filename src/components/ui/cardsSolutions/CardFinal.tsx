import React from 'react'
import { softwareCards, analitycCards, enginerTeamCards, strategicConsultingCards } from '@/src/components/data/landingTI/dataCard'
import CardAnuncies from '@/src/components/ui/cardsSolutions/CardAnuncies'

export default function CardFinal() {
  return (
    <>
      <CardAnuncies
        title="Ingenieria de software y Desarrollo de productos Digitales"
        cards={softwareCards}
      />

      <CardAnuncies
        title="Analitica de datos e inteligencia artificial"
        cards={analitycCards}
      />

      <CardAnuncies title='Ingenieria extendida y equipos dedicados' 
        cards={enginerTeamCards}
      />

       <CardAnuncies title='Consultoria estrategica' 
        cards={strategicConsultingCards}
      />

    </>
  )
}
