interface CardLayoutProps {
  img?: string;
  children: React.ReactNode;
}

export default function CardLayout({ img, children }: CardLayoutProps) {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-10 lg:px-20 mb-22 mt-22">
    <section className="flex flex-col md:flex-row w-full border border-border-ui h-auto md:h-193 overflow-hidden">
      {/* Lado Izquierdo: Imagen (Layout fijo de la UX) */}
      <div className="hidden md:block md:w-119 h-75 md:h-full bg-bg-main">
        <img 
          src={img} 
          className="w-full h-full object-cover" 
          alt="Abstract design" 
        />
      </div>

      {/* Lado Derecho: Contenedor de contenido dinámico */}
      <div className="flex-1 flex items-center bg-bg-main border-l border-border-ui p-10 md:py-10 md:pl-20 md:pr-52">
        <div className="flex flex-col gap-2 md:gap-10 w-full max-w-md md:max-w-lg lg:max-w-169 mx-auto">
          {children}
        </div>
      </div>
    </section>
    </div>
  );
}