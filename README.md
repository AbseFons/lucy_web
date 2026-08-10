# Tú y yo

Web interactiva de Absé y Lucy.

## Stack
- React
- Vite
- TypeScript
- Framer Motion
- Lucide React
- date-fns

## Ejecutar

```bash
npm install
npm run dev
```

## Estado actual
- Pantalla de entrada: “Lucy, tengo algo para ti.”
- Paleta visual completa
- Mobile first + composición especial para escritorio
- Intro “Tú y yo”
- Capítulo 2016
- Sección narrativa de 2017 / 2018 / 2025 / 26-03-2026
- Momento especial del 14-05-2026
- Contador dinámico exacto de la relación
- Mensaje automático cada día 14
- Sección interactiva **Nuestros 14**
- Desbloqueo por fecha en producción
- Vista previa automática de futuros 14 durante `npm run dev`
- Estado de tarjetas abiertas guardado en `localStorage`
- Barra de progreso de lectura
- Respeto a `prefers-reduced-motion`
- Estructura preparada para fotos, videos, audio y backend futuro

## Personalizar Nuestros 14
Edita:

```text
src/data/anniversaries.ts
```

Cada registro permite definir fecha, título, texto, mensaje y en el futuro una imagen.

> Nota: durante `npm run dev` todos los 14 se muestran desbloqueados para poder probarlos. En el build de producción, cada tarjeta se desbloquea automáticamente cuando llega su fecha.

## Próximos módulos sugeridos
1. Timeline completa con historias concretas por fecha
2. Galería + lightbox
3. “Antes y ahora” (2016 ↔ 2026)
4. Mapa de lugares
5. Playlist
6. Videos entre capítulos
7. Tarro de recuerdos
8. Recuerdos desbloqueables
9. Sobres “Cosas que amo de ti”
10. “Para cuando...”
11. Carta
12. Final especial del 14 de agosto
13. Easter egg


## v0.3 — Galería de recuerdos

Se añadió:

- Galería editorial responsive.
- Filtros: Todas, Favoritas, Citas, Nosotros, Lugares y Detalles.
- Tarjetas de distintos tamaños para evitar una cuadrícula monótona.
- Lightbox de pantalla completa.
- Navegación con flechas del teclado.
- Cierre con `Escape`.
- Navegación anterior/siguiente.
- Soporte para fecha, lugar y nota manuscrita por fotografía.
- Placeholders que no inventan recuerdos.
- Carpeta `public/memories/` lista para agregar imágenes reales.

### Cómo agregar una foto

1. Copia la foto a:

```text
public/memories/
```

2. Abre `src/data/gallery.ts`.

3. En el recuerdo correspondiente agrega:

```ts
src: '/memories/nombre-de-la-foto.jpg',
alt: 'Descripción breve de la fotografía',
date: '14 de junio de 2026',
location: 'Lima',
```

No es obligatorio completar fecha o lugar.
