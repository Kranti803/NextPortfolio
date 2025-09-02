import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "@/providers/Providers";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kranti kumar",
  description: "Kranti kumar's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} bg-[#f0f0f0] dark:bg-gradient-to-tr dark:from-zinc-950 dark:via-stone-900 dark:to-neutral-950 max-w-5xl mx-auto px-3`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
