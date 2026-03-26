// utils/mapRich.ts
import { richText } from "./helper/richText";

const mapRich = (t: any, key: string) => {
  const items = t.raw(key);

  return items.map((_: any, i: number) => ({
    title: t(`${key}.${i}.title`),
    description: t.rich(`${key}.${i}.description`, richText)
  }));
};
export default mapRich;