import CertificacionesInternacionales from "@/src/components/sections/shared/certificaciones/CertificacionesInternacionales";
import TextComponent from "../../ui/typography/TextComponent";
import ButtonComponent from "../../ui/buttons/Button";
import PreguntForm from "../../forms/formularios/PreguntForm";
import { dataPreguntasFrecuentesPensiones } from "@/src/data/soluciones/pensiones";

export default function PensionesSection2() {
  return (
    <section>
      {/* RUTA CORREGIDA: 
          1. Cambiamos "certificaciones.png" (que no existía) por "certificacionInternacional.png"
          2. Asegúrate de renombrar el archivo en tu carpeta para que termine en "...Internacional.png" (con L)
      */}
      <CertificacionesInternacionales 
        title="Certificaciones Internacionales" 
        imagen="/img/certificacionInternacional.png" 
      />

      <div className="mt-5">
        <p className="text-gray-500 text-center text-2xl mb-5"> 
          Sin compromiso | Respaldo en <span className="text-red-500">+</span>7 Paises | <span className="text-red-500">+</span>12 millones de afiliados administrativos 
        </p> 
      </div>

      <div> 
        <TextComponent 
          title="Moderniza la gestion de tu sistema de pensiones" 
          description="Transforma la administracion de pensiones en tu entidad y asegura cumplimiento en cada auditoria" 
        /> 
        <ButtonComponent textoBtn=" Conversa con un especialista en pensiones" /> 
      </div> 

      <div>
        <PreguntForm title='Preguntas frecuentes' items={dataPreguntasFrecuentesPensiones}/>
        <ButtonComponent textoBtn=" Conversa con un especialista en pensiones" /> 
      </div>
    </section>
  );
}