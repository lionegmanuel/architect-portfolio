# PROMPT MAESTRO DE IMPLEMENTACIÓN: ARQUITECTURA, VENTA Y REDISEÑO TOTAL DEL PORTFOLIO (MANUEL LIONE)

**Destinatario:** Ingeniero Full-Stack Senior & Diseñador de Interfaces Web
**Contexto de entrada:** Cero conocimiento previo. Este documento contiene el 100% del contexto técnico, de negocio, estratégico y de diseño necesario para reconstruir y dejar en nivel de clase mundial el portfolio interactivo de Manuel Lione.
**Ubicación del proyecto:** `D:\Documents\MANUEL\DEV\architect-portfolio`
**Stack del proyecto:** TypeScript 5.7+, Vite 6+, HTML5 semántico, CSS3 moderno con variables y tokens de diseño oscuros de alta gama.
**Repositorio de Negocio Oficial (Fuente de Verdad):** `D:\Documents\MANUEL\Velinex-Engineering-Bussines`
**Repositorios Técnicos de Código:** `D:\Documents\MANUEL\DEV`

---

## 1. MISIÓN Y PROPÓSITO DEL PROYECTO

El objetivo es transformar el portfolio de Manuel Lione en una herramienta de venta de alto impacto que posicione su doble perfil:

1. **Principal AI Systems Architect & Full-Stack Engineer:** Capaz de diseñar e implementar motores deterministas sub-5ms, streaming reactivo de alta frecuencia, algoritmos financieros y sistemas tolerantes a fallos.
2. **Fundador y Operador Único de Velinex:** Estratega de negocios que traduce ingeniería de software en flujo de caja, transformación operativa de procesos comerciales y eliminación de cuellos de botella para empresas.

### Reglas Innegociables de Estilo y Comunicación (Velinex Standard):

- **Cero guiones largos ("—" em dash):** Prohibido terminantemente su uso en copy, títulos, código o comentarios. Usar guiones cortos "-", comas, dos puntos o puntos seguidos.
- **Tono directo, técnico, seguro y de negocios:** Sin palabras vacías ("apasionado", "gurú", "entusiasta"). Venta por evidencia matemática, código abierto auditable y resultados de negocio concretos.
- **Claridad para perfiles no técnicos:** Todo decisor de negocios (CEO, dueño de PyME, inversor) debe entender en los primeros 5 segundos qué problema resuelve Manuel y qué transformación genera, sin perder el rigor técnico que valida su nivel senior ante un CTO o Tech Lead.

---

## 2. AUDITORÍA CRÍTICA DE ERRORES Y PUNTOS A RESOLVER (CHECKLIST DE OBLIGACIONES)

### Punto 1: Identidad y Liderazgo de Velinex (Corrección Crítica)

- **Error previo:** Decía erróneamente "Co-Fundador".
- **Corrección estricta:** Manuel Lione es el **Fundador y Director General** (única persona que lidera y gestiona Velinex).
- **Rol en FIXU AI:** Director de Tecnología / CTO.

### Punto 2: Autenticidad de Datos y Métricas de Producción

- **Origen real de las métricas:** Las métricas del portfolio no son números inventados, provienen de los suites de pruebas automatizadas y benchmarks de los repositorios en `D:\Documents\MANUEL\DEV`:
  - `whatsapp-agent-guardrails`: **194/194 tests pasando en Vitest**, latencia determinista media `<4.2ms`.
  - `fuzzy-reconciliation-engine`: **45/45 tests pasando**, procesamiento de **10.000 transacciones en ~1.025ms**.
  - `financial-stream-dashboard-core`: **30/30 tests pasando**, streaming UI de **60 updates/segundo con Server-Sent Events (SSE)** sin layout shift.
  - `dentflow-clinical-guardrails`: **66/66 tests pasando**, parser de notación dental FDI con **52 piezas dentales** y 4 niveles de triage (P1 a P4).
  - `docuflow-b2b`: **12/12 tests pasando**, admisión documental antifraude con verificación de CUIT módulo 11 y matching nominal en `<8ms`.
  - `optica-pasteur`: **32 rutas SSG pre-renderizadas** en Next.js App Router con catálogo a WhatsApp.
- **Ajuste:** Explicar explícitamente al visitante de dónde salen estos datos (suites de Vitest ejecutables y benchmarks en memoria).

### Punto 3: Filosofía Refinada y Enfocada en la Venta

- El visitante compra **Transformación y Resultados**, no líneas de código.
- Usar el principio maestro de Diego Abreu y las Bases de Negocio de Velinex (v9.1):
  - _"Las empresas no tienen un problema de demanda; llegan a un techo operativo porque su atención y sus ventas dependen de personas físicas disponibles para contestar."_
  - Velinex y la arquitectura de Manuel eliminan ese cuello de botella reemplazando tareas manuales por sistemas deterministas que operan 24/7.

### Punto 4: Rediseño del "Simulador / Playground de Rendimiento"

- **Falla actual:** El payload JSON era un bloque estático de solo lectura que causaba frustración al usuario.
- **Nueva solución interactiva:** Convertirlo en un **Playground Interactivo en Vivo**:
  - Un `<textarea>` editable donde el usuario pueda escribir o modificar el mensaje entrante (o un selector con 3 payloads preconfigurados: `Ataque de Inyección de Prompt / Jailbreak`, `Fuga de Precios Confidenciales`, `Consulta Normal de Venta`).
  - Botón **"Ejecutar Pipeline Determinista"**.
  - Medición de latencia real en el navegador (`performance.now()`), sanitización del texto con reglas en JavaScript/TypeScript y salida estructurada en JSON con dictamen (`BLOCKED`, `SANITIZED`, `ALLOWED`) y tiempo de respuesta en milisegundos.

### Punto 5: Sección de Velinex: Transformación Operativa Radical

- Conectar con la Fuente de Verdad: `D:\Documents\MANUEL\Velinex-Engineering-Bussines\Documentación Oficial - VELINEX\VELINEX · BASES Y FUNDACIONES DEL NEGOCIO (Nicho PyMEs Multirubro).md`.
- No vender "chatbots" ni "agentes de IA". Vender **Sistema Comercial de Transformación Operativa**:
  - **Los 5 Activos Empresariales que adquiere el cliente:**
    1. **Disponibilidad Infinita:** Atiende a cualquier hora, los 365 días del año.
    2. **Velocidad Infinita:** Contactabilidad en menos de 30 segundos; el primero que responde, se queda con la venta.
    3. **Consistencia Absoluta:** Protocolos estrictos sin depender del humor, cansancio o rotación del personal.
    4. **Información Perfecta:** Trazabilidad de cada lead, tasa de conversión y puntos de fuga con datos reales.
    5. **Capacidad Infinita:** Escala de 10 a 500 consultas diarias sin incrementar costos fijos ni sumar caos humano.
  - **El Compromiso:** Implementación completa llave en mano (Done-For-You) en 4 semanas exactas, integrada sobre las herramientas actuales de la empresa, con garantía de puesta en marcha.

### Punto 6: Casos de Negocio en Cartera (100% Reales y Atractivos)

- En lugar de la tarjeta genérica "Casos Reales en Cartera", presentar los **Casos de Transformación Sectorial** documentados en Velinex:
  1. **Concesionaria Automotriz / Venta de Vehículos:** Tasa de contacto sub-30s. Recupero sistemático de consultas de sábados a la noche y domingos que antes se perdían.
  2. **Clínica de Salud / Especialidades Odontológicas:** Filtro de urgencias y agenda automatizada de turnos. Aumento de asistencia efectiva al sillón al 78% y más de 40 horas semanales recuperadas por recepción.
  3. **Desarrollos Inmobiliarios / Real Estate:** Filtrado previo de consultas por presupuesto y zona de interés; derivación de prospectos calificados con visita pactada para el asesor comercial.
  4. **Retail Especializado / Óptica:** Showroom digital ultrarrápido con despacho de pedidos estructurados a WhatsApp.

### Punto 7: Matriz de Stack Tecnológico de Precisión

- Agrupar por capas de responsabilidad arquitectónica:
  - **Core Runtime & Lenguajes:** TypeScript 5.7+ (Strict Mode, no `any`), Node.js, Python 3.12, SQL moderno.
  - **Frontend & Interfaces de Alta Frecuencia:** React 19, Next.js 15 (App Router, Server Components), Vite, Tailwind CSS, SSE (Server-Sent Events).
  - **Determinismo, Algoritmos & Seguridad:** Zod 3, Vitest, State Machines deterministas, Parsers AST, Levenshtein/Jaro-Winkler, Módulo 11.
  - **Infraestructura & Datos:** PostgreSQL, Supabase, Redis, Docker, Cloudflare Workers / Edge Runtimes.

### Punto 8: Trayectoria Profesional y Propuesta de Valor Personal

- Eliminar la redacción tipo currículum aburrido.
- **Narrativa de Posicionamiento:**
  - _Manuel Lione:_ Ingeniero de Sistemas y Arquitecto de Software enfocado en la intersección entre sistemas deterministas de misión crítica y rentabilidad comercial.
  - Diseña motores de software sin tolerancia a errores de alucinación para entornos de alta exigencia, y aplica esa misma disciplina de ingeniería al crecimiento de empresas mediante Velinex y FIXU AI.

### Punto 9: Llamado a la Acción (CTA) de Doble Vía de Negocio

- Separar claramente las dos vías de contratación según el avatar:
  - **Vía 1: Dueños de Empresas / PyMEs:** _"Eliminemos el cuello de botella operativo de tu negocio. Agendar Diagnóstico Estratégico en Velinex (cal.com/velinex/velinex-auditoria)."_
  - **Vía 2: CTOs, Startups & Equipos de Ingeniería:** _"Contratos de arquitectura de sistemas, motores deterministas y consultoría técnica especializada para Q4 2026."_

### Punto 10: Pulido Visual, Iconografía SVG y Eliminación de Amateurismos

- **Redes Sociales:** Sustituir los placeholders de texto ("GH", "LI", "YT", "IG", "TT") por **iconos vectoriales SVG limpios y nítidos** (GitHub, LinkedIn, YouTube, Instagram, X/Twitter, Mail).
- **Copiar Email:** Eliminar textos planos como "Click para copiar email". Reemplazar por un componente elegante tipo pill o botón con icono SVG de portapapeles, feedback háptico/visual (`Copiado ✓`) y tooltip minimalista.
- **Tipografía y Jerarquía:** Inter / Geist Mono o fuentes del sistema de alta legibilidad, espaciado generoso, bordes sutiles (`rgba(255,255,255,0.08)`), microinteracciones y paleta sobria (fondos profundos `#060911`, acentos cian/esmeralda `#38bdf8` / `#10b981`).

---

## 3. INSPIRACIÓN Y PATRONES DE REFERENCIA DE DEV PORTFOLIOS TOP (REDDIT r/webdev)

Analizando la discusión de Reddit (`https://www.reddit.com/r/webdev/comments/1g46qod/favourite_dev_portfolios/`) y los portfolios más elogiados por la comunidad de desarrolladores e ingenieros seniors (como Lee Robinson, Paco Coursey, Bruno Simon, Emil Kowalski, Catalin Pit):

1. **Claridad Inmediata sobre la Pirotecnia:** Los mejores portfolios de ingeniería no usan efectos 3D que tardan 10 segundos en cargar o rompen el scroll. Tienen carga instantánea (<1s), navegación limpia y permiten que el visitante evalúe el calibre técnico y el código en menos de un minuto.
2. **"Show, Don't Tell" con Componentes Vivos:** En lugar de capturas estáticas, los proyectos destacados tienen demostraciones funcionales (el playground interactivo de guardrails, los benchmarks medidos en tiempo real).
3. **Casos de Estudio con Estructura Problema -> Arquitectura -> Métrica:** Cada proyecto explica qué dolor de negocio o cuello de botella existía, cómo se modeló la solución y cuál fue el resultado numérico medible.
4. **Respeto Absoluto a la Ergonomía Web:** Accesibilidad semántica, contraste nítido, responsive impecable en móviles y botones de acción evidentes.

---

## 4. INSTRUCCIONES DE EJECUCIÓN PARA EL AGENTE

1. **Inspeccionar los archivos clave del portfolio:**
   - `D:\Documents\MANUEL\DEV\architect-portfolio\index.html`
   - `D:\Documents\MANUEL\DEV\architect-portfolio\src\main.ts`
   - `D:\Documents\MANUEL\DEV\architect-portfolio\src\style.css`
   - `D:\Documents\MANUEL\DEV\architect-portfolio\src\data\projects.ts`
   - `D:\Documents\MANUEL\DEV\architect-portfolio\src\data\tech-stack.ts`
2. **Actualizar los datos de proyectos y negocio:**
   - Reemplazar toda mención de "Co-Fundador" por "Fundador y Director General".
   - Integrar la narrativa completa de los 5 Activos Empresariales de Velinex.
   - Actualizar los casos de transformación real en concesionarias, clínicas, real estate y retail.
3. **Implementar el Playground Interactivo de Guardrails:**
   - Crear la interfaz de prueba en vivo con textarea editable y selector de escenarios.
   - Cablear la lógica en TypeScript para analizar en tiempo real el input con detección determinista de inyección, keywords bloqueadas y cálculo de latencia con `performance.now()`.
4. **Modernizar la barra de contacto y redes:**
   - Incorporar iconos SVG profesionales para GitHub, LinkedIn, YouTube, Instagram y Correo.
   - Refactorizar el botón de copiar email con interacción visual moderna.
5. **Validar y Compilar:**
   - Ejecutar `npm run build` o `npx tsc --noEmit` para garantizar cero errores de TypeScript y empaquetado limpio.
   - Verificar la experiencia responsive en desktop y mobile.
