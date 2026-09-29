"use client";

import React from "react";
import { Layers, Building2, Clock } from "lucide-react";

export default function StatStrip() {
  const stats = [
    {
      num: "4",
      title: "4 خطوط خدمة رئيسية",
      desc: "المشاريع الصناعية، هندسة الواجهات، والبنية التحتية الزراعية",
      icon: <Layers className="w-6 h-6 text-[#00A3A6]" />,
    },
    {
      num: "+20",
      title: "20+ مشروعًا منجزًا (نموذجي)",
      desc: "مشاريع تم تسليمها في المدن الصناعية والمعالم الكبرى",
      icon: <Building2 className="w-6 h-6 text-[#00A3A6]" />,
    },
    {
      num: "24/7",
      title: "24/7 استجابة الصيانة (نموذجي)",
      desc: "استجابة صيانة فورية ودعم تشغيلي متواصل على مدار الساعة",
      icon: <Clock className="w-6 h-6 text-[#00A3A6]" />,
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-gray-200 py-10 lg:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-gray-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-4 md:py-2 md:px-8 ${idx === 0 ? "rtl:md:pr-0" : ""} ${idx === stats.length - 1 ? "rtl:md:pl-0" : ""}`}
            >
              <div className="flex flex-row items-center gap-4">
                <div className="w-13 h-13 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#00A3A6] tabular-nums tracking-tight">
                    {stat.num}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-1">
                    {stat.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 font-normal leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
