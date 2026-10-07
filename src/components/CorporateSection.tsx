"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function CorporateSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-7 text-start">
            <span className="inline-block px-3 py-1 bg-[#74B743]/15 text-xs font-bold text-[#4f8029] tracking-wider uppercase mb-3">
              {t.corporate.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t.corporate.heading}
            </h2>

            {/* Corporate Spec Highlights - Adjusted to 2 columns after deletion */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-none">
                <ShieldCheck className="w-6 h-6 text-[#00A3A6] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">{t.corporate.pillar1Title}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{t.corporate.pillar1Desc}</p>
              </div>

              {/* pillar2 (تنفيذ بقيادة هندسية) completely removed as requested */}

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-none">
                <Award className="w-6 h-6 text-[#00A3A6] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">{t.corporate.pillar3Title}</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{t.corporate.pillar3Desc}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A3A6] hover:bg-[#00878a] text-white text-sm font-bold rounded-sm transition-colors shadow-xs"
              >
                <span>{t.corporate.readMore}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
              </Link>
              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-50 border border-[#25D366] text-emerald-800 hover:bg-[#25D366] hover:text-white text-sm font-bold transition-all rounded-sm cursor-pointer shadow-xs"
              >
                {t.corporate.requestConsultation}
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative border border-gray-200 shadow-sm bg-gray-50 p-2 rounded-none">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt={t.corporate.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-200 mt-2 flex flex-row items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{t.corporate.brandCaption}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.corporate.locationCaption}</p>
                </div>
                <span className="text-xs font-bold text-[#00A3A6] px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-none">
                  {t.corporate.standardsTag}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}