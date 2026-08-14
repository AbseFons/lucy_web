export type LoveNoteTone =
  | 'warm'
  | 'soft'
  | 'deep'
  | 'playful'
  | 'special'

export type LoveNote = {
  id: string
  number: number
  title: string
  preview: string
  message: string
  tone: LoveNoteTone
  handwritten?: string
  imageSrc?: string
  imageAlt?: string
  lockedUntil?: string
}

/**
 * La estructura está completa, pero no se inventan cualidades personales de Lucy.
 * Los textos "Por completar" deben sustituirse por cosas reales antes de publicar.
 *
 * Hay dos notas apoyadas en la historia ya definida:
 * - que volvieron a encontrarse después de tantos años;
 * - que su historia tuvo muchos "casi" antes de convertirse en relación.
 */
export const loveNotes: LoveNote[] = [
  {
    id: 'love-01',
    number: 1,
    title: 'Que hayas vuelto a mi vida',
    preview: 'Hay personas que aparecen una vez. Tú apareciste varias.',
    message:
      'Me gusta pensar que, después de tantos años y tantos intentos, seguimos encontrando la manera de volver a hablarnos. Que nuestra historia no haya sido lineal hace que hoy se sienta todavía más nuestra.',
    tone: 'deep',
    handwritten: 'Algunas personas simplemente encuentran el camino de vuelta.',
  },
  {
    id: 'love-02',
    number: 2,
    title: 'Nuestros “casi”',
    preview: 'Porque incluso lo que no ocurrió también forma parte de nosotros.',
    message:
      '2017, 2018, 2025… tantas veces estuvimos cerca sin llegar a concretar nada. Ahora esos “casi” ya no me parecen tiempo perdido: son parte de todo lo que tuvo que pasar para que existiera este nosotros.',
    tone: 'warm',
  },
  {
    id: 'love-03',
    number: 3,
    title: 'Por completar · Algo de su forma de ser',
    preview: 'Una cualidad de Lucy que admires de verdad.',
    message:
      'Sustituye este texto por una cualidad concreta de Lucy. Evita algo genérico como “eres buena”; cuenta qué hace, cómo lo demuestra y por qué te importa.',
    tone: 'soft',
  },
  {
    id: 'love-04',
    number: 4,
    title: 'Por completar · Algo pequeño',
    preview: 'Una costumbre, gesto o expresión que solo tú notes.',
    message:
      'Aquí funciona mejor un detalle cotidiano: cómo se ríe, algo que dice, una manía, una expresión o cualquier gesto pequeño que para ti ya sea parte de ella.',
    tone: 'playful',
  },
  {
    id: 'love-05',
    number: 5,
    title: 'Por completar · Algo que admiro',
    preview: 'Una razón por la que te sientas orgulloso de ella.',
    message:
      'Escribe aquí algo que admires de Lucy: cómo enfrenta algo difícil, cómo trabaja, cómo cuida a otros, cómo persigue algo que quiere o cualquier rasgo que realmente conozcas.',
    tone: 'deep',
  },
  {
    id: 'love-06',
    number: 6,
    title: 'Por completar · Cómo me haces sentir',
    preview: 'No sobre lo que hace, sino sobre lo que provoca en ti.',
    message:
      'Este sobre puede hablar de cómo cambia tu día cuando estás con ella, qué tranquilidad, emoción o sensación te genera y por qué eso se volvió importante para ti.',
    tone: 'warm',
  },
  {
    id: 'love-07',
    number: 7,
    title: 'Por completar · Una cosa divertida',
    preview: 'Porque no todo tiene que sonar solemne.',
    message:
      'Guarda aquí algo que te haga reír de ella o de ustedes: una frase interna, una costumbre absurda o un momento que siempre termina haciéndote sonreír.',
    tone: 'playful',
  },
  {
    id: 'love-08',
    number: 8,
    title: 'Por completar · Algo que aprendí de ti',
    preview: 'Una pequeña forma en la que estar con ella te ha cambiado.',
    message:
      'Cuenta algo real que hayas aprendido gracias a Lucy o algo que ahora mires distinto por haberla conocido.',
    tone: 'soft',
  },
  {
    id: 'love-09',
    number: 9,
    title: 'Por completar · Una foto que lo explique',
    preview: 'A veces una imagen puede hacer la mitad del trabajo.',
    message:
      'Este sobre está preparado para llevar una fotografía. Elige una que para ti resuma algo de Lucy o de la relación y acompáñala con un texto muy corto.',
    tone: 'warm',
  },
  {
    id: 'love-10',
    number: 10,
    title: 'Por completar · Algo que quiero cuidar',
    preview: 'Una parte de la relación que quieras conservar con el tiempo.',
    message:
      'Puede ser una manera de hablarse, una costumbre, una forma de salir juntos o cualquier cosa que quieras proteger para que no se pierda con el tiempo.',
    tone: 'deep',
  },
  {
    id: 'love-11',
    number: 11,
    title: 'Por completar · Algo que espero vivir contigo',
    preview: 'Una mirada corta hacia adelante.',
    message:
      'No hace falta prometer toda una vida. Basta con una experiencia concreta que te haría ilusión compartir con Lucy.',
    tone: 'soft',
  },
  {
    id: 'love-12',
    number: 12,
    title: 'Para Lucy',
    preview: 'Este sobre es para el día del regalo.',
    message:
      'Sustituye este texto por una nota final breve para el 14 de agosto. Puede funcionar como puente hacia la sección “Para cuando…” o hacia la carta principal.',
    tone: 'special',
    handwritten: 'Este sí merece que lo escribas tú.',
    lockedUntil: '2026-08-14',
  },
]
