import Link from 'next/link';

interface HeroProps {
  category: string;
  title: string;
  subtitle: string;
}

export default function Hero({ category, title, subtitle }: HeroProps) {
  return (
    <section className="bg-white pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start w-full">
          
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> 
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Home</span>
            </Link>

            <ChevronRight />

            <Link href="/soluciones" className="hover:text-black transition-colors">
              Soluciones
            </Link>

            <ChevronRight />

            <span className="font-medium text-gray-800">{category}</span>
          </nav>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight mb-8 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 font-light max-w-3xl mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="w-full flex items-center justify-between">
            <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full transition-all hover:bg-gray-800 shadow-sm hover:shadow-md">
              <span className="font-medium">Solicita una asesoría gratuita</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>

            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function ChevronRight() {
  return (
    <svg className="w-3 h-3 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}