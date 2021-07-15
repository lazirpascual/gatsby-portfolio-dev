import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lazir Pascual,',
  subtitle: 'An aspiring Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1HIG0Ldy3opzcXxsaQdkDGhY_YPCQ7Xkb/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Shopping Website',
    info: 'Fullstack MERN application that models an e-commerce site that lets you buy computer parts. Users can add, remove, and update products from a shopping cart as well as filter products by categories, all stored in a MongoDB Database. Frontend uses React.js and Material-UI to develop a responsive design, which is supported with a backend built with Node.js and Express API.',
    info2: 'Built with React.js, Node.js, Express API, MongoDB, REST API, and Material-UI.',
    url: 'https://cloudcomputers.herokuapp.com/',
    repo: 'https://github.com/lazirpascual/shopping-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CV Builder',
    info: '',
    info2: '',
    url: 'https://lazirpascual.github.io/react-cv-builder/',
    repo: 'https://github.com/lazirpascual/react-cv-builder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'To-Do List',
    info: '',
    info2: '',
    url: 'https://lazirpascual.github.io/react-to-do-list/',
    repo: 'https://github.com/lazirpascual/react-to-do-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Weather App',
    info: '',
    info2: '',
    url: 'https://lazirpascual.github.io/weather-app/',
    repo: 'https://github.com/lazirpascual/weather-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'For inquiries, email me at lazirpascual@gmail.com',
  btn: '',
  email: 'lazirpascual@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/lazir.p/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lazir-pascual-00482a217/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lazirpascual',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
