export interface TechGroup {
  layer: string;
  description: string;
  items: string[];
}

/**
 * Stack agrupado por capa de responsabilidad arquitectonica,
 * no por lista plana de logos.
 */
export const TECH_STACK_DATA: TechGroup[] = [
  {
    layer: "Core Runtime & Lenguajes",
    description:
      "La base tipada sobre la que se apoya todo lo demas. Sin tipos debiles no hay determinismo posible.",
    items: [
      "TypeScript 5.7+ (Strict, cero any)",
      "Node.js 20+",
      "Python 3.12",
      "SQL moderno (CTE, window functions)",
      "Bash & PowerShell"
    ]
  },
  {
    layer: "Frontend & Interfaces de Alta Frecuencia",
    description:
      "Interfaces que absorben decenas de actualizaciones por segundo sin layout shift ni fugas de memoria.",
    items: [
      "React 19",
      "Next.js 15 (App Router, Server Components)",
      "Vite 6",
      "Tailwind CSS",
      "Server-Sent Events (SSE)",
      "WebSockets"
    ]
  },
  {
    layer: "Determinismo, Algoritmos & Seguridad",
    description:
      "La capa que convierte una respuesta probabilistica en un dictamen auditable y reproducible.",
    items: [
      "Zod 3 (contratos de entrada y salida)",
      "Vitest",
      "State Machines deterministas",
      "Parsers AST",
      "Levenshtein / Jaro-Winkler",
      "Checksum Modulo 11 (AFIP/ARCA)"
    ]
  },
  {
    layer: "Infraestructura & Datos",
    description:
      "Persistencia transaccional y ejecucion en el borde, con latencia de red cercana a cero.",
    items: [
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "Cloudflare Workers / Edge Runtimes",
      "Vercel"
    ]
  }
];
