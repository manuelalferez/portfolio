import { getDictionary } from "@/app/dictionaries";
import { DictionaryData, Lang, OfferItem } from "@/app/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default async function Offer({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <div className="mt-10 flex flex-col gap-8">
      <h1 className="flex justify-center bg-gradient-to-r from-gray-100 via-black to-black bg-clip-text text-4xl font-bold text-transparent">
        {dict.offer.title}
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {dict.offer.list.map((item: OfferItem, index: number) => (
          <Card
            className="border-none shadow-none hover:scale-105 lg:w-1/4"
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
