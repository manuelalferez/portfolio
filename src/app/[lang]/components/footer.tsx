import { DictionaryData, Lang } from "@/app/types";
import { GithubIcon, Logo, getSocialIcon } from "./ui/icons";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/app/dictionaries";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Footer({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-16 flex flex-col justify-between gap-12 py-6 md:mt-32 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Logo className={cn("flex flex-col text-sm text-muted-foreground")} />
          <p className={cn("text-sm text-muted-foreground")}>
            © {currentYear} {dict.footer.name}
          </p>
        </div>
        <div className="flex gap-1">
          {dict.footer.social.map((social, index) => (
            <div key={index}>
              <div
                className={cn("flex flex-col text-sm text-muted-foreground")}
              >
                {getSocialIcon(social.key, social.link)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-16">
        <Link href={dict.footer.sourceCode.link} target="_blank">
          <Button className="flex gap-1" variant="outline">
            <GithubIcon /> {dict.footer.sourceCode.text}
          </Button>
        </Link>
      </div>
      {/* <div className="flex gap-16">
        {dict.footer.resources.map((resource, index) => (
          <div key={index}>
            <h3>{resource.title}</h3>
            <div className={cn("text-muted-foreground flex flex-col text-sm")}>
              {resource.list.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="hover:text-gray-900"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
