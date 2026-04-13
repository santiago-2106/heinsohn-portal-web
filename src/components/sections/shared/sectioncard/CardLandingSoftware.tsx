import TextComponent from "@/src/components/ui/typography/TextComponent"
import React from "react"

interface CardLandingSoftwareItem {
    title: string
    description: string
    image: string
    btnTextos:string
}

interface CardLandingSoftwareProps {
    title: React.ReactNode
    items: CardLandingSoftwareItem[]
}

export default function CardLandingSoftware({title,items}: CardLandingSoftwareProps) {
  return (
    <section className="w-full py-8">
        <TextComponent title={title} />
    <div className="mx-auto w-full max-w-227 px-4 md:px-0 flex flex-col items-center relative">
        {
        items.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row bg-bg-card-2 border border-border-ui md:h-85">
            <div className="w-full md:w-145 shrink-0">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-62.5 md:h-84.25 object-cover brightness-50 md:brightness-90 transition-all duration-500"
                />
                </div>

                
            <div className="w-full md:w-82.5 md:h-84.25 flex flex-col justify-center gap-2.5 p-8 shrink-0">
                <h2 className="font-light text-[32px] md:text-[40px] lg:text-[22px] leading-[100%] text-text-title">
                    {item.title}
                </h2>

                <p className="font-light text-[16px] md:text-[18px] lg:text-[16px] leading-7.5 text-text-body">
                    {item.description}
                </p>

                <button className="text-text-body font-medium flex items-center gap-2 mt-2 hover:translate-x-1 hover:cursor-pointer">
                    <span>{item.btnTextos}</span>
                    <span className="text-brand-accent group-hover:translate-x-1">
                        →
                    </span>
                </button>
            </div>

        </div>
        ))}
        </div>
    </section>
  )
}
