"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HardHat, Award, ArrowRight } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function CorporateSection() {
  const { openModal } = useProjectInquiry();

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-white border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-[#74B743]/15 text-xs font-bold text-[#4f8029] tracking-wider uppercase mb-3">
              المعايير التشغيلية
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              بنية تحتية هندسية راسخة وموثوقية تشغيلية
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              تأسست شركة شُرنة الصناعية لسد الفجوة بين التصميم والتنفيذ الفعلي على الأرض — بمتابعة المشروع من أول حفرية حتى آخر معاينة، والبقاء كفريق يحافظ على أداء المباني والأراضي بعد التسليم.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              وفق كود البناء السعودي (SBC) وتوجيهات IRATA ومعايير Cleanova لتنظيف وصيانة الواجهات، نضمن استدامة الأصول وحمايتها دون أي مساومة على معايير السلامة.
            </p>

            {/* Corporate Spec Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-none">
                <ShieldCheck className="w-6 h-6 text-[#00A3A6] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">السلامة والالتزام</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">إجراءات السلامة المهنية وتصاريح العمل في كل موقع.</p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-none">
                <HardHat className="w-6 h-6 text-[#74B743] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">تنفيذ بقيادة هندسية</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">تخطيط النطاقات من قِبل مهندسين نفّذوا أعمالاً مماثلة.</p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-none">
                <Award className="w-6 h-6 text-[#00A3A6] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">تغطية إقليمية شاملة</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">طواقم ومعدات جاهزة للتحرك في مختلف مناطق المملكة.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A3A6] hover:bg-[#00878a] text-white text-sm font-bold rounded-sm transition-colors shadow-xs"
              >
                <span>اقرأ المزيد عن الشركة</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6] text-sm font-semibold transition-colors rounded-sm cursor-pointer"
              >
                طلب استشارة فنية
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative border border-gray-200 shadow-sm bg-gray-50 p-2 rounded-none">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="تنفيذ هندسي للمشاريع الصناعية"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-200 mt-2 flex flex-row items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">شركة شُرنة الصناعية</p>
                  <p className="text-xs text-gray-500 mt-0.5">المملكة العربية السعودية</p>
                </div>
                <span className="text-xs font-bold text-[#00A3A6] px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-none">
                  معايير SBC و IRATA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
