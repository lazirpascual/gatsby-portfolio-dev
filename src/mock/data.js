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
    'I am an innovative, hard-working software developer and problem solver that enjoys building high-quality web applications with modern technologies. I am passionate about all aspects of software development and I like to think of myself as a fast learner, where I went from not knowing what HTML was, to deploying my first MERN application within the span of two months.',
  paragraphThree: 'Right now, I am looking for a position as a Junior Software Developer.',
  resume: './pdf/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cloud Computers',
    info: 'Fullstack MERN application that models an e-commerce site that lets you buy computer parts. Users can register/login, add/remove/update (CRUD) products from a shopping cart, create ratings/reviews for each product and filter products by categories or search them by name in the shop. ',
    info2:
      'Frontend uses React.js (Context API) and Material-UI to develop a responsive design, which is supported with a backend built with Node.js, Express API and MongoDB. Includes Unit, Integration and End-To-End Testing.',
    url: 'https://cloudcomputers.netlify.app/',
    repo: 'https://github.com/lazirpascual/shopping-website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Covid-19 Tracker',
    info: 'React application that can help spread awareness about Covid-19 by visualizing data/statistics about the virus. It uses an external API to dynamically display the main statistics (number of infected, recovered, deaths) of the virus in over 190+ countries around the globe.',
    info2:
      'Built with React JS (Hooks and Async/Await), Charts JS and styled with Material-UI to provide a clean user interface.',
    url: 'https://track-covid-19-app.netlify.app/',
    repo: 'https://github.com/lazirpascual/covid-19-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'CV Builder',
    info: 'React application that lets you build your own, personal CV, with an option to render it as a PDF. Performs basic CRUD operations, with the ability to add/remove/update sections for experience, education, and skills. Users can preview their CVs before downloading it as a PDF.',
    info2: 'Built with React.js (Hooks and Context API), React-PDF library, and Material-UI.',
    url: 'https://lazirpascual.github.io/react-cv-builder/',
    repo: 'https://github.com/lazirpascual/react-cv-builder', // if no repo, the button will not show up
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
