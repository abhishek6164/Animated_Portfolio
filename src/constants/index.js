


export const myProjects = [

  {
    title: 'NoteCreation - Personal Notes App',
    desc: 'A full-stack note-taking app built using the MERN stack. It allows users to create, update, and delete personal notes with authentication and search functionality.',
    subdesc:
      'Developed using MongoDB, Express.js, React.js, and Node.js. Features include user auth, search, and responsive UI with Tailwind CSS.',
    href: 'https://codesandbox.io/p/devbox/notecreation-6ywdz2',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/note-logo.webp',
    logoStyle: {
      backgroundColor: '#343434',
      border: '0.2px solid #444',
      boxShadow: '0px 0px 60px 0px #8888884D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [

      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Employee Management System',
    desc: 'A full-stack app for managing employees, departments, and roles within an organization. Admins can add, edit, and view employee data securely.',
    subdesc:
      'Built using MERN stack with JWT auth, REST API integration, and responsive UI with Material UI.',
    href: 'https://github.com/abhishek6164/employee-task-distribution',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/emp.webp',
    logoStyle: {
      backgroundColor: '#224466',
      border: '0.2px solid #335577',
      boxShadow: '0px 0px 60px 0px #2255774D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Material UI',
        path: '/assets/tailwind.png',
      },
    ],
  },
  {
    title: 'Weather App',
    desc: 'A clean and responsive weather app that displays real-time weather data based on city input, using OpenWeatherMap API.',
    subdesc:
      'Built using React.js and Axios. Fully responsive and styled using Tailwind CSS for a modern UI experience.',
    href: 'https://github.com/abhishek6164/WeatherApi',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/weather.webp',
    logoStyle: {
      backgroundColor: '#87CEEB',
      border: '0.2px solid #3399CC',
      boxShadow: '0px 0px 60px 0px #87CEEB4D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'API',
        path: '/assets/API.webp',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Wipro ',
    pos: 'System Administrator',
    duration: '2022 - 2024',
    title: "Worked at Wipro as a System Administrator & Scholar Trainee for 2+ years, gaining real-world experience in IT infrastructure, system security, and enterprise-level support.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  }
];