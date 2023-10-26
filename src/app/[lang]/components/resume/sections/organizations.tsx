import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { CardContent, CardHeader, CardTitle } from "../../ui/card";
import { OrganizationIcon } from "../../ui/icons";
import Reference from "../../ui/reference";
import { cn } from "@/lib/utils";

export default async function Organizations({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div>
      <CardHeader className="flex flex-row items-center gap-1 pb-4 pt-0">
        <OrganizationIcon />
        <CardTitle>{dict.resume.organizations.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {dict.resume.organizations.list.map((item, index) => (
          <div key={index}>
            <div>
              <div>
                <p className="font-bold">{item.role}</p>
                <Reference href={item.organizationLink}>
                  <p className="border-1 border-black">{item.organization}</p>
                </Reference>
              </div>

              <ul className="list-inside list-disc">
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
