"use client";

import { locales } from "@/app/middleware";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function changeLang(language: string) {
    router.push(`/${language}`);
  }
  return (
    <div className="flex justify-end gap-2">
      {locales.map((locale: string) => (
        <button
          className="rounded-md border-2 border-gray-300 p-2 px-4"
          onClick={() => changeLang(locale)}
          key={locale}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
