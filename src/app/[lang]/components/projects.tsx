import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { GithubLink, WebsiteLink } from "./ui/icons";
import { cn } from "@/lib/utils";

export default async function Projects({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <div>
        <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
          {dict.projects.title}
        </h1>
        <h2 className="flex text-xl md:justify-center md:text-2xl">
          {dict.projects.subtitle}
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {dict.projects.list.map((item, index) => (
          <Card className="p-0 shadow-md hover:shadow-lg xl:w-80" key={index}>
            <CardHeader className="p-0">
              <Card className="relative h-40 w-full rounded-none rounded-t-md border-none shadow-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-md rounded-b-none"
                />
              </Card>
            </CardHeader>
            <CardContent className="pt-8">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <div className={cn("text-sm text-muted-foreground")}>
                <span>{item.description}</span>
                <div className="flex items-end justify-between">
                  <span className="pt-4">{item.technologies}</span>
                  <div className="flex gap-2">
                    {item.code && (
                      <GithubLink
                        href={item.code}
                        className="text-gray-500 hover:text-gray-900"
                      />
                    )}
                    <WebsiteLink
                      href={item.website}
                      className="text-gray-500 hover:text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
