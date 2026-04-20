import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


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

            <p className="text-sm text-text-body leading-loose w-50 h-39 gap-10">
              {t("description")}
            </p>

            <div style={{ display: "flex", gap: "16px", fontSize: "30px" }} className="hover:cursor-pointer text-text-body">
              <FaLinkedin className="hover:active:scale-90 hover:text-blue-700" />
              <FaInstagram className="hover:active:scale-90 hover:text-pink-400" />
              <FaSpotify className="hover:active:scale-90 hover:text-green-500" />
              <FaYoutube className="hover:active:scale-90 hover:text-brand-accent" />
              <SiTiktok className="hover:active:scale-90 hover:" />
              <FaFacebook className="hover:active:scale-90 hover:text-blue-500" />
            </div>
          </div>

          <nav>
            <h3 className="text-text-body mb-4 text-lg md:text-2xl leading-[110%] font-light">{t("solutionsTitle")}</h3>
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
            <h4 className="text-text-body mb-4 text-lg md:text-2xl leading-[110%] font-light">{t("companyTitle")}</h4>
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
