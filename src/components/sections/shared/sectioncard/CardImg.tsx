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
    <section>
      <div className='mx-auto max-w-5xl p-4'>
        <CardGrid columns={3}>
          {dataCardsImgs.map((persona, index) => (
            <div key={index} className='flex flex-col border border-border-ui bg-bg-card-2 '>
              <img
                src={persona.imgPersonas}
                alt={persona.namePersonas}
                className='object-cover w-[315px] h-[315px] grayscale-50 '
              />
              <div className=" py-2 px-4">
                <p className='text-text-body'>{persona.namePersonas}</p>
                {persona.cargoPersonas && (
                    <p className='text-brand-accent'>{persona.cargoPersonas}</p>
                )}
              </div>
            </div>
          ))}
          </CardGrid>
        
      </div>
    </section>
  );
}