import CardFeatures from '../../ui/cards/CardFeatures'
import ButtonComponent from '../../ui/buttons/Button'
import TextComponent from '../../ui/typography/TextComponent'
import { cardFuturoDigital,  titlesDesarrolloAMedida } from '../../../data/soluciones/desarrollo-a-medida'
import { useTranslations } from 'next-intl'
import { useCard } from '@/src/hooks/useCard'


export default function TecnologiaConfiable() {

  const t = useTranslations("desarrolloAMedida")


  const rawCards = t.raw("cardsFuturoDigital");
  const cardAliadoFuturoDigital = useCard(rawCards);
  
  return (
     <div> 
        <TextComponent 
        title={t("titles.AliadoFuturoDigital.title")} 
        description={t("titles.AliadoFuturoDigital.description")}
        />
        <section className='grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-2 mx-auto max-w-4xl'>
        {
        cardAliadoFuturoDigital.map((item) => (
            <CardFeatures 
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconPosition="left"
              variant="compact"/>
              ))
            }
        </section>
        <ButtonComponent textoBtn={t("textBtn.textoBtn5")}/>
    </div>
  )
}
