"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function CtaBanner() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="relative w-full py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 lg:p-14 bg-gray-50 border border-gray-200 shadow-sm rounded-none flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00A3A6]/10 text-[#00A3A6] text-xs font-bold uppercase tracking-wider mb-4 rounded-none">
              <ShieldCheck className="w-4 h-4 text-[#74B743]" />
              <span>{t.cta.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t.cta.heading}
            </h2>

            <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
              {t.cta.subheading}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
              <a
                href={`tel:${t.cta.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 hover:text-[#00A3A6] transition-colors group"
              >
                <PhoneCall className="w-4 h-4 text-[#00A3A6] group-hover:scale-110 transition-transform" />
                <span dir="ltr" className="tabular-nums">{t.cta.phone}</span>
              </a>
              <a
                href={`mailto:${t.cta.email}`}
                className="flex items-center gap-2 hover:text-[#00A3A6] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#74B743] group-hover:scale-110 transition-transform" />
                <span>{t.cta.email}</span>
              </a>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer text-base"
            >
              <span>{t.cta.button}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? "rtl:rotate-180" : ""}`} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
