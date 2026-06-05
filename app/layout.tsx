import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AiChatWidget from "@/components/AiChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo Pratt | Full Stack Developer & Product Builder",
  description: "Portfolio of innovative web applications including Janus (Texas business intelligence), Earnings Radar (stock screener), and EMDR-BLS (therapy tool).",
  keywords: "portfolio, developer, next.js, react, full stack, web development",
  authors: [{ name: "Pablo Pratt", url: "https://github.com/PabloPratt" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pablo-portfolio.vercel.app",
    title: "Pablo Pratt | Full Stack Developer",
    description: "Portfolio of innovative web applications",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-600 focus:text-white focus:p-2"
        >
          Skip to main content
        </a>
        {children}
        <AiChatWidget />
      </body>
    </html>
  );
}
