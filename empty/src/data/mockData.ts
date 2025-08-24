import type { Education, Certification, OpenSourceLibrary, Project, SocialNetwork, Profile } from '../types';
import profilePicture from "../images/profile.jpg";
import Ecotec from "../images/education/ecotec.png";
import UPS from "../images/education/ups.png";

export const profile: Profile = {
  name: "Danny Vaca",
  title: "Full Stack Developer & Solutions Architect",
  subtitle: "Building scalable solutions with modern technologies",
  description: "Senior Full Stack Developer with almost 15 years of experience implementing solutions for digital transformation in the cloud (Azure, AWS), developing cross-platform mobile applications (Flutter, React Native, Cordova) as well as deploying web applications based on microservices (Java, .Net, Python)\nI have a wide range of certifications in Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath that guarantee my knowledge\nMy previous experience allows me to understand and anticipate challenges, as well as propose solutions that add value to the business and ensure return on investment.",
  avatar: profilePicture,
  location: "Ecuador, Guayaquil",
  email: "danny270793@gmail.com"
};

export const education: Education[] = [
  {
    id: "1",
    avatar: Ecotec,
    title: "Máster en sistemas de información con mención en inteligencia de negocios",
    university: "Universidad Tecnológica Ecotec",
    date: "2020 - 2021"
  },
  {
    id: "2", 
    avatar: UPS,
    title: "Ingeniero Electrónico con mención en telecomunicaciones",
    university: "Universidad Politécnica Salesiana",
    date: "2012 - 2017"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Solutions Architect Professional",
    provider: "Amazon Web Services",
    date: "2023",
    image: "https://images.credly.com/size/680x680/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    category: "Cloud",
    credentialUrl: "https://credly.com/badges/example"
  },
  {
    id: "2",
    title: "Google Cloud Professional Cloud Architect",
    provider: "Google Cloud",
    date: "2022",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/25291670",
    category: "Cloud"
  },
  {
    id: "3",
    title: "Certified Kubernetes Administrator",
    provider: "Linux Foundation",
    date: "2023",
    image: "https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    category: "DevOps"
  },
  {
    id: "4",
    title: "MongoDB Certified Developer",
    provider: "MongoDB",
    date: "2022",
    image: "https://images.credly.com/size/680x680/images/5f1d0e96-3e17-4fa0-8039-4dc1d36b64f8/MongoDB_Associate_Developer.png",
    category: "Database"
  },
  {
    id: "5",
    title: "React Advanced Certification",
    provider: "Meta",
    date: "2021",
    image: "https://images.credly.com/size/680x680/images/4edcd68c-17d9-4ed2-a9b4-d89ec6c76d15/Meta_Front-End_Developer_Certificate.png",
    category: "Frontend"
  }
];

export const openSourceLibraries: OpenSourceLibrary[] = [
  {
    id: "1",
    title: "react-hooks-toolkit",
    description: "A collection of powerful and reusable React hooks for modern applications. Includes hooks for API calls, local storage, debouncing, and more.",
    logo: "⚛️",
    category: "React",
    npmUrl: "https://www.npmjs.com/package/react-hooks-toolkit",
    githubUrl: "https://github.com/alexjohnson/react-hooks-toolkit",
    downloads: "50K+/month",
    stars: 1247
  },
  {
    id: "2",
    title: "ts-api-generator",
    description: "Automatically generate TypeScript API clients from OpenAPI specifications. Reduces boilerplate and ensures type safety.",
    logo: "🔧",
    category: "TypeScript",
    npmUrl: "https://www.npmjs.com/package/ts-api-generator",
    githubUrl: "https://github.com/alexjohnson/ts-api-generator",
    downloads: "25K+/month",
    stars: 892
  },
  {
    id: "3",
    title: "microservice-logger",
    description: "Structured logging library for Node.js microservices with built-in correlation tracking and observability features.",
    logo: "📊",
    category: "Node.js",
    npmUrl: "https://www.npmjs.com/package/microservice-logger",
    githubUrl: "https://github.com/alexjohnson/microservice-logger",
    downloads: "75K+/month",
    stars: 2103
  },
  {
    id: "4",
    title: "aws-deploy-toolkit",
    description: "CLI tool for deploying applications to AWS with zero-downtime deployments and automatic rollback capabilities.",
    logo: "☁️",
    category: "DevOps",
    githubUrl: "https://github.com/alexjohnson/aws-deploy-toolkit",
    downloads: "15K+/month",
    stars: 567
  }
];

export const projects: Project[] = [
  {
    id: "1",
    name: "EcoTracker",
    description: "Mobile app for tracking personal carbon footprint with AI-powered suggestions for reducing environmental impact.",
    icon: "🌱",
    technologies: ["React Native", "Node.js", "TensorFlow", "AWS"],
    githubUrl: "https://github.com/alexjohnson/ecotracker",
    playstoreUrl: "https://play.google.com/store/apps/details?id=com.ecotracker",
    appstoreUrl: "https://apps.apple.com/app/ecotracker/id123456789",
    category: "Mobile"
  },
  {
    id: "2",
    name: "DevFlow",
    description: "Project management platform specifically designed for software development teams with integrated CI/CD monitoring.",
    icon: "🚀",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/alexjohnson/devflow",
    webUrl: "https://devflow.app",
    category: "Web"
  },
  {
    id: "3",
    name: "SmartHome Hub",
    description: "IoT platform for managing smart home devices with voice control and machine learning automation.",
    icon: "🏠",
    technologies: ["Vue.js", "Python", "MQTT", "Raspberry Pi"],
    githubUrl: "https://github.com/alexjohnson/smarthome-hub",
    webUrl: "https://smarthome-demo.com",
    category: "IoT"
  },
  {
    id: "4",
    name: "CryptoPortfolio",
    description: "Real-time cryptocurrency portfolio tracker with advanced analytics and automated trading strategies.",
    icon: "₿",
    technologies: ["React", "Express", "WebSocket", "Chart.js"],
    githubUrl: "https://github.com/alexjohnson/crypto-portfolio",
    webUrl: "https://cryptoportfolio.live",
    category: "Fintech"
  }
];

export const socialNetworks: SocialNetwork[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://github.com/alexjohnson",
    icon: "fab fa-github",
    username: "alexjohnson"
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexjohnson",
    icon: "fab fa-linkedin",
    username: "alexjohnson"
  },
  {
    id: "3",
    name: "Twitter",
    url: "https://twitter.com/alexjohnson_dev",
    icon: "fab fa-twitter",
    username: "@alexjohnson_dev"
  },
  {
    id: "4",
    name: "Medium",
    url: "https://medium.com/@alexjohnson",
    icon: "fab fa-medium",
    username: "@alexjohnson"
  },
  {
    id: "5",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/123456/alexjohnson",
    icon: "fab fa-stack-overflow",
    username: "alexjohnson"
  }
];
