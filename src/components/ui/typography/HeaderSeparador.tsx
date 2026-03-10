interface HeaderSeparadorProps {
  title1: string;
  title2: string;
}

export default function HeaderSeparador({
  title1,
  title2,
}: HeaderSeparadorProps) {
  return (
    <header className="mt-12 w-full max-w-6xl mx-auto px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <section className="flex items-center gap-4 w-full">
          <h2 className="text-text-body text-lg md:text-xl font-light whitespace-nowrap uppercase tracking-wide">
            {title1}
          </h2>
          <span role="presentation" className="flex-1 h-px bg-border-ui mt-20" />

          <span aria-hidden="true" className="text-text-body text-sm mt-20">
            ↓
          </span>
        </section>

        <section className="flex items-center gap-4 w-full">
          <h2 className="text-text-body text-lg md:text-xl font-light whitespace-nowrap uppercase tracking-wide">
            {title2}
          </h2>
          <span role="presentation" className="flex-1 h-px bg-border-ui mt-20" />
          <span aria-hidden="true" className="text-text-body text-sm mt-20">
            ↓
          </span>
        </section>
      </div>
    </header>
  );
}