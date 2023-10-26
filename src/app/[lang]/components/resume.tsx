import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { cn } from "@/lib/utils";
import Reference from "./ui/reference";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { EducationIcon, ExperienceIcon } from "./ui/icons";

export default async function Resume({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <div>
        <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
          {dict.resume.title}
        </h1>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-1">
          <ExperienceIcon />
          <CardTitle>{dict.resume.experience.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {dict.resume.experience.list.map((item, index) => (
            <div key={index}>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{item.role}</p>
                    <Reference href={item.companyLink}>
                      <p className="border-1 inline-block border-black">
                        {item.company}
                      </p>
                    </Reference>
                  </div>
                  <div className={cn("text-end text-sm text-muted-foreground")}>
                    <h3>{item.period}</h3>
                    <h3>{item.location}</h3>
                  </div>
                </div>

                <ul className="w-2/3 list-inside list-disc">
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
            </div>
          ))}
        </CardContent>
        <CardHeader className="flex flex-row items-center gap-1">
          <EducationIcon />
          <CardTitle>{dict.resume.education.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {dict.resume.education.list.map((item, index) => (
            <div key={index}>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className={cn("text-sm text-muted-foreground")}>
                      {item.institution}
                    </p>
                  </div>
                  <div className={cn("text-end text-sm text-muted-foreground")}>
                    <h3>{item.period}</h3>
                    <h3>{item.location}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
