"use client";

import React from "react";
import { Translations } from "@/types/content";
import {
  Factory,
  Wrench,
  Sparkles,
  Sprout,
  ArrowRight,
  Check,
  ShieldCheck,
  Award,
} from "lucide-react";

interface ServicesOverviewProps {
  t: Translations["services"];
  onSelectService: (serviceName: string) => void;
}

export default function ServicesOverview({
  t,
  onSelectService,
}: ServicesOverviewProps) {
  // Icon mapper
  const getIcon = (id: string) => {
    switch (id) {
      case "industrial":
        return <Factory className="w-6 h-6 text-[#009698]" />;
      case "facade-maintenance":
        return <Wrench className="w-6 h-6 text-[#009698]" />;
      case "facade-cleaning":
        return <Sparkles className="w-6 h-6 text-[#009698]" />;
      case "agriculture":
        return <Sprout className="w-6 h-6 text-[#7CB342]" />;
      default:
        return <Factory className="w-6 h-6 text-[#009698]" />;
    }
  };

  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-slate-50">
      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="inline-flex flex-row items-center gap-2 px-3 py-1 rounded-md bg-[#009698]/10 text-xs font-semibold text-[#009698] uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7CB342]"></span>
            <span>{t.badge}</span>
          </div>
          
          {/* Requested Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.heading}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 4 Cards in responsive Grid layout: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.cards.map((card, idx) => {
            const isCleaning = card.id === "facade-cleaning";
            return (
              <div
                key={card.id}
                className={`group relative rounded-xl bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${
                  isCleaning
                    ? "border-[#009698]/50 shadow-md ring-1 ring-[#009698]/20"
                    : "border-slate-200/90 shadow-sm hover:border-[#009698]/60"
                }`}
              >
                {/* Top Section */}
                <div>
                  {/* Category Tag & Icon - horizontal flex that stays flex-row on desktop */}
                  <div className="flex flex-row items-center justify-between gap-2 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-[#009698]/10 group-hover:border-[#009698]/30 transition-colors">
                      {getIcon(card.id)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {card.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#009698] transition-colors">
                    {card.title}
                  </h3>

                  {/* Cleanova standard badge if facade cleaning */}
                  {card.highlight && (
                    <div className="mt-2.5 inline-flex flex-row items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#7CB342]/15 border border-[#7CB342]/40 text-[#558b2f] text-xs font-semibold">
                      <Award className="w-3.5 h-3.5 text-[#7CB342] shrink-0" />
                      <span>{card.highlight}</span>
                    </div>
                  )}

                  {/* Core Summary (matches exact prompt specs) */}
                  <p className="mt-3 text-sm font-medium text-slate-700 leading-relaxed">
                    {card.summary}
                  </p>

                  {/* Specification Breakdown List */}
                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                    {card.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex flex-row items-start gap-2 text-xs text-slate-600 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-[#7CB342] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action - horizontal flex on desktop */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(card.title)}
                    className="w-full inline-flex flex-row items-center justify-between text-xs font-bold text-[#009698] group-hover:text-[#008183] py-2 cursor-pointer focus:outline-hidden"
                  >
                    <span>Request Technical Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Capabilities Assurance Strip */}
        <div className="mt-14 p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#7CB342]/15 border border-[#7CB342]/30 flex items-center justify-center shrink-0 text-[#7CB342]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Rigorous National Code & Safety Compliance
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every project is executed according to Saudi Building Code (SBC), IRATA guidelines, and Cleanova facade criteria.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectService("Compliance & Engineering Audit")}
            className="shrink-0 px-5 py-2.5 rounded-md border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#009698] hover:border-[#009698] bg-slate-50 transition-colors cursor-pointer"
          >
            Request Compliance Brief
          </button>
        </div>

      </div>
    </section>
  );
}
