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
 * Los 5 Activos Empresariales que adquiere el cliente al implementar
 * el Sistema Comercial de Transformacion Operativa de Velinex.
 * Fuente: VELINEX - Bases y Fundaciones del Negocio (Nicho PyMEs Multirubro) v9.1.
 */
export const BUSINESS_ASSETS: BusinessAsset[] = [
  {
    id: "disponibilidad-infinita",
    title: "Disponibilidad Infinita",
    claim: "24/7/365",
    description:
      "El sistema atiende a cualquier hora, incluidos sabados a la noche, domingos y feriados. La empresa deja de perder consultas fuera del horario comercial.",
    iconKey: "clock"
  },
  {
    id: "velocidad-infinita",
    title: "Velocidad Infinita",
    claim: "Contacto en menos de 30s",
    description:
      "El primero que responde se queda con la venta. La contactabilidad baja de horas a segundos y el prospecto no alcanza a consultar a la competencia.",
    iconKey: "bolt"
  },
  {
    id: "consistencia-absoluta",
    title: "Consistencia Absoluta",
    claim: "Protocolo identico en cada conversacion",
    description:
      "Calificacion, precios y derivaciones siguen reglas estrictas. No dependen del humor, del cansancio ni de la rotacion del personal.",
    iconKey: "shield"
  },
  {
    id: "informacion-perfecta",
    title: "Informacion Perfecta",
    claim: "Trazabilidad total del embudo",
    description:
      "Cada lead queda registrado con origen, estado y motivo de caida. La direccion decide con datos reales de conversion, no con percepciones.",
    iconKey: "chart"
  },
  {
    id: "capacidad-infinita",
    title: "Capacidad Infinita",
    claim: "De 10 a 500 consultas diarias",
    description:
      "El volumen escala sin sumar costos fijos, sin contratar mas personas y sin generar caos operativo en la recepcion o en el equipo comercial.",
    iconKey: "layers"
  }
];

/**
 * Casos de transformacion sectorial documentados en la cartera de Velinex.
 */
export const SECTOR_CASES: SectorCase[] = [
  {
    id: "concesionaria",
    sector: "Concesionaria Automotriz",
    vertical: "Venta de vehiculos 0km y usados",
    bottleneck:
      "Las consultas de sabado a la noche y domingo se contestaban el lunes. Para entonces el comprador ya habia visitado otra concesionaria.",
    implementation:
      "Atencion continua con calificacion por modelo, presupuesto y forma de pago. Derivacion al vendedor con la ficha del prospecto ya armada.",
    outcome: "Recupero sistematico de la demanda de fin de semana",
    outcomeMetric: "Tasa de contacto sub-30s"
  },
  {
    id: "clinica",
    sector: "Clinica de Salud",
    vertical: "Especialidades odontologicas",
    bottleneck:
      "La recepcion atendia el telefono y el mostrador a la vez. Las urgencias reales se mezclaban con consultas de rutina y los turnos se caian.",
    implementation:
      "Filtro determinista de urgencias con triage de 4 niveles y agenda automatizada con recordatorios previos al turno.",
    outcome: "Asistencia efectiva al sillon del 78% y agenda sin huecos",
    outcomeMetric: "+40 h semanales recuperadas en recepcion"
  },
  {
    id: "real-estate",
    sector: "Desarrollos Inmobiliarios",
    vertical: "Real estate y emprendimientos",
    bottleneck:
      "El asesor comercial quemaba el dia respondiendo consultas de gente sin presupuesto ni intencion real de compra.",
    implementation:
      "Filtrado previo por presupuesto, zona de interes y plazo de decision. Solo llega al asesor el prospecto calificado con visita pactada.",
    outcome: "El equipo comercial trabaja unicamente prospectos calificados",
    outcomeMetric: "Visita pactada antes de la derivacion"
  },
  {
    id: "retail-optica",
    sector: "Retail Especializado",
    vertical: "Optica y showroom de producto",
    bottleneck:
      "El catalogo vivia en fotos sueltas de WhatsApp y los pedidos llegaban incompletos, sin modelo, color ni receta.",
    implementation:
      "Showroom digital pre-renderizado con filtrado instantaneo y despacho del pedido estructurado directo al canal de venta.",
    outcome: "Pedido completo y sin ambiguedad desde el primer mensaje",
    outcomeMetric: "32 rutas SSG, 100/100 Lighthouse"
  }
];

/**
 * El compromiso de implementacion Done-For-You.
 */
export const DELIVERY_COMMITMENT: DeliveryCommitment[] = [
  {
    label: "Plazo de implementacion",
    value: "4 semanas exactas",
    detail: "Del relevamiento a la puesta en marcha, con hitos semanales cerrados."
  },
  {
    label: "Modelo de entrega",
    value: "Done-For-You llave en mano",
    detail: "La empresa no configura nada: el sistema se entrega operando."
  },
  {
    label: "Integracion",
    value: "Sobre las herramientas actuales",
    detail: "Se monta sobre el CRM, la agenda y los canales que la empresa ya usa."
  },
  {
    label: "Garantia",
    value: "Puesta en marcha garantizada",
    detail: "El compromiso es el sistema funcionando en produccion, no un entregable teorico."
  }
];
