import { PLAYGROUND_SCENARIOS } from "./data/playground-scenarios.js";
import type { PlaygroundScenario } from "./data/playground-scenarios.js";
import { runGuardrailPipeline } from "./guardrails/engine.js";
import type { GuardrailResult, GuardrailVerdict } from "./guardrails/engine.js";
import { icon } from "./icons.js";
import { escapeHtml } from "./dom.js";

const VERDICT_STYLE: Record<GuardrailVerdict, { label: string; className: string }> = {
  BLOCKED: { label: "BLOCKED", className: "verdict-blocked" },
  SANITIZED: { label: "SANITIZED", className: "verdict-sanitized" },
  ALLOWED: { label: "ALLOWED", className: "verdict-allowed" }
};

function scenarioButtons(): string {
  return PLAYGROUND_SCENARIOS.map(
    (scenario, index) => `
      <button
        type="button"
        class="scenario-btn${index === 0 ? " active" : ""}"
        data-scenario="${scenario.id}"
        title="${escapeHtml(scenario.hint)}"
      >
        ${escapeHtml(scenario.label)}
      </button>`
  ).join("");
}

function formatResultJson(result: GuardrailResult, input: string): string {
  const payload = {
    verdict: result.verdict,
    action: result.action,
    riskScore: `${result.riskScore}/100`,
    latencyMs: Number(result.latencyMs.toFixed(4)),
    rulesEvaluated: result.rulesEvaluated,
    iterations: result.iterations,
    hits: result.hits.map((hit) => ({
      rule: hit.ruleId,
      category: hit.category,
      severity: hit.severity,
      matched: hit.matchedText
    })),
    sanitizedText:
      result.sanitizedText === input ? "(sin cambios)" : result.sanitizedText,
    safeResponse: result.safeResponse
  };

  return JSON.stringify(payload, null, 2);
}

function renderResult(result: GuardrailResult, input: string): void {
  const badge = document.getElementById("pg-verdict-badge");
  const output = document.getElementById("pg-output");
  const latency = document.getElementById("pg-latency");
  const rules = document.getElementById("pg-rules-hit");
  const risk = document.getElementById("pg-risk");

  if (!badge || !output || !latency || !rules || !risk) return;

  const style = VERDICT_STYLE[result.verdict];
  badge.textContent = style.label;
  badge.className = `pg-verdict ${style.className}`;

  latency.textContent = `${result.latencyMs.toFixed(4)} ms`;
  rules.textContent = `${result.hits.length} / ${result.rulesEvaluated}`;
  risk.textContent = `${result.riskScore} / 100`;

  output.textContent = formatResultJson(result, input);
}

function findScenario(id: string): PlaygroundScenario | undefined {
  return PLAYGROUND_SCENARIOS.find((scenario) => scenario.id === id);
}

export function mountPlayground(): void {
  const host = document.getElementById("playground-scenarios");
  const input = document.getElementById("pg-input") as HTMLTextAreaElement | null;
  const runBtn = document.getElementById("pg-run-btn");
  const hint = document.getElementById("pg-hint");

  if (!host || !input || !runBtn || !hint) return;

  host.innerHTML = scenarioButtons();

  const initial = PLAYGROUND_SCENARIOS[0];
  if (initial) {
    input.value = initial.message;
    hint.textContent = initial.hint;
  }

  host.querySelectorAll<HTMLButtonElement>(".scenario-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const scenario = findScenario(btn.dataset["scenario"] ?? "");
      if (!scenario) return;

      host
        .querySelectorAll(".scenario-btn")
        .forEach((other) => other.classList.remove("active"));
      btn.classList.add("active");

      input.value = scenario.message;
      hint.textContent = scenario.hint;
      input.focus();
    });
  });

  const execute = (): void => {
    const text = input.value.trim();
    if (text.length === 0) {
      const output = document.getElementById("pg-output");
      if (output) {
        output.textContent =
          "Escribi un mensaje entrante o elegi un escenario para ejecutar el pipeline.";
      }
      return;
    }
    renderResult(runGuardrailPipeline(text), text);
  };

  runBtn.innerHTML = `${icon("play", 16)}<span>Ejecutar Pipeline Determinista</span>`;
  runBtn.addEventListener("click", execute);

  input.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      execute();
    }
  });

  // Primera corrida automatica para que la seccion nunca se vea vacia.
  execute();
}
