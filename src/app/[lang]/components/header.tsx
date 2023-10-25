"use client";

import { locales } from "@/app/middleware";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const router = useRouter();

  function changeLang(language: string) {
    router.push(`/${language}`);
  }
  return (
    <div className="flex justify-end gap-2">
      {locales.map((locale: string) => (
        <Button
          variant="outline"
          onClick={() => changeLang(locale)}
          key={locale}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
