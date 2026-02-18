import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StaticImageData } from 'next/image';

//IMAGENES PRODYCTOS
import imgPc1 from '@/src/img/laptpo1.png'
import imgPc2 from '@/src/img/laptop2.png'
import imgPc3 from '@/src/img/laptop3.png'
import imgPc4 from '@/src/img/laptop4.png'
import imgPc5 from '@/src/img/laptop5.png'
import imgPc6 from '@/src/img/laptop6.png'
import imgPc7 from '@/src/img/laptop7.png'


export interface datagestionHumana {
    icon?:React.ReactNode
    title: string
    description: string
    image?: StaticImageData
    contenedor?:React.ReactNode
    btnText: string
}


export const gestionHumanaInfo: datagestionHumana[] = [
    {
        
        icon: <AccountCircleIcon />,
        contenedor: '+500 Colaboradores',
        title: 'Grandes empresas',
        description:'Nomina para grandes empresas',
        btnText:'Ampliar Informacion'
    },
      {
        
        icon: <AccountCircleIcon />,
        contenedor: ' 1 a 450 colaboradores',
        title: 'Pymes',
        description:'Nomina para pequeña y mediana empresa',
        btnText:'Ampliar Informacion'
    },
      {
        
        icon: <AccountCircleIcon />,
        contenedor:'+100 colaboradores',
        title: 'Gobierno',
        description:'Soluciones para la administracion publica',
        btnText:'Ampliar Informacion'
    }
]

//Productos getsion Humana
export const ProductsgestionHumanaInfo2: datagestionHumana[] =[
    {
        title: 'Software de nomina',
        description: 'Contamos con un ​software de nómina inteligente​ para el pago y liquidación de nómina.',
        btnText: 'Conocer mas',
        image: imgPc1
    },
    {
        title: 'Solucion pago a contratistas',
        description: 'Estamos a la vanguardia. Afrontamos los nuevos retos del mercado desarrollando soluciones acordes al cambio constante del mundo.',
        btnText: 'Conocer mas',
        image: imgPc2
    },
    {
        title: 'Seguridad y salud en el trabajo',
        description: 'Permite la implementacion, mantenimiento y control del sistema de gestion de seguridad y slaud en el trabajo',
        btnText: 'Conocer mas',
        image: imgPc3
    },
    {
        title: 'Software de nomina',
        description: 'Permite la administracion integral del recurso humano de tu organizacion',
        btnText: 'Conocer mas',
        image: imgPc4
    },
    {
        title: 'Soluciones de nomina y gestion humana par Gobierno',
        description: 'Facilita los proceso, seguimientos y evaluaciones de la organizacion y de ares de talento humano',
        btnText: 'Conocer mas',
        image: imgPc5
    },
    {
        title: 'Gestion de reconocimiento economicos',
        description: 'Aumenta tus ingresos recuperando el dinero de incapacidades y licencias de tus colaboradores',
        btnText: 'Conocer mas',
        image: imgPc6
    },
     {
        title: 'Nomina Emax',
        description: 'Toda la experiencia de Heinsohn en una solucion 100% digital, ideal para la pequeña grab empresa!',
        btnText: 'Conocer mas',
        image: imgPc7
    },
]

//CERTIFICACIONES VISTAS INFORMACION


