import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({
  weight: "500",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--noto-sans_KR-medium",
  fallback: ["system-ui"],
});

export const metadata: Metadata = {
  title: "c/2022YH",
  description: "키워드로 윤하의 우주를 탐험하세요.",
  themeColor: "#407ED9",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1",
  openGraph: {
    title: "c/2022YH",
    description: "키워드로 윤하의 우주를 탐험하세요.",
    authors: ["Team Expolorers"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
