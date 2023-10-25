import { Locale } from "../types";
import About from "./components/about";
import Header from "./components/header";
import Offer from "./components/offer";
import Projects from "./components/projects";

export default function Home({ params: { lang } }: Locale) {
  return (
    <main className="mx-auto flex w-full flex-col gap-20 p-4 md:w-11/12 lg:w-4/6">
      <Header />
      <About lang={lang} />
      <Offer lang={lang} />
      <Projects lang={lang} />
    </main>
  );
}
