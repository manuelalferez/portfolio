import { Locale } from "../types";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Offer from "./components/offer";
import Projects from "./components/projects";
import Resume from "./components/resume";

export default function Home({ params: { lang } }: Locale) {
  return (
    <main className="mx-auto flex w-full flex-col gap-20 p-4 lg:w-11/12 xl:w-1/2">
      <Header />
      <About lang={lang} />
      <Offer lang={lang} />
      <Projects lang={lang} />
      <Resume lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
