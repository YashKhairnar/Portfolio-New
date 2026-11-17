import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Starfield from "./components/starfield";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-royal",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashkhairnar.com"),
  title: "Yash Khairnar",
  description: "ML/AI engineer and MSCS student at SJSU working across LLMs, reinforcement learning, computer vision, and GPU-accelerated ML.",
  openGraph: {
    title: "Yash Khairnar",
    description: "ML/AI engineer and MSCS student at SJSU working across LLMs, reinforcement learning, computer vision, and GPU-accelerated ML.",
    siteName: "Yash Khairnar",
    images: [
      {
        url: "/yash.jpeg",
        width: 1200,
        height: 630,
        alt: "Yash Khairnar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cinzel.variable} antialiased`}
      >
        <Starfield />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
