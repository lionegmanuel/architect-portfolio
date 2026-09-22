export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  /** Resultado de negocio que se muestra sobre la imagen de la tarjeta. */
  badge: string;
  title: string;
  subtitle: string;
  /** Captura real del sistema en produccion, servida desde /public. */
  image: string;
  imageAlt: string;
  /** Capturas complementarias que se muestran dentro del modal. */
  gallery: string[];
  /** El costo concreto que el negocio estaba pagando antes del sistema. */
  painPoint: string;
  /** Que cambia en la operacion una vez implementado. */
  transformation: string;
  /** Cuatro resultados medibles: dinero, tiempo, volumen y precision. */
  metrics: ProjectMetric[];
  /** Decisiones de arquitectura que sostienen los numeros de arriba. */
  architectureHighlights: string[];
  /** Respaldo tecnico resumido, en una sola linea. */
  techBacking: string;
  techStack: string[];
  githubUrl: string;
  architectureDiagram: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "operius-os",
    badge: "213 Deals Activos · Cero Costo SaaS",
    title: "Operius OS: Plataforma Integral de Ventas y Operaciones",
    subtitle:
      "Sistema operativo comercial que unifica prospección, seguimiento en Kanban y automatización de procesos sin pagar suscripciones mensuales de software.",
    image: "/operius1.webp",
    imageAlt: "Panel Kanban de Operius OS con el pipeline comercial completo",
    gallery: ["/operius2.webp", "/operius3.webp"],
    painPoint:
      "La información dispersa en planillas de cálculo y chats desordenados provocaba que los prospectos se enfriaran por falta de seguimiento a tiempo y que la dirección no tuviera control real de la facturación.",
    transformation:
      "Panel centralizado que marca con alarmas a los clientes prioritarios, automatiza los avisos diarios del equipo comercial y genera reportes ejecutivos semanales de conversión.",
    metrics: [
      { label: "Pipeline gestionado", value: "$299k USD" },
      { label: "Control de prospectos", value: "213 deals sin fuga" },
      { label: "Avisos de seguimiento", value: "En el día (automático)" },
      { label: "Ahorro en licencias", value: "100% propietario" }
    ],
    architectureHighlights: [
      "Arquitectura modular con backend en Python y Node, desacoplado del frontend",
      "Base de datos transaccional en Supabase con sincronización en tiempo real",
      "Agente autónomo local corriendo en Docker para tareas programadas y avisos",
      "Motor de reportes ejecutivos semanales de conversión por etapa del embudo"
    ],
    techBacking:
      "Arquitectura modular con backend en Python/Node, base de datos transaccional en Supabase, agente autónomo local en Docker y sincronización en tiempo real.",
    techStack: ["Python", "Node.js", "Supabase", "Docker", "TypeScript"],
    githubUrl: "https://github.com/lionegmanuel",
    architectureDiagram: `[Canales de Entrada: WhatsApp / Web / Referidos]
                    │
                    ▼
┌────────────────────────────────────────────┐
│ Operius OS - Núcleo Comercial              │
│  ├─ Ingesta y deduplicación de prospectos  │
│  ├─ Pipeline Kanban por etapa de venta     │
│  ├─ Motor de alarmas de prioridad          │
│  └─ Generador de reportes ejecutivos       │
└───────────────────┬────────────────────────┘
                    │ (Supabase Realtime)
          ┌─────────┴──────────┐
          ▼                    ▼
 [Agente Docker local]   [Panel de Dirección]
  Avisos diarios          Facturación y conversión`
  },
  {
    id: "dentflow-crm",
    badge: "$3.1M Recuperados · 1.436 Pacientes",
    title: "DentFlow: Gestión Clínica y Cobranzas por WhatsApp",
    subtitle:
      "Plataforma de control total para centros de salud: asignación inteligente de turnos, triage de urgencias y cobranza automática de cuotas impagas.",
    image: "/dentflow.webp",
    imageAlt: "Panel de gestión clínica de DentFlow CRM con agenda y cobranzas",
    gallery: [],
    painPoint:
      "Pérdida constante de dinero por inasistencias imprevistas a turnos médicos (sillones vacíos), recepciones saturadas de llamadas y falta de cobro de tratamientos financiados.",
    transformation:
      "Sistema que detecta cancelaciones al instante y reasigna el turno a pacientes en lista de espera para garantizar 100% de ocupación, cobrando automáticamente saldos vencidos por WhatsApp.",
    metrics: [
      { label: "Cobranza recuperada", value: "$3.1M en automático" },
      { label: "Volumen operativo", value: "1.436 citas mensuales" },
      { label: "Ahorro en recepción", value: "-40 horas semanales" },
      { label: "Sillones vacíos", value: "0 huecos de agenda" }
    ],
    architectureHighlights: [
      "Reasignación automática de turnos cancelados contra la lista de espera priorizada",
      "Cobranza de saldos vencidos por WhatsApp con seguimiento y corte de reintentos",
      "Parser determinista de la norma odontológica FDI para las 52 piezas dentales",
      "Command Palette (Ctrl+K) para operar la clínica entera sin levantar las manos del teclado"
    ],
    techBacking:
      "React 19 + Vite + Tailwind CSS 4, Command Palette rápida (Ctrl+K), parser determinista de la norma odontológica FDI y máquina de estados con 66 tests automatizados.",
    techStack: ["React 19", "Vite", "Tailwind CSS 4", "TypeScript 5", "Vitest"],
    githubUrl: "https://github.com/lionegmanuel/dentflow-clinical-guardrails",
    architectureDiagram: `[Paciente por WhatsApp]        [Recepción del centro]
          │                              │
          └──────────────┬───────────────┘
                         ▼
┌────────────────────────────────────────────┐
│ DentFlow - Núcleo Clínico                  │
│  ├─ Parser FDI (52 piezas dentales)        │
│  ├─ Triage de urgencias en 4 prioridades   │
│  ├─ Motor de agenda y lista de espera      │
│  └─ Ciclo de cobranza de cuotas vencidas   │
└───────────────┬────────────────────────────┘
                │
     ┌──────────┴───────────┐
     ▼                      ▼
[Turno reasignado]   [Saldo cobrado]
 Sillón siempre        Sin llamadas
 ocupado               de recordatorio`
  },
  {
    id: "agente-comercial-blindado",
    badge: "Atención 24/7/365 · <5s Respuesta",
    title: "Agente Comercial Inteligente con Reglas Estrictas de Negocio",
    subtitle:
      "Atención instantánea y calificación de prospectos fuera de horario con protección absoluta de políticas de precios y derivación al vendedor adecuado.",
    image: "/agente.webp",
    imageAlt: "Simulador del agente comercial blindado respondiendo consultas",
    gallery: [],
    painPoint:
      "Las consultas que entraban de noche o los fines de semana se enfriaban y se iban con la competencia. Los bots genéricos cometían errores graves inventando cotizaciones o dando respuestas confusas.",
    transformation:
      "Agente que atiende en menos de 5 segundos, responde dudas frecuentes con exactitud matemática, califica el presupuesto del cliente y solo deriva al vendedor cuando el comprador está listo para cerrar.",
    metrics: [
      { label: "Velocidad de respuesta", value: "<5 segundos" },
      { label: "Ventas recuperadas", value: "+35% fuera de hora" },
      { label: "Precisión en tarifas", value: "100% verificada" },
      { label: "Disponibilidad", value: "24/7 sin horas extras" }
    ],
    architectureHighlights: [
      "Pipeline determinista de guardrails en memoria que resuelve en sub-4.2ms, sin llamadas de red",
      "Validación de reglas antes y después de la generación: el modelo nunca decide un precio",
      "Redacción automática de datos sensibles antes de que salgan del sistema",
      "Emulación ejecutable en vivo en el navegador: el mismo motor que corre en producción"
    ],
    techBacking:
      "Pipeline determinista de guardrails en memoria (sub-4.2ms) con 194 tests pasando, redacción de datos sensibles y emulación ejecutable en vivo en el navegador.",
    techStack: ["TypeScript 5", "Zod 3", "Vitest", "Edge Runtime", "Node.js 18+"],
    githubUrl: "https://github.com/lionegmanuel/whatsapp-agent-guardrails",
    architectureDiagram: `[Consulta del cliente por WhatsApp]
                 │
                 ▼
┌────────────────────────────────────────────┐
│ Capa de Guardrails de Entrada              │
│  ├─ Límite de uso y sesión                 │
│  ├─ Detección de manipulación de precios   │
│  └─ Validación de alcance temático         │
└──────────────────┬─────────────────────────┘
                   │
           [¿Consulta legítima?]
            /                \\
         (Sí)                (No)
          ▼                   ▼
 [Generación asistida]  [Respuesta fija segura]
          │
          ▼
┌────────────────────────────────────────────┐
│ Guardrail de Salida (tarifas y datos)      │
└──────────────────┬─────────────────────────┘
                   ▼
   [Respuesta verificada · Derivación al vendedor]`
  },
  {
    id: "financial-stream",
    badge: "Control en Vivo · Proyección a 90 Días",
    title: "Financial Stream: Monitoreo de Caja y Proyecciones en Tiempo Real",
    subtitle:
      "Panel financiero que actualiza ingresos y gastos al segundo, alertando sobre fugas de capital y simulando escenarios de supervivencia financiera.",
    image: "/financial.webp",
    imageAlt: "Tablero de tesorería con proyecciones de caja en tiempo real",
    gallery: [],
    painPoint:
      "Los balances contables tradicionales se revisan a mes vencido. Cuando los directores notan que los costos superaron a los ingresos, ya es tarde para corregir el rumbo.",
    transformation:
      "Panel interactivo que sincroniza cobros de pasarelas y gastos al instante, permitiendo proyectar la caja a 30, 60 y 90 días para tomar decisiones con números frescos.",
    metrics: [
      { label: "Frecuencia de datos", value: "60 updates/s" },
      { label: "Horizonte de decisión", value: "90 días proyectados" },
      { label: "Detección de fugas", value: "Alerta inmediata" },
      { label: "Confiabilidad", value: "30 tests de integración" }
    ],
    architectureHighlights: [
      "Server-Sent Events en lugar de polling: el tablero recibe, no pregunta",
      "Buffer de coalescencia en memoria que absorbe picos transaccionales sin recargar la base",
      "Reconexión automática tolerante a microcortes de red del operador",
      "Renderizado sin desplazamiento de layout a 60 actualizaciones por segundo"
    ],
    techBacking:
      "Next.js 15 App Router + React 19, Server-Sent Events (SSE), buffer de coalescencia en memoria para absorción de picos transaccionales sin recargar la base de datos.",
    techStack: ["Next.js 15", "React 19", "Server-Sent Events", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/lionegmanuel/financial-stream-dashboard-core",
    architectureDiagram: `[Pasarelas de cobro]   [Gastos y proveedores]   [Bancos]
        │                      │                    │
        └──────────────┬───────┴────────────────────┘
                       ▼
┌────────────────────────────────────────────┐
│ Motor de Ingesta y Coalescencia            │
│  └─ Agrupa microtransacciones en lotes     │
└──────────────────┬─────────────────────────┘
                   │ (Canal SSE persistente)
                   ▼
┌────────────────────────────────────────────┐
│ Tablero Ejecutivo Next.js 15 + React 19    │
│  ├─ Caja actual al segundo                 │
│  ├─ Proyección a 30 / 60 / 90 días         │
│  └─ Alertas de fuga de capital             │
└────────────────────────────────────────────┘`
  }
];
