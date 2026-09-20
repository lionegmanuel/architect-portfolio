# CLAUDE.md: architect-portfolio

Este archivo es el manual operativo central que Claude lee al iniciar cualquier sesion en este repositorio. Define las reglas de ejecucion, estandares de ingenieria y directivas de ahorro maximo de tokens.

---

## 1. Directivas Globales de Ejecucion ("Dangerously Mode")

1. **Modo 100% Autonomo Permanente**:
   - Trabajar de forma continua y sin interrupciones de 0 a 100 hasta completar la tarea o el sistema.
   - Prohibido detenerse a pedir confirmaciones, aclaraciones, aprobaciones o permisos intermedios.
   - Resolver cualquier ambiguedad tecnica tomando de forma autonoma la decision estandar mas robusta y continuar de inmediato.
   - No narrar planes antes de ejecutar: ejecutar directamente las tool calls.

2. **Cero Stoppers e Interrupciones**:
   - Ante errores de compilacion, linter o assets: inspeccionar la traza de error, corregir el codigo y reintentar de forma autonoma.
   - El agente nunca interrumpe el flujo. Solo al finalizar la ejecucion completa se documenta el estado final, los resultados y las URLs de vista previa.

3. **Reglas Tipograficas y de Codigo Inquebrantables**:
   - **Prohibido el uso del guion largo (em dash)**: En todo comentario, texto, documentacion o codigo, utilizar unicamente guiones cortos "-", dos puntos o parentesis.
   - **TypeScript Estricto**: Cero uso de `any`. Todo componente, dato de proyecto, evento y helper debe estar tipado rigurosamente.

---

## 2. Reglas de Ahorro Maximo de Tokens & Eficiencia

1. **Contexto y Lectura**:
   - Antes de escribir codigo: inspeccionar `package.json`, la estructura de directorios y los archivos de especificacion.
   - Leer solo lo estrictamente necesario con rangos de linea cuando los archivos superen 150 lineas.
   - No releer archivos que ya se leyeron en la sesion salvo que hayan cambiado.
   - Paralelizar tool calls independientes.

2. **Edicion Quirurgica**:
   - Reemplazos precisos de bloques de codigo sobre reescritura masiva de archivos.
   - Modularizar componentes para evitar archivos monoliticos inmanejables.

3. **Comunicacion Directa (Cero Fluff)**:
   - Cero charla aduladora ("Excelente pregunta", "Entendido", "A continuacion presento").
   - Respuestas concisas, tecnicas y orientadas a resultados.
   - No imprimir fragmentos extensos de codigo en la conversacion si ya fueron aplicados al disco.

4. **Validacion Autonoma en Consola**:
   - Tras modificar codigo: ejecutar verificacion de tipos (`npx tsc --noEmit`) y build de produccion (`npm run build`) antes de dar por finalizada la tarea.
   - Correr comandos siempre en modo no interactivo (`-y`, `--yes`).

---

## 3. Arquitectura y Stack Tecnologico

- **Stack**: Vite + TypeScript 5.x + Tailwind CSS (o CSS Modules) + Lucide Icons.
- **Rendimiento**: Cero frameworks pesados innecesarios; carga instantanea (<1s en Core Web Vitals), 100/100 en Google Lighthouse.
- **Deploy Target**: Vercel, Cloudflare Pages o Netlify con build estatico.
- **Diseño**: Dark theme premium para ingenieria (paleta de grises profundos, acentos cian y azul electrico, bordes sutiles, microinteracciones, modales para arquitectura de proyectos y badges de tests).

---

## 4. Contexto entre sesiones (`UPDATES.md`)

- Al iniciar una conversacion nueva sobre este proyecto: revisar `UPDATES.md` (mismo directorio que este archivo) para confirmar contexto previo: cambios recientes, pendientes abiertos y estado de la ultima sesion.
- `UPDATES.md` es de escritura explicita unicamente: solo se crea, escribe o actualiza cuando el usuario lo pide directamente. Nunca modificarlo de forma proactiva ni "de paso" al terminar otra tarea.
- La retencion se basa en **dias**: mantener siempre las ultimas **3 secciones de dia**. Al agregar un dia nuevo que supere ese total, eliminar la seccion del dia mas antiguo completa.
- **Cada seccion** representa un unico dia (`## AAAA-MM-DD - titulo`). Dentro puede haber una cantidad ilimitada de sesiones; nunca truncar ni fusionar sesiones de un mismo dia.
- Cada sesion lleva su propio titulo corto (`### Sesion N - ...`), ordenadas de la mas antigua a la mas reciente, separadas por una linea `---`.
- El bloque `## **NO ELIMINAR**` (pendientes abiertos) no cuenta para la retencion y solo se borra si el usuario lo pide.
