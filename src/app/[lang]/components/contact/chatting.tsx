import { Card, CardContent } from "../ui/card";
import Reference from "../ui/reference";
import { DictionaryData, Lang } from "@/app/types";
import { getDictionary } from "@/app/dictionaries";
import ChatBubble from "./chat-bubble";

export default async function Chatting({ lang }: Lang) {
  const dict: DictionaryData = await getDictionary(lang);
  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col gap-2 p-2 py-6 md:p-6">
        <ChatBubble img={dict.about.image} isLeft={true}>
          {dict.contact.chat.texts[0]}
          <Reference href={dict.contact.chat.twitter}>
            {dict.contact.chat.texts[1]}
          </Reference>
          {dict.contact.chat.texts[2]}
          <Reference href={dict.contact.chat.telegram}>
            {dict.contact.chat.texts[3]}
          </Reference>
        </ChatBubble>

        <ChatBubble img={dict.contact.chat.userBubbleImg} isLeft={false}>
          {dict.contact.chat.texts[4]}
        </ChatBubble>

        <ChatBubble img={dict.about.image} isLeft={true}>
          {dict.contact.chat.texts[5]}
          <Reference href={dict.contact.chat.email}>
            {dict.contact.chat.texts[6]}
          </Reference>
        </ChatBubble>
      </CardContent>
    </Card>
  );
}
