import {
  Wxora,
  eagle,
  tamken,
  cafSaIcon,
  glad,
  maaticon,
  lacasa,
  streamweb,
  menu,
  qrxdivi,
  leave,
  elaiaImage,
  ajadImage,
  mgImage,
  gymImage
} from "../assets/images";

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  typescript,
  udadigi,
  uda,
  CV,
  salla,
  stream,
  logolaca,
  tailwind,
  menudido,
  uwd,
  sql,
  qrx,
  ajad,
  mg,
  elaia,
  coach,
  python
} from "../assets/icons";

export { uda, udadigi, CV };
export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "ExpressJS",
    type: "Backend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
    {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwind,
    name: "tailwind css",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Shopify",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "wordpress",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Odoo ERP",
    type: "Frontend",
  },
  {
    imageUrl: salla,
    name: "Salla",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "SEO",
    type: "Animation",
  },

  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: tailwindcss,
    name: "Woocommerce",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer  ",
    company_name: "UWD",
    icon: uwd,
    iconBg: "#15acb161",
    date: " June  2025 - Present ",
    points: [
      "Building advanced web systems including financial dashboards, multi-branch e-commerce platforms with delivery tracking, real estate websites, and legacy system rebuilds using the MERN stack, SQL, and PHP.",
    ],
  },
  {
    title: "Full Stack Developer  ",
    company_name: "Stream Creations",
    icon: stream,
    iconBg: "#0d74ae",
    date: " July 2024 - May 2025 ",
    points: [
      "Developed and optimized web and e-commerce platforms using MERN Stack, WordPress, Shopify, and Salla. Handled full front-end and back-end delivery with direct client collaboration.",
    ],
  },
  {
    title: "Shopify Expert And salla Developer  ",
    company_name: "Caf Sap",
    icon: cafSaIcon,
    iconBg: "#ffc107",
    date: " Oct 2023 - May 2024  ",
    points: [
      "Delivered custom e-commerce themes and solutions for clients across Saudi Arabia, working within a high-performing IT team.",
    ],
  },
  {
    title: "React.js And Next.js And Express Developer",
    company_name: "Wxora",
    icon: Wxora,
    iconBg: "#000",
    date: " Apr 2023 - July 2023  ",
    points: [
      "Hands-on training in React, Next.js, Node.js, and Express — working on real projects and applying clean code and system design principles.",
    ],
  },
  {
    title: "Wordpress Developer - part Time",
    company_name: "Tamken",
    icon: tamken,
    iconBg: "#a876ba",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Built and customized WordPress websites, focusing on responsive design and plugin management.",
    ],
  },
  {
    title: "E-commerce Manager And Web Developer",
    company_name: "Eagle",
    icon: eagle,
    iconBg: "#e5e5e5",
    date: "Feb 2021 - Mar 2023",
    points: [
      "Managed and developed the company's online store on Shopify and Odoo — overseeing operations, platform updates, and technical improvements.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/KarimEmadHmady",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/karimemadhamdy/",
  },
];

export const projects = [
  {
    iconUrl: qrx,
    theme: "btn-back-black",
    name: "QRX",
    category: "Systems & SaaS",
    description: "SaaS Platform for Digital Menu & Delivery Management ",
    link: "https://qrx-menu.vercel.app/",
    imgProdu: qrxdivi,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: coach,
    theme: "btn-back-black",
    name: "Gym Core System",
    category: "Systems & SaaS",
    description: "Complete gym management ٍSystem and membership control",
    link: "https://gymcore-system.netlify.app",
    imgProdu: gymImage,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: menudido,
    theme: "btn-back-black",
    name: "Digital QR Code Menu",
    category: "Systems & SaaS",
    description: "QRX — Live Instance A real restaurant running on the QRX SaaS platform. ",
    link: "https://qrx-menu.vercel.app/didos",
    imgProdu: menu,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "Stream Creations",
    category: "E-commerce & Business",
    description: "Marketing Agency - Country: Egypt",
    link: "https://streamcreations.com/",
    imgProdu: streamweb,
    demo: "",
    codeback: ""
  },

  {
    iconUrl: uwd,
    theme: "btn-back-black",
    name: "HR System and leaves Manages ",
    category: "Systems & SaaS",
    description: "Complete HR management and leave tracking system with approvals, employee records, and email notifications ",
    link: "https://hr-system-uwd.netlify.app",
    imgProdu: leave,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: mg,
    theme: "btn-back-black",
    name: "MG Development",
    category: "Real Estate",
    description: "Smart property management and real estate marketing",
    link: "https://mg.com.eg/",
    imgProdu: mgImage,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: logolaca,
    theme: "btn-back-black",
    name: "Dar Zayed",
    category: "E-commerce & Business",
    description: "Handmade products - Country: Egypt",
    link: "https://darzayed-eg.com/",
    imgProdu: lacasa,
    demo: "",
    codeback: ""
  },
  {
    iconUrl: elaia,
    theme: "btn-back-black",
    name: "elaia ",
    category: "Real Estate",
    description: "Modern luxury residential compound with facilities",
    link: "https://ajaddevelopments.com/elaia",
    imgProdu: elaiaImage,
    demo: "",
    codeback: ""
  },

  {
    iconUrl: ajad,
    theme: "btn-back-black",
    name: "Ajad Development",
    category: "Real Estate",
    description: "Professional real estate sales and investment solutions",
    link: "https://ajaddevelopments.com",
    imgProdu: ajadImage,
    demo: "",
    codeback: ""
  },
/*   {
    iconUrl: maaticon,
    theme: "btn-back-black",
    name: "Maat Tours",
    category: "Tourism",
    description: "Tourist trips ",
    link: "https://maat-tours.netlify.app/",
    imgProdu: glad,
    demo: "",
    codeback: ""
  },
 */

];
