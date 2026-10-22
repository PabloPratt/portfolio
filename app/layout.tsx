import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Pratt | Enterprise Solutions & Software Engineer",
  description: "Software projects, business research, writing tools, and privacy applications built by Pablo Pratt.",
  keywords: "portfolio, enterprise software, cybersecurity, STIR/SHAKEN, quantitative trading, automotive telematics, next.js, typescript, pablo pratt",
  authors: [{ name: "Pablo Pratt", url: "https://portfolio-zeta-green-62.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-zeta-green-62.vercel.app",
    title: "Pablo Pratt | Enterprise Solutions & Software Engineer",
    description: "Selected software projects, business research, writing tools, and privacy applications.",
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
      className={`dark scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06080f" />
      </head>
      <body className="bg-[#06080f] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        <ClerkProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-blue-600 focus:text-white focus:p-2 focus:rounded"
          >
            Skip to main content
          </a>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
