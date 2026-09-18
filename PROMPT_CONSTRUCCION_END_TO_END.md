# PROMPT DE CONSTRUCCION END-TO-END: Manuel Lione - Principal Systems Architect Portfolio

## Instruccion para el Agente / Ingeniero Ejecutor

Sos el Lead Frontend & Systems Architect a cargo de construir e implementar completamente el repositorio `architect-portfolio`.
Tenés control total y autonomía absoluta ("dangerously mode"). No debes detenerte a pedir confirmación, no debes hacer preguntas intermedias ni solicitar aprobaciones de planes. Ejecutá de 0 a 100 hasta dejar la aplicación completamente construida, funcional, con diseño responsive de clase mundial, sin errores de tipos y lista para desplegar en producción.

---

### Contexto y Requerimientos de Construccion

1. **Lectura y Fundaciones**:
   - Lee `CLAUDE.md` para las directivas de ejecucion, estandares tipograficos (prohibido em dash) y ahorro de tokens.
   - Lee `ESPECIFICACION_TECNICA.md` para la arquitectura de las 9 secciones, el sistema de diseño y los componentes interactivos.
   - Lee `AUDITORIA_PROYECTOS_Y_ACTIVOS.md` para conocer los datos exactos, metricas comprobables y la narrativa de cada proyecto de Manuel Lione.

2. **Alcance a Desarrollar**:
   - **Estructura del Proyecto**: Configurar un proyecto moderno y ligero con Vite, TypeScript estricto, Tailwind CSS y Lucide Icons (o SVG optimizados).
   - **Diseño Visual**: Tema oscuro premium (Linear/Vercel style), paleta `#060911` con acentos `#38bdf8` y `#6366f1`, microinteracciones fluidas, efectos de glassmorphism y bordes con iluminacion reactiva al hover.
   - **Secciones Obligatorias**:
     1. Sticky Navbar con estado de disponibilidad en vivo ("Available for Senior Contracts & Advisory"), enlaces a secciones y CTA directo.
     2. Hero Section con titular de impacto, metricas reales en vivo (>400 tests passing, <4.5ms latencia, 10k tx/seg, 32 rutas SSG), y botones duales de exploracion.
     3. Pilares de Arquitectura (Determinismo, Reactive Streams, Algoritmos Sub-milisegundo, ROI y Dominio Operativo).
     4. Showcase de los 7 Motores de Produccion (`whatsapp-agent-guardrails`, `financial-stream-dashboard-core`, `fuzzy-reconciliation-engine`, `dentflow-clinical-guardrails`, `docuflow-b2b`, `optica-pasteur`, `APK-Security-Validator`) con filtrado por categoria y modal interactivo de arquitectura con snippets de codigo y diagramas.
     5. Widget interactivo de Benchmark en vivo (permite al visitante correr una prueba de latencia o ejecucion algoritmica en el navegador para ver los microsegundos de respuesta).
     6. Seccion de Liderazgo Comercial & Negocio (Velinex como agencia e integradora, casos reales con concesionarias, constructoras y clinicas, y redireccion con UTMs a `velinex.digital`).
     7. Matriz interactiva de Stack Tecnologico agrupada por capas de ingenieria.
     8. Sobre Manuel Lione (Trayectoria, UTN Cordoba, mentalidad de entrega continua).
     9. Footer de alta conversion con formulario de contacto, enlace para copiar email en un clic, y enlaces a LinkedIn, GitHub, YouTube y WhatsApp.

3. **Criterios de Aceptacion Innegociables**:
   - Compilacion de produccion limpia con `npm run build` sin errores ni advertencias criticas.
   - Cero uso de `any` en TypeScript (`tsc --noEmit` exit code 0).
   - Cero uso del caracter em dash en comentarios, codigo o textos (utilizar guiones cortos "-", dos puntos o parentesis).
   - 100% responsive (mobile, tablet y desktop).
   - Todos los links a repositorios de GitHub (`github.com/lionegmanuel`), LinkedIn, YouTube y Velinex deben estar correctamente configurados y activos.
