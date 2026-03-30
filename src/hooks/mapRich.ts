// utils/mapRich.ts
import { richText } from "./helper/richText";

const mapRich = (t: any, key: string) => {
  const items = t.raw(key);

  const tr = (path: string, value?: string) =>
    value ? t.rich(path, richText) : value;

  return items.map((item: any, i: number) => ({
    ...item,

    //par Titulos y Descripciones principales
    title: tr(`${key}.${i}.title`, item.title),
    description: tr(`${key}.${i}.description`, item.description),

    // footer
    footerText: tr(`${key}.${i}.footerText`, item.footerText),
    textoFooter: tr(`${key}.${i}.textoFooter`, item.textoFooter),

    // Para listas de las cards, se mapea cada título y cada item de la lista
    lists: item.lists?.map((list: any, j: number) => ({
      ...list,
      title: tr(`${key}.${i}.lists.${j}.title`, list.title),
      items: list.items?.map((it: string, k: number) =>
        tr(`${key}.${i}.lists.${j}.items.${k}`, it)
      )
    })),

    // items personalizados
    items: item.items?.map((it: any, j: number) => ({
      ...it,
      textos: tr(`${key}.${i}.items.${j}.textos`, it.textos)
    }))
  }));
};

export default mapRich;