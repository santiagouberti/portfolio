import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Santiago Uberti | Desarrollador', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Bienvenidos a mi página web', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola! Soy',
  name: 'Santiago Uberti',
  subtitle: 'Construyo cosas en internet',
  cta: 'Ver más',
};

// ABOUT DATA
export const aboutData = {
  img: 'perfil4.jpg',
  paragraphOne:
    'Soy un desarrollador full stack con pasión por aprender nuevas formas de comunicar. Actualmente estoy explorando el uso de Javascript y sus derivados para hacer webs y aplicaciones.',
  paragraphTwo: 'Estudié Comunicación Social en la UBA y tengo experiencia en periodismo escrito.',
  paragraphThree:
    'Busco potenciarme como desarrollador en un equipo en el que pueda aprender y aportar todos los días algo nuevo.',
  resume: 'https://drive.google.com/file/d/1tLPdOklr_2ukLt_uVDZkzVogm1rw5uNM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Marcus Cymbals web',
    info:
      'Diseño y desarrollo de la web de un artesano de platillos. Posee landing y showcase de sus productos con autenticación, permisos de usuario y seguridad para evitar problemas con terceros.',
    info2: 'Desarrollada con Bootstrap, Node.js y Express.',
    url: 'https://marcuscymbals.com.ar',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Si querés saber más sobre mi trabajo, por favor escribime un mail',
  btn: 'Contactame',
  email: 'santiagouberti@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/santiago-uberti-72491932/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/santiagouberti',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/santiago_uberti',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
