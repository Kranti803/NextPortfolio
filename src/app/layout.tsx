import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "../context/themeContext";

export const metadata: Metadata = {
  title: "Kranti kumar",
  description: "Kranti kumar's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <ThemeProvider>{children}</ThemeProvider> */}
      </body>
    </html>
  );
}
