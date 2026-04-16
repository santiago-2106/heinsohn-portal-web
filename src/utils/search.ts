// PARA FILTRAR CATEGORÍAS QUE TENGA LAS CARDS
export const filterCategories = (
  filterKeys: string[],
  search: string,
  tFilters: (key: string) => string
) => {
  return filterKeys.filter((key) => {
    const text = tFilters(key);
    return text.toLowerCase().includes(search.toLowerCase());
  });
};

// PARA UNIFICAR CARDS
export const getAllCards = (t: any) => {
  return [
    ...t.raw("cardBlogReciente.cards"),
    ...t.raw("cardBlogReciente2.cards"),
    ...t.raw("cardBlogReciente3.cards"),
    ...t.raw("cardBlogReciente4.cards"),
  ];
};

//PARA FILTRAR LAS CARDS QUE SE ENCUENTRAN EN EL JSON 
export const filterCards = (cards: any[], search: string) => {
  return cards.filter((card) => {
    return (
      card.titleCard.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase()) ||
      card.badge.toLowerCase().includes(search.toLowerCase()) ||
      card.subtitle1.toLowerCase().includes(search.toLowerCase())
    );
  });
};