// src/hooks/useCards.ts

type CardItem = {
  title: string;
  description: string;
  icon?: string;
};

type CardWithId = CardItem & {
  id: string;
};

export function useCard(cards: CardItem[]): CardWithId[] {
  return cards.map((card, index) => ({
    id: `${card.title}-${index}`, // ✅ key estable
    title: card.title,
    description: card.description,
    icon: card.icon,
  }));
}