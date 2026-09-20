import { PROJECTS_DATA } from "./data/projects.js";
import { TECH_STACK_DATA } from "./data/tech-stack.js";
import {
  BUSINESS_ASSETS,
  DELIVERY_COMMITMENT,
  SECTOR_CASES
} from "./data/velinex.js";
import { icon } from "./icons.js";
import { escapeHtml } from "./dom.js";
import { mountPlayground } from "./playground.js";

const CONTACT_EMAIL = "manuel.lioneg@gmail.com";

declare global {
  interface Window {
    handleContactSubmit: () => void;
  }
}

/* ---------------------------------------------------------------- Proyectos */

function renderProjects(filter: string = "all"): void {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  container.innerHTML = filtered
    .map((project) => {
      const metricsHtml = project.metrics
        .map(
          (m) => `
          <div class="p-metric">
            <div class="p-metric-val">${escapeHtml(m.value)}</div>
            <div class="p-metric-lbl">${escapeHtml(m.label)}</div>
          </div>`
        )
        .join("");

      const techPills = project.techStack
        .map((t) => `<span class="tech-pill">${escapeHtml(t)}</span>`)
        .join("");

      return `
        <article class="project-card" data-project-id="${project.id}">
          <div class="project-top">
            <div class="project-header-bar">
              <span class="project-category-tag">${escapeHtml(project.categoryLabel)}</span>
              <span class="project-badge">${escapeHtml(project.badge)}</span>
            </div>
            <h3 class="project-title">${escapeHtml(project.title)}</h3>
            <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
            <div class="project-metrics-row">${metricsHtml}</div>
            <div class="tech-pills">${techPills}</div>
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary view-arch-btn" data-id="${project.id}" style="flex: 1;">
              ${icon("blueprint", 17)}<span>Ver arquitectura y codigo</span>
            </button>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
               class="btn btn-secondary btn-icon-only" aria-label="Ver ${escapeHtml(project.title)} en GitHub">
              ${icon("github", 17)}
            </a>
          </div>
        </article>`;
    })
    .join("");

  container.querySelectorAll<HTMLElement>(".view-arch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-id");
      if (projectId) openProjectModal(projectId);
    });
  });
}

function openProjectModal(projectId: string): void {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <header class="modal-head">
      <span class="project-badge">${escapeHtml(project.badge)}</span>
      <h2 class="modal-title">${escapeHtml(project.title)}</h2>
      <p class="modal-subtitle">${escapeHtml(project.subtitle)}</p>
    </header>

    <div class="modal-split">
      <div class="modal-panel">
        <h4 class="modal-panel-title accent-cyan">Problema de negocio</h4>
        <p>${escapeHtml(project.problem)}</p>
      </div>
      <div class="modal-panel">
        <h4 class="modal-panel-title accent-emerald">Solucion de arquitectura</h4>
        <p>${escapeHtml(project.solution)}</p>
      </div>
    </div>

    <h4 class="modal-section-title">Decisiones de arquitectura</h4>
    <ul class="modal-list">
      ${project.architectureHighlights
        .map((h) => `<li>${icon("check", 15)}<span>${escapeHtml(h)}</span></li>`)
        .join("")}
    </ul>

    <h4 class="modal-section-title">Origen de las metricas</h4>
    <p class="modal-provenance">${icon("shield", 16)}<span>${escapeHtml(project.metricsProvenance)}</span></p>

    <h4 class="modal-section-title">Diagrama de flujo</h4>
    <div class="modal-code-box">${escapeHtml(project.architectureDiagram)}</div>

    <h4 class="modal-section-title">Muestra de codigo TypeScript estricto</h4>
    <div class="modal-code-box">${escapeHtml(project.codeSnippet)}</div>

    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
       class="btn btn-primary modal-cta">
      <span>Ver repositorio completo en GitHub</span>${icon("arrowUpRight", 16)}
    </a>`;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(): void {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ------------------------------------------------------------------- Stack */

function renderTechStack(): void {
  const container = document.getElementById("stack-grid");
  if (!container) return;

  container.innerHTML = TECH_STACK_DATA.map(
    (group, index) => `
    <div class="stack-card">
      <span class="stack-layer-index">Capa ${index + 1}</span>
      <h3 class="stack-layer-title">${escapeHtml(group.layer)}</h3>
      <p class="stack-layer-desc">${escapeHtml(group.description)}</p>
      <div class="stack-items-wrap">
        ${group.items.map((it) => `<span class="stack-item-badge">${escapeHtml(it)}</span>`).join("")}
      </div>
    </div>`
  ).join("");
}

/* ----------------------------------------------------------------- Velinex */

function renderBusinessAssets(): void {
  const container = document.getElementById("assets-grid");
  if (!container) return;

  container.innerHTML = BUSINESS_ASSETS.map(
    (asset, index) => `
    <div class="asset-card">
      <div class="asset-head">
        <span class="asset-icon">${icon(asset.iconKey, 20)}</span>
        <span class="asset-index">0${index + 1}</span>
      </div>
      <h3 class="asset-title">${escapeHtml(asset.title)}</h3>
      <p class="asset-claim">${escapeHtml(asset.claim)}</p>
      <p class="asset-desc">${escapeHtml(asset.description)}</p>
    </div>`
  ).join("");
}

function renderSectorCases(): void {
  const container = document.getElementById("cases-grid");
  if (!container) return;

  container.innerHTML = SECTOR_CASES.map(
    (item) => `
    <article class="case-card">
      <div class="case-head">
        <h3 class="case-sector">${escapeHtml(item.sector)}</h3>
        <span class="case-vertical">${escapeHtml(item.vertical)}</span>
      </div>
      <div class="case-row">
        <span class="case-label case-label-red">Cuello de botella</span>
        <p>${escapeHtml(item.bottleneck)}</p>
      </div>
      <div class="case-row">
        <span class="case-label case-label-cyan">Implementacion</span>
        <p>${escapeHtml(item.implementation)}</p>
      </div>
      <div class="case-result">
        <span class="case-metric">${escapeHtml(item.outcomeMetric)}</span>
        <p>${escapeHtml(item.outcome)}</p>
      </div>
    </article>`
  ).join("");
}

function renderCommitment(): void {
  const container = document.getElementById("commitment-grid");
  if (!container) return;

  container.innerHTML = DELIVERY_COMMITMENT.map(
    (row) => `
    <div class="commit-item">
      <span class="commit-label">${escapeHtml(row.label)}</span>
      <span class="commit-value">${escapeHtml(row.value)}</span>
      <span class="commit-detail">${escapeHtml(row.detail)}</span>
    </div>`
  ).join("");
}

/* ----------------------------------------------------------------- Contacto */

interface SocialLink {
  href: string;
  label: string;
  iconKey: Parameters<typeof icon>[0];
}

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/lionegmanuel", label: "GitHub", iconKey: "github" },
  {
    href: "https://www.linkedin.com/in/lionegmanuel/",
    label: "LinkedIn",
    iconKey: "linkedin"
  },
  {
    href: "https://www.youtube.com/@lionegmanuel",
    label: "YouTube",
    iconKey: "youtube"
  },
  {
    href: "https://www.instagram.com/lionegmanuel_/",
    label: "Instagram",
    iconKey: "instagram"
  },
  {
    href: "https://www.tiktok.com/@lionegmanuel",
    label: "TikTok",
    iconKey: "tiktok"
  },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email", iconKey: "mail" }
];

function renderSocials(): void {
  const container = document.getElementById("social-links");
  if (!container) return;

  container.innerHTML = SOCIAL_LINKS.map(
    (link) => `
    <a href="${link.href}" class="social-btn" aria-label="${link.label}"
       ${link.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      ${icon(link.iconKey, 19)}
      <span class="social-tooltip">${link.label}</span>
    </a>`
  ).join("");
}

function setupCopyEmail(): void {
  const btn = document.getElementById("copy-email-btn");
  if (!btn) return;

  const idle = `${icon("clipboard", 16)}<span class="copy-email-text">${CONTACT_EMAIL}</span>`;
  const done = `${icon("check", 16)}<span class="copy-email-text">Copiado</span>`;
  btn.innerHTML = idle;

  let resetTimer = 0;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = CONTACT_EMAIL;
      helper.setAttribute("readonly", "true");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    btn.classList.add("copied");
    btn.innerHTML = done;

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = idle;
    }, 2200);
  });
}

/* ------------------------------------------------------------------ Listeners */

function setupListeners(): void {
  document.querySelectorAll<HTMLElement>(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter") || "all");
    });
  });

  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  if (modal && modalClose) {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

window.handleContactSubmit = () => {
  const nameInput = document.getElementById("c-name") as HTMLInputElement | null;
  const emailInput = document.getElementById("c-email") as HTMLInputElement | null;
  const msgInput = document.getElementById("c-msg") as HTMLTextAreaElement | null;

  const name = nameInput ? nameInput.value : "";
  const email = emailInput ? emailInput.value : "";
  const msg = msgInput ? msgInput.value : "";

  const subject = encodeURIComponent(`Consulta de arquitectura: ${name}`);
  const body = encodeURIComponent(
    `Hola Manuel,\n\nSoy ${name} (${email}).\n\nDetalles del proyecto:\n${msg}\n\nEnviado desde el portfolio.`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  renderTechStack();
  renderBusinessAssets();
  renderSectorCases();
  renderCommitment();
  renderSocials();
  setupCopyEmail();
  setupListeners();
  mountPlayground();
});
