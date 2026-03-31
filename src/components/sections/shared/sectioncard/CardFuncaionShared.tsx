

export default function CardFuncaionShared({data, img}: {data: any, img?: string}) {
  return (
    <section className="flex flex-col md:flex-row w-full border border-border-ui h-auto md:h-193 mb-22">
      <div className="hidden md:block md:w-119 h-75 md:h-full bg-bg-main ">
        <img 
          src={img} 
          className="w-full h-full object-cover"
          alt="Abstract design"
        />
      </div>

      <div className="flex-1 flex items-center bg-bg-main border-l border-border-ui p-10 md:py-10 md:pl-20 md:pr-52">
        <div className="flex flex-col gap-2 md:gap-10 w-full max-w-md md:max-w-lg lg:max-w-169 mx-auto">
          <span className="material-symbols-rounded text-[40px] text-text-body " style={{fontSize:'60px'}}>
            {data.icon}
          </span>
          <div className="flex flex-col gap-2 md:gap-6">
            <h2 className="text-2xl md:text-5xl text-text-title font-light leading-tight">
              {data.title}
            </h2>
            {data.descriptions.map((desc:any, index:number) => (
              <p key={index} className="text-text-body text-lg leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
