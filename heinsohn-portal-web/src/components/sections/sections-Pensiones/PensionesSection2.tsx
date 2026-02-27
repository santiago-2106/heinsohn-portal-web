import CertificacionesInternacionales from '@/src/components/sections/CertificacionesInternacionales'
import TextComponent from '../../ui/textsComponent/TextComponent'
import ButtonComponent from '../../ui/Button/ButtonComponent'

export default function PensionesSection2() {
  return (
    <section>
      <CertificacionesInternacionales title='Certificaciones Internacionales' imagen='/img/certificaciones.png' />
      <div className='mt-5'>
        <p className='text-gray-500 text-center text-2xl mb-5'>Sin compromiso | Respaldo en <span className='text-red-500'>+</span>7 Paises | <span className='text-red-500'>+</span>12 millones de afiliados administrativos</p>
      </div>

      <div>
        <TextComponent title='Moderniza la gestion de tu sistema de pensiones' 
        description='Transforma la administracion de pensiones en tu endtidas y asegura cumplimiento en cada auditoria'
        />
        <ButtonComponent textoBtn=' Conversa con un especialista en pensiones' />
      </div>
      COMPONETE SANTIAGO MERA 
    </section>
  )
}
