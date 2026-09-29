"use client";

import React from "react";
import Link from "next/link";
import { HardHat, ShieldCheck, MapPin, UserCheck, Phone, Mail, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { useProjectInquiry } from "@/components/ProjectInquiryContext";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();

  const getPillarIcon = (num: string) => {
    switch (num) {
      case "01":
        return <HardHat className="w-7 h-7 text-[#00A3A6]" />;
      case "02":
        return <ShieldCheck className="w-7 h-7 text-[#74B743]" />;
      case "03":
        return <MapPin className="w-7 h-7 text-[#00A3A6]" />;
      case "04":
      default:
        return <UserCheck className="w-7 h-7 text-[#74B743]" />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Hero / Header Section */}
      <section className="relative w-full py-20 lg:py-28 bg-[#0b1720] text-white overflow-hidden border-b border-gray-800">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0, 163, 166, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#74B743]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-start">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                {t.aboutPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">{t.aboutPage.breadcrumbCurrent}</span>
            </div>

            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase">
              {t.aboutPage.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              {t.aboutPage.heroHeading}
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-gray-200 leading-relaxed font-light">
              {t.aboutPage.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Engineering Mission */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-start">
              <div className="inline-block px-3 py-1 bg-[#00A3A6]/10 text-[#00A3A6] text-xs font-bold uppercase tracking-wider">
                {t.aboutPage.narrativeBadge}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {t.aboutPage.narrativeHeading}
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t.aboutPage.narrativeP1}
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {t.aboutPage.narrativeP2}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="px-8 py-3.5 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-all shadow-xs rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.aboutPage.discussButton}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
                </button>
                <Link
                  href="/services"
                  className="px-6 py-3.5 border border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6] font-semibold text-sm transition-colors rounded-sm inline-flex items-center justify-center"
                >
                  {t.aboutPage.servicesButton}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-gray-200 bg-gray-900 shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt={t.aboutPage.heroHeading}
                  className="w-full h-[420px] object-cover object-center opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 text-start">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#74B743] tracking-widest uppercase">
                      {t.aboutPage.metricTag}
                    </span>
                    <span className="text-xs text-gray-400">
                      {t.corporate.standardsTag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {t.aboutPage.metricHeading}
                  </h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 4 Core Operational Pillars */}
      <section className="py-20 lg:py-28 bg-gray-50/70 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00A3A6] font-bold text-xs uppercase tracking-wider">
              {t.aboutPage.pillarsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              {t.aboutPage.pillarsHeading}
            </h2>
            <p className="mt-3 text-base text-gray-600">
              {t.aboutPage.pillarsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.aboutPage.pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white border border-gray-200 p-8 sm:p-10 shadow-sm hover:border-[#00A3A6] hover:shadow-md transition-all duration-200 flex flex-col justify-between text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200 flex items-center justify-center">
                      {getPillarIcon(pillar.num)}
                    </div>
                    <span className="font-mono text-2xl font-black text-gray-300">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#00A3A6]">
                  <CheckCircle2 className="w-4 h-4 text-[#74B743]" />
                  <span>{t.aboutPage.mandatoryStandard}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Contact Section from Copy Doc: حدّثونا عن موقع العمل */}
      <section id="contact" className="py-20 lg:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border border-gray-200 p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 text-start">
                <span className="text-[#00A3A6] font-bold text-xs uppercase tracking-wider">
                  {t.aboutPage.contactBadge}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                  {t.aboutPage.contactHeading}
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                  {t.aboutPage.contactBody}
                </p>

                <div className="space-y-4 text-sm text-gray-800">
                  <a
                    href={`tel:${t.aboutPage.directPhone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-3 group hover:text-[#00A3A6] transition-colors"
                  >
                    <div className="w-9 h-9 bg-[#00A3A6]/10 text-[#00A3A6] flex items-center justify-center shrink-0 group-hover:bg-[#00A3A6] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-bold">{t.aboutPage.directPhoneLabel}</span>
                      <span dir="ltr" className="text-base font-bold tabular-nums text-gray-900 group-hover:text-[#00A3A6] transition-colors">{t.aboutPage.directPhone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${t.aboutPage.directEmail}`}
                    className="flex items-center gap-3 group hover:text-[#74B743] transition-colors"
                  >
                    <div className="w-9 h-9 bg-[#74B743]/10 text-[#74B743] flex items-center justify-center shrink-0 group-hover:bg-[#74B743] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-bold">{t.aboutPage.directEmailLabel}</span>
                      <span className="text-base font-bold text-gray-900 group-hover:text-[#74B743] transition-colors">{t.aboutPage.directEmail}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#00A3A6]/10 text-[#00A3A6] flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 font-bold">{t.aboutPage.officeLabel}</span>
                      <span className="text-base font-bold text-gray-900">{t.aboutPage.officeAddress}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-gray-200 shadow-sm text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t.aboutPage.instantStartTitle}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {t.aboutPage.instantStartDesc}
                </p>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="w-full py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base transition-colors shadow-md cursor-pointer rounded-sm"
                >
                  {t.aboutPage.instantStartButton}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
