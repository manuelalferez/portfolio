import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { CardContent, CardHeader, CardTitle } from "../../ui/card";
import { SkillIcon } from "../../ui/icons";
import { cn } from "@/lib/utils";

export default async function Skills({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div>
      <CardHeader className="flex flex-row items-center gap-1 pb-4 pt-0">
        <SkillIcon />
        <CardTitle>{dict.resume.skills.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 md:gap-0">
        {dict.resume.skills.list.map((item, index) => (
          <div key={index}>
            <p className="flex flex-col font-bold md:flex-row md:items-center">
              {item.category}:
              <span className={cn("text-muted-foreground text-sm font-normal")}>
                ({item.items})
              </span>
            </p>
          </div>
        ))}
      </CardContent>
    </div>
  );
}
