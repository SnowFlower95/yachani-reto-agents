// Datos ficticios transcritos de los cuatro frames autorizados de Figma.
export const profile = {
  name: 'Anabella Huamán',
  firstName: 'Anabella',
  initials: 'AH',
  notifications: 3,
};
export const groups = [
  {
    icon: '∫',
    name: 'Dominando Cálculo',
    subject: 'Límites y derivadas',
    initials: ['AL', 'JM', 'CP'],
    count: 5,
    unread: 4,
  },
  {
    icon: '⌘',
    name: 'Base de Datos UPC',
    subject: 'SQL y modelado',
    initials: ['LR', 'MS', 'DR'],
    count: 4,
    unread: 2,
  },
  {
    icon: '⌘',
    name: 'Física en equipo',
    subject: 'Dinámica y energía',
    initials: ['AV', 'FM', 'RG'],
    count: 6,
    unread: 0,
  },
];
export const recommendations = [
  {
    match: 95,
    name: 'Algoritmos sin miedo',
    description: 'Práctica colaborativa de estructuras de datos.',
    subject: 'Algoritmos',
    mode: 'Virtual',
  },
  {
    match: 89,
    name: 'Estadística aplicada',
    description: 'Ejercicios y preparación para evaluaciones.',
    subject: 'Estadística',
    mode: 'Mixta',
  },
  {
    match: 84,
    name: 'Programación Web',
    description: 'Proyectos y resolución de dudas en equipo.',
    subject: 'Desarrollo web',
    mode: 'Presencial',
  },
];
export const notices = [
  { text: 'La sesión de Base de Datos cambió de horario', time: 'Hace 20 minutos' },
  { text: 'Tienes 4 mensajes nuevos en Dominando Cálculo', time: 'Hace 1 hora' },
  { text: 'Tu solicitud para Algoritmos sin miedo fue enviada', time: 'Ayer' },
];
export const progress = [
  { title: 'Conceptos de SQL', done: 18, total: 30, percent: 60 },
  { title: 'Fórmulas de derivadas', done: 12, total: 20, percent: 60 },
  { title: 'Conceptos de física', done: 9, total: 25, percent: 36 },
];
export const nextSession = {
  title: 'Cálculo I — Límites y continuidad',
  group: 'Dominando Cálculo',
  time: 'Hoy, 7:00 p. m.',
  duration: '60 minutos',
  mode: 'Virtual',
};
export const stats = [
  { icon: 'people', value: '3', label: 'Grupos activos' },
  { icon: '♙', value: '15', label: 'Estudiantes en total' },
  { icon: '☷', value: '4', label: 'Solicitudes pendientes' },
  { icon: '★', value: '4.8', label: 'Calificación promedio' },
];
export const sessions = [
  {
    day: '21',
    month: 'OCT',
    title: 'Límites y continuidad',
    description: 'Dominando Cálculo · Hoy, 7:00 p. m. · Virtual',
  },
  {
    day: '23',
    month: 'OCT',
    title: 'Consultas SQL y subconsultas',
    description: 'Base de Datos UPC · 6:30 p. m. · Presencial',
  },
  {
    day: '25',
    month: 'OCT',
    title: 'Repaso de dinámica',
    description: 'Física en equipo · 5:00 p. m. · Virtual',
  },
];
export const requests = [
  { initials: 'LC', name: 'Lucía Castro', group: 'Dominando Cálculo' },
  { initials: 'MR', name: 'Mateo Rojas', group: 'Base de Datos UPC' },
  { initials: 'SP', name: 'Sofía Pérez', group: 'Dominando Cálculo' },
];
export const menus = {
  student: [
    { icon: '⌕', label: 'Explorar grupos' },
    { icon: 'people', label: 'Mis grupos' },
    { icon: '＋', label: 'Crear grupo' },
    { icon: '✦', label: 'Recomendaciones IA' },
    { icon: '▤', label: 'Flashcards' },
  ],
  tutor: [
    { icon: 'people', label: 'Mis grupos' },
    { icon: '＋', label: 'Crear grupo' },
    { icon: '✦', label: 'Crear grupo con IA' },
    { icon: '☷', label: 'Solicitudes' },
    { icon: '▤', label: 'Flashcards' },
  ],
};
