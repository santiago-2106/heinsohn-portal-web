import React from "react";

interface GridCard {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

interface LideresSectionProps {
  title: string;
  mainCard: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  gridCards: GridCard[];
}

export default function LideresSection({ title, mainCard, gridCards }: LideresSectionProps) {
  return (
    <section className="bg-bg-main py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-248.5 px-4 sm:px-6 lg:px-0 flex flex-col">
        
        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-text-title font-light mb-12 lg:mb-16 text-center max-w-4xl mx-auto leading-tight">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row border border-border-ui bg-bg-main shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* LADO IZQUIERDO: #1 */}
          <div className="w-full lg:w-[35%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border-ui flex flex-col justify-center items-start">
            <div className="text-text-title mb-6 material-symbols-rounded" style={{fontSize:"32px"}}>
              {mainCard.icon}
            </div>
            
            <h3 className="text-3xl lg:text-[34px] font-light text-text-title mb-6 leading-tight">
              {mainCard.title}
            </h3>
            
            <div className="text-[80px] lg:text-[100px] font-light leading-none mb-6 flex items-baseline">
              <span className="text-text-title">#</span>
              <span className="text-brand-accent">1</span>
            </div>
            
            <p className="text-[14px] md:text-[15px] font-light text-text-body leading-relaxed">
              {mainCard.description}
            </p>
          </div>

          {/* LADO DERECHO: 2x2 */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2">
            {gridCards.map((card, index) => (
              <div 
                key={index}
                className={`p-8 lg:p-10 flex flex-col items-start
                  ${index < 2 ? "border-b border-border-ui" : ""} 
                  ${index % 2 === 0 ? "md:border-r border-border-ui" : ""}
                `}
              >
                <div className="text-text-title mb-5 material-symbols-rounded">
                  {card.icon}
                </div>
                <h4 className="text-[18px] md:text-[20px] font-light text-text-title mb-4">
                  {card.title}
                </h4>
                <p className="text-[13px] md:text-[14px] font-light text-text-body leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}