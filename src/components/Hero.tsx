"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  // Filter out the other services so ONLY Facade Cleaning remains
  const activeServices = t.servicesOverview.cards.filter(
    (service: any) =>
      service.id !== "industrial" &&
      service.id !== "agriculture" &&
      service.title !== "تنفيذ متكامل للمنشآت الصناعية" &&
      service.title !== "الخدمات الزراعية"
  );

  return (
    <section className="w-full bg-[#f6f7f9] border-b border-gray-300 py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">
          {t.nav.brand} - {t.hero.headline}
        </h1>

        <div className="mb-10 max-w-4xl border-l-4 border-[#00A3A6] pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
          <p className="text-lg sm:text-xl text-gray-900 leading-relaxed font-bold mb-4">
            {isRTL 
              ? "حلول متكاملة لتنظيف وصيانة واجهات المباني بمختلف أنواعها، لضمان استدامتها ومظهرها المتميز." 
              : "Integrated solutions for cleaning and maintaining building facades of all types, ensuring their sustainability and distinctive appearance."}
          </p>
          <p className="text-base text-gray-700 mb-3 font-medium">
            {isRTL 
              ? "تقدم شركة شورنا الصناعية خدمات نظافة واجهات شاملة تغطي:" 
              : "Shourna Industrial Company offers comprehensive facade cleaning services covering:"}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-600 text-sm">
            {[
              isRTL ? "نظافة الواجهات الزجاجية" : "Glass facade cleaning",
              isRTL ? "نظافة واجهات المباني والأبراج" : "Building and tower facade cleaning",
              isRTL ? "نظافة واجهات الكلادينج" : "Cladding facade cleaning",
              isRTL ? "نظافة واجهات الحجر" : "Stone facade cleaning",
              isRTL ? "نظافة واجهات الرخام" : "Marble facade cleaning",
              isRTL ? "تنظيف عميق للمباني السكنية والتجارية" : "Deep cleaning for residential and commercial buildings"
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A3A6] rounded-none shrink-0"></span> 
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Single Service Card Layout */}
        <div className="max-w-md">
          {activeServices.map((service: any) => {
            return (
              <Link
                key={service.id}
                href="#overview"
                className="group block bg-white border border-gray-300 transition-colors duration-200 rounded-none flex flex-col h-full overflow-hidden hover:border-[#00A3A6] focus:outline-hidden focus:ring-1 focus:ring-[#00A3A6] shadow-none"
              >
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-gray-200 border-b border-gray-300 rounded-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/gallery-1.jpg"
                    alt={service.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 justify-between bg-white rounded-none text-start">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-semibold text-gray-400 tracking-wider">
                        {service.num}
                      </span>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-bold transition-colors leading-snug tracking-tight mb-3 text-gray-900 group-hover:text-[#00A3A6]">
                      {service.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider transition-colors text-gray-900 group-hover:text-[#00A3A6]">
                      {isRTL ? "عرض تفاصيل الخدمة" : "Explore Discipline"}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-900 group-hover:text-[#00A3A6] transition-all duration-200 shrink-0 ${
                        isRTL
                          ? "rotate-180 group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}