export interface BusinessAsset {
  id: string;
  title: string;
  claim: string;
  description: string;
  iconKey: "clock" | "bolt" | "shield" | "chart" | "layers";
}

export interface SectorCase {
  id: string;
  sector: string;
  vertical: string;
  bottleneck: string;
  implementation: string;
  outcome: string;
  outcomeMetric: string;
}

export interface DeliveryCommitment {
  label: string;
  value: string;
  detail: string;
}

/**
 * Los 5 activos que instala Manuel Lione al implementar el sistema de
 * transformacion operativa. Cada uno es una capacidad que el negocio
 * no podia comprar antes, no una funcionalidad de software.
 */
export const BUSINESS_ASSETS: BusinessAsset[] = [
  {
    id: "disponibilidad-infinita",
    title: "Disponibilidad Infinita",
    claim: "24/7/365",
    description:
      "Dejar de perder clientes los fines de semana, de noche o en feriados. El sistema atiende siempre, con el mismo criterio comercial.",
    iconKey: "clock"
  },
  {
    id: "velocidad-inmediata",
    title: "Velocidad Inmediata",
    claim: "Contacto en menos de 30s",
    description:
      "El primero que responde con claridad, gana la venta. La contactabilidad baja de horas a segundos y el prospecto no alcanza a consultar a la competencia.",
    iconKey: "bolt"
  },
  {
    id: "consistencia-total",
    title: "Consistencia Total",
    claim: "El mismo estándar en cada conversación",
    description:
      "La atención sigue el mismo estándar de calidad sin depender del cansancio del personal, del humor del día ni de la rotación del equipo.",
    iconKey: "shield"
  },
  {
    id: "claridad-de-datos",
    title: "Claridad de Datos",
    claim: "Trazabilidad total del embudo",
    description:
      "Registro exacto de qué consulta entra, qué convierte y dónde se traba el proceso. La dirección decide con números reales, no con percepciones.",
    iconKey: "chart"
  },
  {
    id: "capacidad-de-escala",
    title: "Capacidad de Escala",
    claim: "De 10 a 500 consultas diarias",
    description:
      "Atender diez o quinientas consultas por día sin multiplicar los costos fijos, sin contratar más personas y sin generar caos operativo.",
    iconKey: "layers"
  }
];

/**
 * Casos de transformacion sectorial documentados en cartera.
 */
export const SECTOR_CASES: SectorCase[] = [
  {
    id: "concesionaria",
    sector: "Concesionaria Automotriz",
    vertical: "Venta de vehículos 0km y usados",
    bottleneck:
      "Las consultas de sábado a la noche y domingo se contestaban el lunes. Para entonces el comprador ya había visitado otra concesionaria.",
    implementation:
      "Atención continua con calificación por modelo, presupuesto y forma de pago. Derivación al vendedor con la ficha del prospecto ya armada.",
    outcome: "Recupero sistemático de la demanda de fin de semana",
    outcomeMetric: "Contacto en menos de 30s"
  },
  {
    id: "clinica",
    sector: "Clínica de Salud",
    vertical: "Especialidades odontológicas",
    bottleneck:
      "La recepción atendía el teléfono y el mostrador a la vez. Las urgencias reales se mezclaban con consultas de rutina y los turnos se caían.",
    implementation:
      "Filtro determinista de urgencias con triage de 4 niveles y agenda automatizada con recordatorios previos al turno.",
    outcome: "Asistencia efectiva al sillón del 78% y agenda sin huecos",
    outcomeMetric: "+40 h semanales recuperadas"
  },
  {
    id: "real-estate",
    sector: "Desarrollos Inmobiliarios",
    vertical: "Real estate y emprendimientos",
    bottleneck:
      "El asesor comercial quemaba el día respondiendo consultas de gente sin presupuesto ni intención real de compra.",
    implementation:
      "Filtrado previo por presupuesto, zona de interés y plazo de decisión. Solo llega al asesor el prospecto calificado con visita pactada.",
    outcome: "El equipo comercial trabaja únicamente prospectos calificados",
    outcomeMetric: "Visita pactada antes de derivar"
  },
  {
    id: "retail-optica",
    sector: "Retail Especializado",
    vertical: "Óptica y showroom de producto",
    bottleneck:
      "El catálogo vivía en fotos sueltas de WhatsApp y los pedidos llegaban incompletos, sin modelo, color ni receta.",
    implementation:
      "Showroom digital pre-renderizado con filtrado instantáneo y despacho del pedido estructurado directo al canal de venta.",
    outcome: "Pedido completo y sin ambigüedad desde el primer mensaje",
    outcomeMetric: "32 rutas SSG, 100/100 Lighthouse"
  }
];

/**
 * El compromiso de implementacion Done-For-You.
 */
export const DELIVERY_COMMITMENT: DeliveryCommitment[] = [
  {
    label: "Plazo de implementación",
    value: "4 semanas exactas",
    detail: "Del relevamiento a la puesta en marcha, con hitos semanales cerrados."
  },
  {
    label: "Modelo de entrega",
    value: "Done-For-You llave en mano",
    detail: "La empresa no configura nada: el sistema se entrega operando."
  },
  {
    label: "Integración",
    value: "Sobre las herramientas actuales",
    detail: "Se monta sobre el CRM, la agenda y los canales que la empresa ya usa."
  },
  {
    label: "Garantía",
    value: "Puesta en marcha garantizada",
    detail: "El compromiso es el sistema funcionando en producción, no un entregable teórico."
  }
];
