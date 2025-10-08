import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dion Stolk — Front-end Portfolio",
  description:
    "Student softwareontwikkeling met focus op front-end. Portfolio met Next.js, TypeScript en Tailwind.",
  metadataBase: new URL("https://mijn-portfolio-rose.vercel.app"), // vervang na deploy
  openGraph: {
    title: "Dion Stolk — Front-end Portfolio",
    description:
      "Student softwareontwikkeling met focus op front-end. Portfolio met Next.js, TypeScript en Tailwind.",
    url: "/",
    siteName: "Dion Stolk — Portfolio",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dion Stolk — Front-end Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dion Stolk — Front-end Portfolio",
    description:
      "Student softwareontwikkeling met focus op front-end. Portfolio met Next.js, TypeScript en Tailwind.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
