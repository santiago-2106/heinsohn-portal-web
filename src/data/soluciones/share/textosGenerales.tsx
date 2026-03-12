import { dataCard } from "@/src/types/cardTypes";
import React from "react";

export interface dataTextComponent {
  title: string;
  description: string | React.ReactNode;
}

// =========================================================================
// VISTA: CONSULTORÍA UX-UI (ORDEN CRONOLÓGICO)
// =========================================================================

// 1. HERO
export const dataUXConsultorias = {
  title: <>Consultoría UX-UI Diseño y desarrollo de<br/> experiencias de usuario</>,
  description:(
    <>
      <span className="font-bold text-text-title">Creamos experiencias digitales</span> centradas en las personas, con interfaces funcionales, atractivas y accesibles.
    </>
  ),
  buttonText: "Solicita una asesoría gratuita",
  breadcrumb: [
    { label: "Soluciones", href: "/soluciones-digitales" },
    { label: "Consultoría UX-UI Diseño y desarrollo de experiencias de usuario" },
  ],
};

// 2. TEXTO INTRODUCTORIO
export const dataTextDesarrolloUx: dataTextComponent = {
  title: "Diseñamos experiencias memorables",
  description:(
    <>
      En Heinsohn combinamos diseño estratégico, investigación de usuarios y tecnología para crear productos digitales que realmente conectan con las personas. <span className="font-bold text-text-title">Nuestro enfoque UX/UI garantiza soluciones intuitivas, usables y alineadas con los objetivos de negocio,</span> logrando mayor satisfacción y eficiencia en cada interacción.
    </>
  ),
};

// 3. TARJETAS DE OFERTAS / PRICING
export const dataTextCards: dataTextComponent = {
  title: "Nuestras Ofertas",
  description:
    "Elige el plan que mejor se adapte a las necesidades de tu empresa. Diseñamos tres paquetes con diferentes alcances y precios, pensados para brindarte flexibilidad, escalabilidad y el acompañamiento ideal en cada etapa de tu crecimiento.",
};

// 4. TEXTO DEL EQUIPO
export const dataTextTitle: dataTextComponent = {
  title: "La voz de nuestro Equipo",
  description:
    "El diseño va más allá de lo visual, se trata de entender profundamente al usuario y traducir sus necesidades en experiencias digitales que les hagan la vida más fácil. Ese es nuestro propósito en cada proyecto.",
};

// =========================================================================
// OTRAS SECCIONES (Precios y Casos de Éxito)
// =========================================================================
export const informationCard = [
  {
    icon: (
      <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>
        family_star
      </span>
    ),
    titles: "Basico",
    subtitle: [
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            sync_saved_locally
          </span>
        ),
        text: "Prototipo Rapido",
        features: ["Angular, React", "Hasta 5 flujos de 1 a 50 pantallas"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            display_settings
          </span>
        ),
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            acute
          </span>
        ),
        text: "Tiempo",
        features: ["16 horas -1 especialista UX."],
      },
    ],
    price: "$500 USD",
  },
  {
    icon: (
      <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>
        crown
      </span>
    ),
    titles: "Intermedio",
    subtitle: [
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            sync_saved_locally
          </span>
        ),
        text: "Prototipo Rapido",
        features: ["Angular, React", "Hasta 10 flujos de 1 a 100 pantallas"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            display_settings
          </span>
        ),
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            acute
          </span>
        ),
        text: "Tiempo",
        features: ["32 horas -1 especialista UX."],
      },
    ],
    price: "$1000 USD",
  },
  {
    icon: (
      <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>
        diamond
      </span>
    ),
    titles: "Pro",
    subtitle: [
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            sync_saved_locally
          </span>
        ),
        text: "Prototipo Rapido",
        features: ["Angular, React", "mas de 10 flujos de 101 a 200 pantallas"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            display_settings
          </span>
        ),
        text: "Prueba de uso",
        features: ["Prueba con 5 a 10 usuarios sinteticos"],
      },
      {
        icon: (
          <span className="material-symbols-rounded text-text-title" style={{ fontSize: "20px" }}>
            acute
          </span>
        ),
        text: "Tiempo",
        features: ["48 horas -1 especialista UX."],
      },
    ],
    price: "$2000 USD",
  },
];

export const dataCardKnowOurWork = {
  imgKnowOurWork: "/img/edif.jpg",
  titleWork: "Transformación digital en el sector financiero",
  descriptionWork:
    "Implementamos una plataforma digital a la medida que mejoró la experiencia del cliente y redujo en un 40% los tiempos de operación.",
  textBtn: "Conoce el caso completo",
};

export const dataCardKnowOurWork2 = {
  imgKnowOurWork: "/img/imgWorkKnow.jpg",
  titleWork: "Transformación de una plataforma de servicios de salud",
  descriptionWork:
    "Diseñamos una nueva experiencia digital para una plataforma de salud, mejorando la navegación, reorganizando los flujos...",
  textBtn: "Descubre cómo lo hicimos",
};

// =========================================================================
// VISTA: SOLUCIONES DIGITALES / INGENIERÍA DE SOFTWARE
// =========================================================================
export const dataTextSolucionDigtal: dataTextComponent = {
  title:
    "El verdadero freno no está en tu equipo, sino en un software genérico",
  description: (
    <>
      Las soluciones estándar suelen convertirse en un freno: procesos rígidos,
      costos crecientes y poca capacidad de integración. Estas limitaciones
      impactan la competitividad, reducen márgenes y frenan la innovación{" "}
      <span className="font-semibold text-text-body">
        con nuestro servicio de desarrollo de software resolvemos estos desafíos
        al crear sistemas que:
      </span>
    </>
  ),
};

export const TextSolucionDigtal2: dataTextComponent = {
  title:
    "Modelos de desarrollo que se adaptan a la madurez digital de tu empresa ",
  description: (
    <>
      Cada organización se encuentra en un punto distinto de su transformación
      tecnológica. Por eso,{" "}
      <span className="font-semibold text-text-body">
        nuestros servicios de desarrollo de software a la medida
      </span>{" "}
      no siguen un único modelo, sino que se ajustan a la estrategia, recursos y
      tiempos de tu negocio
    </>
  ),
};
export const TextSolucionDigtal21: dataTextComponent = {
  title:
    "Cómo un desarrollo de software personalizado acelera tu estrategia de negocio  ",
  description: (
    <>
      Nuestro desarrollo de software combina lo mejor de la ingeniería y la
      visión empresarial para crear soluciones seguras, escalables y alineadas
      con los objetivos de tu organización.{" "}
      <span className="font-semibold text-text-body">Lo que ofrecemos</span>
    </>
  ),
};

export const TextSolucionDigtal3: dataTextComponent = {
  title: "Resultados medibles de un software hecho a tu medida ",
  description: (
    <>
      Invertir en software personalizado significa convertir la tecnología en
      una ventaja competitiva que impacta directamente en la{" "}
      <span className="font-semibold text-text-body">
        rentabilidad y la sostenibilidad del negocio.
      </span>
    </>
  ),
};

export const TextSolucionDigtal4: dataTextComponent = {
  title:
    "Más que una empresa de desarrollo de software, un aliado para tu futuro digital",
  description:
    "No buscamos ser solo un proveedor, sino tu socio estratégico para construir futuro con tecnología confiable, escalable y de impacto.",
};

export const TextSolucionDigtal5: dataTextComponent = {
  title: "Cómo transformamos tu idea en resultados de negocio",
  description:
    "Nuestro proceso combina metodología ágil, visión estratégica y foco en resultados para acompañarte desde la idea hasta la evolución continua de la solución: ",
};

export const TextSolucionDigtal6: dataTextComponent = {
  title: "El stack tecnológico detrás de nuestros proyectos de software",
  description: (
    <>
      Para garantizar escalabilidad, seguridad y eficiencia, trabajamos con
      un stack tecnológico robusto y probado en{" "}
      <span className="text-text-body font-semibold">
        proyectos de alto impacto
      </span>
    </>
  ),
};

// =========================================================================
// VISTA: GESTIÓN HUMANA
// =========================================================================
export const textoGestionHumana: dataTextComponent = {
  title: "Contrata soluciones a la medida, del tipo de tu organización",
  description: (
    <>
      Nuestro software de nómina es ampliamente parametrizable, dinámico y
      flexible. Es una herramienta con{" "}
      <span className="text-text-body font-semibold">tecnología 100% web</span> que ofrece un proceso de nómina fácil, rápido y seguro
    </>
  ),
};

export const textoGestionHumana2: dataTextComponent = {
  title: "Outsourcing de Procesos - BPO",
  description: (
    <>
      <span className="text-text-body font-semibold">
        Procesos formales de operación y personal capacitado
      </span>{" "}
      para apoyar tus métodos de atención a colaboradores, liquidación de pagos
      y la entrega confiable de información a terceros.
    </>
  ),
};

export const textoGestionHumana3: dataTextComponent = {
  title: "Somos equipo",
  description: (
    <>
      El trabajo en equipo es una de nuestras principales estrategias. Estamos
      convencidos que el poder colectivo es la herrmienta esencial para{" "}
      <span className="text-text-body font-semibold">
        generar soluciones innovadoras.
      </span>{" "}
      Como grupo empresarial unimos a nuestra fuerza a grandes empresas que hoy
      son{" "}
      <span className="text-text-body font-semibold">
        nuestros aliados tecnologicos, creativos y financieros.
      </span>
    </>
  ),
};

export const textoGestionHumana4: dataTextComponent = {
  title: "Somos Gestión",
  description: (
    <>
      Creemos en la tecnologia como herramienta de transformacion de los
      entornos laborales.{" "}
      <span className="text-text-body font-semibold">
        Generamos espacios y oportunidades
      </span>{" "}
      que brinden mejores condiciones a los colaboradores
    </>
  ),
};

// =========================================================================
// VISTA: PENSIONES
// =========================================================================
export const textoPensiones1: dataTextComponent = {
  title:
    "Retos del sistema de pensiones en Latinoamérica y cómo puedes gestionarlo con nuestro software ",
  description: (
    <>
      El sistema de pensiones en America Latina enfrenta transformaciones que
      requieren{" "}
      <span className="text-text-body font-semibold">vision y tecnologia:</span>
    </>
  ),
};

export const textoPensiones2 = {
  title: "Una plataforma previsional única, modular y escalable ",
  description: (
    <>
      Nuestro <span className="text-text-body font-semibold">software </span>
      previsional centraliza la administración del sistema de pensiones en un
      único core tecnológico, desde el cual es posible gestionar de forma
      integrada pensiones obligatorias, pensiones voluntarias, cesantías y
      rentas vitalicias.
      <br />
      <span className="text-text-body font-bold">
        Su diseño modular y parametrizable permite adaptarse a la regulación de
        cada país en LATAM,
      </span>{" "}
      manejar altos volúmenes operativos y garantizar trazabilidad, control y
      consistencia de la información a lo largo de todo el ciclo previsional
    </>
  ),
};
// =========================================================================
// 4. DATA TARJETAS DE SOFTWARE (SliderSolDigital)
// =========================================================================
export const softwareCards: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>devices</span>,
    title: "Desarrollo de aplicaciones moviles y web",
    description: "soluciones intuitivas para todo tipo de dispositivos",
    btn: "Ver soluciones",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>data_object</span>,
    title: "Desarollo de software",
    description: "productos a la medida de cada necesidad empresarial",
    btn: "Solicitar desarrollo",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>cloud_queue</span>,
    title: "Desarrollo software cloud",
    description: "aplicaciones seguras, flexibles y con alto rendimiento en la nube.",
    btn: "Ver mas",
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "48px" }}>developer_mode</span>,
    title: "Modernizacion de aplicaciones de software",
    description: "actualización tecnológica que prolonga la vida útil y aumenta la eficiencia.",
    btn: "Actualizar ahora",
  },
];