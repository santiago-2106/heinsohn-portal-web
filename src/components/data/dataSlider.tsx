import imgSlider1 from '@/src/img/imgSlider.png'
import { StaticImageData } from 'next/image'

export interface dataSlider {
    id: number,
    img: StaticImageData,
    title: string,
    description:string
    btn: string
} 

export const cardSlider1 = [
    {id: 1, img: imgSlider1, title:'La innovación como motor de transformación digital' , description:'Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.' , btn: 'Leer mas ->'},
    {id: 2,img: imgSlider1, title:'La innovación como motor de transformación digital' , description:'Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.' , btn: 'Leer mas ->'},
    {id: 3,img: imgSlider1, title:'La innovación como motor de transformación digital' , description:'Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.' , btn: 'Leer mas ->'},
    {id: 4, img: imgSlider1, title:'La innovación como motor de transformación digital' , description:'Descubre cómo las organizaciones están utilizando nuestras soluciones para lograr mayor eficiencia, competitividad y crecimiento sostenible.' , btn: 'Leer mas ->'},
]