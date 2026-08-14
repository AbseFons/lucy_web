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
    title: 'Que siempre encontremos el camino de vuelta',
    preview: 'Hay personas que aparecen una vez. Tú apareciste varias.',
    message:
      'Me encanta pensar que, después de tantos años y tantos intentos, siempre terminamos encontrando la manera de volver a hablarnos. 2017, 2018, 2025… podían pasar meses o años, pero cuando volvíamos a conversar era como si el tiempo no hubiera pasado. Siempre hubo algo entre nosotros, una química y una conexión que nunca desaparecieron del todo. Y después de tantos “casi”, finalmente llegamos a este nosotros que tanto quería.',
    tone: 'deep',
    handwritten: 'Algunas personas simplemente encuentran el camino de vuelta.',
  },

  {
    id: 'love-02',
    number: 2,
    title: 'Tu sentido del humor',
    preview: 'Incluso cuando das la contra solamente por molestarme.',
    message:
      'Amo lo graciosa que eres. Amo tu sentido del humor y esa costumbre tuya de a veces darme la contra a propósito solamente para fastidiarme un poquito. Me encanta poder reírme contigo, molestarnos y tener ese lado divertido que hace que incluso una conversación cualquiera termine siendo especial. Contigo nunca todo tiene que ser serio, y amo muchísimo eso de nosotros.',
    tone: 'playful',
    handwritten: 'Sí, incluso cuando sé perfectamente que solo quieres llevarme la contra.',
  },

  {
    id: 'love-03',
    number: 3,
    title: 'Lo inteligente que eres',
    preview: 'Siempre fuiste alguien que destacaba.',
    message:
      'Admiro muchísimo lo inteligente, dedicada y responsable que eres. Ya desde el colegio eras así: destacabas en los estudios y siempre se notaba cuánto te esforzabas en lo que hacías. Me encanta que tantos años después siga viendo en ti esa misma forma de comprometerte con las cosas que son importantes para ti. Es una de esas cualidades tuyas que siempre he admirado y que me hacen sentir increíblemente orgulloso de ti.',
    tone: 'soft',
    handwritten: 'Siempre supe que eras increíblemente capaz.',
  },

  {
    id: 'love-04',
    number: 4,
    title: 'Lo hermosa que eres',
    preview: 'Tu cabello, tu sonrisa y todas esas cosas que podría mirar por horas.',
    message:
      'Amo tu cabello lacio, amo cómo se te ve y lo hermosa que eres. Amo tu sonrisa, y amo mucho más cuando soy yo quien puede verla de cerca. Me encantan tus besos, tus abrazos y simplemente tenerte conmigo. Podría enumerar muchísimas cosas que me parecen hermosas de ti, pero creo que al final todo se resume en algo bastante sencillo: me encantas.',
    tone: 'warm',
    handwritten: 'Muchísimo, por si todavía no había quedado claro.',
  },

  {
    id: 'love-05',
    number: 5,
    title: 'La carátula',
    preview: 'Probablemente no sabías lo importante que iba a terminar siendo.',
    message:
      'Nunca voy a olvidar que el primer día que nos conocimos, en quinto de secundaria, me hiciste una carátula. Puede parecer una cosa pequeña, pero recuerdo lo cariñosa y linda que fuiste conmigo desde el comienzo. Creo que ahí terminaste de flecharme sin siquiera saberlo. Han pasado diez años y me sigue pareciendo increíble poder recordar algo tan sencillo y pensar: “ahí ya estaba Lucy siendo Lucy conmigo”.',
    tone: 'deep',
    handwritten: '2016. Primer día. Y yo ya estaba perdido.',
  },

  {
    id: 'love-06',
    number: 6,
    title: 'Lo cariñosa que eres conmigo',
    preview: 'Tus abrazos se sienten exactamente donde tienen que sentirse.',
    message:
      'Amo lo cariñosa que siempre has sido conmigo. Amo tus abrazos, tus besos, tu forma de acercarte y esas pequeñas demostraciones de cariño que hacen que estar contigo se sienta tan bonito. Hay una tranquilidad especial en poder abrazarte y sentir que ese es exactamente el lugar donde quiero estar. Me haces sentir querido de una manera que valoro muchísimo.',
    tone: 'warm',
    handwritten: 'Tus abrazos tienen algo que no sé explicar y tampoco necesito hacerlo.',
  },

  {
    id: 'love-07',
    number: 7,
    title: 'Lo romántica y detallista que eres',
    preview: 'Sí, guardo mentalmente cada pequeño detalle.',
    message:
      'Amo lo romántica y detallista que eres. En nuestro primer mes me hiciste una carta preciosa y además la acompañaste con los dulces que me gustan. Me encanta que prestes atención a esas pequeñas cosas, que recuerdes lo que me gusta y que pongas cariño e intención en lo que haces para mí. No es solamente el regalo o la carta: es saber que pensaste en mí mientras lo preparabas. Y eso vale muchísimo para mí.',
    tone: 'playful',
    handwritten: 'La carta fue hermosa. Los dulces también tuvieron una participación importante.',
  },

  {
    id: 'love-08',
    number: 8,
    title: 'La confianza que tenemos',
    preview: 'No necesito esconder ninguna parte de mí contigo.',
    message:
      'Amo lo madura y honesta que eres. Amo que podamos conversar de cualquier tema, incluso de las cosas difíciles, sin sentir que existen secretos entre nosotros. Tenemos la confianza de contarnos todo, de decir lo que pensamos y de poder hablar con sinceridad. Para mí eso es enorme. Saber que puedo ser completamente yo contigo y que podemos resolver las cosas hablando es una de las partes de nuestra relación que más quiero cuidar.',
    tone: 'deep',
    handwritten: 'Contigo quiero que hablar siempre sea nuestro lugar seguro.',
  },

  {
    id: 'love-09',
    number: 9,
    title: 'Que nunca se nos acaba la conversación',
    preview: 'Después de tantos años, todavía tenemos demasiado que contarnos.',
    message:
      'Amo que nos contemos todo. Que podamos hablar todos los días y que, aun así, siempre aparezca otra cosa de qué conversar. Me parece increíble que después de tantos años podamos volver a encontrarnos y seguir teniendo esa química tan natural. Podemos hablar de algo importante, de cualquier tontería, de nuestro día, del futuro o de absolutamente nada y aun así quiero seguir escuchándote.',
    tone: 'soft',
    handwritten: 'Podría hablar contigo durante horas. Y normalmente lo hacemos.',
  },

  {
    id: 'love-10',
    number: 10,
    title: 'La profesora que eres',
    preview: 'Me encanta verte poner tanto amor en lo que haces.',
    message:
      'Admiro muchísimo la pasión con la que enseñas a tus niños. El cariño que les das, la paciencia, la intención y el amor que pones en tu trabajo dicen muchísimo de quién eres. Me encanta escuchar cómo hablas de ellos y ver cuánto te importa hacer las cosas bien. Que los niños te quieran y que sus mamás también te tengan tanto cariño no me sorprende en absoluto. Ven en ti lo mismo que yo veo: una persona dedicada, responsable, cariñosa y maravillosa.',
    tone: 'deep',
    handwritten: 'Ellos tienen mucha suerte de tenerte como profesora. Yo tengo todavía más suerte.',
  },

  {
    id: 'love-11',
    number: 11,
    title: 'El futuro que imagino contigo',
    preview: 'Una familia. Un hogar. Muchísimos días todavía por compartir.',
    message:
      'Amo el futuro que queremos construir. Me emociona pensar en una familia, en nuestro hogar y en todas esas cosas que hoy solamente imaginamos pero que algún día pueden convertirse en recuerdos reales. Quiero vivir contigo los días importantes, pero también todos esos días normales que terminan formando una vida: despertarnos, conversar, reírnos, acompañarnos, construir cosas juntos y seguir escogiendo este nosotros.',
    tone: 'soft',
    handwritten: 'Me emociona muchísimo pensar en todo lo que todavía no nos ha pasado.',
  },

  {
    id: 'love-12',
    number: 12,
    title: 'Qué suerte la mía',
    preview: 'Tres meses son muy poquito para todo lo que quiero vivir contigo.',
    message:
      'Amo haberte conocido, Lucy. Y mientras más pienso en nuestra historia, más afortunado me siento de que después de tantos años finalmente nos hayamos dado la oportunidad de estar juntos. Hoy cumplimos tres meses, pero para mí estos tres meses no son una meta ni un final: son apenas el comienzo. Quiero muchos 14 más, muchos meses, muchos años, muchísimas conversaciones, abrazos, citas, risas y recuerdos contigo. Gracias por volver a mi vida y, esta vez, quedarte.',
    tone: 'special',
    handwritten: 'Feliz tres meses, mi Lucy. Esto recién comienza. ♡',
    lockedUntil: '2026-08-14',
  },
]
