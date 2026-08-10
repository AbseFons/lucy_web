export type Anniversary = {
  id: string
  date: string
  monthNumber: number
  eyebrow: string
  title: string
  shortText: string
  message: string
  featured?: boolean
  image?: string
}

export const anniversaries: Anniversary[] = [
  {
    id: '2026-05-14',
    date: '2026-05-14',
    monthNumber: 0,
    eyebrow: '14 de mayo de 2026',
    title: 'Aquí empezó “nosotros”.',
    shortText: 'El día en que dejamos de ser un casi.',
    message:
      'Después de tantos años, conversaciones que iban y venían y momentos que no terminaban de coincidir, este fue el día en que por fin empezamos nuestra relación. Aquí comienza oficialmente Tú y yo.',
  },
  {
    id: '2026-06-14',
    date: '2026-06-14',
    monthNumber: 1,
    eyebrow: '14 de junio de 2026',
    title: 'Nuestro primer mes.',
    shortText: 'Treinta y un días siendo tú y yo.',
    message:
      'Este espacio queda listo para escribir lo que recuerdes de nuestro primer mes: una cita, una conversación, una fotografía o algo pequeño que solo nosotros entendamos.',
  },
  {
    id: '2026-07-14',
    date: '2026-07-14',
    monthNumber: 2,
    eyebrow: '14 de julio de 2026',
    title: 'Dos meses.',
    shortText: 'La historia ya tenía nuevas escenas favoritas.',
    message:
      'Aquí podemos contar qué cambió entre el primer y el segundo mes, incluir una foto especial o dejar una nota que Lucy descubra al abrir esta tarjeta.',
  },
  {
    id: '2026-08-14',
    date: '2026-08-14',
    monthNumber: 3,
    eyebrow: '14 de agosto de 2026',
    title: 'Tres meses.',
    shortText: 'Y un pequeño lugar en internet hecho para nosotros.',
    message:
      'Este es el 14 para el que nació esta página. El mensaje definitivo lo podemos escribir juntos después para que suene exactamente como tú y no como una frase genérica.',
    featured: true,
  },
]
