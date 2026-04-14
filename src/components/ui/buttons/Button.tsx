"use client"
import { scrollHero } from "@/src/utils/scrollHero";

export default function ButtonComponent({
  textoBtn,
  href
}: {
  textoBtn: string;
  href?: string;
}) {

  const isAnchor = href?.startsWith("#");

  return (
    <div className="flex justify-center py-2 px-4">

      {isAnchor ? (
        <button
          onClick={(e) => scrollHero(e, isAnchor, href)}
          className="group flex items-center gap-3 mb-24 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md"
        >
          {textoBtn}
        </button>
      ) : (
        <a
          href={href}
          className="group flex items-center gap-3 mb-24 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md"
        >
          {textoBtn}
        </a>
      )}

    </div>
  );
}