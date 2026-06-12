import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  metadataBase: new URL("https://yashkhairnar.com"),
  title: "Yash Khairnar",
  description: "AI/ML engineer and CS graduate student at SJSU focused on multi-modal AI systems. Welcome to my space.",
  openGraph: {
    title: "Yash Khairnar",
    description: "AI/ML engineer and CS graduate student at SJSU focused on multi-modal AI systems.",
    siteName: "Yash Khairnar",
    images: [
      {
        url: "/Yash.jpeg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
