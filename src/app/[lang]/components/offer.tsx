import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang, OfferItem } from "@/app/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default async function Offer({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-16 flex flex-col gap-12">
      <h1 className="animated-text flex pb-2 text-4xl font-bold md:justify-center md:text-5xl">
        {dict.offer.title}
      </h1>
      <div className="flex flex-wrap justify-evenly gap-4">
        {dict.offer.list.map((item: OfferItem, index: number) => (
          <Card
            className="border-none shadow-none hover:scale-105 md:w-1/3 lg:w-1/4"
            key={index}
          >
            <CardHeader>
              <Card className="w-fit p-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </Card>
              <CardTitle className="pt-4 text-xl">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
