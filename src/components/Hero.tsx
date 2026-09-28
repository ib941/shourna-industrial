"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Shield } from "lucide-react";
import { Translations } from "@/types/content";

interface HeroProps {
  t: Translations["hero"];
  onOpenModal: () => void;
}

export default function Hero({ t, onOpenModal }: HeroProps) {
  return (
    <section className="relative w-full bg-slate-950 overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Image - Full-width industrial photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d0fbb1861563?auto=format&fit=crop&w=2400&q=85"
          alt="Shourna Industrial Engineering and Facade Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-luminosity scale-105"
        />

        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dark Gradient Overlay: bg-gradient-to-r from-black/80 to-black/40 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />

        {/* Bottom fade for smooth transition into Stat Strip */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
      </div>

      {/* Main Content: Left-aligned within the max-w-7xl container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-20">
        <div className="max-w-3xl text-left rtl:text-right">
          
          {/* Kingdom Location Badge */}
          <div className="inline-flex flex-row items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-medium text-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7CB342] animate-pulse"></span>
            <MapPin className="w-3.5 h-3.5 text-[#7CB342]" />
            <span>{t.locationBadge}</span>
          </div>

          {/* Eyebrow (Leaf Green: #7CB342) */}
          <p className="text-[#7CB342] font-semibold text-sm sm:text-base tracking-wide flex flex-row items-center gap-2 mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-xs bg-[#7CB342]"></span>
            <span>{t.eyebrow}</span>
          </p>

          {/* Headline (White, text-5xl, font-bold) */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {t.headline}
          </h1>

          {/* Subheading (Gray-200, max-w-2xl mt-4) */}
          <p className="text-gray-200 max-w-2xl mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            {t.subheading}
          </p>

          {/* Action Row - horizontal flex layout on desktop/tablet, strictly flex-row on desktop */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Button (Deep Teal background, White text, mt-8) */}
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#009698] hover:bg-[#008183] text-white font-semibold text-base px-8 py-4 rounded-md inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-[#009698]/30 hover:shadow-xl hover:shadow-[#009698]/40 active:translate-y-0.5 cursor-pointer group"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </button>

            {/* Secondary Link */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-base backdrop-blur-xs transition-colors"
            >
              <span>{t.ctaSecondary}</span>
            </a>
          </div>

          {/* Quality & Reliability Micro-badges - strictly flex-row on desktop */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap flex-row items-center gap-6 text-xs text-gray-300">
            <div className="flex flex-row items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7CB342]" />
              <span>IRATA Certified Rope Access</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Shield className="w-4 h-4 text-[#009698]" />
              <span>Cleanova Standard Alignment</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7CB342]" />
              <span>Zero-LTI Safety Protocol</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
