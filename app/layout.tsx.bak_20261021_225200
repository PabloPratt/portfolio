import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import AiChatWidget from "@/components/AiChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Pratt | Full Stack Developer & Product Builder",
  description: "Portfolio and background for Pablo Pratt: Dell sales leader, product builder, security M.S. graduate, and bilingual EN/ES operator.",
  keywords: "portfolio, developer, next.js, react, full stack, ai agents, security, product builder",
  authors: [{ name: "Pablo Pratt", url: "https://portfolio-zeta-green-62.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-zeta-green-62.vercel.app",
    title: "Pablo Pratt | Full Stack Developer",
    description: "Portfolio and background for Pablo Pratt",
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
      className="scroll-smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <ClerkProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-600 focus:text-white focus:p-2"
          >
            Skip to main content
          </a>
          {children}
          <AiChatWidget />
        </ClerkProvider>
      </body>
    </html>
  );
}
