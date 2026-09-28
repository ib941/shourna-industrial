"use client";

import React from "react";
import { Translations } from "@/types/content";
import { Layers, Building2, Clock, CheckCircle } from "lucide-react";

interface StatStripProps {
  t: Translations["stats"];
}

export default function StatStrip({ t }: StatStripProps) {
  return (
    <section className="relative w-full bg-slate-900 border-b border-slate-800 py-6 sm:py-8">
      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-column grid directly below Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-slate-800">
          
          {/* Stat 1: 4 core service lines */}
          <div className="pt-4 md:pt-0 flex flex-row items-center gap-5 px-2 md:px-6">
            <div className="w-14 h-14 rounded-lg bg-[#009698]/15 border border-[#009698]/30 flex items-center justify-center shrink-0 text-[#009698]">
              <Layers className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {t.stat1Number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#7CB342]"></span>
              </div>
              <p className="text-base font-bold text-white tracking-wide">
                {t.stat1Title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 line-clamp-1">
                {t.stat1Desc}
              </p>
            </div>
          </div>

          {/* Stat 2: 20+ projects delivered */}
          <div className="pt-4 md:pt-0 flex flex-row items-center gap-5 px-2 md:px-6">
            <div className="w-14 h-14 rounded-lg bg-[#009698]/15 border border-[#009698]/30 flex items-center justify-center shrink-0 text-[#009698]">
              <Building2 className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {t.stat2Number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#7CB342]"></span>
              </div>
              <p className="text-base font-bold text-white tracking-wide">
                {t.stat2Title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 line-clamp-1">
                {t.stat2Desc}
              </p>
            </div>
          </div>

          {/* Stat 3: 24/7 maintenance response */}
          <div className="pt-4 md:pt-0 flex flex-row items-center gap-5 px-2 md:px-6">
            <div className="w-14 h-14 rounded-lg bg-[#009698]/15 border border-[#009698]/30 flex items-center justify-center shrink-0 text-[#009698]">
              <Clock className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {t.stat3Number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#7CB342]"></span>
              </div>
              <p className="text-base font-bold text-white tracking-wide">
                {t.stat3Title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5 line-clamp-1">
                {t.stat3Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
