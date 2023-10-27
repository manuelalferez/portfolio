import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lang } from "../types";
import { Toaster } from "./components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Alférez",
  description:
    "Software Developer. GDG organizer. Trekking. Open Source. Chess player",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Lang;
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        {children} <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
