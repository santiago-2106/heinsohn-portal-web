import React from "react"

interface StatItem {
  titleLanding: React.ReactNode
  descriptionLanding: string
}

interface StatsSectionProps {
  items: StatItem[]
}

export default function TextSections({ items }: StatsSectionProps) {
  return (
    <section className='bg-bg-main py-24 px-12'>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="font-light text-3xl md:text-4xl lg:text-[48px] leading-[100%]">
                {item.titleLanding}
              </h2>
              
              <p className="mt-2 font-light text-base md:text-lg lg:text-[20px] leading-7.5">
                {item.descriptionLanding}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}