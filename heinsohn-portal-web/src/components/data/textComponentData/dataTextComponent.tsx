import React from "react"


export interface dataTextComponent {
    title:string,
    description: string | React.ReactNode
}

//Informacion data comonentes cartas  soluciones digitale ingenieria de software vista1
export const dataTextComponent: dataTextComponent= 
    {
    title:'Diseñamos experiencias memorables',
    description: 'En Heinsohn combinamos diseño estratégico, investigación de usuarios y tecnología para crear productos digitales que realmente conectan con las personas. Nuestro enfoque UX/UI garantiza soluciones intuitivas, usables y alineadas con los objetivos de negocio, logrando mayor satisfacción y eficiencia en cada interacción.'
    }
 

export const dataTextCards: dataTextComponent = {
    title: "Nuestras Ofertas",
    description: "Elige el plan que mejor se adapte a las necesidades de tu empresa. Diseñamos tres paquetes con diferentes alcances y precios, pensados para brindarte flexibilidad, escalabilidad y el acompañamiento ideal en cada etapa de tu crecimiento."
}

export const dataTextTitle: dataTextComponent = {
    title: "La voz de nuestro Equipo",
    description: "El diseño va más allá de lo visual, se trata de entender profundamente al usuario y traducir sus necesidades en experiencias digitales que les hagan la vida más fácil. Ese es nuestro propósito en cada proyecto."
}

//Informacion data comonentes cartas soluciones digitale ingenieria de software vista2
export const dataTextSolucionDigtal: dataTextComponent = {
    title: "El verdadero freno no está en tu equipo, sino en un software genérico",
    description: (
        <>
        Las soluciones estándar suelen convertirse en un freno: procesos rígidos, costos crecientes y poca capacidad de integración. Estas limitaciones impactan la competitividad, reducen márgenes y frenan la innovación <span className="font-semibold text-gray-800">con nuestro servicio de desarrollo de software resolvemos estos desafíos al crear sistemas que:</span>
        </>
    )
}

export const TextSolucionDigtal2: dataTextComponent = {
    title: "Modelos de desarrollo que se adaptan a la madurez digital de tu empresa ",
    description: (
        <>
        Cada organización se encuentra en un punto distinto de su transformación tecnológica. Por eso, <span className="font-semibold text-gray-800">nuestros servicios de desarrollo de software a la medida</span> no siguen un único modelo, sino que se ajustan a la estrategia, recursos y tiempos de tu negocio
        </>
    )
}
export const TextSolucionDigtal21: dataTextComponent = {
    title: "Cómo un desarrollo de software personalizado acelera tu estrategia de negocio  ",
    description: (
        <>
       Nuestro desarrollo de software combina lo mejor de la ingeniería y la visión empresarial para crear soluciones seguras, escalables y alineadas con los objetivos de tu organización. <span className="font-semibold text-gray-800">Lo que ofrecemos</span>
        </>
    )
}

export const TextSolucionDigtal3: dataTextComponent = {
    title: "Resultados medibles de un software hecho a tu medida ",
    description: (
        <>
        Invertir en software personalizado significa convertir la tecnología en una ventaja competitiva que impacta directamente en la <span className="font-semibold text-gray-800">rentabilidad y la sostenibilidad del negocio.</span> 
        </>
    )
}

export const TextSolucionDigtal4: dataTextComponent = {
    title: "Más que una empresa de desarrollo de software, un aliado para tu futuro digital",
    description: "No buscamos ser solo un proveedor, sino tu socio estratégico para construir futuro con tecnología confiable, escalable y de impacto."
}


export const TextSolucionDigtal5: dataTextComponent = {
    title: "Cómo transformamos tu idea en resultados de negocio",
    description: "Nuestro proceso combina metodología ágil, visión estratégica y foco en resultados para acompañarte desde la idea hasta la evolución continua de la solución: "
}

export const TextSolucionDigtal6: dataTextComponent = {
    title: "El stack tecnológico detrás de nuestros proyectos de software",
    description: (
        <>
        Para garantizar escalabilidad, seguridad y eficiencia, trabajamos con un stack tecnológico robusto y probado en <span className="text-gray-800 font-semibold">proyectos de alto impacto</span>
        </>
    )
}

//Informacion vista de Texto Gestion Humana
export const textoGestionHumana: dataTextComponent = {
    title: "Contrata soluciones a la medida, del tipo de tu organización",
    description: (
        <>
        Nuestro software de nómina es ampliamente parametrizable, dinámico y flexible. Es una herramienta con <span className="text-gray-800 font-semibold">tecnología 100% web</span> que ofrece un proceso de nómina fácil, rápido y seguro
        </>
    )
}

export const textoGestionHumana2: dataTextComponent = {
    title: "Outsourcing de Procesos - BPO",
    description: (
        <>
       <span className="text-gray-800 font-semibold">Procesos formales de operación y personal capacitado</span> para apoyar tus métodos de atención a colaboradores, liquidación de pagos y la entrega confiable de información a terceros.
        </>
    )
}

export const textoGestionHumana3: dataTextComponent = {
    title: "Somos equipo",
    description: (
        <>
        El trabajo en equipo es una de nuestras principales estrategias. Estamos convencidos que el poder colectivo es la herrmienta esencial para <span className="text-gray-800 font-semibold">generar soluciones innovadoras.</span> Como grupo empresarial unimos a nuestra fuerza a grandes empresas que hoy son <span className="text-gray-800 font-semibold">nuestros aliados tecnologicos, creativos y financieros.</span> 
        </>
    )
}

export const textoGestionHumana4: dataTextComponent = {
    title: "Somos Gestion",
    description: (
        <>
        Creemos en la tecnologia como herramienta de transformacion de los entornos laborales. <span className="text-gray-800 font-semibold">Generamos espacios y oportunidades</span> que brinden mejores condiciones a los colaboradores
        </>
    )
}

//Informacion titulos y descripcions vista Pensiones

export const textoPensiones1: dataTextComponent = {
    title:'Retos del sistema de pensiones en Latinoamérica y cómo puedes gestionarlo con nuestro software ',
    description:(
        <>
        El sistema de pensiones en America Latina enfrenta transformaciones que requieren <span className="text-gray-800 font-semibold">vision y tecnologia:</span>
        </>
    ),

}

export const textoPensiones2: dataTextComponent = {
    title:'Una plataforma previsional única, modular y escalable ',
    description:(
        <>
        Nuestro <span className="text-gray-800 font-semibold">software </span>previsional centraliza la administración del sistema de pensiones en un único core tecnológico, desde el cual es posible gestionar de forma integrada pensiones obligatorias, pensiones voluntarias, cesantías y rentas vitalicias.
        <br />
        <span className="text-gray-800 font-semibold">Su diseño modular y parametrizable permite adaptarse a la regulación de cada país en LATAM,</span> manejar altos volúmenes operativos y garantizar trazabilidad, control y consistencia de la información a lo largo de todo el ciclo previsional
        </>
    ),

}

