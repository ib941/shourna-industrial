import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectInquiryProvider } from "@/components/ProjectInquiryContext";

import { LanguageProvider } from "@/components/LanguageContext";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة شُرنة الصناعية | Shourna Industrial Company (SICS)",
  description:
    "تقدّم شركة شُرنة الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans tabular-nums selection:bg-[#00A3A6] selection:text-white">
        <LanguageProvider>
          <ProjectInquiryProvider>
            {/* Persistent Navbar across all pages */}
            <Navbar />
            
            {/* Main content body */}
            <main className="flex-1 w-full">
              {children}
            </main>

            {/* Persistent Footer across all pages */}
            <Footer />
          </ProjectInquiryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
