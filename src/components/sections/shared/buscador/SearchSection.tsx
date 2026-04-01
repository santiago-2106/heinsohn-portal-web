import { useTranslations } from 'next-intl';


export default function SearchSection() {

    
  const tSearch = useTranslations("EntradaBlogs.Search");
  const tFilters = useTranslations("EntradaBlogs.Filters");

  // Llaves para iterar las etiquetas de la segunda imagen
  const filterKeys = [
    'analytics',
    'software',
    'finance',
    'ai',
    'nearshore',
    'hr',
  ];

  return (
    <section className="flex flex-col gap-8 p-4 items-center w-full">
      <div className="w-full max-w-236 min-h-16 flex items-center justify-between rounded-[48px] border border-border-ui bg-bg-card-2 pl-6 pr-2 py-2 gap-4 shadow-sm">
        <input
          type="text"
          placeholder={tSearch('placeholder')}
          className="flex-1 outline-none text-text-body bg-transparent placeholder:text-text-body"
        />
        <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-[48px] hover:bg-zinc-800 transition-colors">
          <span className="font-medium">{tSearch('button')}</span>
          <span className='material-symbols-rounded' style={{fontSize:'20px'}}>search</span>
        </button>
      </div>

      
      <div className="flex flex-wrap gap-4 justify-center max-w-236">
        {filterKeys.map((key) => (
          <button
            key={key}
            className="w-fit h-fit px-4 py-2 rounded-[25px] border border-border-ui text-[14px] text-text-body whitespace-nowrap bg-bg-card-2 hover:cursor-pointer hover:border-gray-400 transition-all active:scale-95">
            {tFilters(key)}
          </button>
        ))}
      </div>

    </section>
  );
}