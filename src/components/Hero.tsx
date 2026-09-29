"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, FileCheck, Layers } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center">
      {/* 1. Base Industrial Background Image (calibrated brightness & contrast) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Shourna Industrial Facilities"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 contrast-105"
        />
      </div>

      {/* 2. Signature Shourna Logo Color Overlay / Tint (Primary Teal #01a7ad / #00A3A6 & Darker Teal Base #004d4f) */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: isRTL
            ? "linear-gradient(to left, rgba(0, 77, 79, 0.90) 0%, rgba(1, 167, 173, 0.80) 45%, rgba(0, 110, 113, 0.72) 100%)"
            : "linear-gradient(to right, rgba(0, 77, 79, 0.90) 0%, rgba(1, 167, 173, 0.80) 45%, rgba(0, 110, 113, 0.72) 100%)",
        }}
      />

      {/* 3. Subtle brand ambient glow matching logo teal/green accents (toned down for depth) */}
      <div
        className="absolute inset-0 z-2 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage: isRTL
            ? "radial-gradient(circle at 15% 25%, rgba(80, 167, 36, 0.45) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(147, 215, 244, 0.35) 0%, transparent 60%)"
            : "radial-gradient(circle at 85% 25%, rgba(80, 167, 36, 0.45) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(147, 215, 244, 0.35) 0%, transparent 60%)",
        }}
      />

      {/* 4. Precision Industrial Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-3"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-20">
        <div className="max-w-3xl text-start">
          
          {/* Location indicator */}
          <div className="inline-flex flex-row items-center gap-2 px-3 py-1.5 bg-black/20 backdrop-blur-xs border border-white/25 text-xs font-semibold text-white mb-6 rounded-none shadow-xs">
            <span className="w-2 h-2 bg-[#74B743] shrink-0"></span>
            <MapPin className="w-3.5 h-3.5 text-[#8DD2EB]" />
            <span>{t.hero.locationBadge}</span>
          </div>

          {/* Eyebrow from copy doc */}
          <div className="mb-4">
            <span className="text-[#82c85e] font-extrabold text-xs sm:text-sm tracking-wider uppercase drop-shadow-sm">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Headline from copy doc */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            {t.hero.headline}
          </h1>

          {/* Subheading from copy doc */}
          <p className="text-white/95 max-w-2xl mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed drop-shadow-sm">
            {t.hero.subheading}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 transition-all shadow-lg shadow-black/20 border border-white/25 cursor-pointer group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-white/40 bg-white/15 backdrop-blur-xs hover:bg-white/25 text-white font-semibold text-base transition-colors"
            >
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </div>

          {/* Industrial Standards tags */}
          <div className="mt-14 pt-6 border-t border-white/25 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8DD2EB]" />
              <span>{t.hero.sbcBadge}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#82c85e]" />
              <span>{t.hero.irataBadge}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#8DD2EB]" />
              <span>{t.hero.cleanovaBadge}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
