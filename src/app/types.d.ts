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

export interface DictionaryData {
  about: AboutSection;
  offer: OfferSection;
}
