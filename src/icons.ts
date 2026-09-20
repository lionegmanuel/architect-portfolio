/**
 * Iconos SVG inline. Sin dependencias, sin peticiones extra, nitidos en cualquier DPI.
 * Todos heredan color con `currentColor` y escalan con el tamano de fuente del contenedor.
 */

type IconName =
  | "github"
  | "linkedin"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "x"
  | "mail"
  | "clipboard"
  | "check"
  | "clock"
  | "bolt"
  | "shield"
  | "chart"
  | "layers"
  | "arrowUpRight"
  | "play"
  | "blueprint";

const PATHS: Record<IconName, string> = {
  github:
    '<path fill="currentColor" d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.08.67-3.73-1.3-3.73-1.3-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.49 0-1.21.44-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.07 1.14a10.6 10.6 0 0 1 5.6 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.12 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.2-5.07 5.48.4.34.76 1.02.76 2.06 0 1.49-.02 2.69-.02 3.05 0 .3.2.64.77.53a11.11 11.11 0 0 0 7.56-10.52C23.1 5.33 18.27.5 12 .5Z"/>',
  linkedin:
    '<path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>',
  youtube:
    '<path fill="currentColor" d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"/>',
  instagram:
    '<path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"/>',
  tiktok:
    '<path fill="currentColor" d="M16.6 0h-3.3v16.2a3.06 3.06 0 1 1-2.2-2.94V9.9a6.4 6.4 0 1 0 5.5 6.33V7.9a7.6 7.6 0 0 0 4.4 1.4V6a4.44 4.44 0 0 1-4.4-4.4V0Z"/>',
  x: '<path fill="currentColor" d="M18.9 1.15h3.41l-7.45 8.52L23.6 22.85h-6.86l-5.37-7.03-6.15 7.03H1.8l7.97-9.11L.7 1.15h7.03l4.86 6.43 5.6-6.43Zm-1.2 19.65h1.9L6.4 3.1H4.37L17.7 20.8Z"/>',
  mail: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5h18v11H3z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m3.4 7 8.6 6 8.6-6"/>',
  clipboard:
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M9 4.5h6M9 4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15"/>',
  check:
    '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.5 5 5 10-11"/>',
  clock:
    '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 7v5.2l3.4 2"/>',
  bolt: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M13.2 2 4.5 13.4h6L10 22l9-11.6h-6.2L13.2 2Z"/>',
  shield:
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 2.5 4.5 5.6v6c0 4.6 3.1 8.7 7.5 10 4.4-1.3 7.5-5.4 7.5-10v-6L12 2.5Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m8.8 11.8 2.3 2.3 4.1-4.5"/>',
  chart:
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 20V4m0 16h16"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m7.5 15.5 3.5-4.5 3 2.6 4.5-6"/>',
  layers:
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m12 3 8.5 4.3L12 11.6 3.5 7.3 12 3Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m3.5 12 8.5 4.3 8.5-4.3M3.5 16.7 12 21l8.5-4.3"/>',
  arrowUpRight:
    '<path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7m-7.5-.5H17V14"/>',
  play: '<path fill="currentColor" d="M8 5.2v13.6a.6.6 0 0 0 .92.5l10.6-6.8a.6.6 0 0 0 0-1l-10.6-6.8a.6.6 0 0 0-.92.5Z"/>',
  blueprint:
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.5 4.5h17v15h-17z"/><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M8.5 4.5v15M3.5 9.5h17M14 12.5h6.5"/>'
};

export function icon(name: IconName, size: number = 20): string {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${PATHS[name]}</svg>`;
}

export type { IconName };
