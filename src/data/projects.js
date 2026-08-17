import tortolitosCover from '../assets/projects/audiovisual/tortolitos.jpg'
import juegosdemagiaCover from '../assets/projects/audiovisual/juegosdemagia.jpg'
import lacalacaCover from '../assets/projects/pixelart/lacalaca.png'
import ninjaLunaCover from '../assets/projects/pixelart/ninja-luna.png'
import contactCover from '../assets/projects/audiovisual/contact.png'
import nohaymomentoCover from '../assets/projects/audiovisual/nohaymomento.jpg'
import disrupcionCover from '../assets/projects/audiovisual/disrupcion.jpg'
import bola8Cover from '../assets/projects/audiovisual/bola8.jpg'

const projects = [
  {
    id: 1,
    title: 'Tortolitos',
    category: 'Audiovisual',
    type: 'video',

    year: '2023',

    image: tortolitosCover,
    video: 'https://www.youtube.com/embed/5-72qhDSVIg',

    description:
      'Joaquín, un joven que intenta darle celos a la chica que le gusta, busca reconstruir su relación y recuperar el vínculo entre ambos.',

    role: 'Sonido, edición sonora y edición de video',

    tools: [
      'Adobe Audition',
      'Adobe Premiere Pro',
      'Pro Tools'
    ],

    credits: []
  },
  
  {
  id: 2,
  title: 'Bola 8',
  category: 'Audiovisual',
  type: 'video',

  year: '2023',

  image: bola8Cover,
  video: 'https://youtube.com/embed/vMYoBs6UJHo',

  description:
    'Dos amigos se reúnen para tomar unas copas y jugar al pool. Pero una sospecha, alimentada por el alcohol y los celos, convierte una noche entre amigos en un tenso enfrentamiento.',

  role: 'Edición de Sonido · Asistente en Montaje',

  tools: [
    'Adobe Audition',
    'Pro Tools',
    'Adobe Premiere'
  ],

  credits: []
  },
  
  {
  id: 3,
  title: 'Juegos de magia',
  category: 'Audiovisual',
  type: 'video',

  year: '2024',

  image: juegosdemagiaCover,
  video: 'https://youtube.com/embed/Q57YDPym_m4',

  description:
    'Falso tráiler que combina escenas de Game of Thrones y Harry Potter para construir una historia y universo narrativo completamente nuevos a través del montaje audiovisual.',

  role: 'Montajista · Editor de audio y video',

  tools: [
    'Adobe Premiere Pro',
    'Adobe Audition'
  ],

  credits: []
  },

  {
  id: 4,
  title: 'Contact',
  category: 'Audiovisual',
  type: 'video',

  year: '2024',

  image: contactCover,
  video: 'https://youtube.com/embed/npQGSHTBGZU',

  description:
    'Tras conocer a Anne y comenzar un vínculo con ella, Pato se enfrenta a su misteriosa desaparición. En su búsqueda, descubre una serie de situaciones extrañas que transforman su encuentro en una experiencia difícil de comprender.',

  role: 'Editor de audio y video',

  tools: [
    'Adobe Premiere Pro',
    'Adobe Audition'
  ],

  credits: []
  },

  {
  id: 5,
  title: 'No hay momento',
  category: 'Audiovisual',
  type: 'video',

  year: '2024',

  image: nohaymomentoCover,
  video: 'https://youtube.com/embed/5exR3205Qu0',

  description:
    'Dos ladrones irrumpen en un departamento para llevar a cabo un robo, pero una inesperada distracción pone en riesgo el plan. Atrapados en una situación absurda y comunicándose únicamente mediante onomatopeyas, deberán intentar completar su misión antes de que sea demasiado tarde.',

  role: 'Dirección de Sonido · Edición de Audio · Asistente en Montaje',

  tools: [
    'Adobe Premiere',
    'Adobe Audition'
  ],

  credits: []
  },

  {
  id: 6,
  title: 'Disrupción',
  category: 'Audiovisual',
  type: 'video',

  year: '2025',

  image: disrupcionCover,
  video: 'https://youtube.com/embed/GaZ5JdxrS9M',

  description:
    'Durante una acalorada discusión de pareja, una situación de violencia lleva a ambos a enfrentarse a un límite inesperado',

  role: 'Dirección de Sonido · Montaje · Tratamiento Audiovisual',

  tools: [
    'Adobe Premiere',
    'Adobe Audition',
    'Pro Tools'
  ],

  credits: []
  },

  {
  id: 7,
  title: 'La Calaca',
  category: 'Pixel Art',
  type: 'gallery',

  year: '2025',

  image: lacalacaCover,
  gallery: [
    lacalacaCover
  ],

  description:
    'Pixel art de un cráneo dibujado en Aseprite utilizando una paleta limitada de 4 colores.',

  role: 'Artista de Pixel Art',

  tools: [
    'Aseprite'
  ],

  credits: []
},

{
  id: 8,
  title: 'Ninja x Moon',
  category: 'Pixel Art',
  type: 'gallery',

  year: '2025',

  image: ninjaLunaCover,
  gallery: [
    ninjaLunaCover
  ],

  description:
    'Pixel art de un ninja frente a una luna llena, trabajado con una paleta oscura y contrastada.',

  role: 'Artista de Pixel Art',

  tools: [
    'Aseprite'
  ],

  credits: []
},

]

export default projects