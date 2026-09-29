"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, FileCheck, Layers } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function Hero() {
  const { openModal } = useProjectInquiry();

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center bg-[#0b1720]">
      {/* Background Image - Full-width industrial engineering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d0fbb1861563?auto=format&fit=crop&w=2400&q=85"
          alt="منشآت شركة شُرنة الصناعية"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
        />

        {/* Dark sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0b1720]/95 via-[#0b1720]/80 to-[#0b1720]/60 z-10" />

        {/* Subtle grid line overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-10"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0, 163, 166, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.25) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-20">
        <div className="max-w-3xl text-right">
          
          {/* Location indicator */}
          <div className="inline-flex flex-row items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 text-xs font-semibold text-gray-200 mb-6 rounded-none">
            <span className="w-2 h-2 bg-[#74B743] shrink-0"></span>
            <MapPin className="w-3.5 h-3.5 text-[#00A3A6]" />
            <span>المملكة العربية السعودية · تنفيذ وطني شامل</span>
          </div>

          {/* Eyebrow from copy doc */}
          <div className="mb-4">
            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase">
              مشاريع صناعية · صيانة واجهات · تنظيف واجهات · خدمات زراعية
            </span>
          </div>

          {/* Headline from copy doc */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            نبني على أساس متين.
          </h1>

          {/* Subheading from copy doc */}
          <p className="text-gray-200 max-w-2xl mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            تقدّم شركة شُرنة الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 transition-all shadow-md shadow-[#00A3A6]/20 cursor-pointer group"
            >
              <span>ناقش مشروعك معنا</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-white/30 bg-white/10 hover:bg-white/15 text-white font-semibold text-base transition-colors"
            >
              <span>استكشف خدماتنا</span>
            </Link>
          </div>

          {/* Industrial Standards tags */}
          <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00A3A6]" />
              <span>امتثال كود البناء السعودي (SBC)</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#74B743]" />
              <span>بروتوكولات السلامة IRATA</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00A3A6]" />
              <span>معايير Cleanova للواجهات</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
