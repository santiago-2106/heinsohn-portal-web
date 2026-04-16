

export default function CardFuncaionShared({data}: {data: any}) {
  return ( 
    <div className="flex flex-col gap-2 md:gap-10 w-full max-w-md md:max-w-lg lg:max-w-169 mx-auto">
      <span className="material-symbols-rounded text-[50px] text-text-body " style={{fontSize:'50px'}}>
        {data.icon}
      </span>
      <div className="flex flex-col gap-2 md:gap-6">
        <h2 className="text-2xl md:text-4xl text-text-title font-light leading-tight">
          {data.title}
        </h2>
      {data.descriptions.map((desc:any, index:number) => (
        <p key={index} className="text-text-body text-lg leading-relaxed">
          {desc}
        </p>
        ))}
      </div>
    </div>
      
  )
}
