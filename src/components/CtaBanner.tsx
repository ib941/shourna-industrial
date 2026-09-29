"use client";

import React from "react";
import { ArrowRight, PhoneCall, Mail, ShieldCheck } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function CtaBanner() {
  const { openModal } = useProjectInquiry();

  return (
    <section id="contact" className="relative w-full py-16 lg:py-24 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 lg:p-14 bg-gray-50 border border-gray-200 shadow-sm rounded-none flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00A3A6]/10 text-[#00A3A6] text-xs font-bold uppercase tracking-wider mb-4 rounded-none">
              <ShieldCheck className="w-4 h-4 text-[#74B743]" />
              <span>جاهزية تنفيذ وطنية · استجابة سريعة</span>
            </div>

            {/* Exact Arabic Heading from Copy Doc */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              حدّثونا عن موقع العمل.
            </h2>

            {/* Exact Arabic Text from Copy Doc */}
            <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
              تواصلوا مع الفريق مباشرة، أو أرسلوا تفاصيل المشروع وسنعاود التواصل بخصوص النطاق والجدولة.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#00A3A6]" />
                <span dir="ltr" className="tabular-nums">+966 (11) 480-7799</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#74B743]" />
                <span>info@shourna.com</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openModal()}
              className="w-full sm:w-auto bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold px-8 py-4 rounded-sm inline-flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer text-base"
            >
              <span>ناقش مشروعك معنا</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
