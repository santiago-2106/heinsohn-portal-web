import CardGrid from "@/src/components/layout/grids/CardGrid";

interface CardImgProps {
  imgPersonas: string;
  namePersonas: string;
  cargoPersonas?: string;
}

interface dataCardImg {
  dataCardsImgs: CardImgProps[];
}

export default function CardImg({ dataCardsImgs }: dataCardImg) {
  return (
    <section className="px-10">
      <div className='mx-auto max-w-5xl'>
        <CardGrid columns={3}>
          {dataCardsImgs.map((persona, index) => (
            <div 
              key={index} 
              className='flex flex-col border border-border-ui bg-bg-card-2 gap-6 ' 
            >
              <img
                src={persona.imgPersonas}
                alt={persona.namePersonas}
                className='w-full aspect-square object-cover grayscale-50' 
              />
              <div className="px-6 gap-2 flex flex-col pb-6">
                <p className='text-1xl md:text-2xl lg:text-[18px]'>{persona.namePersonas}</p>
                {persona.cargoPersonas && (
                  <p className='text-brand-accent text-1xl md:text-2xl lg:text-[16px]'>{persona.cargoPersonas}</p>
                )}
              </div>
            </div>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}