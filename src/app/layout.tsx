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
  title: "Shourna Industrial Company (SICS) | Engineering, Facade & Agriculture",
  description:
    "Shourna Industrial Company delivers industrial project execution, facade maintenance and cleaning, and agricultural services across the Kingdom — engineered for durability, scheduled for uptime.",
  keywords: [
    "Shourna Industrial Company",
    "SICS",
    "Industrial Projects",
    "Facade Maintenance",
    "Facade Cleaning",
    "Agriculture Services",
    "Rope Access",
    "BMU",
    "Saudi Arabia",
    "Cleanova",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#009698] selection:text-white">
        {children}
      </body>
    </html>
  );
}
