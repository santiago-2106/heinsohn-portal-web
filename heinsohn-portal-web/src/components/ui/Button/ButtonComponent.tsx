

export default function ButtonComponent({textoBtn}: {textoBtn: string}) {
  return (
    <div className="flex justify-center py-6 px-4">
      <button className="bg-black text-white text-base font-medium py-4 px-10 rounded-full">
        {textoBtn}
      </button>
    </div>
  )
}
