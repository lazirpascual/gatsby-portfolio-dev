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
    'I am a 2nd year Software Engineering Co-Op student studying at Conestoga College. This program has taught me a solid foundation to the world of programming, improving my ability to problem solve and creatively think outside the box. Through hard work and effort, I was able to become one of the top 40 students to earn a Co-Op spot out of 150+ students from my first-year intake.',
  paragraphTwo:
    'I am currently learning about web development, more specifically, JavaScript and React, and enjoy building high-quality web applications with modern frontend and backend technologies.',
  paragraphThree:
    'Right now, I am looking for a co-op position as an Entry-Level Software Developer.',
  resume: './pdf/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Chat Vault',
    info: `Fullstack MERN application that models a social media website, including a Realtime Chat feature using Socket.IO. Users can register/login (JSON Web Token), create and update their own profile, chat with another user, follow/unfollow a user, and search for a user's profile or post. Posts can also be created, deleted, and updated where each user can like/dislike and add/delete comments to each post.`,
    info2:
      'Frontend uses React.js (Context API) and Material-UI. Backend is built with Node.js, Express API, MongoDB, and Socket.IO. Includes Unit Testing.',
    url: 'https://chatvault.netlify.app/',
    repo: 'https://github.com/lazirpascual/chat-vault', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cloud Computers',
    info: 'Fullstack PERN application that models an e-commerce site that lets users buy computer parts. Users can register/login, add/remove/update (CRUD) products from a shopping cart, create ratings/reviews for each product and filter products by categories or search them by name in the shop.',
    info2:
      'Frontend uses React.js (Context API) and Material-UI to develop a responsive design, which is supported with a backend built with Node.js, Express API and PostgreSQL. Includes Unit and Integration Testing.',
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
