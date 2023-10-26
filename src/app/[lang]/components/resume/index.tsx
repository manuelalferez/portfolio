import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { Card } from "../ui/card";
import { DownloadLink } from "../ui/icons";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Organizations from "./sections/organizations";
import Skills from "./sections/skills";

export default async function Resume({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <div>
        <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
          {dict.resume.title}
        </h1>
        <div className="flex flex-col gap-4 md:items-center">
          <h2 className="flex text-xl md:justify-center md:text-2xl">
            {dict.resume.subtitle}
          </h2>
          <DownloadLink
            href={dict.resume.downloadLink}
            downloadText={dict.resume.downloadText}
          />
        </div>
      </div>
      <Card>
        <Experience lang={lang} />
        <Organizations lang={lang} />
        <Education lang={lang} />
        <Skills lang={lang} />
      </Card>
    </div>
  );
}
