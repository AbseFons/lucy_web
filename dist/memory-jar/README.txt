AQUÍ PUEDES GUARDAR FOTOS QUE APAREZCAN DENTRO DE PAPELITOS DEL TARRO.

Ejemplo:
public/memory-jar/barranco.webp

Y luego, en src/data/memoryJar.ts:

{
  id: 'barranco-01',
  kind: 'recuerdo',
  title: 'Ese día en Barranco',
  text: '...',
  imageSrc: '/memory-jar/barranco.webp',
  imageAlt: 'Absé y Lucy en Barranco',
}

No todos los recuerdos necesitan fotografía.
La idea es que el tarro conserve también momentos pequeños que funcionan mejor como texto.
