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


## v0.4 — Nuestro pequeño mapa

Se añadió la sección **Nuestros lugares** con un mapa real e interactivo.

### Incluye

- Leaflet + React Leaflet.
- Mapa oscuro integrado con la paleta del proyecto.
- 4 lugares iniciales: Malecón de Barranco, Museo MAC, Residencial San Felipe y Mercado de Magdalena.
- Pines personalizados, sin imágenes PNG externas.
- Click en un pin para hacer `flyTo` y mostrar su ficha.
- Lista alternativa de lugares para móvil y accesibilidad.
- Enlace para abrir la ubicación seleccionada en Google Maps.
- Espacio preparado para foto, fecha y recuerdo por lugar.
- Sin domicilios privados.
- Datos centralizados en `src/data/places.ts` para que agregar lugares nuevos sea sencillo.

### Agregar un lugar

Edita `src/data/places.ts` y añade:

```ts
{
  id: 'nuevo-lugar',
  name: 'Nombre del lugar',
  shortName: 'Nombre corto',
  district: 'Distrito',
  coordinates: [-12.0000, -77.0000],
  addressLabel: 'Referencia pública',
  memory: 'El recuerdo que quieras mostrar.',
}
```

Las coordenadas existentes son puntos públicos de referencia y pueden ajustarse cuando se defina el sitio exacto asociado a cada cita.


## v0.5 — Nuestra banda sonora

Se añadió una sección musical completa y persistente:

- Sección visual **Nuestra banda sonora**.
- Diseño de disco/vinilo animado.
- Lista de canciones seleccionable.
- Reproductor real para archivos locales.
- Play / pausa.
- Canción anterior y siguiente.
- Barra de progreso y búsqueda.
- Control de volumen en escritorio.
- Paso automático a la siguiente canción reproducible.
- Mini reproductor flotante que permanece visible al seguir navegando.
- Portadas opcionales.
- Enlaces opcionales a Spotify y YouTube.
- Soporte para una canción principal.
- Opción preparada para iniciar la canción principal al pulsar **Entrar**.
- Placeholders explícitos mientras todavía no se definan las canciones reales.

### Añadir una canción real

1. Copia el audio a:

```text
public/music/
```

2. Opcionalmente copia una portada cuadrada a la misma carpeta.

3. Edita `src/data/songs.ts`:

```ts
{
  id: 'song-01',
  title: 'Título real',
  artist: 'Artista',
  note: 'Por qué esta canción es importante para ustedes.',
  audioSrc: '/music/cancion-principal.mp3',
  coverSrc: '/music/cancion-principal.webp',
  spotifyUrl: '...',
  youtubeUrl: '...',
  featured: true,
}
```

### Música desde la portada

Cuando exista una canción principal válida, cambia:

```ts
playFeaturedOnEnter: false
```

por:

```ts
playFeaturedOnEnter: true
```

en `src/data/songs.ts`.

La reproducción se intenta después del clic en **Entrar**, evitando depender de autoplay
sin interacción del usuario.


## v0.6 — Tarro de recuerdos

Se añadió una de las interacciones principales de la web:

- Tarro visual construido completamente con CSS.
- Papelitos visibles dentro del frasco.
- Animación al sacar un recuerdo.
- Selección aleatoria.
- **No repite recuerdos hasta haber abierto todos.**
- Progreso `X / N`.
- Persistencia mediante `localStorage`.
- Si Lucy cierra la página y vuelve otro día, sigue recordando cuáles abrió.
- Al completar el tarro aparece **Volver a mezclar**.
- Cinco tipos de papelitos:
  - Recuerdo
  - Pequeño detalle
  - Uno de nuestros casi
  - Una fecha
  - Para ti
- Papel animado a pantalla completa al descubrir un recuerdo.
- Soporte opcional para foto, fecha, firma y anotación manuscrita.
- Escape o clic fuera para cerrar.
- Base preparada para llevar los recuerdos a una base de datos en el futuro.

### Contenido inicial

Hay seis recuerdos sustentados por la historia ya proporcionada:

- 2016.
- 2017.
- 2018.
- febrero de 2025.
- 26 de marzo de 2026.
- 14 de mayo de 2026.

Además existen seis espacios claramente marcados como **Por completar**. No se
inventaron anécdotas personales para esos espacios.

Antes de publicar la web, edita:

```text
src/data/memoryJar.ts
```

y reemplaza esos seis elementos por recuerdos reales.

### Añadir una foto a un papelito

Guarda la imagen en:

```text
public/memory-jar/
```

y agrega:

```ts
imageSrc: '/memory-jar/nombre.webp',
imageAlt: 'Descripción de la fotografía',
```

al objeto correspondiente.


## v0.7 — Cosas que amo de ti

Se añadió una sección completa de sobres interactivos:

- 12 sobres.
- Animación de papel sobresaliendo al pasar el cursor.
- Variantes visuales según el tono.
- Sello con corazón.
- Estado **Abrir / Abierto / 14 AGO**.
- Progreso de sobres abiertos.
- Persistencia mediante `localStorage`.
- Carta animada al abrir un sobre.
- Soporte opcional para fotografía.
- Texto manuscrito opcional.
- Firma de Absé.
- Escape o clic fuera para cerrar.
- El sobre 12 queda bloqueado hasta el **14/08/2026** en producción.
- En desarrollo se desbloquea automáticamente para poder revisarlo antes del regalo.

### Contenido

Hay dos sobres basados estrictamente en la historia ya definida:

1. Haber vuelto a encontrarse después de tantos años.
2. Todos los “casi” que precedieron a la relación.

Los demás están marcados como **Por completar** porque las cualidades específicas de
Lucy deben venir de Absé, no ser inventadas por la aplicación.

Edita:

```text
src/data/loveNotes.ts
```

antes de publicar.

### Añadir fotografía a un sobre

Guárdala en:

```text
public/love-notes/
```

y añade:

```ts
imageSrc: '/love-notes/nombre.webp',
imageAlt: 'Descripción',
```

al objeto correspondiente.


## v0.8 — Carta

Se añadió la sección emocional final de la web:

- Sección oscura y mucho más tranquila que las anteriores.
- Sobre grande independiente de la sección “Cosas que amo de ti”.
- Carta bloqueada hasta el **14/08/2026** en producción.
- Cuenta regresiva automática antes de la fecha.
- En desarrollo (`npm run dev`) la carta permanece desbloqueada para poder revisarla.
- Animación del papel sobresaliendo del sobre.
- Estado leído persistente mediante `localStorage`.
- Experiencia de lectura a pantalla completa.
- Cierre con `Escape`.
- Papel editorial largo, pensado para leer sin distracciones.
- Fecha, destinataria, cuerpo, cierre, firma y postdata configurables.
- La carta inicial utiliza únicamente hechos ya definidos para la historia.

### Editar la carta

Todo el contenido vive en:

```text
src/data/finalLetter.ts
```

La estructura es:

```ts
{
  recipient: 'Lucy',
  dateLabel: '14 de agosto de 2026',
  lockedUntil: '2026-08-14',
  preface: '...',
  paragraphs: [
    '...',
    '...',
  ],
  closing: 'Feliz tres meses, Lucy.',
  signature: 'Absé',
  postscript: '2016 — ∞',
}
```

### Importante

La carta incluida es una **primera versión**, no pretende reemplazar una carta personal.
Antes del regalo conviene añadir al menos 2 o 3 detalles que solo Absé y Lucy conozcan:
una anécdota, una frase interna, una cita concreta o una característica de Lucy.


## v0.9 — Final de la experiencia

Se reemplazó el bloque provisional de cierre por una sección final completa:

- Regresan las estrellas de la pantalla inicial.
- Fondo azul noche más profundo.
- Mensaje principal **“Nuestra historia continúa.”**
- Cierre `2016 — ∞`.
- Firma `Absé + Lucy`.
- Sin nueva navegación ni interacción pesada.
- Pequeño easter egg **“Un último detalle”**.
- Animaciones muy discretas para mantener el tono emocional después de la carta.
- Responsive para móvil y escritorio.

La idea es que el final no compita con la carta. Funciona como un epílogo visual y
devuelve a Lucy a la misma atmósfera con la que comenzó la página.

### Editar el texto final

Todo vive en:

```text
src/data/ending.ts
```

Puedes cambiar tanto el cierre visible como el mensaje del pequeño easter egg.
