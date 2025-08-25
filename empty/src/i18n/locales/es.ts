import type { I18nTranslations } from '../types';

export const es: I18nTranslations = {
  navigation: {
    home: "Inicio",
    education: "Educación",
    certifications: "Certificaciones",
    openSource: "Código Abierto",
    projects: "Proyectos",
    contact: "Contacto"
  },
  theme: {
    current: "Tema actual: {{theme}}",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    preference: "Preferencia de Tema",
    descriptions: {
      light: "Usar siempre el modo claro",
      dark: "Usar siempre el modo oscuro",
      system: "Usar preferencia del sistema"
    }
  },
  profile: {
    name: "Danny Vaca",
    title: "Desarrollador Full Stack y Arquitecto de Soluciones",
    subtitle: "Construyendo soluciones escalables con tecnologías modernas",
    description: "Desarrollador Full Stack Senior con casi 15 años de experiencia implementando soluciones para la transformación digital en la nube (Azure, AWS), desarrollando aplicaciones móviles multiplataforma (Flutter, React Native, Cordova) así como desplegando aplicaciones web basadas en microservicios (Java, .Net, Python)\nTengo una amplia gama de certificaciones en Cloudera, Kubernetes, Azure, Terraform, Java, Python, UiPath que garantizan mi conocimiento\nMi experiencia previa me permite comprender y anticipar desafíos, así como proponer soluciones que agregan valor al negocio y aseguran el retorno de la inversión.",
    location: "Ecuador, Guayaquil"
  },
  hero: {
    emailMe: "Envíame un email"
  },
  education: {
    title: "Educación",
    subtitle: "Base académica que formó mi experiencia técnica",
    degrees: {
      masters: "Máster en sistemas de información con mención en inteligencia de negocios",
      engineering: "Ingeniero Electrónico con mención en telecomunicaciones"
    },
    universities: {
      ecotec: "Universidad Tecnológica Ecotec",
      ups: "Universidad Politécnica Salesiana"
    }
  },
  certifications: {
    title: "Certificaciones Profesionales",
    subtitle: "Credenciales reconocidas por la industria y logros de aprendizaje continuo",
    clickToView: "Haz clic para ver credencial ↗",
    categories: {
      all: "Todas",
      cloud: "Nube",
      development: "Desarrollo",
      data: "Datos",
      ai: "IA",
      automation: "Automatización",
      deployment: "Despliegue",
      dataPrivacy: "Privacidad de Datos",
      others: "Otros"
    }
  },
  openSource: {
    title: "Librerías de Código Abierto",
    subtitle: "Contribuyendo a la comunidad de desarrolladores con soluciones reutilizables",
    categories: {
      all: "Todas",
      flutter: "Flutter",
      node: "Node.js",
      python: "Python",
      dockerHub: "Docker Hub",
      arduino: "Arduino",
      rust: "Rust",
      matlab: "Matlab"
    },
    libraries: {
      jmixclientv1: "Librería para conectar con la API REST de jmix v1.x",
      tsframework: "Framework REST para propósitos educativos",
      hotreloader: "Re-ejecuta un comando cuando un archivo cambia en una carpeta específica",
      levenshtein: "Calcula la distancia de levenshtein para encontrar coincidencias entre cadenas",
      azureservicesclient: "Librería para conectar y obtener metadatos de recursos de Azure como synapse, cuentas de almacenamiento, etc",
      jmixclientv2: "Librería para conectar con la API REST de jmix v2.x",
      argumentsParser: "Librería para analizar argumentos de línea de comandos",
      fakeHttpServer: "Servidor http falso que retorna el hostname de la máquina en ejecución y el nombre del nodo compartido vía variables de entorno",
      sqlserver: "Crear contenedor de sqlserver con una base de datos solo pasando el nombre de la base de datos como parámetro sin necesidad de ningún script externo",
      ansible: "Imagen Docker con ansible preinstalado para propósitos de CI",
      terraformAzure: "Imagen Docker con azure cli preinstalado para propósitos de CI",
      shiftRegister: "Librería para convertir números decimales a binario y escribir sobre registros de desplazamiento",
      codeMetadata: "Calcula los metadatos de los proyectos: archivos por extensión, líneas por extensión, promedio de líneas por archivo",
      portCom: "Librería para leer y graficar datos del puerto serial usando Matlab"
    }
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Una muestra de aplicaciones y soluciones que he construido en diferentes dominios",
    categories: {
      all: "Todos",
      mobile: "Móvil"
    },
    links: {
      playstore: "Play Store",
      github: "GitHub"
    },
    items: {
      maintAzureMonitoring: {
        name: "Maint Azure Monitoring",
        description: "App para obtener información (precios, uso) de la cuenta de Azure"
      },
      speedometer: {
        name: "Velocímetro",
        description: "App para medir la velocidad a la que se mueve el dispositivo"
      },
      soundmeter: {
        name: "Medidor de Sonido",
        description: "App para medir la intensidad del ruido que llega al micrófono de tu teléfono"
      },
      mycompass: {
        name: "Mi Brújula",
        description: "App para medir la orientación del dispositivo"
      },
      boxingTimer: {
        name: "Cronómetro de Boxeo",
        description: "Una app que muestra un cronómetro para cada round de tu entrenamiento de boxeo"
      },
      mmaScoreCard: {
        name: "Tarjeta de Puntuación MMA",
        description: "Una app independiente para ver eventos y resultados de MMA"
      }
    }
  },
  contact: {
    title: "Conectemos",
    subtitle: "Listo para colaborar en tu próximo proyecto o discutir oportunidades",
    getInTouch: "Ponte en contacto",
    followMe: "Sígueme"
  },
  language: {
    english: "Inglés",
    spanish: "Español", 
    nativeEnglish: "English",
    nativeSpanish: "Español",
    selector: "Language / Idioma"
  },
  filters: {
    all: "Todas"
  },
  socialNetworks: {
    github: "GitHub",
    linkedin: "LinkedIn",
    youtube: "Youtube"
  },
  accessibility: {
    toggleThemeMenu: "Alternar menú de tema",
    toggleLanguageMenu: "Alternar menú de idioma",
    openMainMenu: "Abrir menú principal",
    closeMainMenu: "Cerrar menú principal"
  }
};
