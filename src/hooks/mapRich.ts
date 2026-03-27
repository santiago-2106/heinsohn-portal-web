// utils/mapRich.ts
import { richText } from "./helper/richText";

const mapRich = (t: any, key: string) => {
  const items = t.raw(key);

  return items.map((_: any, i: number) => ({
    title: t.rich(`${key}.${i}.title`,richText),
    description: t.rich(`${key}.${i}.description`, richText)
  }));
};
export default mapRich;