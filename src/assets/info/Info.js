import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';
import ImgCalculadora from '../img/calculadora-penal.png';
import ImgRastreio from '../img/rastreio.png';

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
  bio: 'Me chamo Luys Fernnando, sou programador Full Stack com uma grande paixão pela informática. Sempre busco entregar soluções que agregam na vida das pessoas e ao mesmo tempo me desafiam. Desenvolvo sites e aplicações profissionais utilizando principalmente React, TypeScript e PHP, também possuo vasto conhecimento de HTML, CSS e JavaScript. Tenho familiaridade em desenvolver layouts modernos elegantes e responsivos. Estou sempre me aprimorando a cada projeto que colocam em minhas mãos.',
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
      title: 'Calculadora Penal',
      desc: 'Uma  calculadora penal  desenvolvida em ReactJs e TypeScript para um servidor de FiveM chamado Infinity RP. Esta aplicação serve para auxiliar os policiais a calcular de forma automática as penas, multas e fianças dos indivíduos que forem detidos pela polícia.',
      langs: 'React, Typescript',
      live: 'https://calculadora-infinitypolice.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/luysfernnando/Calculadora-Infinity-Police-v2', // this should be a link to the **repository** of the project, where the code is hosted.
      image: ImgCalculadora,
    },
    {
      title: 'Rastreio de Encomendas',
      desc: 'Essa é uma aplicação Web que consome a API dos Correios para rastrear encomendas. Pode ser facilmente implementado a API de qualquer transportadora e dessa forma conseguir rastrear encomendas de todo o mundo.',
      langs: 'PHP, HTML',
      live: null,
      source: 'https://github.com/Andy8647/dynrank',
      image: ImgRastreio,
    },
    {
      title: 'Portfolio v1',
      desc: 'Uma versão alternativa de meu portfólio, utilizando HTML, CSS, JavaScript e jQuery. O site foi criado desde o início para ser totalmente responsívo, se adaptando em tamanhos diferentes de telas e dispositivos móveis.',
      langs: 'PHP, HTML',
      live: 'https://luysfernnando.vercel.app/',
      source: 'https://github.com/Andy8647/dynrank',
      image: ImgRastreio,
    },
    {
      title: 'Rastreio de Encomendas',
      desc: 'Essa é uma aplicação Web que consome a API dos Correios para rastrear encomendas. Pode ser facilmente implementado a API de qualquer transportadora e dessa forma conseguir rastrear encomendas de todo o mundo.',
      langs: 'PHP, HTML',
      live: null,
      source: 'https://github.com/Andy8647/dynrank',
      image: ImgRastreio,
    },
  ],
};
