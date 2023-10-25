import { Locale } from "../types";
import About from "./components/about";
import Header from "./components/header";
import Offer from "./components/offer";

export default function Home({ params: { lang } }: Locale) {
  return (
    <main className="mx-auto flex w-full flex-col gap-20 p-4 md:w-4/6">
      <Header />
      <About lang={lang} />
      <Offer lang={lang} />
    </main>
  );
}
