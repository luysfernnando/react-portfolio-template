import self from '../img/self.png';
import { colors } from '../colors/mainGradient';
import ImgCalculadora from '../img/calculadora-penal.png';
import ImgRastreio from '../img/rastreio.png';
import ImgPortfolio from '../img/portfolio-v1.png';
import ImgAgencia from '../img/agencia-digital.png';

export const info = {
  firstName: 'Luys',
  lastName: 'Fernnando',
  initials: 'LF', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'Fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'Based in the Goiânia, Brazil',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer at SEDS',
    },
    {
      emoji: '🌱',
      text: "I'm currently studying ReactJs",
    },
    {
      emoji: '📧',
      text: 'contato@luysfernnando.com',
    },
  ],
  socials: [
    {
      link: 'https://andy8647.com/andy.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file-pdf-o',
      label: 'resume',
    },
    {
      link: 'https://instagram.com/luysfernnando',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/luysfernnando',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/luysfernnando',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/luysfernnando',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "My name is Luys Fernnando, I'm a Full Stack programmer with a great passion for computing. I always seek to deliver solutions that add value to people's lives and at the same time challenge me. I develop professional websites and applications using mainly React, TypeScript and PHP, I also have extensive knowledge of HTML, CSS and JavaScript. I am familiar with developing sleek and responsive modern layouts. I'm always improving myself with each project they put in my hands.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript', 'Flutter', 'PHP', 'Python', 'HTML/CSS'],
    frameworks: ['React', 'Material UI', 'Laravel', 'Bootstrap/jQuery'],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'Mybatis', 'TypeORM'],
    cloudServices: ['AWS S3', 'AWS EC2', 'AWS SNS', 'Google Analytics', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'Elasticsearch',
      'npm',
      'yarn',
      'Maven',
      'Jenkins',
      'Jira',
      'Confluence',
      'Bitbucket',
    ],
  },
  hobbies: [
    {
      label: 'Photography',
      emoji: '📷',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Guitar',
      emoji: '🎸',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Fishing',
      emoji: '🎣',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Penal Calculator',
      desc: 'A penal calculator developed in ReactJs and TypeScript for a FiveM server called Infinity RP. This application serves to help police officers automatically calculate the penalties, fines and bails of individuals who are detained by the police.',
      langs: 'React, Typescript',
      live: 'https://calculadora-infinitypolice.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/luysfernnando/Calculadora-Infinity-Police-v2', // this should be a link to the **repository** of the project, where the code is hosted.
      image: ImgCalculadora,
    },
    {
      title: 'Digital Agency Template',
      desc: 'This project was created from scratch using the knowledge acquired in the Course of Professor Dimitri, of the Web Programming channel. It has SEO optimization and is fully responsive, with adaptations made to have the best possible look on different screen sizes',
      langs: 'PHP, HTML',
      live: null,
      source: 'https://github.com/luysfernnando/Curso-Programacao-Web-YouTube',
      image: ImgAgencia,
    },
    {
      title: 'Portfolio v1',
      desc: 'An alternative version of my portfolio, using React, Typescript and SASS. The site was created from the ground up to be fully responsive, adapting to different screen sizes and mobile devices.',
      langs: 'PHP, HTML',
      live: 'https://luysfernnando.vercel.app/',
      source: 'https://github.com/luysfernnando/portfolio-react',
      image: ImgPortfolio,
    },
    {
      title: 'Order Tracking',
      desc: 'This is a web application that consumes the Correios API to track packages. Other carrier APIs can be easily implemented and thus be able to track orders from all over the world.',
      langs: 'PHP, HTML',
      live: null,
      source: 'https://github.com/luysfernnando/',
      image: ImgRastreio,
    },
  ],
};
