interface listSidebar {
  sidebarHref: string;
  sidebarList: string;
}

interface propsSidebar {
  titleSidebar: string;
  descriptionSidebar?: string;
  listSidebar: listSidebar[];
  isOpenSidebar: boolean
  onClose: () => void
}

export default function Sidebar({
  titleSidebar,
  descriptionSidebar,
  listSidebar,
  isOpenSidebar,
  onClose
}: propsSidebar) {
  return (
    <>
    {
        isOpenSidebar && (
            <div onClick={onClose}>
                <aside className="w-95 min-h-screen border-r border-border-ui bg-bg-main p-6 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
                    <div className="">
                        <h2 className="text-2xl font-light mb-6">{titleSidebar}</h2>
                        {
                            descriptionSidebar &&(
                                <div>
                                    <p className="text-text-body">{descriptionSidebar}</p>
                                </div>
                            )
                        }
                        <ul className="space-y-3">
                        {listSidebar.map((item, index) => (
                            <li key={index}>
                            <a
                                href={item.sidebarHref}
                                className="flex justify-between items-center px-4 py-2 rounded-full hover:bg-gray-200 transition"
                            >
                                <span>{item.sidebarList}</span>
                                <span aria-hidden="true" className="material-symbols-rounded text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
                                arrow_forward
                                </span>
                            </a>
                            </li>
                        ))}
                        </ul>
                         <div className="text-sm text-text-body mt-16 sm:mt-24 md:mt-32 lg:mt-48 px-4 py-2">
                            <p className="mb-2">Contacto</p>
                            <p>info@heinsohn.com.co</p>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
    </>
  );
}