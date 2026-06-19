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
    subtitle: string;
  };
  sections: {
    aboutMe: string;
    education: string;
    certifications: string;
    libraries: string;
    projects: string;
    technologies: string;
  };
  about: {
    heading: string;
    bio: string;
  };
  certifications: {
    starred: string;
    all: string;
  };
  libraries: {
    all: string;
  };
  footer: {
    rights: string;
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
      subtitle: "Senior Full Stack Developer",
    },
    sections: {
      aboutMe: "About me",
      education: "Education",
      certifications: "Certifications",
      libraries: "Open Source Libraries",
      projects: "Projects",
      technologies: "Technologies",
    },
    about: {
      heading: "About me",
      bio: "Senior Full Stack Developer with almost 15 years of experience implementing solutions for digital transformation in the cloud (Azure, AWS), developing cross-platform mobile applications (Flutter, React Native, Cordova) as well as deploying web applications based on microservices (Java, .Net, Python)\nI have a wide range of certifications in Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath that guarantee my knowledge\nMy previous experience allows me to understand and anticipate challenges, as well as propose solutions that add value to the business and ensure return on investment.",
    },
    certifications: {
      starred: "Starred",
      all: "All",
    },
    libraries: {
      all: "All",
    },
    footer: {
      rights: "All rights reserved",
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
      subtitle: "Desarrollador Full Stack Senior",
    },
    sections: {
      aboutMe: "Sobre mí",
      education: "Educación",
      certifications: "Certificaciones",
      libraries: "Librerías de Código Abierto",
      projects: "Proyectos",
      technologies: "Tecnologías",
    },
    about: {
      heading: "Sobre mí",
      bio: "Desarrollador Full Stack Senior con casi 15 años de experiencia implementando soluciones de transformación digital en la nube (Azure, AWS), desarrollando aplicaciones móviles multiplataforma (Flutter, React Native, Cordova) y desplegando aplicaciones web basadas en microservicios (Java, .Net, Python)\nCuento con una amplia gama de certificaciones en Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath que avalan mis conocimientos\nMi experiencia previa me permite entender y anticipar los desafíos, así como proponer soluciones que aporten valor al negocio y aseguren el retorno de la inversión.",
    },
    certifications: {
      starred: "Destacadas",
      all: "Todas",
    },
    libraries: {
      all: "Todas",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
};
