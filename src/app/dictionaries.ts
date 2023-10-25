import "server-only";
import { DictionaryData } from "./types";

interface Dictionary {
  [key: string]: () => Promise<{ [key: string]: { [key: string]: string } }>;
}

const dictionaries: Dictionary = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale]() as unknown as DictionaryData;
