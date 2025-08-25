export interface I18nTranslations {
  navigation: {
    home: string;
    education: string;
    certifications: string;
    openSource: string;
    projects: string;
    contact: string;
  };
  theme: {
    current: string;
    light: string;
    dark: string;
    system: string;
    preference: string;
    descriptions: {
      light: string;
      dark: string;
      system: string;
    };
  };
  profile: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    location: string;
  };
  hero: {
    emailMe: string;
  };
  education: {
    title: string;
    subtitle: string;
    degrees: {
      masters: string;
      engineering: string;
    };
    universities: {
      ecotec: string;
      ups: string;
    };
  };
  certifications: {
    title: string;
    subtitle: string;
    clickToView: string;
    categories: {
      all: string;
      cloud: string;
      development: string;
      data: string;
      ai: string;
      automation: string;
      deployment: string;
      dataPrivacy: string;
      others: string;
    };
  };
  openSource: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      flutter: string;
      node: string;
      python: string;
      dockerHub: string;
      arduino: string;
      rust: string;
      matlab: string;
    };
    libraries: {
      jmixclientv1: string;
      tsframework: string;
      hotreloader: string;
      levenshtein: string;
      azureservicesclient: string;
      jmixclientv2: string;
      argumentsParser: string;
      fakeHttpServer: string;
      sqlserver: string;
      ansible: string;
      terraformAzure: string;
      shiftRegister: string;
      codeMetadata: string;
      portCom: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      mobile: string;
    };
    links: {
      playstore: string;
      github: string;
    };
    items: {
      maintAzureMonitoring: {
        name: string;
        description: string;
      };
      speedometer: {
        name: string;
        description: string;
      };
      soundmeter: {
        name: string;
        description: string;
      };
      mycompass: {
        name: string;
        description: string;
      };
      boxingTimer: {
        name: string;
        description: string;
      };
      mmaScoreCard: {
        name: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    followMe: string;
  };
  language: {
    english: string;
    spanish: string;
    nativeEnglish: string;
    nativeSpanish: string;
    selector: string;
  };
  filters: {
    all: string;
  };
  socialNetworks: {
    github: string;
    linkedin: string;
    youtube: string;
  };
  accessibility: {
    toggleThemeMenu: string;
    toggleLanguageMenu: string;
    openMainMenu: string;
    closeMainMenu: string;
  };
}
