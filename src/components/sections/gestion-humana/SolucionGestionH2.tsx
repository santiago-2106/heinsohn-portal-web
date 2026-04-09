import Image from "next/image";
import TextComponent from "../../ui/typography/TextComponent";
import {
  PlayCircleOutlineOutlined,
  PlayCircleOutlineRounded,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function TalentCloudSection() {

  const t = useTranslations("gestionHumana")

  const dataInfoGestionHumana = t.raw("cardInfoGestionHumana")

  return (
    <div>
      <section className="flex justify-center items-center w-full mt-28 mb-12">
        <div className="bg-black px-2 py-1 md:px-4 md:py-2 w-fit border border-border-ui">
          <p className="text-xl tracking-tight text-center text-white">Soluciones Modulares</p>
        </div>
      </section>
      <TextComponent title={t("titlesGestionHumana.titleGestionHumana4.title")} />

      <section className="max-w-3xl mx-auto mt-4 py-5">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 ">
          {dataInfoGestionHumana.map((item:any, index:number) => (
            <div
              key={index}
              className="border border-border-ui flex items-center justify-center text-center p-7"
            >
              <p className="text-text-body">{item.description}</p>
            </div>
          ))}
        </article>
      </section>

      <section>
        <article className="mt-10 mb-10 w-full max-w-4xl mx-auto px-4">
          <TextComponent title={t("titlesGestionHumana.titleGestionHumana5.title")} />

          <div className="relative mt-12 overflow-hidden cursor-pointer group">
            <div className="relative aspect-video w-full">
              <Image
                src="/img/imgIAgestionHumana.jpg"
                alt="IA en Recursos Humanos"
                fill
                className="object-cover brightness-50 grayscale-100"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-brand-accent opacity-90 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircleOutlineOutlined sx={{ fontSize: 80 }}/>
                </div>
              </div>
            </div>
            <div className="bg-text-title text-bg-main py-12 px-6 text-center">
              <p className="text-lg md:text-xl font-light mb-4 opacity-80 text-white">
                ¡Conoce el impacto positivo que puede tener en tu empresa!
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline decoration-brand-accent underline-offset-4"
              >
                <PlayCircleOutlineRounded sx={{ fontSize: 20}}/>
                <span className="uppercase tracking-widest">Descubre más</span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}