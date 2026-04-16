import Image from "next/image";
import TextComponent from "../../ui/typography/TextComponent";
import {
  PlayCircleOutlineOutlined,
  PlayCircleOutlineRounded,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import Videos from "../../layout/videos/Videos";

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

      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-4 sm:py-1 md:py-2">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
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

      <section className="mt-10 mb-10">
        <TextComponent title={t("titlesGestionHumana.titleGestionHumana5.title")} />
        <Videos 
        video={t.raw("videoGestionHumana.video")}
        textButtonVideo={t("videoGestionHumana.textButtonVideo")}
        textVideos={t("videoGestionHumana.textVideos")}
        />
      </section>
    </div>
  );
}