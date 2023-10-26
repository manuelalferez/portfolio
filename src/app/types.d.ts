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

interface ResumeSection {
  title: string;
  subtitle: string;
  download: string;
  downloadLink: string;
  experience: Experience;
  education: Education;
}

interface Experience {
  title: string;
  list: ExperienceItem[];
}
interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyLink: string;
  location: string;
  achievements: string[];
}

interface Education {
  title: string;
  list: EducationItem[];
}

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  location: string;
}

export interface DictionaryData {
  about: AboutSection;
  offer: OfferSection;
  projects: ProjectsSection;
  resume: ResumeSection;
}
