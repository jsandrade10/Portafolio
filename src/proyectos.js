// Datos de los proyectos del portafolio.
// Campos en null = PENDIENTE (no inventar año, ubicación ni m²).
// Las fotos de cada proyecto están en public/img/<slug>/NN.jpg (1600 px) y NN-t.jpg (miniatura 400 px),
// ordenadas: primero lo terminado, después el proceso de obra.

// Arma la lista de fotos de una galería a partir de los textos alternativos (uno por foto, en orden).
function galeria(slug, alts) {
  return alts.map((alt, i) => {
    const n = String(i + 1).padStart(2, '0')
    return { src: `/img/${slug}/${n}.jpg`, thumb: `/img/${slug}/${n}-t.jpg`, alt }
  })
}

// Proyecto propio: diseño y dirección de obra de Joaquín.
export const propios = [
  {
    nombre: 'Remodelación YM',
    tipo: 'Remodelación de vivienda',
    anio: 2025,
    ubicacion: 'Quito',
    credito: 'Diseño y dirección de obra: Joaquín Andrade',
    portada: '/img/obras/remodelacion-ym.jpg',
    alt: 'Remodelación YM: muro con arco y vano de doble altura, piso de madera y puerta tallada',
    fotos: galeria('remodelacion-ym', [
      'Muro con arco y vano de doble altura, piso de madera y puerta tallada',
      'Sala de doble altura con cielo de madera y vigas vistas, arcos y piso de madera',
      'Fachada de ladrillo al anochecer, con puerta y ventanas de arco',
      'Pasillo con jardín interior bajo la doble altura',
      'Arco nuevo con puerta de madera tallada',
      'Proceso: apertura de muros para unir los espacios',
      'Proceso: nueva viga y vano entre la sala y el comedor',
    ]),
  },
]

// Obras construidas por Arq. Buró con diseño de Diez + Muller; Joaquín es jefe de obra.
const creditoBuro = 'Diseño: Diez + Muller · Construcción: Arq. Buró'
export const obras = [
  {
    nombre: 'Casa JC',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-jc.jpg',
    alt: 'Casa JC: volumen superior de hormigón visto en voladizo sobre una base de piedra',
    fotos: galeria('casa-jc', [
      'Volumen de hormigón visto en voladizo sobre base de piedra, con losa reticulada',
      'Fachada de ingreso: volumen de hormigón visto, carpintería roja y chimenea',
      'Terraza cubierta bajo la losa reticulada, con cocina exterior',
      'Cocina y sala con piso de madera y losa reticulada vista',
      'Ingreso con alero de madera y puerta de madera',
      'En obra: losa y columnas de acero',
      'En obra: losa reticulada y mampostería',
      'En obra: apuntalamiento del volumen superior',
    ]),
  },
  {
    nombre: 'Casa FR',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-fr.jpg',
    alt: 'Casa FR en obra: muros de tierra apisonada y columnas de acero bajo la losa',
    fotos: galeria('casa-fr', [
      'En obra: volumen de hormigón visto y muros de tierra apisonada',
      'En obra: muros de tierra apisonada y columnas de acero bajo la losa',
      'En obra: escalera de acero junto a un muro de tierra apisonada',
      'En obra: estructura de dos plantas en obra gris',
      'En obra: vigas y columnas de acero entre volúmenes de bloque',
      'En obra: losa y columnas, obra en marcha',
    ]),
  },
  {
    nombre: 'Casa AJ',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-aj.jpg',
    alt: 'Casa AJ: volumen de hormigón visto con jardinera y gradas entre árboles',
    fotos: galeria('casa-aj', [
      'Volumen de hormigón visto con jardinera y gradas entre árboles',
      'Fachada terminada: cochera bajo losa en voladizo y muro de ladrillo gris',
      'Ingreso con gradas de hormigón y jardinera',
      'Comedor y cocina abiertos, enmarcados por muro de ladrillo gris',
      'Pasillo interior con luz rasante y piso de madera',
      'En obra: la fachada en obra gris',
      'En obra: encofrado de muros y gradas',
      'En obra: apuntalamiento de losas',
    ]),
  },
  {
    nombre: 'Casa BR',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-br.jpg',
    alt: 'Casa BR: fachada blanca con volumen superior revestido en piedra oscura',
    fotos: galeria('casa-br', [
      'Fachada blanca con volumen superior revestido en piedra oscura',
      'Escalera de madera junto a un muro de hormigón',
      'Cocina abierta',
      'Sala de doble altura',
    ]),
  },
  {
    nombre: 'Casa JV',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-jv.jpg',
    alt: 'Casa JV: volúmenes con revoque ocre y grandes ventanales',
    fotos: galeria('casa-jv', [
      'Volúmenes con revoque ocre y grandes ventanales',
      'Esquina con alero de madera y ventanales de piso a techo',
      'Volumen ocre sobre el ingreso',
      'Escalera iluminada por luz cenital',
      'Doble altura con baranda de madera',
    ]),
  },
  {
    nombre: 'Casa LT',
    tipo: 'Vivienda',
    portada: '/img/obras/casa-lt.jpg',
    alt: 'Casa LT: volúmenes terracota con celosía vertical y jardinera',
    fotos: galeria('casa-lt', [
      'Volúmenes terracota con celosía vertical y jardinera',
      'Volumen terracota con celosía vertical',
      'Volumen superior terracota en voladizo sobre muro de piedra',
      'Patio entre volúmenes terracota',
      'En obra: escalera exterior y muro de piedra',
    ]),
  },
  {
    nombre: 'Colegio Mine',
    tipo: 'Educativo · Sala multiusos',
    portada: '/img/obras/colegio-mine.jpg',
    alt: 'Colegio Mine: sala multiusos, pabellón poligonal con cubierta metálica entre eucaliptos',
    fotos: galeria('colegio-mine', [
      'Pabellón poligonal con cubierta metálica y ventanales de madera, entre eucaliptos',
      'Ingreso por una pasarela de madera',
      'El pabellón en uso, al atardecer',
      'Vista general del pabellón y su entorno',
      'En obra: estructura de la cubierta',
    ]),
  },
].map((o) => ({ anio: null, ubicacion: null, credito: creditoBuro, ...o }))

// Recorrido universitario (USFQ), de T4 a la tesis.
export const academicos = [
  { nombre: 'Centro Cultural Comunitario “Equinoccio”', tipo: 'Taller 4 · USFQ · 2020', credito: 'Con Sofía Murillo', portada: null },
  { nombre: 'Facultad de Arquitectura', tipo: 'Taller 5 · USFQ · 2020', portada: null },
  { nombre: 'Biblioteca', tipo: 'Taller 6 · USFQ · 2021', portada: null },
  { nombre: 'Edificio Nexo', tipo: 'Taller 7 · USFQ · 2021', portada: null },
  { nombre: 'Galería-Talleres de Arte', tipo: 'Taller 8 · Casa Branca, Portugal · 2022', portada: null },
  { nombre: 'Mundaneum Beirut', tipo: 'Tesis de grado · USFQ · 2022', portada: null },
]
