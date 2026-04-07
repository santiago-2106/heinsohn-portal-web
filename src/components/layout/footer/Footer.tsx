import { IconButton } from "@mui/material";
import { LinkedIn, Instagram, Facebook, YouTube } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";


const soluciones = [
  [
    "Servicios de transformacion digital",
    "Gestion humana y nómina",
    "Soluciones para gobierno",
    "Soluciones de outsourcing",
  ],
  [
    "Soluciones sector pensiones",
    "Soluciones sector financiero",
    "Soluciones SAP",
    "Soluciones en SST",
  ],
];

export default async function Footer() {
  const t = await getTranslations("footer")

  const soluciones = t.raw("solutions")
  const company = t.raw("company")


  return (
    <footer className="border-t border-border-ui bg-bg-main pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[1fr_1.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icon-heinsonh.svg"
                alt="icon heinsohn"
                width={30}
                height={30}
                
              />
              <h3 className="text-sm font-bold text-text-body tracking-wider">HEINSOHN</h3>
            </div>

            <p className="text-sm text-text-body leading-7.5 w-50 h-39 gap-10">
              {t("description")}
            </p>

            <div className="p-0 flex gap-2">
              <IconButton sx={{ color: "text.primary" }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: "text.primary" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "text.primary" }}>s</IconButton>
              <IconButton sx={{ color: "text.primary" }}>
                <YouTube />
              </IconButton>
              <IconButton sx={{ color: "text.primary" }}>Tk </IconButton>
              <IconButton sx={{ color: "text.primary" }}>
                <Facebook />
              </IconButton>
            </div>
          </div>

          <nav>
            <h3 className="text-text-body mb-4">{t("solutionsTitle")}</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {soluciones.map((column: string[], index: number) => (
                <ul
                  key={index}
                  className="flex flex-col gap-2 text-sm text-text-body"
                >
                  {column.map((item) => (
                    <li key={item}>
                      <Link href="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          <nav>
            <h4 className="text-text-body mb-4">{t("companyTitle")}</h4>
            <ul className="flex flex-col gap-2 text-sm text-text-body">
              {
                company.map((item: string) => (
                  <li key={item}>{item}</li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
