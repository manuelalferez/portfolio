import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ChatBubble({
  children,
  img,
  isLeft,
}: {
  children: React.ReactNode;
  img: string;
  isLeft: boolean;
}) {
  return (
    <div
      className={`flex items-end gap-2 ${!isLeft ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={img}
        alt="bubble profile picture"
        width={40}
        height={40}
        className="h-fit rounded-full border-2 border-gray-200"
      />
      <div
        className={cn(
          "rounded-lg border bg-card p-2 text-card-foreground shadow-sm md:flex md:w-fit md:gap-1",
          isLeft ? "rounded-bl-none" : "rounded-br-none",
        )}
      >
        {children}
      </div>
    </div>
  );
}
