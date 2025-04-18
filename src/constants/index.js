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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // laravel2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur ReactJS",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Créateur de Contenu",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: javascript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Développeur React.js",
    company_name: "Ecole Superieure La canadienne",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mars 2020 - Avril 2021",
    points: [
      "Développement et maintenance des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes transverses, y compris les designers, les chefs de produits et les autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de design responsive et garantie de la compatibilité entre les navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur React Native",
    company_name: "Ecole Superieure La canadienne",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Janvier 2021 - Février 2022",
    points: [
      "Développement et maintenance des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes transverses, y compris les designers, les chefs de produits et les autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de design responsive et garantie de la compatibilité entre les navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Web",
    company_name: "Ecole Superieure La canadienne",
    icon: shopify,
    iconBg: "#383E56",
    date: "Janvier 2022 - Janvier 2023",
    points: [
      "Développement et maintenance des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes transverses, y compris les designers, les chefs de produits et les autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de design responsive et garantie de la compatibilité entre les navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
  {
    title: "Développeur Front-End",
    company_name: "Ecole Superieure La canadienne",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Janvier 2023 - Présent",
    points: [
      "Développement et maintenance des applications web en utilisant React.js et d'autres technologies associées.",
      "Collaboration avec des équipes transverses, y compris les designers, les chefs de produits et les autres développeurs pour créer des produits de haute qualité.",
      "Mise en œuvre de design responsive et garantie de la compatibilité entre les navigateurs.",
      "Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Je pensais qu'il était impossible de créer un site aussi beau que notre produit, mais Rick m'a prouvé le contraire.",
    name: "Audrey Lea",
    designation: "Directrice financière",
    company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Je n'ai jamais rencontré un développeur web qui se soucie autant du succès de ses clients que Rick.",
    name: "Boris WAFFO",
    designation: "Directeur des opérations",
    company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Après l'optimisation de notre site web par Frank, notre trafic a augmenté de 50 %. Nous ne le remercierons jamais assez !",
    name: "Jodelle Kamdem",
    designation: "Directrice technique",
    company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Location de Voitures",
    description:
      "Plateforme web permettant aux utilisateurs de rechercher, réserver et gérer la location de voitures auprès de divers fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins de transport.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Frankam487",
  },
  {
    name: "Omiie Technologies",
    description:
      "Application web permettant aux utilisateurs d'acheter du materiel électronique, de consulter les fourchettes de prix estimées pour les postes et de vente et de la maintenance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.omiie.devfack.com/",
  },
  {
    name: "Guide de Voyage",
    description:
      "Une plateforme de réservation de voyages complète permettant aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et offrant des recommandations personnalisées pour les destinations populaires.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Frankam487",
  },
];

export { services, technologies, experiences, testimonials, projects };
