import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { CardContent, CardHeader, CardTitle } from "../../ui/card";
import { EducationIcon } from "../../ui/icons";
import { cn } from "@/lib/utils";

export default async function Education({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div>
      <CardHeader className="flex flex-row items-center gap-1 pb-4 pt-0">
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
                  <p className={cn("text-muted-foreground text-sm")}>
                    {item.institution}
                  </p>
                </div>
                <div className={cn("text-muted-foreground text-end text-sm")}>
                  <h3>{item.period}</h3>
                  <h3>{item.location}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
}
