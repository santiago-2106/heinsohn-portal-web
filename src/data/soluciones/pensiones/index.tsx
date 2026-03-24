import React from "react";

// 1. DATA DEL HERO
export const infoSolucionesPension = {
  title: "Soluciones para pensiones",
  description: (
    <>
      Nuestro software{" "}
      <span className="font-semibold text-text-title">
        está diseñado para fondos de pensiones, aseguradoras y entidades
        financieras que buscan transformar su gestión.
      </span>{" "}
      Con nuestras plataformas puedes administrar cesantías, pensiones
      obligatorias y voluntarias, y liquidar rentas vitalicias con total
      trazabilidad, eficiencia y cumplimiento normativo.
    </>
  ),
  buttonText: "Habla con un experto en pensiones",
  breadcrumb: [
    { label: "Pensiones", href: "/pensiones" },
    { label: "Soluciones para pensiones" },
  ],
};

// 2. DATA MÉTRICAS 1
export const infoPensiones1 = {
  highlight: {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "70px" }}
      >
        rocket_launch
      </span>
    ),
    value: "30",
    suffix: "+",
    description: "años de experiencia",
  },
  metrics: [
    {
      id: "compliance",
      value: "12",
      suffix: "+",
      description: "millones de afiliados administrados en Colombia y Latam",
    },
    {
      id: "cost",
      value: (
        <>
          <span className="text-text-body text-sm md:text-xl">Gestionamos</span>
          <br />
          <span className="text-brand-accent">+</span> 90.000{" "}
          <span className="text-sm font-bold">USD</span>
        </>
      ),
      description: "millones en pensiones",
    },
  ],
};

// 3. DATA DESAFÍOS DEL SECTOR
export const textoDesafios = {
  title: (
    <>
      Retos del sistema de pensiones en <br />
      Latinoamérica y cómo puedes <br />
      gestionarlo con nuestro software 
    </>
  ),
  description: (
    <>
      El sistema de pensiones en América Latina enfrenta transformaciones que
      requieren <strong>visión y tecnología:</strong>
    </>
  ),
};

export const infoPensiones2 = [
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        face_retouching_natural
      </span>
    ),
    title: "Envejecimiento poblacional",
    description: "Mas jubilados demandan procesos ágiles y sostenibles.",
    alineacion: "center" as const,
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        business_center
      </span>
    ),
    title: "Sostenibilidad financiera",
    description:
      "Los déficits en sistemas de reparto impulsan la diversificación en fondos de capitalización.",
    alineacion: "center" as const,
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        work
      </span>
    ),
    title: "Digitalización de trámites",
    description:
      "Los afiliados esperan autogestión, trazabilidad y una experiencia 100% digital.",
    alineacion: "center" as const,
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        savings
      </span>
    ),
    title: "Presión regulatoria",
    description:
      "Normativas cambiantes exigen reportes confiables y actualizados.",
    alineacion: "center" as const,
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        assignment_ind
      </span>
    ),
    title: "Nómina de pensionados",
    description:
      "El pago masivo necesita liquidación transparente y sin errores.",
    alineacion: "center" as const,
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        edit_location_alt
      </span>
    ),
    title: "Nuevos actores",
    description:
      "Aseguradoras y multifondos intensifican la competencia y elevan los estándares de servicio.",
    alineacion: "center" as const,
  },
];

// 4. DATA MÓDULOS DE SOLUCIONES
export const textoModulos = {
  title: (<>Una plataforma previsional única, <br className="hidden md:block" />
      modular y escalable</>
  ),
  description: (
    <div className="text-left w-full">
      Nuestro <strong className="font-semibold text-text-title">software previsional</strong> centraliza la administración del sistema de pensiones en un único core tecnológico, desde el cual es posible gestionar de forma integrada pensiones obligatorias, pensiones voluntarias, cesantías y rentas vitalicias.
      <br />
      <br />
      <strong className="font-semibold text-text-title">Su diseño modular y parametrizable permite adaptarse a la regulación de cada país en LATAM,</strong> manejar altos volúmenes operativos y garantizar trazabilidad, control y consistencia de la información a lo largo de todo el ciclo previsional.
    </div>
  ),
};

export const infoPensiones3 = [
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        savings
      </span>
    ),
    title: "Módulo de Pensiones obligatorias",
    description: (
      <>
        Gestiona el ciclo completo del afiliado, desde el diseño, vinculación
        hasta el reconocimiento y pago de la pensión,{" "}
        <span className="font-bold">
          Bajo distintos regimenes y marcos normativos.
        </span>
      </>
    ),
    items: [
      {
        textos:
          "Administración de afiliaciones, historia laboral y cotizaciones",
      },
      {
        textos:
          "Liquidación de pensiones en esquemas de capitalización, reparto o mixtos.",
      },
      {
        textos: "Gestión de novedades, traslados, retiros y cambios de estado.",
      },
      {
        textos:
          "Nómina de pensionados integrada, con procesos masivos y control total.",
      },
      {
        textos:
          "Parametrización normativa por país y actualización continua ante cambios regulatorios.",
      },
      {
        textos:
          "Integración con sistemas regulatorios, contables y de recaudo.",
      },
      { textos: "Generación de reportes ejecutivos y detallados" },
      {
        textos:
          "Diseñado pensando en la experiencia del usuario para una mayor facilidad de uso.",
      },
      {
        textos:
          "Visión 360° del afiliado y empleadores, brindando acceso unificado a cuentas bancarias, relaciones y estado de las obligaciones.",
      },
    ],
    textoFooter: (
      <>
        Administramos el <span className="text-brand-accent">48%</span> de las
        pensiones obligatorias en Colombia, que representan{" "}
        <span className="font-bold">USD 63 billones</span>
      </>
    ),
    btn: "Explora el módulo de pensiones obligatorias",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        account_circle
      </span>
    ),
    title: "Módulo de Rentas vitalicias y nómina de pensionados",
    description: (
      <>
        Administra la liquidación y pago periódico de rentas vitalicias y la
        nómina de pensionados desde una{" "}
        <span className="font-bold">
          plataforma 100 % web y altamente automatizada.
        </span>
      </>
    ),
    items: [
      { textos: "Liquidación automática de rentas vitalicias." },
      { textos: "Gestión de sobrevivencias, sustituciones y temporalidades." },
      { textos: "Procesos masivos de cálculo y dispersión de pagos." },
      { textos: "Notificaciones al pensionado sobre pagos y ajustes." },
      { textos: "Gestor documental integrado para auditoría y trazabilidad." },
      {
        textos:
          "Expediente electrónico, notificaciones, integración con gestor documental, componente de cargue y generación de archivos.",
      },
      {
        textos:
          "Se adapta a fondos de pensiones, aseguradoras y empresas de riesgos laborales, permitiéndote gestionar tanto nóminas de pensionados como rentas vitalicias en un solo lugar.",
      },
    ],
    btnHasBorder: true,
    btn: "Conoce el módulo de rentas vitalicias",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        savings
      </span>
    ),
    title: "Modulo de Pensiones Voluntarias",
    description: (
      <>
        Gestiona esquemas de ahorro previsional voluntario desde una lógica
        multifondos, flexible y orientada a la autogestión del afiliado, con un
        conjunto completo de procesos que{" "}
        <span className="font-semibold text-text-title">
          Cubren la gestion finaciera, operativa y de riesgos
        </span>
      </>
    ),
    items: [
      { textos: "Administración de aportes periódicos y extraordinarios." },
      { textos: "Movilidad entre fondos según perfil de riesgo del afiliado." },
      { textos: "Gestión integral de afiliados, personas y cuentas." },
      {
        textos:
          "Gestión financiera, valoración y control de riesgos asociados a los fondos.",
      },
      {
        textos:
          "Gestión de beneficios tributarios conforme a la normativa local.",
      },
      { textos: "Portales de autogestión para afiliados y empleadores." },
      { textos: "Reportes regulatorios, contables y de aportes colectivos." },
      {
        textos:
          "Cierre operativo y financiero de los fondos con trazabilidad total.",
      },
    ],
    textoFooter: (
      <>
        Administramos el <span className="text-brand-accent">43%</span> del
        ahorro voluntario en Colombia, que representan{" "}
        <span className="font-bold">USD 5 billones</span>
      </>
    ),
    btn: "Descubre el módulo de pensiones voluntarias",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        account_circle
      </span>
    ),
    title: "Modulo de cesantias",
    description: (
      <>
        <span className="font-semibold text-text-title">
          Administra la gestion integral de cesantias
        </span>{" "}
        con altos volúmenes operativos y estrictos controles normativos, desde
        un mismo core previsional abarcando desde la gestión de afiliados hasta
        el cálculo de fondos y los retiros permitidos por ley.
      </>
    ),
    items: [
      {
        textos:
          "Gestión de retiros parciales y totales según causales legales.",
      },
      { textos: "Procesos masivos de liquidación, traslados y pagos." },
      { textos: "Administración multifondos con beneficios adicionales." },
      { textos: "Integración con nómina, sistemas de recaudo y contabilidad." },
      {
        textos:
          "Reducción de costos operativos y mejora en la trazabilidad de aportes.",
      },
    ],
    btnHasBorder: true,
    btn: "Explora el módulo de censatías",
  },
];

// 5. DATA POR QUÉ ELEGIRNOS (Íconos oscuros o de acento según pediste)
export const textoDiferenciadores = {
  title: <> Lo que nos hace diferentes en la <br/>gestión pensional</>,
};

export const informacionPensiones5 = [
  {
    icon: (
      <span
        className="material-symbols-rounded text-brand-accent font-light"
        style={{ fontSize: "35px" }}
      >
        account_box
      </span>
    ),
    title: "Escala regional",
    description:
      "Presencia en El Salvador, Bolivia, Perú, Colombia, Honduras y otros países.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-brand-accent font-light"
        style={{ fontSize: "35px" }}
      >
        add_reaction
      </span>
    ),
    title: "Cumplimiento regulatorio",
    description: "Actualizaciones continuas ante cambios normativos.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-brand-accent font-light"
        style={{ fontSize: "35px" }}
      >
        digital_wellbeing
      </span>
    ),
    title: "Escala regional comprobada y en expansión",
    description:
      "Plataforma que escala regionalmente en proceso de expansión hacia nuevos mercados como Chile, México, República Dominicana, entre otros.",
  },
  {
    icon: (
      <span
        className="material-symbols-rounded text-brand-accent font-light"
        style={{ fontSize: "35px" }}
      >
        perm_contact_calendar
      </span>
    ),
    title: "Soporte Especializado",
    description:
      "Acompañamiento en implementación y operación diaria, respaldada por un equipo de más de 200 profesionales.",
  },
];

// 6. DATA RESULTADOS 2
export const textoResultados2 = {
  title: "Lo que nos hace diferentes en la gestión empresarial",
};

export const infoPensiones6 = {
  highlight: {
    icon: (
      <span
        className="material-symbols-rounded text-text-title font-light"
        style={{ fontSize: "40px" }}
      >
        rocket_launch
      </span>
    ),
    value: "40%",
    description:
      "del mercado colombiano en pensiones obligatorias soportado con nuestras soluciones.",
  },
  metrics: [
    {
      id: "compliance",
      value: "30",
      suffix: "+",
      description: "30 años de innovacion en el sector previsional",
    },
    {
      id: "cost",
      icon: (
        <span
          className="material-symbols-rounded text-text-title font-light"
          style={{ fontSize: "40px" }}
        >
          folder_shared
        </span>
      ),
      description:
        "Altos volúmenes con millones de transacciones mensuales en liquidación de nómina de pensionados.",
    },
  ],
};

// 7. DATA PREGUNTAS FRECUENTES (Estructura correcta)
export const dataPreguntasFrecuentesPensiones = [
  {
    question: "¿Se trata de un solo software o de varias soluciones diferentes?",
    answer: {
      descriptions: (
        <>
          Nuestra plataforma es <strong className="font-semibold text-text-title">integral y modular.</strong> Esto significa que, aunque funciona sobre un único core tecnológico, puedes implementar solo los módulos que tu entidad necesite (ej. solo Cesantías o solo Pensiones Obligatorias) y escalarlos en el futuro.
        </>
      ),
    },
  },
  {
    question: "¿Qué entidades pueden utilizar este software previsional?",
    answer: {
      descriptions: "Nuestra solución está diseñada para:",
      listsItems: [
        "Administradoras de Fondos de Pensiones (AFP) públicas y privadas.",
        "Compañías de Seguros de Vida (Rentas Vitalicias).",
        "Entidades gubernamentales de previsión social.",
        "Fondos de Cesantías.",
        "Empresas con regímenes pensionales propios o especiales.",
      ],
    },
  },
  {
    question: "¿El software se adapta a la normativa de mi país?",
    answer: {
      descriptions: (
        <>
          Sí. El sistema es <strong className="font-semibold text-text-title">altamente parametrizable.</strong> Contamos con experiencia en múltiples países de LATAM, lo que nos permite configurar reglas de negocio, fórmulas de liquidación y reportes regulatorios específicos para cada jurisdicción.
        </>
      ),
    },
  },
  {
    question: "¿Cómo garantizan la seguridad de la información de los afiliados?",
    answer: {
      descriptions: (
        <>
          Contamos con certificaciones internacionales y protocolos de <strong className="font-semibold text-text-title">ciberseguridad de última generación,</strong> incluyendo encriptación de datos, auditoría de procesos (trazabilidad total) y cumplimiento con las leyes de protección de datos personales en la región.
        </>
      ),
    },
  },
];