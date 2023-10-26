import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Reference from "./ui/reference";

export default async function Resume({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <div>
        <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
          {dict.resume.title}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {dict.resume.experience.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="md:w-2/3">
              <p className="font-bold">{item.role}</p>
              <Reference href={item.companyLink}>
                <p className="border-1 inline-block border-black">
                  {item.company}
                </p>
              </Reference>
              <ul className="list-inside list-disc">
                {item.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={cn("text-sm text-muted-foreground")}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{item.period}</h3>
              <h3>{item.location}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
