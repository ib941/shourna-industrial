"use client";

import React from "react";
import Image from "next/image";
import { Translations } from "@/types/content";
import { CheckCircle2, Shield, HardHat, Compass, FileCheck, ArrowRight } from "lucide-react";

interface AboutTrustSectionProps {
  t: Translations["about"];
  onOpenModal: () => void;
}

export default function AboutTrustSection({
  t,
  onOpenModal,
}: AboutTrustSectionProps) {
  return (
    <section id="about" className="relative w-full py-20 lg:py-24 bg-white border-t border-slate-200">
      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Technical Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex flex-row items-center gap-2 px-3 py-1 rounded-md bg-[#7CB342]/15 text-xs font-semibold text-[#558b2f] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7CB342]"></span>
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.description}
            </p>

            {/* Core Operational Pillars */}
            <div className="mt-8 space-y-5">
              {t.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#009698]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#009698]/10 text-[#009698] flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <HardHat className="w-5 h-5" />}
                    {idx === 1 && <Shield className="w-5 h-5" />}
                    {idx === 2 && <Compass className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-normal">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 flex flex-row items-center gap-4">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-md bg-[#009698] hover:bg-[#008183] text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Partner with Shourna</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Industrial Metric Card & Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <div className="relative h-96 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial structural works and technical execution"
                  fill
                  className="object-cover object-center opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              {/* Floating Industrial Specification Card */}
              <div className="p-6 relative z-10 -mt-16 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 rounded-b-2xl">
                <div className="flex flex-row items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex flex-row items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#009698]"></span>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                      Engineering Metric
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#7CB342] uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Saudi Vision 2030</p>
                    <p className="text-sm font-bold text-white mt-1">Local Content Ready</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    <p className="text-xs text-slate-400">Response Window</p>
                    <p className="text-sm font-bold text-[#009698] mt-1">&lt; 4 Hours In-Kingdom</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-row items-center gap-2 text-xs text-slate-400">
                  <FileCheck className="w-4 h-4 text-[#7CB342]" />
                  <span>Licensed Turnkey Contractor & Specialized Facade Operator</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
