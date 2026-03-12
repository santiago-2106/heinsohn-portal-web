import TextComponent from "../../ui/typography/TextComponent";
import { dataTextCards } from "../../../data/soluciones/share/textosGenerales";
import { informationCard } from "../../../data/soluciones/share/textosGenerales";

export default function CardSd() {
  return (
    <section className="py-24 transition-colors duration-300">
      <TextComponent
        title={dataTextCards.title}
        description={dataTextCards.description}
      />
      <div className="mx-auto max-w-sm sm:max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {informationCard.map((card, index) => {
            return (
              <article
                key={index}
                className="flex flex-col justify-between border border-border-ui bg-bg-card-2 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-8 md:p-10">
                  {/* Ícono principal */}
                  <div className="mb-6 flex text-text-body">{card.icon}</div>

                  <h4 className="text-2xl font-semibold text-text-title mb-8">
                    {card.titles}
                  </h4>

                  <div className="space-y-8">
                    {card.subtitle.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex items-center gap-3 mb-3">
                            {/* Sub-ícono */}
                            <div className="flex items-center justify-center text-text-body">
                              {item.icon}
                            </div>

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
