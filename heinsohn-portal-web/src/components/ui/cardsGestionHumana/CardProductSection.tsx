import { ProductsgestionHumanaInfo2 } from '../../data/dataGestionHumana/dataGestionHumana'
import ProductRow from './CardProductosRows'
import TextComponent from '../textsComponent/TextComponent'
import { textoGestionHumana4 } from '../../data/textComponentData/dataTextComponent'
import CertificacionesInternacionales from '../../sections/CertificacionesInternacionales'

export default function CardProductSection() {
  return (
    <section className='py-20'>
      <div className='mx-auto max-w-5xl px-10 space-y-32'>
        <TextComponent title='Productos' />
        {
            ProductsgestionHumanaInfo2.map((product, index) =>(
                <ProductRow 
                key={index}
                product={product}
                reverse={index %2 !==0}
                />
            ))
        }
      </div>
      <div className='mt-36'>
        <TextComponent title={textoGestionHumana4.title} description={textoGestionHumana4.description} />
        <CertificacionesInternacionales title='Certificaciones Internacionales'/>
      </div>
    </section>
  )
}
