import React from "react";

export const dataPensionesVoluntarias = {
  hero: {
    title: (
      <>
        Software para Gestión de <br className="hidden md:block" /> Pensiones Voluntarias
      </>
    ),
    buttonText: "Conoce más",
    breadcrumb: [
      { label: "Soluciones", href: "/soluciones" },
      { label: "Soluciones para pensiones" },
    ],
    description: (
      <div className="flex flex-col gap-6 max-w-[800px]">
        <p className="text-base md:text-lg">
          Nuestro software de gestión de pensiones voluntarias es una <strong className="font-semibold text-text-title">solución integral</strong> diseñada para 
          operadoras de fondos de pensiones voluntarias y/o ahorro voluntario en <strong className="font-semibold text-text-title">Latinoamérica.</strong>
        </p>
        <p className="text-base md:text-lg">
          Con un enfoque centrado en la experiencia del cliente y la sostenibilidad, ofrecemos una 
          plataforma robusta que facilita la <strong className="font-semibold text-text-title">administración eficiente de los fondos</strong> y proporciona 
          transparencia y trazabilidad en todas las operaciones.
        </p>
      </div>
    ),
  },

  ventajas: {
    title: "Ventajas de nuestro Software para Fondos de Pensiones",
    description: "Cambios normativos con la rápida implementación de actualizaciones en nuestra plataforma, asegurando el cumplimiento con las normativas en constante evolución.",
    cards: [
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "40px" }}>psychology</span>,
        title: "Evoluciona al mismo tiempo del mercado",
        description: "Reduce significativamente los costos operativos y de TI con los procesos optimizados y la automatización masiva de nuestra plataforma.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "40px" }}>tune</span>,
        title: "Parametrización",
        description: "Ajusta las reglas de negocio, comisiones y tipos de fondos fácilmente sin necesidad de desarrollos adicionales.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "40px" }}>sync</span>,
        title: "Soporte multifondos",
        description: "Administra múltiples portafolios y perfiles de riesgo desde una única interfaz unificada y segura.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "40px" }}>cloud</span>,
        title: "Tecnología de vanguardia",
        description: "Arquitectura moderna y segura, alojada en la nube para garantizar disponibilidad y escalabilidad continua.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "40px" }}>public</span>,
        title: "Movilidad y accesibilidad",
        description: "Accede a la información de los fondos desde cualquier dispositivo con nuestra plataforma 100% responsive.",
      }
    ]
  },

  servicios: {
    title: "Servicios de gestión para los Fondos de Pensiones que nos diferencia de la competencia",
    cards: [
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "32px" }}>hub</span>,
        title: "Cobertura integral",
        description: "Nuestra plataforma abarca todos los aspectos de la gestión de fondos de pensiones, garantizando una solución integral.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "32px" }}>person</span>,
        title: "Diseño centrado en el usuario",
        description: "Diseñado con la comodidad y la eficiencia del usuario en mente, nuestro software ofrece navegación intuitiva y soporte integral.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "32px" }}>lightbulb</span>,
        title: "Innovación continua",
        description: "Actualizamos continuamente nuestra plataforma para incorporar las últimas tecnologías y abordar las necesidades emergentes del mercado.",
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "32px" }}>support_agent</span>,
        title: "Soporte dedicado",
        description: "Benefíciate de un soporte al cliente permanente y capacitado para maximizar el valor de nuestra solución.",
      }
    ]
  },

  lideres: {
    title: "Por qué elegirnos como aliado para la gestión de los Fondos de Pensiones y Cesantías",
    mainCard: {
      icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "32px" }}>rocket_launch</span>,
      title: "Líderes en el sector",
      description: (
        <>
          Somos la <strong className="font-semibold text-text-title">empresa número 1</strong> en Colombia, Sur y Centro América como proveedor de soluciones tecnológicas de clase mundial.
        </>
      ),
    },
    gridCards: [
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px" }}>verified</span>,
        title: "Experiencia comprobada",
        description: (
          <>
            En Colombia somos el único proveedor del sector de pensiones voluntarias con un sistema efectivo y seguro que administra el <strong className="font-semibold text-text-title">58% de los afiliados.</strong>
          </>
        ),
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px" }}>leaderboard</span>,
        title: "Alto impacto",
        description: (
          <>
            Nuestro software de pensiones cubre actualmente el <strong className="font-semibold text-text-title">50%</strong> de las administradoras de fondos de pensiones en El Salvador, el <strong className="font-semibold text-text-title">100%</strong> del mercado en Bolivia y más del <strong className="font-semibold text-text-title">50%</strong> del mercado colombiano.
          </>
        ),
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px" }}>groups</span>,
        title: "Amplia adopción",
        description: (
          <>
            El <strong className="font-semibold text-text-title">40%</strong> de los afiliados a pensiones obligatorias en Colombia está siendo administrado con nuestro software de pensiones.
          </>
        ),
      },
      {
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px" }}>public</span>,
        title: "Cobertura regional",
        description: (
          <>
            Hemos implementado proyectos en <strong className="font-semibold text-text-title">El Salvador, Bolivia, Argentina, Perú, Uruguay y México.</strong>
          </>
        ),
      }
    ]
  },

  funcionalidades: {
    title: "Funcionalidades del software para la gestión integral de fondos de pensiones",
    tabs: [
      {
        id: "voluntarias",
        label: "Pensiones Voluntarias",
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px", fontVariationSettings: "'FILL' 0, 'wght' 300" }}>manage_accounts</span>,
        items: [
          {
            title: "Ahorro voluntario e inversión personalizada",
            description: "Permite habilitar menús por perfil de usuario y parametrizar líneas de crédito, tasas y tipos de cuotas."
          },
          {
            title: "Tecnología escalable",
            description: "Plataforma tecnológica adaptable al crecimiento del negocio, garantizando su capacidad para gestionar mayores volúmenes de datos y transacciones."
          },
          {
            title: "Información oportuna y confiable",
            description: "Proporciona datos actualizados de manera precisa y confiable para respaldar la toma de decisiones informadas."
          },
          {
            title: "Disminución de costos operativos y técnicos",
            description: "Optimiza los procesos para reducir los costos asociados con la operación y mantenimiento del sistema."
          },
          {
            title: "Automatización de procesos masivos",
            description: "Agiliza y simplifica tareas repetitivas y voluminosas a través de la automatización, mejorando la eficiencia y la precisión en la gestión."
          }
        ],
        btnText: "Conoce más sobre pensiones voluntarias",
        btnLink: "#"
      },
      {
        id: "obligatorias",
        label: "Pensiones Obligatorias",
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px", fontVariationSettings: "'FILL' 0, 'wght' 300" }}>account_balance</span>,
        items: [
          {
            title: "Control estricto de aportes",
            description: "Validación y cruce automático de los aportes obligatorios asegurando la transparencia total del fondo."
          },
          {
            title: "Reportes regulatorios integrados",
            description: "Generación automática de los formatos exigidos por las entidades de control gubernamental."
          }
        ],
        btnText: "Conoce más sobre pensiones obligatorias",
        btnLink: "#"
      },
      {
        id: "cesantias",
        label: "Cesantías",
        icon: <span className="material-symbols-rounded text-inherit" style={{ fontSize: "24px", fontVariationSettings: "'FILL' 0, 'wght' 300" }}>workspace_premium</span>,
        items: [
          {
            title: "Gestión ágil de retiros",
            description: "Flujos de aprobación digital para retiros parciales y totales de cesantías, reduciendo los tiempos de atención."
          },
          {
            title: "Cálculo de rendimientos",
            description: "Módulo especializado en la liquidación diaria de intereses y rendimientos financieros de los portafolios."
          }
        ],
        btnText: "Conoce más sobre cesantías",
        btnLink: "#"
      }
    ]
  },

  cta: {
    title: "Optimiza la transformación digital de los fondos de pensiones ahora",
    description: (
      <div className="flex flex-col items-center justify-center">
        <p className="mb-10 text-[15px] md:text-[17px] text-text-body font-light leading-relaxed text-center">
          Optimiza la transformación digital de los fondos de pensiones ahora<br/>
          <strong className="font-semibold text-text-title">¿Listo para llevar la gestión de pensiones al siguiente nivel?</strong> Descubre cómo nuestra solución integral puede simplificar tus procesos, garantizar el cumplimiento normativo y mejorar la experiencia del cliente.<br/><br/>
          ¡Contáctanos hoy mismo para una <strong className="font-semibold text-text-title">demostración personalizada</strong> y comienza la transformación digital para tu fondo de pensiones!
        </p>
        <a 
          href="#contacto" 
          className="bg-text-title text-bg-main px-8 py-3.5 rounded-full font-medium hover:opacity-80 transition-opacity"
        >
          Conoce más
        </a>
      </div>
    )
  },

  // ¡AQUÍ ESTÁ CORREGIDO! Cambiamos title->question y description->answer
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Qué diferencia hay entre pensiones obligatorias y voluntarias en LATAM?",
        answer: "Las pensiones obligatorias son exigidas por ley y se deducen del salario del trabajador, mientras que las voluntarias son aportes adicionales que el individuo decide hacer para mejorar su retiro."
      },
      {
        question: "¿Cómo digitalizar el sistema de pensiones en mi entidad financiera?",
        answer: "A través de nuestra plataforma integral, puedes migrar tus bases de datos, automatizar la gestión de aportes y ofrecer una interfaz moderna a tus afiliados en tiempo récord."
      },
      {
        question: "¿Este software sirve para administrar el ahorro para el retiro?",
        answer: "Sí, la plataforma cuenta con módulos especializados para la administración, inversión y cálculo de rendimientos de los ahorros para el retiro."
      },
      {
        question: "¿Funciona también para el ahorro previsional voluntario (APV)?",
        answer: "Absolutamente, nuestro software está diseñado para manejar esquemas de APV, ajustándose a los beneficios tributarios y normativas de cada país."
      },
      {
        question: "¿Se puede usar para administrar jubilaciones?",
        answer: "Sí, el sistema gestiona el ciclo completo, desde la etapa de acumulación hasta la etapa de desacumulación y pago de las mesadas pensionales o jubilaciones."
      },
      {
        question: "¿El software es multipaís y multimoneda?",
        answer: "Así es. Nuestra solución está diseñada para operar en diferentes países de LATAM, soportando múltiples monedas y adaptándose a las regulaciones locales de cada región."
      }
    ]
  }
};