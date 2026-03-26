import TextComponent from "../../ui/typography/TextComponent";
import { useTranslations } from "next-intl";

type FeatureItem = {
  text: string
  features: string[]
  icon?: string
}

type CardItem = {
  titles: string
  subtitle: FeatureItem[]
  price: string
  icon?: string
}

export default function CardSd() {
  const t = useTranslations("desarrolloUxUi")

  const cardsOfertas = t.raw("informationCard") as CardItem[]

  return (
    <section className="py-24 transition-colors duration-300">
      <TextComponent
        title={t("titleNuestrasOfertas.title")}
        description={t("titleNuestrasOfertas.description")}
      />
      <div className="mx-auto max-w-sm sm:max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardsOfertas.map((card, index) => {
            return (
              <article
                key={index}
                className="flex flex-col justify-between border border-border-ui bg-bg-card-2 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-8 md:p-10">
                  {/* Ícono principal */}
                  <span className="material-symbols-rounded text-text-title font-light mb-6" style={{ fontSize: "48px" }}>{card.icon}</span>

                  <h4 className="text-2xl font-semibold text-text-title mb-8">
                    {card.titles}
                  </h4>

                  <div className="space-y-8">
                    {card.subtitle.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex items-center gap-3 mb-3">
                            {/* Sub-ícono */}
                            <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "25px" }}>
                              {item.icon}
                            </span>

                            <h4 className="text-sm font-medium text-text-body">
                              {item.text}
                            </h4>
                          </div>

                          <ul className="pl-5 space-y-2 text-sm text-text-body list-disc list-outside">
                            {item.features.map((feature, featur) => (
                              <li key={featur} className="leading-relaxed">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Precio */}
                <p className="w-full bg-text-title text-bg-main text-center font-semibold p-4">
                  {card.price}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
