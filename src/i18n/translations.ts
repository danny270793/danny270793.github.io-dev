export type Language = "en" | "es";

export interface Translations {
  nav: {
    about: string;
    education: string;
    certifications: string;
    libraries: string;
    projects: string;
    technologies: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    tagline: string;
    ctaWork: string;
    ctaContact: string;
    scroll: string;
  };
  stats: {
    years: string;
    certifications: string;
    libraries: string;
    projects: string;
  };
  sections: {
    aboutMe: string;
    education: string;
    certifications: string;
    libraries: string;
    projects: string;
    technologies: string;
    contact: string;
  };
  headings: {
    about: string;
    education: string;
    certifications: string;
    libraries: string;
    projects: string;
    technologies: string;
    contact: string;
  };
  subs: {
    education: string;
    certifications: string;
    libraries: string;
    projects: string;
    technologies: string;
    contact: string;
  };
  about: {
    heading: string;
    bio: string;
  };
  highlights: {
    cloud: string;
    cloudDesc: string;
    mobile: string;
    mobileDesc: string;
    backend: string;
    backendDesc: string;
    data: string;
    dataDesc: string;
  };
  certifications: {
    starred: string;
    all: string;
  };
  libraries: {
    all: string;
  };
  settings: {
    theme: string;
    language: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      certifications: "Certifications",
      libraries: "Libraries",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Senior Full Stack Developer",
      tagline:
        "I design and build cloud-native platforms, cross-platform mobile apps and microservice-based web systems that deliver real business value.",
      ctaWork: "View my work",
      ctaContact: "Get in touch",
      scroll: "Scroll",
    },
    stats: {
      years: "Years of experience",
      certifications: "Certifications",
      libraries: "Open source libraries",
      projects: "Projects",
    },
    sections: {
      aboutMe: "About me",
      education: "Education",
      certifications: "Certifications",
      libraries: "Open Source Libraries",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
    headings: {
      about: "Turning complex problems into elegant software",
      education: "Academic foundation",
      certifications: "Validated expertise",
      libraries: "Giving back to open source",
      projects: "Things I've shipped",
      technologies: "My toolbox",
      contact: "Let's build something together",
    },
    subs: {
      education: "Formal training in engineering and information systems.",
      certifications:
        "Industry certifications across cloud, data, automation and more.",
      libraries:
        "Packages I maintain and publish on npm, pub.dev, crates.io, PyPI and Docker Hub.",
      projects: "Apps published on the stores and open sourced on GitHub.",
      technologies:
        "The technologies I use to design, build, deploy and monitor software.",
      contact:
        "Have a project in mind or just want to say hi? Find me on any of these platforms.",
    },
    about: {
      heading: "About me",
      bio: "Senior Full Stack Developer with almost 15 years of experience implementing solutions for digital transformation in the cloud (Azure, AWS), developing cross-platform mobile applications (Flutter, React Native, Cordova) as well as deploying web applications based on microservices (Java, .Net, Python)\nI have a wide range of certifications in Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath that guarantee my knowledge\nMy previous experience allows me to understand and anticipate challenges, as well as propose solutions that add value to the business and ensure return on investment.",
    },
    highlights: {
      cloud: "Cloud",
      cloudDesc: "Azure, AWS, Kubernetes and Terraform",
      mobile: "Mobile",
      mobileDesc: "Flutter, React Native and Cordova",
      backend: "Backend",
      backendDesc: "Microservices in Java, .Net and Python",
      data: "Data",
      dataDesc: "Spark, Hadoop and Power BI",
    },
    certifications: {
      starred: "Starred",
      all: "All",
    },
    libraries: {
      all: "All",
    },
    settings: {
      theme: "Theme",
      language: "Language",
    },
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with Astro",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
      certifications: "Certificaciones",
      libraries: "Librerías",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      subtitle: "Desarrollador Full Stack Senior",
      tagline:
        "Diseño y construyo plataformas en la nube, apps móviles multiplataforma y sistemas web basados en microservicios que aportan valor real al negocio.",
      ctaWork: "Ver mi trabajo",
      ctaContact: "Contáctame",
      scroll: "Desliza",
    },
    stats: {
      years: "Años de experiencia",
      certifications: "Certificaciones",
      libraries: "Librerías open source",
      projects: "Proyectos",
    },
    sections: {
      aboutMe: "Sobre mí",
      education: "Educación",
      certifications: "Certificaciones",
      libraries: "Librerías de Código Abierto",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    headings: {
      about: "Convierto problemas complejos en software elegante",
      education: "Formación académica",
      certifications: "Experiencia certificada",
      libraries: "Contribuyendo al código abierto",
      projects: "Lo que he publicado",
      technologies: "Mi caja de herramientas",
      contact: "Construyamos algo juntos",
    },
    subs: {
      education: "Formación en ingeniería y sistemas de información.",
      certifications:
        "Certificaciones de la industria en nube, datos, automatización y más.",
      libraries:
        "Paquetes que mantengo y publico en npm, pub.dev, crates.io, PyPI y Docker Hub.",
      projects: "Apps publicadas en las tiendas y de código abierto en GitHub.",
      technologies:
        "Las tecnologías que uso para diseñar, construir, desplegar y monitorear software.",
      contact:
        "¿Tienes un proyecto en mente o solo quieres saludar? Encuéntrame en cualquiera de estas plataformas.",
    },
    about: {
      heading: "Sobre mí",
      bio: "Desarrollador Full Stack Senior con casi 15 años de experiencia implementando soluciones de transformación digital en la nube (Azure, AWS), desarrollando aplicaciones móviles multiplataforma (Flutter, React Native, Cordova) y desplegando aplicaciones web basadas en microservicios (Java, .Net, Python)\nCuento con una amplia gama de certificaciones en Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath que avalan mis conocimientos\nMi experiencia previa me permite entender y anticipar los desafíos, así como proponer soluciones que aporten valor al negocio y aseguren el retorno de la inversión.",
    },
    highlights: {
      cloud: "Nube",
      cloudDesc: "Azure, AWS, Kubernetes y Terraform",
      mobile: "Móvil",
      mobileDesc: "Flutter, React Native y Cordova",
      backend: "Backend",
      backendDesc: "Microservicios en Java, .Net y Python",
      data: "Datos",
      dataDesc: "Spark, Hadoop y Power BI",
    },
    certifications: {
      starred: "Destacadas",
      all: "Todas",
    },
    libraries: {
      all: "Todas",
    },
    settings: {
      theme: "Tema",
      language: "Idioma",
    },
    footer: {
      rights: "Todos los derechos reservados",
      builtWith: "Hecho con Astro",
    },
  },
};
