import { Lang } from "@/app/types";
import { ContactForm } from "./ui/contact-form";

export default async function Contact({ lang }: Lang) {
  return (
    <div className="mt-16 flex flex-col gap-12">
      <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
        Let's work together!
      </h1>
      <ContactForm />
    </div>
  );
}
