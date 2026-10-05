"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const PLACEHOLDER_IMAGES = [
  "/images/service-placeholder-1.jpg",
  "/images/service-placeholder-2.jpg",
  "/images/service-placeholder-3.jpg",
];

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const services = t.servicesOverview.cards;

  return (
    <section className="w-full bg-[#f6f7f9] border-b border-gray-300 py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden accessible title for screen readers & SEO */}
        <h1 className="sr-only">
          {t.nav.brand} - {t.hero.headline}
        </h1>

        {/* 3-Column Responsive Architectural Grid (1 col on mobile, 3 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const imageSrc =
              PLACEHOLDER_IMAGES[index] ||
              `/images/service-placeholder-${index + 1}.jpg`;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group block bg-white border border-gray-300 hover:border-[#00A3A6] transition-colors duration-200 rounded-none shadow-none flex flex-col h-full overflow-hidden focus:outline-hidden focus:ring-1 focus:ring-[#00A3A6]"
              >
                {/* Top Half: Image Placeholder with object-fit cover */}
                <div className="relative w-full aspect-16/10 sm:aspect-4/3 md:aspect-16/10 lg:aspect-4/3 overflow-hidden bg-gray-200 border-b border-gray-300 rounded-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Bottom Half: Service Title, Description & Minimal Straight-Edged Arrow */}
                <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1 justify-between bg-white rounded-none text-start">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-semibold text-gray-400 tracking-wider">
                        {service.num}
                      </span>
                    </div>

                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#00A3A6] transition-colors leading-snug tracking-tight mb-3">
                      {service.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Link indicator row with minimal straight-edged arrow icon */}
                  <div className="mt-8 pt-5 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#00A3A6] transition-colors">
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
