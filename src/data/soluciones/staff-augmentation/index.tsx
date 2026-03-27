import React from "react";
import { dataCard } from "@/src/types/cardTypes";
import { ResultsCorporativoData } from "../../../types/typePensiones";
import { dataTextComponent } from "../share/textosGenerales";

export const dataStaffHero = {
  title: "Staff Augmentation TI",
  description: (
    <div className="flex flex-col gap-6">
      <h3 className="text-2xl md:text-3xl text-text-body font-light">
        Personal especializado para potenciar tus proyectos
      </h3>
      <p className="text-text-body font-light">
        Fortalece tus operaciones con nuestro servicio de staff augmentation diseñado con base en experiencia, análisis y comprensión de tu negocio. En Heinsohn, contamos con equipos técnicos a la medida de tus objetivos, integrando expertos en desarrollo de software, QA, datos, arquitectura e inteligencia artificial.
      </p>
      <strong className="font-semibold text-text-title block mt-2">
        Optimiza costos, escala capacidades y acelera tus entregas con un modelo flexible, transparente y alineado a tus zonas horarias.
      </strong>

      <ul className="flex flex-col gap-3 mt-4">
        <li className="flex items-center gap-2">
          <strong className="font-bold text-brand-accent text-xl">+</strong> <strong>45</strong>
          <span className="text-text-body font-light">
            años de experiencia en soluciones tecnológicas empresariales.
          </span>
        </li>
        <li className="flex items-center gap-2">
          <strong className="font-bold text-text-title">Equipos</strong>
          <span className="text-text-body font-light">
            multidisciplinarios listos para integrarse a tus operaciones.
          </span>
        </li>
      </ul>
    </div>
  ),
  buttonText: "Arma tu equipo ideal ahora →",
  breadcrumb: [
    { label: "Staff Augmentation", href: "/staff-augmentation" },
    { label: "Soluciones Staff Augmentation" },
  ],
};

// 2. SÍNTOMAS
export const titleStaffArgumentation1: dataTextComponent = {
  title: "Cuando tu equipo necesita crecer, el Staff Augmentation TI es la respuesta",
  description: (
    <>
      Las empresas necesitan escalar con agilidad y precisión, pero el reclutamiento tradicional suele ser lento y costoso. Nuestro modelo de Staff Augmentation TI te permite reforzar tu equipo sin recurrir a esquemas de outsourcing tradicional.
      <strong className="font-semibold text-text-title block mt-4">Síntomas de una gestión sin staffing de TI eficiente:</strong>
    </>
  ),
};

export const infoStaffArgumentation: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "40px" }}>ar_on_you</span>,
    title: "Procesos lentos por falta de recursos técnicos especializados.",
    alineacion: "center",
  },
  {
    icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "40px" }}>checked_bag</span>,
    title: "Dificultad para cubrir roles críticos o temporales.",
    alineacion: "center",
  },
  {
    icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "40px" }}>card_travel</span>,
    title: "Costos elevados en contratación y retención de talento.",
    alineacion: "center",
  },
  {
    icon: <span className="material-symbols-rounded text-text-body font-light" style={{ fontSize: "40px" }}>money_bag</span>,
    title: "Pérdida de foco estratégico por tareas administrativas.",
    alineacion: "center",
  },
];

// 3. EL MODELO Y MÉTRICAS
export const titleStaffArgumentation2: dataTextComponent = {
  title: "El modelo de staffing que combina talento, agilidad y resultados medibles", 
  description: (
    <>
      Nuestro servicio especializado de TI está diseñado para que accedas a los perfiles que necesitas con eficiencia y respaldo metodológico. <strong className="font-semibold text-text-title">Nos encargamos de todo el ciclo:</strong> desde la identificación y validación del talento hasta su integración y acompañamiento continuo en tus operaciones.
    </>
  ),
};

export const infoStaffArgumentation2: ResultsCorporativoData = {
  highlight: {
    icon: (
      <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "50px" }}>editor_choice</span>
    ),
    value: "Staff Augmentation TI",
    description: "incorporas talento especializado que trabaja bajo tu dirección y procesos, con soporte de selección, contratación y gestión administrativa por parte de Heinsohn.",
  },
  metrics: [
    {
      id: "compliance",
      icon: (
        <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>gavel</span>
      ),
      description: (
        <>
          Nearshore <br />
          (LATAM, mismas zonas horarias).
        </>
      ),
    },
    {
      id: "cost",
      icon: (
        <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>error_outline</span>
      ),
      description: "Remoto 100% o híbrido según la ubicación requerida.",
    },
  ],
};

// 4. ESPECIALISTAS TI 
export const titleStaffArgumentation3: dataTextComponent = {
  title: "Especialistas TI para cada etapa de tu transformación tecnológica",
  description: "Nuestros equipos cubren todas las necesidades del ciclo de desarrollo tecnológico:",
};

export const infoStaffArgumentation3: dataCard[] = [
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>devices_other</span>,
    title: "Desarrollo y modernización",
    items: [
      { titulo: "Frontend", textos: "React, Angular, Vue.js, Next.js." },
      { titulo: "Backend", textos: "Java (Spring Boot), Node.js, Python (FastAPI/Django), Go, .NET Core." },
      { titulo: "Full Stack", textos: "MERN, MEAN, Java + React/Angular." },
      { titulo: "Mobile", textos: "Swift, Kotlin, React Native, Flutter." },
    ],
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>diamond_shine</span>,
    title: "Calidad y eficiencia (QA & SDET)",
    items: [
      { titulo: "Automation", textos: "Playwright, Cypress, Selenium, Appium." },
      { titulo: "SDET (Software Development Engineer in Test)", textos: "Creación de frameworks de pruebas robustos y escalables." },
      { titulo: "Testing", textos: "Funcional, regresión, performance (JMeter) y pruebas de seguridad iniciales." },
    ],
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>cloud_sync</span>,
    title: "Infraestructura, Cloud y Seguridad",
    items: [
      { titulo: "Cloud & Platform", textos: "AWS, Azure, Google Cloud (GCP)." },
      { titulo: "DevOps & SRE", textos: "Kubernetes (K8s), Terraform, Docker, CI/CD Pipelines (GitHub Actions, Jenkins)." },
      { titulo: "Cybersecurity", textos: "DevSecOps, IAM, cumplimiento (SOC2/HIPAA compliance support), Pentesting." },
    ],
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>palette</span>,
    title: "Análisis, diseño y estrategia",
    items: [
      { titulo: "Product & UX/UI", textos: "Product Designers, UX Researchers, Service Design (Figma, Adobe XD)." },
      { titulo: "Agile Management", textos: "Project Managers, Scrum Masters, Delivery Managers." },
      { titulo: "Business Analysis", textos: "Analistas funcionales y de negocio con enfoque en requerimientos técnicos." },
    ],
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>auto_awesome</span>,
    title: "Ingeniería de datos e IA",
    items: [
      { titulo: "Data Engineering", textos: "Snowflake, Databricks, dbt, Apache Airflow, Spark." },
      { titulo: "AI & GenAI", textos: "LLM Engineering (LangChain, OpenAI API), Vector Databases (Pinecone), RAG Architecture." },
      { titulo: "Machine Learning", textos: "MLOps, PyTorch, TensorFlow, Scikit-learn." },
      { titulo: "Analytics", textos: "Business Intelligence (Power BI, Tableau), Analytics Engineering." },
    ],
  },
  {
    icon: <span className="material-symbols-rounded text-text-title font-light" style={{ fontSize: "40px" }}>architecture</span>,
    title: "Liderazgo y arquitectura",
    items: [
      { titulo: "Arquitectura", textos: "Software, Cloud, Datos y Soluciones Enterprise." },
      { titulo: "Executive Search", textos: "Tech Leads, VP of Engineering, CTOs fraccionados o permanentes." },
    ],
  },
];

// 5. POR QUÉ EL STAFF AUGMENTATION 
export const titleStaffArgumentation4: dataTextComponent = {
  title: "Por qué el Staff Augmentation TI impulsa tu negocio desde el primer día", 
  description: "Implementar un modelo de staffing te permite concentrarte hacer crecer tu negocio mientras nosotros gestionamos el talento.",
};

export const infoStaffArgumentation4 = [
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>portrait</span>,
    title: "Optimización de costos",
    description: "Reduce gastos administrativos y operativos.",
  },
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>add_reaction</span>,
    title: "Contratación ágil",
    description: "Perfiles disponibles en 2 a 3 semanas.",
  },
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>digital_wellbeing</span>,
    title: "Talento de primer nivel",
    description: "Especialistas validados técnica y culturalmente.",
  },
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>portrait</span>,
    title: "Cercanía y colaboración",
    description: "Talento en tu misma zona horaria.",
  },
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>portrait</span>,
    title: "Escalabilidad total:",
    description: "Amplía o reduce tu equipo según las demandas del proyecto.",
  },
  {
    icon: <span className="material-symbols-rounded text-brand-accent font-light" style={{ fontSize: "40px" }}>portrait</span>,
    title: "Transparencia",
    description: "Seguimiento, métricas y reportes de productividad.",
  },
];

// 6. TU ALIADO ESTRATÉGICO 
export const titleStaffArgumentation5: dataTextComponent = {
  title: "Tu aliado estratégico en Staff Augmentation", 
  description: (
    <>
      Más de cuatro décadas de experiencia nos respaldan como uno de los aliados tecnológicos más sólidos en Latinoamérica. No solo te ofrecemos talento, sino un modelo de colaboración pensado para la continuidad, eficiencia y calidad.
      <strong className="font-semibold text-text-title block mt-6 mb-2">Nuestro diferencial</strong>
    </>
  ),
};

// 7. TIMELINE / PROCESO 
export const infoStaffArgumentation6 = [
  { indicador: "01.", title: "Evaluación de necesidades", description: "Entendemos tu contexto y los perfiles requeridos." },
  { indicador: "02.", title: "Selección y validación", description: "Preseleccionamos y evaluamos técnicamente a los candidatos." },
  { indicador: "03.", title: "Formalización", description: "Acuerdos transparentes y soporte completo en contratación." },
  { indicador: "04.", title: "Ejecución", description: "El equipo se integra a tus operaciones con seguimiento constante." },
];

// 8. PREGUNTAS FRECUENTES
export const dataPreguntasFrecuentesStaff = [
  { question: "¿Se trata de un solo software o de varias soluciones diferentes?", answer: { descriptions: "Nuestra plataforma es integral y modular." } },
  { question: "¿Qué entidades pueden utilizar este software previsional?", answer: { descriptions: "Administradoras de Fondos de Pensiones, etc." } },
  { question: "¿El software se adapta a la regulación de cada país en LATAM?", answer: { descriptions: "Sí, es altamente parametrizable." } },
  { question: "¿Puedo implementar solo algunos módulos y escalar después?", answer: { descriptions: "Totalmente, gracias a su diseño modular." } },
  { question: "¿El software cubre la nómina de pensionados y los pagos masivos?", answer: { descriptions: "Sí, cuenta con procesos masivos integrados." } },
  { question: "¿También sirve para administrar ahorro previsional voluntario o APV?", answer: { descriptions: "Sí, gestionamos esquemas de ahorro voluntario." } },
  { question: "¿Se puede usar para administrar cesantías desde el mismo sistema?", answer: { descriptions: "Sí, administramos la gestión integral de cesantías." } },
  { question: "¿El software es multipaís y multimoneda?", answer: { descriptions: "Sí, el sistema está diseñado para múltiples jurisdicciones." } },
  { question: "¿Qué tipo de acompañamiento ofrece Heinsohn?", answer: { descriptions: "Ofrecemos acompañamiento continuo en implementación y operación." } },
  { question: "¿Cómo iniciar la implementación del software previsional?", answer: { descriptions: "Contáctanos para una evaluación de necesidades." } },
];