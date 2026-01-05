import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const bookkGothic = localFont({
  src: [
    {
      path: "../../public/fonts/BookkGothic_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BookkGothic_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bookk-gothic",
  display: "swap",
});

const bookkMyungjo = localFont({
  src: [
    {
      path: "../../public/fonts/BookkMyungjo_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BookkMyungjo_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bookk-myungjo",
  display: "swap",
});

const yeoleum = localFont({
  src: [
    {
      path: "../../public/fonts/HSYeoleum2.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yeoleum",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "세문전 트래커",
  description: "민음사 세문전 읽기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bookkGothic.className} ${bookkGothic.variable} ${bookkMyungjo.variable} ${yeoleum.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
