import TextComponent from "../textsComponent/TextComponent";
import { dataTextCards } from "../../data/textComponentData/dataTextComponent";
import { informationCard } from "../../data/dataCardSolutions/dataCardSolucion";



export default function CardSd() {
  return (
    <section className='py-24'>
      <TextComponent title={dataTextCards.title} description={dataTextCards.description} />
      <div className="mx-auto max-w-sm sm:max-w-5xl px-6">
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
          informationCard.map((card, index) =>{
            const Iconos = card.icon
            
            return(
              <article key={index} className='flex flex-col justify-between border border-gray-200 bg-white'>
                <div className="p-8 md:p-10">
                  <Iconos className='mb-6 text-5xl text-gray-700' />
                  <h4 className='text-2xl font-semibold text-gray-500 mb-8'>
                    {card.titles}
                  </h4>

                  <div className="space-y-8">
                    {
                      card.subtitle.map((item, i) => {
                        const IconosSubtitles = item.icon
                        return (
                        <div key={i}>
                          <div className="flex items-center gap-3 mb-3">
                            <IconosSubtitles className="text-lg text-gray-500" />
                            <h4 className="text-sm font-medium text-gray-800">
                              {item.text}
                            </h4>
                          </div>

                          <ul className="ml-7 space-y-2 text-sm text-gray-500 ">
                            {item.features.map((feature, featur) => (
                              <li key={featur} className="flex gap-2">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )
                      })
                    }
                  </div>
                </div>
                <p className="w-full bg-black text-white text-center font-semibold p-4">
                  {card.price}
                </p>
              </article>
            )
          })
        }
      </div>
      </div>
    </section>
  )
}
