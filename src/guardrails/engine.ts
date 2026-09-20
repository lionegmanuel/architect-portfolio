/**
 * Motor determinista de guardrails ejecutado 100% en el navegador.
 * Replica en miniatura el pipeline de `whatsapp-agent-guardrails`:
 * normalizacion, deteccion de inyeccion, deteccion de fuga y redaccion de PII.
 * Cero llamadas de red, cero dependencias, resultado identico en cada corrida.
 */

export type GuardrailVerdict = "BLOCKED" | "SANITIZED" | "ALLOWED";

export type RuleSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export type RuleCategory =
  | "PROMPT_INJECTION"
  | "SECRET_LEAK"
  | "CONFIDENTIAL_PRICING"
  | "PII_REDACTION"
  | "OFF_SCOPE";

export interface GuardrailRule {
  id: string;
  category: RuleCategory;
  severity: RuleSeverity;
  description: string;
  pattern: RegExp;
  /** Si existe, el match se reemplaza por este token en lugar de bloquear. */
  redactWith?: string;
}

export interface RuleHit {
  ruleId: string;
  category: RuleCategory;
  severity: RuleSeverity;
  matchedText: string;
}

export interface GuardrailResult {
  verdict: GuardrailVerdict;
  action: string;
  hits: RuleHit[];
  sanitizedText: string;
  safeResponse: string;
  riskScore: number;
  latencyMs: number;
  rulesEvaluated: number;
  iterations: number;
}

/**
 * Normaliza el texto para neutralizar evasiones basicas:
 * diacriticos, mayusculas, separadores repetidos y espaciado inyectado.
 */
export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[_\-*.]{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export const GUARDRAIL_RULES: GuardrailRule[] = [
  {
    id: "INJ-01",
    category: "PROMPT_INJECTION",
    severity: "CRITICAL",
    description: "Intento de sobrescribir instrucciones del sistema",
    pattern:
      /\b(ignora|olvida|descarta|anula)\b[^.!?]{0,40}\b(instruccion|instrucciones|reglas|indicaciones|prompt|politicas)\b/
  },
  {
    id: "INJ-02",
    category: "PROMPT_INJECTION",
    severity: "CRITICAL",
    description: "Solicitud de exposicion del system prompt",
    pattern:
      /\b(system prompt|prompt del sistema|instrucciones del sistema|tus instrucciones|reveal your prompt)\b/
  },
  {
    id: "INJ-03",
    category: "PROMPT_INJECTION",
    severity: "CRITICAL",
    description: "Patron de jailbreak o cambio de personalidad forzado",
    pattern:
      /\b(jailbreak|modo dan|dan mode|developer mode|modo desarrollador|sin restricciones|sin filtros)\b/
  },
  {
    id: "INJ-04",
    category: "PROMPT_INJECTION",
    severity: "HIGH",
    description: "Suplantacion de rol para escalar privilegios",
    pattern:
      /\b(actua|comportate|hace de cuenta|simula|pretende)\b[^.!?]{0,30}\b(administrador|admin|root|desarrollador|superusuario|dueno)\b/
  },
  {
    id: "LEAK-01",
    category: "SECRET_LEAK",
    severity: "CRITICAL",
    description: "Solicitud de credenciales o secretos de infraestructura",
    pattern:
      /\b(api[ _]?key|apikey|access token|password|contrasena|clave de (la )?base|credenciales|archivo \.env|service role)\b/
  },
  {
    id: "LEAK-02",
    category: "SECRET_LEAK",
    severity: "HIGH",
    description: "Sondeo de infraestructura interna y endpoints privados",
    pattern:
      /\b(base de datos interna|endpoint privado|servidor de produccion|tabla de usuarios|dump de la base)\b/
  },
  {
    id: "PRICE-01",
    category: "CONFIDENTIAL_PRICING",
    severity: "CRITICAL",
    description: "Pedido de estructura de costos o margenes internos",
    pattern:
      /\b(precio|precios|lista|costo|costos)\b[^.!?]{0,25}\b(confidencial|confidenciales|interno|internos|mayorista|de compra|reservad[oa]s?)\b/
  },
  {
    id: "PRICE-02",
    category: "CONFIDENTIAL_PRICING",
    severity: "HIGH",
    description: "Pedido de margen, rentabilidad o descuento maximo autorizado",
    pattern:
      /\b(margen de ganancia|rentabilidad real|cuanto ganan|descuento maximo|tope de descuento|comision del vendedor)\b/
  },
  {
    id: "PII-01",
    category: "PII_REDACTION",
    severity: "MEDIUM",
    description: "Numero de tarjeta detectado en el canal",
    pattern: /\b(?:\d[ -]?){13,19}\b/,
    redactWith: "[TARJETA_REDACTADA]"
  },
  {
    id: "PII-02",
    category: "PII_REDACTION",
    severity: "LOW",
    description: "Direccion de correo detectada en el canal",
    pattern: /\b[\w.+-]+@[\w-]+\.[\w.]{2,}\b/,
    redactWith: "[EMAIL_REDACTADO]"
  }
];

const SEVERITY_WEIGHT: Record<RuleSeverity, number> = {
  CRITICAL: 45,
  HIGH: 25,
  MEDIUM: 10,
  LOW: 4
};

const SAFE_RESPONSES: Record<RuleCategory, string> = {
  PROMPT_INJECTION:
    "Puedo ayudarte con informacion de productos, disponibilidad y turnos. No proceso pedidos sobre la configuracion interna del sistema.",
  SECRET_LEAK:
    "No tengo acceso a credenciales ni a datos de infraestructura. Si necesitas soporte tecnico, te derivo con una persona del equipo.",
  CONFIDENTIAL_PRICING:
    "Puedo pasarte el precio de lista vigente y las formas de pago disponibles. Las condiciones comerciales internas no se comparten por este canal.",
  PII_REDACTION:
    "Recibi tu consulta. Por seguridad nunca pidas ni envies datos de tarjeta por este canal: el pago se coordina por el medio oficial.",
  OFF_SCOPE:
    "Esa consulta queda fuera del alcance de este canal. Te derivo con el equipo correspondiente."
};

/** Ejecuta una unica pasada del pipeline sobre el texto normalizado. */
function evaluateOnce(rawText: string): { hits: RuleHit[]; sanitizedText: string } {
  const normalized = normalize(rawText);
  const hits: RuleHit[] = [];
  let sanitizedText = rawText;

  for (const rule of GUARDRAIL_RULES) {
    const match = rule.pattern.exec(normalized);
    if (!match) continue;

    hits.push({
      ruleId: rule.id,
      category: rule.category,
      severity: rule.severity,
      matchedText: match[0].trim()
    });

    if (rule.redactWith) {
      sanitizedText = sanitizedText.replace(
        new RegExp(rule.pattern.source, "gi"),
        rule.redactWith
      );
    }
  }

  return { hits, sanitizedText };
}

/**
 * Corre el pipeline `iterations` veces para obtener una latencia media estable
 * y devuelve el dictamen de la ultima pasada (deterministas: todas son iguales).
 */
export function runGuardrailPipeline(
  rawText: string,
  iterations: number = 2000
): GuardrailResult {
  const passes = Math.max(1, iterations);
  const start = performance.now();

  let last = evaluateOnce(rawText);
  for (let i = 1; i < passes; i++) {
    last = evaluateOnce(rawText);
  }

  const latencyMs = (performance.now() - start) / passes;
  const { hits, sanitizedText } = last;

  const riskScore = Math.min(
    100,
    hits.reduce((acc, hit) => acc + SEVERITY_WEIGHT[hit.severity], 0)
  );

  const blockingHit = hits.find(
    (hit) => hit.severity === "CRITICAL" || hit.severity === "HIGH"
  );
  const redactionHit = hits.find((hit) => hit.category === "PII_REDACTION");

  let verdict: GuardrailVerdict = "ALLOWED";
  let action = "FORWARD_TO_LLM";
  let safeResponse =
    "Mensaje dentro de politica. Se envia al generador con el contexto comercial permitido.";

  if (blockingHit) {
    verdict = "BLOCKED";
    action = `BLOCK_${blockingHit.category}`;
    safeResponse = SAFE_RESPONSES[blockingHit.category];
  } else if (redactionHit) {
    verdict = "SANITIZED";
    action = "REDACT_AND_FORWARD";
    safeResponse = SAFE_RESPONSES.PII_REDACTION;
  }

  return {
    verdict,
    action,
    hits,
    sanitizedText,
    safeResponse,
    riskScore,
    latencyMs,
    rulesEvaluated: GUARDRAIL_RULES.length,
    iterations: passes
  };
}
