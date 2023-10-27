import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { CardContent, CardHeader, CardTitle } from "../../ui/card";
import { ExperienceIcon } from "../../ui/icons";
import Reference from "../../ui/reference";
import { cn } from "@/lib/utils";

export default async function Experience({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div>
      <CardHeader className="flex flex-row items-center gap-1 pb-4">
        <ExperienceIcon />
        <CardTitle>{dict.resume.experience.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {dict.resume.experience.list.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex justify-between pb-1">
                <div>
                  <h2 className="text-xl">{item.role}</h2>
                  <Reference href={item.companyLink}>
                    <p className="border-1 inline-block border-black">
                      {item.company}
                    </p>
                  </Reference>
                </div>
                <div
                  className={cn(
                    "text-muted-foreground flex flex-col text-end text-sm",
                  )}
                >
                  <span>{item.location}</span>
                </div>
              </div>

              <ul className="list-inside list-disc text-justify">
                {item.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={cn("text-muted-foreground text-sm")}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
}
