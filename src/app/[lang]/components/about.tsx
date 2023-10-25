import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import Image from "next/image";

export default async function About({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mx-auto flex flex-col md:items-center">
      <div className="flex flex-col md:flex-row md:items-center">
        <Image
          src={dict.about.image}
          alt="manuel profile picture"
          width={150}
          height={150}
          className="rounded-full border-2 border-gray-200 p-1"
        />
        <div className="mt-5 flex flex-col md:mt-0 md:pl-4">
          <h2 className="text-2xl">
            {dict.about.hi} <span className="wave">👋</span> {dict.about.verb}
          </h2>
          <h1 className="text-4xl">{dict.about.name}</h1>
        </div>
      </div>

      <span className="mt-8 text-center md:w-2/3 lg:w-1/2">
        {dict.about.description}
      </span>
    </div>
  );
}
