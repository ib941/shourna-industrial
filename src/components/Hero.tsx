"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, FileCheck, Layers } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat bg-[#004d4f] bg-blend-overlay"
      style={{
        backgroundImage: isRTL
          ? "linear-gradient(to left, rgba(0, 77, 79, 0.85) 0%, rgba(0, 55, 58, 0.88) 50%, rgba(11, 23, 32, 0.94) 100%), url('/hero-bg.jpg')"
          : "linear-gradient(to right, rgba(0, 77, 79, 0.85) 0%, rgba(0, 55, 58, 0.88) 50%, rgba(11, 23, 32, 0.94) 100%), url('/hero-bg.jpg')",
      }}
    >
      {/* Precision industrial blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 163, 166, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-20">
        <div className="max-w-3xl text-start">
          
          {/* Location indicator */}
          <div className="inline-flex flex-row items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-gray-200 mb-6 rounded-none">
            <span className="w-2 h-2 bg-[#74B743] shrink-0"></span>
            <MapPin className="w-3.5 h-3.5 text-[#00A3A6]" />
            <span>{t.hero.locationBadge}</span>
          </div>

          {/* Eyebrow from copy doc */}
          <div className="mb-4">
            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase drop-shadow-xs">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Headline from copy doc */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
            {t.hero.headline}
          </h1>

          {/* Subheading from copy doc */}
          <p className="text-gray-100 max-w-2xl mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-xs">
            {t.hero.subheading}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 transition-all shadow-md shadow-[#00A3A6]/20 cursor-pointer group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-white/30 bg-white/10 backdrop-blur-xs hover:bg-white/20 text-white font-semibold text-base transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </div>

          {/* Industrial Standards tags */}
          <div className="mt-14 pt-6 border-t border-white/20 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-gray-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#00A3A6]" />
              <span>{t.hero.sbcBadge}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#74B743]" />
              <span>{t.hero.irataBadge}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00A3A6]" />
              <span>{t.hero.cleanovaBadge}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
