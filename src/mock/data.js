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
  paragraphOne:
    'I am currently a 2nd year co-op student studying Software Engineering Technology at Conestoga College. I am taking my knowledge further by learning about web development in two online resources, The Odin Project and Full Stack Open.',
  paragraphTwo:
    'I am an innovative, hard-working software developer and problem solver that enjoys building high-quality web applications with modern technologies. I am passionate about all aspects of software development and I like to think of myself as a fast learner, where I deployed my first MERN application from scratch within just two months.',
  paragraphThree:
    'Right now, I am looking for a position as a front end, back end, or full stack developer.',
  resume: 'https://drive.google.com/file/d/1HIG0Ldy3opzcXxsaQdkDGhY_YPCQ7Xkb/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Shopping Website',
    info: 'Fullstack MERN application that models an e-commerce site that lets you buy computer parts. Users can add, remove, and update products from a shopping cart as well as filter products by categories, all stored in a MongoDB Database. Frontend uses React.js and Material-UI to develop a responsive design, which is supported with a backend built with Node.js and Express API.',
    info2:
      'Built with React.js (Context API), Node.js, Express API, MongoDB, REST API, and Material-UI.',
    url: 'https://cloudcomputers.herokuapp.com/',
    repo: 'https://github.com/lazirpascual/shopping-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'CV Builder',
    info: 'React application that lets you build your own, personal CV, with an option to render it as a PDF. Performs basic CRUD operations, styled with Material-UI to provide a clean user interface.',
    info2: 'Built with React.js (Hooks and Context API), React-PDF library, and Material-UI.',
    url: 'https://lazirpascual.github.io/react-cv-builder/',
    repo: 'https://github.com/lazirpascual/react-cv-builder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'To-Do List',
    info: 'React application that models a to-do list. Performs basic CRUD operations with the ability to add, update, delete, and save tasks.',
    info2: 'Built with React JS (Class Components) and Material-IU.',
    url: 'https://lazirpascual.github.io/react-to-do-list/',
    repo: 'https://github.com/lazirpascual/react-to-do-list', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Weather App',
    info: `JavaScript application that dynamically displays the present weather at the user's favorite location. Interacts with an external weather API to fetch data, using Promises and Async/Await methods.`,
    info2: 'Built with Vanilla JS, HTML, CSS and Webpack.',
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
