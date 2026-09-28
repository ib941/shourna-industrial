"use client";

import React from "react";
import { Translations } from "@/types/content";
import { ArrowRight, PhoneCall, ShieldCheck, Mail } from "lucide-react";

interface CtaBannerProps {
  t: Translations["ctaSection"];
  onOpenModal: () => void;
}

export default function CtaBanner({ t, onOpenModal }: CtaBannerProps) {
  return (
    <section id="contact" className="relative w-full py-16 lg:py-20 bg-slate-950 text-white overflow-hidden">
      {/* Visual Accent Backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009698]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7CB342]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-2xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-slate-900 to-slate-800/90 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <div className="inline-flex flex-row items-center gap-2 px-3 py-1 rounded-md bg-[#7CB342]/20 text-[#7CB342] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Turnkey Execution · In-Kingdom Mobilization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.heading}
            </h2>

            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.subheading}
            </p>

            <div className="mt-6 flex flex-wrap flex-row items-center gap-6 text-xs text-slate-400">
              <div className="flex flex-row items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#009698]" />
                <span>+966 (11) 480-7799</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Mail className="w-4 h-4 text-[#7CB342]" />
                <span>projects@shourna.com</span>
              </div>
            </div>
          </div>

          {/* Action Button - horizontal flex on desktop */}
          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#009698] hover:bg-[#008183] text-white font-bold px-8 py-4 rounded-md inline-flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-[#009698]/30 hover:shadow-xl hover:shadow-[#009698]/40 cursor-pointer text-base"
            >
              <span>{t.buttonText}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
