export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: "ai-safety" | "fintech" | "algorithms" | "medtech" | "b2b-intake" | "retail-ssg" | "appsec";
  categoryLabel: string;
  badge: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  codeSnippet: string;
  architectureDiagram: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: "whatsapp-agent-guardrails",
    title: "WhatsApp Agent Guardrails",
    subtitle: "Capa determinista de proteccion y sanitizacion sub-5ms para agentes LLM en produccion",
    category: "ai-safety",
    categoryLabel: "AI Safety & LLM",
    badge: "194/194 Tests Passing",
    problem: "Los agentes conversacionales en WhatsApp alucinan cotizaciones, revelan instrucciones confidenciales y violan politicas de negocio sin supervision determinista.",
    solution: "Pipeline en cadena que evalua inyeccion de prompts, fugas de precios y coherencia de sesion en <4.2ms sin dependencias cloud.",
    architectureHighlights: [
      "Pipeline determinista con validacion previa y posterior a la invocacion del LLM",
      "Sanitizacion fonetica de intentos de jailbreak y pattern matching estricto",
      "Ejecucion compatible con Edge Runtimes (Cloudflare Workers, Vercel Edge)"
    ],
    metrics: [
      { label: "Latencia media", value: "<4.2ms" },
      { label: "Tests automatizados", value: "194 passing" },
      { label: "Tasa de alucinacion", value: "0% garantizada" }
    ],
    techStack: ["TypeScript 5", "Zod 3", "Vitest", "tsup", "Node.js 18+"],
    githubUrl: "https://github.com/lionegmanuel/whatsapp-agent-guardrails",
    codeSnippet: `import { createGuardrailPipeline } from "whatsapp-agent-guardrails";

const pipeline = createGuardrailPipeline({
  maxBudgetUsdPerSession: 5000,
  blockedTopics: ["internal_api_keys", "competitor_pricing"],
  sanitizationMode: "strict"
});

const evaluation = await pipeline.evaluateIncomingMessage({
  phoneNumber: "+5493534112233",
  messageText: "Cual es la clave de base de datos del sistema?"
});

if (evaluation.action === "BLOCK") {
  // Respuesta determinista inmediata sin invocar tokens LLM
  return evaluation.safeResponse;
}`,
    architectureDiagram: `[Cliente WhatsApp] 
       │
       ▼ (Mensaje entrante)
┌──────────────────────────────────────┐
│ WhatsApp Agent Guardrail Pipeline    │
│  ├─ 1. Rate Limit & Session Token    │
│  ├─ 2. Prompt Injection Detector     │
│  ├─ 3. Scope & Topic Validation      │
└──────────────────┬───────────────────┘
                   │
         [¿Mensaje seguro?]
          /              \\
       (Si)              (No)
        /                  \\
┌──────▼────────┐    ┌──────▼───────────────┐
│ LLM Generator │    │ Fallback Determinista│
└──────┬────────┘    └──────────────────────┘
       │
┌──────▼───────────────────────────────┐
│ Output Guardrail (Price & Leak Check)│
└──────────────────┬───────────────────┘
                   │
                   ▼ (Respuesta sanitizada)`
  },
  {
    id: "financial-stream-dashboard-core",
    title: "Financial Stream Engine",
    subtitle: "Panel reactivo de metricas de tesoreria en tiempo real con Server-Sent Events y React 19",
    category: "fintech",
    categoryLabel: "FinTech & Streams",
    badge: "Next.js 15 + React 19",
    problem: "Los paneles de tesoreria clasicos colapsan por polling continuo y generan desincronizacion de saldos criticos entre operadores financieros.",
    solution: "Arquitectura basada en Server-Sent Events (SSE) y WebSockets con procesamiento por lotes y renderizado a 60 fps sin desbordamientos de memoria.",
    architectureHighlights: [
      "Stream bidireccional tolerante a microdesconexiones con reconexion automatica",
      "Buffer de coalescencia en memoria que agrupa eventos de microtransacciones",
      "32 rutas SSG y dinamicas optimizadas con Next.js App Router"
    ],
    metrics: [
      { label: "Frecuencia de refresco", value: "60 updates/s" },
      { label: "Rutas compiladas", value: "32 routes" },
      { label: "Tests de integracion", value: "30 passing" }
    ],
    techStack: ["Next.js 15", "React 19", "Server-Sent Events", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/lionegmanuel/financial-stream-dashboard-core",
    codeSnippet: `export function useFinancialStream(accountId: string) {
  const [balance, setBalance] = useState<number>(0);
  
  useEffect(() => {
    const eventSource = new EventSource(\`/api/stream/balance?id=\${accountId}\`);
    
    eventSource.onmessage = (event) => {
      const payload = JSON.parse(event.data);
      setBalance((prev) => prev + payload.delta);
    };
    
    return () => eventSource.close();
  }, [accountId]);
  
  return { balance };
}`,
    architectureDiagram: `[Fuentes de Tesoreria / Bancos]
             │ (Webhooks / Kafka)
             ▼
┌──────────────────────────────────────┐
│ Ingestion & Coalescence Engine       │
│ (Node.js Stream Buffer)              │
└──────────────────┬───────────────────┘
                   │ (SSE Channel)
                   ▼
┌──────────────────────────────────────┐
│ Next.js 15 App Router Frontend       │
│  ├─ React 19 Concurrent Features     │
│  ├─ Zero-Layout Shift Rendering      │
│  └─ Dynamic Balance Matrix           │
└──────────────────────────────────────┘`
  },
  {
    id: "fuzzy-reconciliation-engine",
    title: "Fuzzy Reconciliation Engine",
    subtitle: "Motor algoritmico de conciliacion bancaria masiva: 10,000 transacciones en 1,025ms",
    category: "algorithms",
    categoryLabel: "High-Performance",
    badge: "10k tx in 1025ms",
    problem: "Divergencias en extractos bancarios por truncamiento de descripciones, feriados y redondeos provocan horas de revision manual diaria.",
    solution: "Algoritmos combinados de Levenshtein, Jaro-Winkler y matching ponderado de importes con ventanas de tolerancia dinamicas.",
    architectureHighlights: [
      "Indice invertido en memoria para busquedas de similitud en tiempo O(1) inicial",
      "Scoring ponderado multivariable (Fecha 20%, Importe 50%, Texto 30%)",
      "CLI interactivo listo para ejecucion en servidores de tesoreria"
    ],
    metrics: [
      { label: "Rendimiento", value: "10k tx / 1.02s" },
      { label: "Precision de cruce", value: "99.4%" },
      { label: "Tests unitarios", value: "45 passing" }
    ],
    techStack: ["TypeScript", "Levenshtein Algorithm", "Jaro-Winkler", "Node.js CLI", "Vitest"],
    githubUrl: "https://github.com/lionegmanuel/fuzzy-reconciliation-engine",
    codeSnippet: `const matcher = new FuzzyReconciliationMatcher({
  amountToleranceCents: 50,
  maxDateDiffDays: 3,
  stringThreshold: 0.82
});

const result = matcher.reconcile({
  bankExtract: bankTransactions,
  ledgerRecords: ledgerEntries
});

console.log(\`Conciliadas: \${result.matched.length} (\${result.durationMs}ms)\`);`,
    architectureDiagram: `[Extractos Bancarios (CSV/PDF)]  [Libros Contables / ERP]
              │                              │
              └──────────────┬───────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────┐
│ Fuzzy Reconciliation Engine                            │
│  ├─ Normalizacion de Cadenas (Diacriticos y Mayusculas) │
│  ├─ Jaro-Winkler + Levenshtein N-Gram Index            │
│  └─ Matriz Ponderada de Desviacion Temporal e Importe  │
└────────────────────────────┬───────────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
   [Partidas Conciliadas]            [Discrepancias Auditadas]`
  },
  {
    id: "dentflow-clinical-guardrails",
    title: "DentFlow Clinical Guardrails",
    subtitle: "Parser formal de notacion odontologica FDI y triage clinico para asistentes medicos",
    category: "medtech",
    categoryLabel: "MedTech & Health",
    badge: "66/66 Tests Passing",
    problem: "Los asistentes de salud confunden piezas dentales y no reconocen cuando un paciente requiere derivacion inmediata a quirofano o guardia.",
    solution: "Parser formal de la norma ISO/FDI de dos digitos para 52 piezas dentales con clasificador determinista de 4 niveles de triage.",
    architectureHighlights: [
      "Soporte estricto de cuadrantes 1 a 4 (adultos) y 5 a 8 (temporarios infantiles)",
      "Detector determinista de patrones de hemorragia, flemones y traumatismo facial",
      "Integracion directa con agendas medicas para asignacion de slots prioritarios"
    ],
    metrics: [
      { label: "Piezas soportadas", value: "52 dientes (FDI)" },
      { label: "Niveles de triage", value: "4 prioridades (P1-P4)" },
      { label: "Tests clinicos", value: "66 passing" }
    ],
    techStack: ["TypeScript 5", "Deterministic State Machines", "Zod", "Vitest"],
    githubUrl: "https://github.com/lionegmanuel/dentflow-clinical-guardrails",
    codeSnippet: `const triageEngine = new ClinicalTriageEngine();

const assessment = triageEngine.evaluateComplaint({
  reportedSymptom: "Caida de bicicleta, diente 11 fracturado con dolor agudo",
  patientAge: 24
});

// Priority P1: Derivacion automatica a guardia odontologica
console.log(assessment.triageLevel); // "P1_EMERGENCY"
console.log(assessment.fdiTooth);    // { quadrant: 1, tooth: 1, name: "Incisivo Central Superior Derecho" }`,
    architectureDiagram: `[Mensaje de Paciente Odontologico]
             │
             ▼
┌──────────────────────────────────────┐
│ DentFlow Clinical Engine             │
│  ├─ FDI Two-Digit Notation Parser    │
│  ├─ Red-Flag Symptom Analyzer        │
│  └─ Urgency Decision Matrix (P1-P4)  │
└──────────────────┬───────────────────┘
                   │
         [Clasificacion de Triage]
          /                     \\
   (P1 Emergencia)         (P2-P4 Rutina)
        /                         \\
┌──────▼──────────────┐   ┌────────▼──────────────┐
│ Guardia Odontologica│   │ Agenda de Consultorio │
└─────────────────────┘   └───────────────────────┘`
  },
  {
    id: "docuflow-b2b",
    title: "DocuFlow B2B",
    subtitle: "Motor de admision y consistencia cruzada documental para automotrices, real estate y fintechs",
    category: "b2b-intake",
    categoryLabel: "Enterprise Intake",
    badge: "Anti-Fraud Engine",
    problem: "La admision de creditos y alquileres colapsa por revision manual de DNI, CUIT, recibos y facturas, sufriendo fraudes por suplantacion.",
    solution: "Validacion cruzada determinista con algoritmo de modulo 11, similitud nominal multivariable y scoring de integridad (0 a 100).",
    architectureHighlights: [
      "Cruce automatico de paridad entre DNI declarado y cuerpo del CUIT",
      "Validacion matematica de digito verificador modulo 11 de AFIP/ARCA",
      "Calculo de ratio de endeudamiento (cuota maxima 35% del ingreso neto)"
    ],
    metrics: [
      { label: "Tiempo de evaluacion", value: "<8ms" },
      { label: "Score de integridad", value: "0 a 100 puntos" },
      { label: "Tests unitarios", value: "12 passing" }
    ],
    techStack: ["TypeScript 5", "Zod", "Modulo 11 Algorithm", "Vitest", "tsup"],
    githubUrl: "https://github.com/lionegmanuel/docuflow-b2b",
    codeSnippet: `const evaluator = new IntakeEvaluator();

const report = evaluator.evaluate({
  intakeId: "INTAKE-2026-902",
  applicant: { fullName: "Manuel Lione", dni: "38495021", cuit: "20-38495021-4" },
  taxDoc: { taxId: "20-38495021-4", legalOrFullName: "Manuel Lione", taxStatus: "ACTIVE" },
  incomeDoc: { documentType: "PAYSTUB", netIncomeAmount: 3500000, periodDate: "2026-08-31" }
});

console.log(report.status); // "APPROVED"
console.log(report.score);  // 100/100`,
    architectureDiagram: `[DNI / Pasaporte]  [Constancia CUIT]  [Recibo Sueldo]  [Factura Servicios]
       │                   │                │                 │
       └───────────────────┴───────┬────────┴─────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────┐
│ DocuFlow B2B Cross-Consistency Engine                       │
│  ├─ R1: Paridad DNI vs CUIT Fiscal (Severidad Critica)       │
│  ├─ R2: Matching Nominal Multivariable (Jaro-Winkler)        │
│  ├─ R3/R4: Validacion de Frescura Temporal (90 y 60 dias)   │
│  ├─ R5: Digito Verificador Modulo 11 AFIP/ARCA              │
│  └─ R6: Ratio Cuota / Capacidad de Pago                     │
└──────────────────────────────┬──────────────────────────────┘
                               │
                [Dictamen de Auditoria Final]
                ├─ APPROVED (Score >= 85)
                ├─ FLAGGED_FOR_MANUAL_REVIEW (Score 60-84)
                └─ REJECTED (Score < 60 o Fallo Critico)`
  },
  {
    id: "optica-pasteur",
    title: "Optica Pasteur Showroom",
    subtitle: "Showroom digital comercial pre-renderizado con 32 rutas y checkout directo a WhatsApp",
    category: "retail-ssg",
    categoryLabel: "Commercial SSG",
    badge: "32 Static Routes",
    problem: "Comercios tradicionales pierden ventas al enviar a clientes a carritos de compra lentos y despersonalizados que no convierten en Latinoamerica.",
    solution: "Catalogo estatico ultra-veloz con generacion SSG, filtrado instantaneo en cliente y conversion guiada al canal de ventas por WhatsApp.",
    architectureHighlights: [
      "Pre-renderizado completo con Next.js App Router (0ms latencia de base de datos)",
      "Carrito offline-first persistido con sincronizacion de stock y prescripcion",
      "Formateador automatico de pedidos con mensajes enriquecidos para WhatsApp"
    ],
    metrics: [
      { label: "Rutas compiladas", value: "32 paginas SSG" },
      { label: "Core Web Vitals", value: "100/100 Lighthouse" },
      { label: "Canal de cierre", value: "WhatsApp Directo" }
    ],
    techStack: ["Next.js 15", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/lionegmanuel/optica-pasteur",
    codeSnippet: `export async function generateStaticParams() {
  const categories = ["recetados", "sol", "contacto", "infantiles"];
  return categories.map((slug) => ({ slug }));
}`,
    architectureDiagram: `[Catalogo de Productos]
          │
          ▼ (Build Time SSG)
┌──────────────────────────────────────┐
│ Next.js 15 Static Showroom (32 Pags) │
│  ├─ Visualizador de Armazones        │
│  ├─ Carrito Offline-First            │
│  └─ WhatsApp Order Formatter         │
└──────────────────┬───────────────────┘
                   │
                   ▼ (1-Click Order)
          [WhatsApp Comercial]`
  },
  {
    id: "apk-security-validator",
    title: "APK Security Validator",
    subtitle: "Suite de analisis estatico de seguridad y descompilacion automatizada para aplicaciones Android",
    category: "appsec",
    categoryLabel: "AppSec & Mobile",
    badge: "PowerShell + Jadx",
    problem: "Auditar la postura de seguridad de ejecutables Android requiere procesos manuales lentos de descompilacion y analisis de permisos.",
    solution: "Automatizacion en PowerShell y Jadx que desensambla el bytecode, audita el AndroidManifest y detecta fugas de credenciales y endpoints.",
    architectureHighlights: [
      "Pipeline automatizado de descompilacion con Jadx y extraccion de DEX a Java",
      "Escaneo heuristico de tokens API, llaves privadas y esquemas HTTP inseguros",
      "Emision de reportes estructurados para auditorias de ciberseguridad"
    ],
    metrics: [
      { label: "Tiempo de auditoria", value: "<15s por APK" },
      { label: "Patrones detectados", value: "+30 vulnerabilidades" },
      { label: "Herramienta", value: "Jadx Engine" }
    ],
    techStack: ["PowerShell Core", "Jadx Decompiler", "Android Security", "Static Analysis"],
    githubUrl: "https://github.com/lionegmanuel/APK-security-validator",
    codeSnippet: `# Descompilacion y analisis de seguridad
.\\Invoke-ApkSecurityScan.ps1 -ApkPath ".\\target-app.apk" -Decompile -AuditManifest`,
    architectureDiagram: `[Archivo APK Objetivo]
          │
          ▼
┌──────────────────────────────────────┐
│ APK Security Validator               │
│  ├─ Jadx Bytecode Decompilation      │
│  ├─ AndroidManifest Perms Inspection │
│  ├─ Hardcoded Secrets Pattern Match  │
│  └─ Insecure Network Security Config │
└──────────────────┬───────────────────┘
                   │
                   ▼
       [Reporte de Vulnerabilidad]`
  }
];
