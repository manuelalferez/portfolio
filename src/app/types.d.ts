export interface Locale {
  params: Lang;
}

export interface Lang {
  lang: string;
}

interface AboutSection {
  hi: string;
  verb: string;
  name: string;
  description: string;
  image: string;
}

interface OfferSection {
  title: string;
  list: OfferItem[];
}

export interface OfferItem {
  image: string;
  title: string;
  description: string;
}

interface ProjectsSection {
  title: string;
  subtitle: string;
  list: ProjectItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  image: string;
  website: string;
  code?: string;
}

export interface DictionaryData {
  about: AboutSection;
  offer: OfferSection;
  projects: ProjectsSection;
}
