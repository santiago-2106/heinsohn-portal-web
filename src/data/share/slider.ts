// ELIMINAMOS EL IMPORT DE LA IMAGEN
// ELIMINAMOS EL IMPORT DE StaticImageData PORQUE YA NO LO NECESITAMOS

export interface dataSlider {
  id: number;
  img: string; /* <-- Cambiamos StaticImageData por string */
  title: string;
  description: string;
  btn: string;
}

export const cardSlider1 = [
  {
    id: 1,
    img: "/img/imgSlider.png", /* <-- Ruta directa a public */
    title: "La innovación como motor de transformación digital",
    description:
      "Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.",
    btn: "Leer mas ->",
  },
  {
    id: 2,
    img: "/img/imgSlider.png", /* <-- Ruta directa a public */
    title: "La innovación como motor de transformación digital",
    description:
      "Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.",
    btn: "Leer mas ->",
  },
  {
    id: 3,
    img: "/img/imgSlider.png", /* <-- Ruta directa a public */
    title: "La innovación como motor de transformación digital",
    description:
      "Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.",
    btn: "Leer mas ->",
  },
  {
    id: 4,
    img: "/img/imgSlider.png", /* <-- Ruta directa a public */
    title: "La innovación como motor de transformación digital",
    description:
      "Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.",
    btn: "Leer mas ->",
  },
];