interface Profile {
  network: "GitHub" | "LinkedIn";
  username: string;
  url: string;
}

interface Location {
  city: string;
  region: string;
  postalCode: number;
  country: string;
}

interface Work {
  organization: string;
  position: string;
  url: string;
  location: string;
  startDate: Date;
  endDate: Date | "present";
  highlights: string[];
  keywords?: string[];
}

interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: Date;
  endDate: Date | "present";
  location: string;
  honors?: string[];
  courses?: string[];
  highlights?: string[];
}

interface Affiliation {
  organization: string;
  position: string;
  location: string;
  url?: string;
  startDate: Date;
  endDate: Date | "present";
  highlights: string[];
}

interface Award {
  title: string;
  date: string;
  issuer: string;
  url?: string;
  location: string;
  highlights: string[];
}

interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: Date;
  url: string;
}

interface Project {
  name: string;
  url: string;
  affiliation: string;
  startDate: Date;
  endDate: Date | "present";
  highlights: string[];
}

interface Skill {
  category: string;
  skills: string[];
}

interface Language {
  language: string;
  fluency: string;
}

interface Interest {
  interests: string[];
}

interface Reference {
  name: string;
  reference: string;
  url: string;
}

export interface CurriculumVitae {
  personal: {
    avatar: string;
    name: string;
    email: string;
    phone: string;
    url: string;
    location: Location;
    profiles: Profile[];
    summary: string;
    about?: string;
  };
  work: Work[];
  education: Education[];
  affiliations: Affiliation[] | undefined;
  awards: Award[] | undefined;
  certificates: Certificate[] | undefined;
  publications: Publication[] | undefined;
  projects: Project[] | undefined;
  keywords: string[] | undefined;
  skills: Skill[] | undefined;
  languages: Language[] | undefined;
  interests: Interest | undefined;
  references: Reference[] | undefined;
}
