"use client";

import React from "react";
import Link from "next/link";
import { Factory, Wrench, Sparkles, Sprout, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const cardsList = [
    {
      id: "industrial",
      num: "01",
      icon: <Factory className="w-6 h-6 text-[#00A3A6]" />,
      title: "تنفيذ متكامل للمنشآت الصناعية",
      desc: "من الأعمال المدنية والإنشاءات الفولاذية إلى التركيبات الميكانيكية والتشغيل التجريبي.",
      href: "/services#industrial",
    },
    {
      id: "facade-maintenance",
      num: "02",
      icon: <Wrench className="w-6 h-6 text-[#00A3A6]" />,
      title: "صيانة واجهات المباني",
      desc: "صيانة إنشائية ومادية مستمرة لواجهات المباني، للحفاظ على الكسوة والزجاج والمواد العازلة آمنة وعازلة للمياه ومطابقة للمعايير.",
      href: "/services#facade-maintenance",
    },
    {
      id: "facade-cleaning",
      num: "03",
      icon: <Sparkles className="w-6 h-6 text-[#00A3A6]" />,
      title: "تنفيذ وتنظيف واجهات المباني",
      desc: "تنظيف دوري وحسب الطلب لواجهات المباني المرتفعة والأرضية — الزجاج والحجر والكسوة واللافتات — بواسطة فرق مدربة على العمل بالحبال ووحدات الصيانة المعلقة.",
      href: "/services#facade-cleaning",
    },
    {
      id: "agriculture",
      num: "04",
      icon: <Sprout className="w-6 h-6 text-[#74B743]" />,
      title: "الخدمات الزراعية وشبكات الري",
      desc: "تجهيز الأراضي، وإنشاء شبكات الري، والدعم الزراعي المستمر للمزارع التجارية والعقارات الزراعية الكبرى.",
      href: "/services#agriculture",
    },
  ];

  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-gray-50 border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
              التخصصات الهندسية
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00A3A6] tracking-tight leading-tight">
              قدرات تنفيذية للبنية التحتية الوطنية
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              حلول متكاملة مصممة لتلبية الجداول الزمنية الدقيقة والمعايير السعودية المعتمدة بكفاءة وموثوقية تشغيلية عالية.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-sm font-bold text-gray-800 hover:text-[#00A3A6] hover:border-[#00A3A6] transition-colors rounded-sm shadow-xs"
            >
              <span>استعراض كافة الخدمات</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsList.map((card) => (
            <div
              key={card.id}
              className="group bg-white border border-gray-200 shadow-sm rounded-none p-7 flex flex-col justify-between hover:border-[#00A3A6] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-[#00A3A6]/10 group-hover:border-[#00A3A6]/30 transition-colors">
                    {card.icon}
                  </div>
                  <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-[#00A3A6] transition-colors">
                    {card.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#00A3A6] group-hover:text-[#00878a] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100">
                <Link
                  href={card.href}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#00A3A6] group-hover:text-[#00878a] transition-colors"
                >
                  <span>تفاصيل الخدمة ونطاق العمل</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
