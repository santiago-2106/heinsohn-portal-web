interface CardLandingSoftwareItem {
    title: string
    description: string
    image: string
}

interface CardLandingSoftwareProps {
    items: CardLandingSoftwareItem[]
}

export default function CardLandingSoftware({items}: CardLandingSoftwareProps) {
  return (
    <section className="w-full py-8">
    <div className="mx-auto w-full max-w-246 px-10 relative">
        {
        items.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-bg-card-2 border border-border-ui md:h-105">
            <div className="md:max-w-11/12">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover brightness-50"
                />
                </div>

                
            <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16 gap-6">
                <h2 className="font-light text-[32px] md:text-[40px] lg:text-[22px] leading-[100%] text-text-title">
                    {item.title}
                </h2>

                <p className="font-light text-[16px] md:text-[18px] lg:text-[16px] leading-7.5 text-text-body">
                    {item.description}
                </p>

                <button className="text-brand-accent font-medium flex items-center gap-2 mt-2">
                    Conoce el caso completo
                </button>
            </div>

        </div>
        ))}
        </div>
    </section>
  )
}
