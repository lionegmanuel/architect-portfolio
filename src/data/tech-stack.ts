export interface TechGroup {
  layer: string;
  description: string;
  items: string[];
}

export const TECH_STACK_DATA: TechGroup[] = [
  {
    layer: "Core Languages & Runtimes",
    description: "Bases solidas de computacion fuertemente tipada y ejecucion asincrona.",
    items: ["TypeScript 5 (Strict)", "Node.js 18+", "Python 3.12", "Bun", "Bash & PowerShell"]
  },
  {
    layer: "Frontend & Reactive Systems",
    description: "Interfaces de usuario de alto rendimiento sin layout shifts y renderizado edge.",
    items: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS", "Vite", "Server-Sent Events", "WebSockets"]
  },
  {
    layer: "Backend, APIs & Architecture",
    description: "Sistemas distribuidos, validacion determinista y endpoints resilientes.",
    items: ["FastAPI", "Express", "Zod", "REST APIs", "Microservicios", "State Machines"]
  },
  {
    layer: "Data, Databases & Storage",
    description: "Almacenamiento transaccional y procesamiento por lotes.",
    items: ["PostgreSQL", "Supabase", "Redis", "Docker", "SQL Optimization"]
  },
  {
    layer: "AI Engineering & Autonomous Agents",
    description: "Integracion de modelos de frontera, guardrails y automatizacion con agentes.",
    items: ["LLM Tool Calling", "Claude Code", "Antigravity", "Deterministic Guardrails", "n8n Workflows"]
  },
  {
    layer: "Testing, Packaging & DevOps",
    description: "Garantia de calidad estricta, cobertura unitaria y despliegue continuo.",
    items: ["Vitest", "Jest", "tsup (ESM/CJS)", "Git & GitHub Actions", "Vercel", "Cloudflare Pages"]
  }
];
