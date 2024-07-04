import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  sms,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chatapp,
  meta,
  starbucks,
  iflair,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java-script Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
    
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "iFlair",
    icon: iflair,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Jay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vivek Sangani",
    designation: "CEO & Founder",
    company: "swaroop AI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jay proved me wrong.",
    name: "Mayur Dosi",
    designation: "Assistant Project Manager",
    company: "iFlair Web Technologies",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jay does.",
    name: "Vikram Rathore",
    designation: "Team Leader",
    company: "iFlair Web Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "School Management System",
    description:
      "The School Management System we developed using Laravel and PHP is a comprehensive web-based platform designed to streamline administrative tasks and enhance communication between stakeholders within educational institutions. It facilitates efficient management of student enrollment, attendance tracking, grades management, and curriculum planning.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/jayvyass/PHP-LARAVEL",
  },
  {
    name: "Real-Time Chat Application",
    description:
      "REAL-TIME CHAT APP, developed with Vue.js and Laravel, allows users to engage in live conversations, send messages instantly, and receive real-time updates on message delivery status.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/jayvyass/real-time-chat",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
