import self from '../img/self.png';
import { colors } from '../colors/mainGradient';
import ImgCalculadora from '../img/calculadora-penal.jpg';
import ImgRastreio from '../img/rastreio.jpg';
import ImgPortfolio from '../img/portfolio-v1.jpg';
import ImgAgencia from '../img/agencia-digital.jpg';
import ImgBlog from '../img/next-blog.jpg';
import ImgMoneyTracker from '../img/money-tracker.png';
import Desafio30 from '../img/desafio_javascript30.jpg';

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
      text: 'I currently work as a freelancer',
    },
    {
      emoji: '🌱',
      text: "I'm currently studying React.Js",
    },
    {
      emoji: '📧',
      text: 'contato@luysfernnando.com',
    },
  ],
  socials: [
    {
      link: 'https://www.luysfernnando.com/Curriculo_LuysFernnando.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
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
  bio: "I am a passionate developer about what I do. I often say that 'those who do what they love are always on vacation.' That's why I'm always eager to learn something new that helps me become an even better developer. I have 5 years of experience and have worked in both back-end and front-end, using PHP and Laravel, HTML/CSS, JavaScript, and MySQL. Currently, I am developing websites using React, Next.js, and Node.js.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript', 'Flutter', 'PHP', 'Python', 'HTML/CSS'],
    frameworks: ['React.Js', 'React Native', 'Next.Js', 'Material UI', 'Laravel', 'Bootstrap', 'Tailwind Css', 'jQuery', 'Node.js', 'Express.js'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Mybatis'],
    cloudServices: [
      'AWS S3',
      'AWS EC2',
      'AWS SNS',
      'Google Analytics',
      'Heroku',
      'Netlify',
      'Vercel',
    ],
    tools: [
      'Git',
      'Bitbucket',
      'Postman',
      'Docker',
      'Yarn/npm',
      'Figma',
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
      langs: 'ReactJs, Typescript, Sass',
      live: 'https://calculadora-infinitypolice.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/luysfernnando/Calculadora-Infinity-Police-v2', // this should be a link to the **repository** of the project, where the code is hosted.
      image: ImgCalculadora,
    },
    {
      title: 'Next.Js Blog',
      desc: 'A blog made in Next.js that uses an interesting method to create new posts easily, using .md files (Markdown). Fully responsive and contains SEO optimizations. The idea for this project was to create a blog that was easy to be fed with new posts, without having to create new routes or even need to change a line of code. ',
      langs: 'NextJs, Sass',
      live: 'https://luys-next-blog.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/luysfernnando/next-blog', // this should be a link to the **repository** of the project, where the code is hosted.// this should be a link to the **repository** of the project, where the code is hosted.
      image: ImgBlog,
    },
    {
      title: 'Digital Agency Template',
      desc: 'This project was created from scratch using the knowledge acquired in the Course of Professor Dimitri, of the Web Programming channel. It has SEO optimization and is fully responsive, with adaptations made to have the best possible look on different screen sizes',
      langs: 'HTML, CSS',
      live: null,
      source: 'https://github.com/luysfernnando/Curso-Programacao-Web-YouTube',
      image: ImgAgencia,
    },
    {
      title: 'Challenge "Javascript30"',
      desc: 'This is my final project for "Javascript30 Navbar" challenge from Codewell.cc website. The goal was to build a website from scratch, and make it the same as the challenge images. Also, we had to make an animated menu in javascript that was responsive',
      langs: 'MongoDB, Express, ReactJs, NodeJs',
      live: 'https://luysfernnando.github.io/responsive-navbar/',
      source: 'https://github.com/luysfernnando/responsive-navbar',
      image: Desafio30,
    },
    {
      title: 'Money Tracker App',
      desc: 'An application made to manage our daily expenses.\n' +
        'It was created using the MERN Stack pattern for study purposes. Anyone wanting to fork the project is welcome, as long as it\'s not for profit.',
      langs: 'MongoDB, Express, ReactJs, NodeJs',
      live: null,
      source: 'https://github.com/luysfernnando/money-tracker-app',
      image: ImgMoneyTracker,
    },
    {
      title: 'Portfolio v1',
      desc: 'An alternative version of my portfolio, using React, Typescript and SASS. The site was created from the ground up to be fully responsive, adapting to different screen sizes and mobile devices.',
      langs: 'ReactJs, Typescript',
      live: 'https://luysfernnando.vercel.app/',
      source: 'https://github.com/luysfernnando/portfolio-react',
      image: ImgPortfolio,
    },
    {
      title: 'Order Tracking',
      desc: 'This is a web application that consumes the Correios API to track packages. Other carrier APIs can be easily implemented and thus be able to track orders from all over the world.',
      langs: 'PHP, HTML, API',
      live: null,
      source: 'https://github.com/luysfernnando/',
      image: ImgRastreio,
    },
  ],
};
