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
  downloadText: string;
  downloadLink: string;
  experience: Experience;
  education: Education;
  organizations: Organizations;
  skills: Skills;
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

interface Organizations {
  title: string;
  list: OrganizationsItem[];
}

interface OrganizationsItem {
  role: string;
  organization: string;
  organizationLink: string;
  achievements: string[];
}

interface Skills {
  title: string;
  list: SkillsItem[];
}

interface SkillsItem {
  category: string;
  items: string;
}

interface ContactSection {
  title: string;
  form: Form;
  toast: Toast;
}

interface Form {
  email: Input;
  message: Input;
  error: Error;
  button: string;
}

interface Input {
  label: string;
  placeholder: string;
}

interface Error {
  email: string;
  emptyField: string;
}

interface Toast {
  success: string;
  error: string;
}

export interface DictionaryData {
  about: AboutSection;
  offer: OfferSection;
  projects: ProjectsSection;
  resume: ResumeSection;
  contact: ContactSection;
}
