import { Locale } from "../types";
import About from "./components/about";

export default function Home({ params: { lang } }: Locale) {
  return (
    <main className="mx-auto mt-10 flex w-full p-4 md:mt-14 md:w-4/6">
      <About lang={lang} />
    </main>
  );
}
