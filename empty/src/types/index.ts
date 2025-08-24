export interface Education {
  id: string;
  avatar: string;
  title: string;
  university: string;
  date: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  date: string;
  image: string;
  category: string;
  credentialUrl?: string;
}

export interface OpenSourceLibrary {
  id: string;
  title: string;
  description: string;
  logo: string;
  category: string;
  npmUrl?: string;
  githubUrl?: string;
  downloads?: string;
  stars?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  technologies: string[];
  githubUrl?: string;
  playstoreUrl?: string;
  appstoreUrl?: string;
  webUrl?: string;
  category: string;
}

export interface SocialNetwork {
  id: string;
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  location: string;
  email: string;
}
