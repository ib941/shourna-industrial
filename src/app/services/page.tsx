"use client";

import React from "react";
import Link from "next/link";
import { Factory, Wrench, Sparkles, Sprout, CheckCircle2, ArrowRight, Shield, Clock, FileCheck } from "lucide-react";
import { useProjectInquiry } from "@/components/ProjectInquiryContext";
import { useLanguage } from "@/components/LanguageContext";

export default function ServicesPage() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case "industrial":
        return <Factory className="w-8 h-8 text-[#00A3A6]" />;
      case "facade-maintenance":
        return <Wrench className="w-8 h-8 text-[#00A3A6]" />;
      case "facade-cleaning":
        return <Sparkles className="w-8 h-8 text-[#00A3A6]" />;
      case "agriculture":
        return <Sprout className="w-8 h-8 text-[#74B743]" />;
      default:
        return <Factory className="w-8 h-8 text-[#00A3A6]" />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Luxurious Industrial Hero Header */}
      <section className="relative w-full py-20 lg:py-28 bg-[#0b1720] text-white overflow-hidden border-b border-gray-800">
        {/* Engineering blueprint background pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0, 163, 166, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Subtle radial glow of brand deep teal & leaf green */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#74B743]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-start">
            {/* Breadcrumb path */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                {t.servicesPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">{t.servicesPage.breadcrumbCurrent}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.servicesPage.heroHeading}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-normal">
              {t.servicesPage.heroSubheading}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-gray-800 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.servicesPage.sbcBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#74B743]" />
                <span>{t.servicesPage.irataBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.servicesPage.uptimeBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Detailed Showcase */}
      <section className="py-20 lg:py-28 bg-gray-50/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16 lg:space-y-24">
            {t.servicesPage.items.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden transition-all duration-300 hover:border-[#00A3A6] hover:shadow-lg"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    
                    {/* Visual Media Column */}
                    <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-gray-900 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent lg:hidden" />
                      
                      {/* Industrial numbering overlay */}
                      <div className="absolute top-6 end-6 w-14 h-14 bg-white/90 backdrop-blur-xs border border-gray-200 flex items-center justify-center font-mono font-black text-2xl text-[#00A3A6]">
                        {svc.num}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-start ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div>
                        {/* Service Icon */}
                        <div className="w-16 h-16 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6">
                          {getIcon(svc.id)}
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00A3A6] tracking-tight mb-4">
                          {svc.title}
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-8">
                          {svc.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="border-t border-gray-100 pt-6">
                          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                            {t.servicesPage.scopeHeading}
                          </h3>
                          <ul className="space-y-3.5">
                            {svc.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                                <CheckCircle2 className="w-5 h-5 text-[#74B743] shrink-0 mt-0.5" />
                                <span className="font-medium leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action footer */}
                      <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button
                          type="button"
                          onClick={() => openModal(svc.title)}
                          className="px-7 py-3.5 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2 rounded-sm"
                        >
                          <span>{t.servicesPage.ctaCardButton}</span>
                          <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
                        </button>
                        <Link
                          href="/contact"
                          className="px-6 py-3.5 border border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6] text-sm font-semibold transition-colors inline-flex items-center justify-center rounded-sm"
                        >
                          {t.servicesPage.siteSurveyButton}
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Bottom Consultation Call-Out */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-l from-gray-900 to-[#0b1720] text-white p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-start">
              <span className="text-[#74B743] font-bold text-xs tracking-wider uppercase">
                {t.servicesPage.bottomBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
                {t.servicesPage.bottomHeading}
              </h2>
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {t.servicesPage.bottomDesc}
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base transition-colors shadow-lg cursor-pointer rounded-sm"
              >
                {t.servicesPage.bottomButton}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
