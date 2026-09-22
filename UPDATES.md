# UPDATES - Registro de sesiones de trabajo (architect-portfolio)

Changelog contextual de este repo. Cada entrada resume que se hizo, que se verifico y que quedo pendiente. Entradas mas recientes arriba.

Retencion activa (segun `CLAUDE.md`): se conservan solo las ultimas 3 secciones de dia.

## **NO ELIMINAR**

### Pendientes abiertos del portfolio

- Verificacion visual responsive en navegador real (desktop y mobile): el build y los tipos estan validados, pero no se hizo revision visual con captura.
- Confirmar con Manuel las metricas comerciales del hero y de las 4 tarjetas de sistemas ($299k de pipeline, $3.1M recuperados, 1.436 citas, 213 deals, +35% de ventas fuera de hora): hoy estan cargadas tal cual las dicto el prompt de rediseno, sin cruce contra los repos ni contra los paneles reales.
- Confirmar que los casos sectoriales de `src/data/velinex.ts` coinciden con la fuente de verdad (`VELINEX - BASES Y FUNDACIONES DEL NEGOCIO`), en especial el 78% de asistencia y las +40 horas semanales de la clinica.
- Definir dominio final (`lionegmanuel.dev` figura en canonical y Open Graph) y target de deploy (Vercel, Cloudflare Pages o Netlify).

---

## 2026-09-22 - Giro a landing page de conversion: resultados de negocio sobre jerga tecnica

### Sesion 1 - Rediseno comercial, capturas reales y dossier PDF

**Que se hizo**

- **Reposicionamiento completo del copy**: el sitio pasa de vender ingenieria a vender transformacion operativa y rentabilidad. La tecnica queda como respaldo de solidez, no como mensaje principal. Todo el copy con tildes normativas y signos de apertura.
- **Activos visuales integrados**: se copiaron las capturas reales desde `D:\Documents\MANUEL\DEV\proyectos\` a `public/` y el dossier como `public/dossier-manuel-lione.pdf` (2.5 MB), enlazado desde el hero y desde el footer.
- **Optimizacion de imagenes**: las 6 capturas PNG (4.3 MB en total) se convirtieron a WebP con Pillow (ancho maximo 1600px, calidad 82). Quedaron en 431 kB totales, una reduccion del 90%. Los PNG originales se eliminaron de `public/`.
- **`src/data/projects.ts` reescrito**: de 7 motores tecnicos a **4 sistemas de alto impacto** (Operius OS, DentFlow CRM, Agente Comercial Blindado, Financial Stream). Nueva interfaz `ProjectData` con `image`, `gallery`, `painPoint` (el dolor del negocio), `transformation` (que cambia en la operacion), 4 metricas de negocio por sistema y `techBacking`. Se eliminaron `category`, `codeSnippet` y `metricsProvenance`.
- **Tarjetas y modal nuevos** (`src/main.ts`): tarjeta con captura a sangre arriba, badge de resultado flotante sobre la imagen, grilla 2x2 de metricas y boton "Ver transformacion y arquitectura". El modal suma captura grande, fila de 4 metricas, panel rojo "El dolor del negocio" contra panel verde "La transformacion implementada", decisiones de arquitectura, respaldo tecnico, flujo del sistema y galeria (Operius aporta 2 vistas extra).
- **`index.html` reescrito**: nuevo title y meta description; hero con badge de rentabilidad, H1 de cuellos de botella, doble CTA (sistemas / dossier PDF) y barra de 4 resultados auditables; seccion `#sistemas` sin tabs de filtro (ya no hay categorias); playground con encabezado de negocio ("Fiabilidad comprobada"); seccion `#velinex` reencuadrada como "La tesis de transformacion: el techo operativo" con los 5 activos reescritos.
- **Footer unificado a un solo objetivo**: se eliminaron las dos vias ("Soy dueno" vs "Soy CTO"). Ahora hay una sola propuesta con copiar email, LinkedIn, descarga del dossier y formulario con confirmacion visual en pantalla (el form se oculta y aparece un bloque de exito tras disparar el mailto).
- **`src/style.css`**: se borraron los estilos muertos de `.filter-tabs` / `.tab-btn`; se agregaron `.project-shot` (imagen a sangre con degradado y zoom sutil al hover), `.project-shot-badge`, `.modal-shot`, `.modal-metrics`, `.modal-gallery`, `.contact-direct-actions` y `.contact-success`; metricas de tarjeta a 2 columnas y breakpoints ajustados.
- **`src/icons.ts`**: iconos `download` y `sparkles` agregados. **`src/data/velinex.ts`**, `tech-stack.ts` y `playground-scenarios.ts`: tildes normativas aplicadas en todo el copy.

**Verificado**

- `npx tsc --noEmit`: sin errores, cero `any`.
- `npm run build`: OK. HTML 19.39 kB (5.18 kB gzip), CSS 26.64 kB (5.49 kB gzip), JS 39.48 kB (13.89 kB gzip).
- `dist/` contiene las 6 capturas WebP, el dossier PDF y `manuel.png`. Los PNG viejos fueron eliminados del build.
- Cero em dash en `index.html` y en todo `src/`.

**Pendiente**

- Sin revision visual en navegador: no se abrio el sitio ni se tomaron capturas. Ver la lista de "Pendientes abiertos del portfolio" arriba.
- `manuel.png` (198 kB) sigue sin optimizar; se puede pasar a WebP con el mismo criterio que las capturas.

---

### Sesion 2 - Publicacion

**Que se hizo**

- Commit y push a `origin/main` de todo el giro a landing page de conversion: copy comercial, las 4 tarjetas de sistemas con capturas reales, las 6 imagenes WebP optimizadas, el dossier PDF y el footer unificado.
- `dist/` sigue fuera del control de versiones (`.gitignore`): el deploy se genera desde `npm run build`.

---

## 2026-09-20 - Rediseno total del portfolio: identidad Velinex, playground interactivo y pulido visual

### Sesion 1 - Implementacion del Prompt Maestro de rediseno

**Que se hizo**

- Identidad corregida: "Co-Fundador" reemplazado por **Fundador y Director General** de Velinex y **CTO** de FIXU AI en `index.html` y `ESPECIFICACION_TECNICA.md`.
- Playground interactivo de guardrails: `src/guardrails/engine.ts` (10 reglas tipadas, normalizacion anti-evasion, redaccion de PII, score de riesgo, dictamen `BLOCKED` / `SANITIZED` / `ALLOWED`, latencia con `performance.now()` promediada sobre 2.000 pasadas), `src/playground.ts` (textarea editable, selector de 4 escenarios, `Ctrl+Enter`) y `src/data/playground-scenarios.ts`.
- Seccion Velinex reescrita en `src/data/velinex.ts`: los 5 Activos Empresariales, 4 casos de transformacion sectorial (concesionaria, clinica, real estate, optica) y el compromiso Done-For-You de 4 semanas.
- Tesis del techo operativo (principio de Diego Abreu / Bases de Negocio v9.1) y CTA de doble via (duenos de PyMEs con `cal.com/velinex/velinex-auditoria`, y CTOs/equipos de ingenieria para Q4 2026).
- Stack reagrupado en 4 capas de responsabilidad (`src/data/tech-stack.ts`).
- Campo `metricsProvenance` por proyecto en `src/data/projects.ts` y bloque "Origen de las metricas" en el modal, para explicar de donde salen los numeros (suites Vitest y benchmarks en memoria).
- Pulido visual: iconos SVG inline (`src/icons.ts`) para GitHub, LinkedIn, YouTube, Instagram, TikTok y Mail; pill de copiar email con feedback `Copiado` (sin toast); tooltips en redes; modal con cierre por Escape; `escapeHtml` compartido (`src/dom.ts`); skip-link, `aria-label`s y `prefers-reduced-motion`.
- `src/style.css`: base conservada, capa nueva completa y breakpoints a 1000 / 900 / 560px.

**Verificado**

- `npx tsc --noEmit`: sin errores, cero `any`.
- `npm run build`: OK (HTML 22.4 kB, CSS 25 kB, JS 45.3 kB / 15.85 kB gzip).
- Motor de guardrails probado contra los 4 escenarios: 4/4 con el dictamen esperado, 0.004 a 0.011 ms por pasada.
- Cero em dash en codigo y copy.

**Pendiente**

- Ver la lista de "Pendientes abiertos del portfolio" arriba.

---

### Sesion 2 - Documentacion de contexto y publicacion

**Que se hizo**

- Se creo este `UPDATES.md` y se agrego la seccion de contexto entre sesiones a `CLAUDE.md`, siguiendo el patron del repo `operius`.
- Commit y push de todo el rediseno a `origin/main`.
