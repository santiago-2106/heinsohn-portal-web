export default function ButtonComponent({ textoBtn }: { textoBtn: string }) {
  return (
    <div className="flex justify-center py-8 px-4">
      <button className="group flex items-center gap-3 bg-text-title text-bg-main px-8 py-4 rounded-full transition-all hover:opacity-80 shadow-sm hover:shadow-md">
        {textoBtn}
      </button>
    </div>
  );
}