import type { Education, Certification, OpenSourceLibrary, Project, SocialNetwork, Profile } from '../types';

export const profile: Profile = {
  name: "Alex Johnson",
  title: "Full Stack Developer & Solutions Architect",
  subtitle: "Building scalable solutions with modern technologies",
  description: "Passionate full stack developer and solutions architect with 8+ years of experience designing and building scalable web applications, microservices, and cloud-native solutions. Expert in React, Node.js, TypeScript, AWS, and modern DevOps practices.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  location: "San Francisco, CA",
  email: "alex@example.com"
};

export const education: Education[] = [
  {
    id: "1",
    title: "Master of Science in Computer Science",
    university: "Stanford University",
    date: "2016 - 2018",
    description: "Specialized in Distributed Systems and Machine Learning"
  },
  {
    id: "2", 
    title: "Bachelor of Science in Software Engineering",
    university: "UC Berkeley",
    date: "2012 - 2016",
    description: "Magna Cum Laude, Focus on Web Technologies"
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
