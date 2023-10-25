export interface Locale {
  params: Lang;
}

export interface Lang {
  lang: string;
}

interface AboutData {
  hi: string;
  verb: string;
  name: string;
  description: string;
  image: string;
}

export interface DictionaryData {
  about: AboutData;
}
