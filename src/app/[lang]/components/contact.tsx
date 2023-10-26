import { DictionaryData, Lang } from "@/app/types";
import { ContactForm } from "./ui/contact-form";
import { getDictionary } from "@/app/dictionaries";

export default async function Contact({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
        {dict.contact.title}
      </h1>
      <ContactForm dict={dict} />
    </div>
  );
}
