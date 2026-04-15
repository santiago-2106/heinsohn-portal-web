
import { Link } from "@/src/i18n/navigation";
import { UrlObject } from "url";

interface ButtonCardProps {
    text:string
    hrefButton?:string | UrlObject, 
    alineacion?:"left" | "center",
    hasBorder?:boolean 
}


export default function ButtonCard({text, hrefButton, alineacion, hasBorder }: ButtonCardProps){
    const centrar = alineacion === "center";
    const cleanBtnText = text.replace(/->|→/g, "").trim();
    if (!text || !hrefButton) return null;
    return(
    <>
        <div className={hasBorder ? "border-t border-border-ui pt-8 w-full" : "w-full"}>
            {hrefButton &&(
                <Link
                href={hrefButton}
                className={`inline-flex gap-2 text-sm font-bold group ${centrar ? "justify-center" : "items-center"}`}
                >
                <span className="text-text-title group-hover:opacity-80 transition-colors">
                    {cleanBtnText}
                </span>
                <span className="material-symbols-rounded text-brand-accent text-lg transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                </span>
                </Link>
            )}
        </div>
    </>
    )
}