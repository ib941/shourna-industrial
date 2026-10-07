"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Header Section */}
      <section className="relative w-full py-20 lg:py-28 bg-[#0b1720] text-white overflow-hidden border-b border-gray-800">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 163, 166, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#25D366]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-start">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                {t.contactPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">
                {t.contactPage.breadcrumbCurrent}
              </span>
            </div>

            <span className="text-[#25D366] font-bold text-xs sm:text-sm tracking-wider uppercase">
              {t.contactPage.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              {t.contactPage.heading}
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-gray-200 leading-relaxed font-light">
              {t.contactPage.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Hub (No Forms - 100% Direct Action) */}
      <section className="py-16 lg:py-24 bg-gray-50/70 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#00A3A6] font-bold text-xs uppercase tracking-wider">
              {isRTL ? "خيارات التواصل المباشر والفوري" : "Direct & Instant Communication"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              {isRTL ? "تواصل معنا مباشرة بدون أي انتظار" : "Get in Touch Directly Without Delay"}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              {isRTL
                ? "يمكنك فتح محادثة واتساب فورية أو الاتصال الهاتفي المباشر لطلب المعاينة والخدمة فوراً."
                : "Open an immediate WhatsApp conversation or call directly to request service and site survey."}
            </p>
          </div>

          {/* Massive Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Card 1: WhatsApp Primary Action */}
            <div className="bg-white border-2 border-[#25D366] p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm flex flex-col justify-between text-start relative overflow-hidden group">
              <div className="absolute top-0 end-0 bg-[#25D366] text-white text-[11px] font-bold px-4 py-1 uppercase tracking-wider rounded-bl-sm">
                {isRTL ? "الرد الفوري" : "Fastest Response"}
              </div>

              <div>
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-9 h-9" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  {isRTL ? "محادثة فورية عبر واتساب" : "Direct WhatsApp Chat"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isRTL
                    ? "أرسل تفاصيل موقعك أو متطلبات العمل وسيقوم فريقنا بالرد الفوري وترتيب المعاينة."
                    : "Send your project requirements or site details and our team will respond immediately."}
                </p>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm mb-8">
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRTL ? "رقم الواتساب المعتمد" : "WhatsApp Number"}
                  </span>
                  <span dir="ltr" className="text-2xl sm:text-3xl font-black text-gray-900 tracking-wider tabular-nums">
                    0544740936
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isRTL ? "بدء محادثة واتساب الآن" : "Start WhatsApp Chat Now"}</span>
                <ArrowUpRight className={`w-5 h-5 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
              </a>
            </div>

            {/* Card 2: Direct Call Primary Action */}
            <div className="bg-white border-2 border-[#00A3A6] p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm flex flex-col justify-between text-start relative overflow-hidden group">
              <div className="absolute top-0 end-0 bg-[#00A3A6] text-white text-[11px] font-bold px-4 py-1 uppercase tracking-wider rounded-bl-sm">
                {isRTL ? "مكالمة هاتفية" : "Phone Call"}
              </div>

              <div>
                <div className="w-16 h-16 rounded-full bg-[#00A3A6]/10 text-[#00A3A6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-9 h-9" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  {isRTL ? "الاتصال الهاتفي المباشر" : "Direct Phone Call"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isRTL
                    ? "اتصل بنا مباشرة للتحدث مع المهندس المختص وتحديد موعد الزيارة الميدانية."
                    : "Call us directly to speak with an engineering specialist and arrange a site visit."}
                </p>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm mb-8">
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRTL ? "رقم الاتصال المباشر" : "Direct Phone Number"}
                  </span>
                  <span dir="ltr" className="text-2xl sm:text-3xl font-black text-gray-900 tracking-wider tabular-nums">
                    0544740936
                  </span>
                </div>
              </div>

              <a
                href="tel:0544740936"
                className="w-full py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>{isRTL ? "اتصل بنا الآن (0544740936)" : "Call Now (0544740936)"}</span>
              </a>
            </div>

          </div>

          {/* Location & Email Details (Working hours removed per user request) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Headquarters Location */}
            <div className="p-6 bg-white border border-gray-200 rounded-sm shadow-xs flex items-center gap-5 text-start">
              <div className="w-14 h-14 rounded-full bg-[#74B743]/15 text-[#74B743] flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t.contactPage.addressLabel}
                </span>
                <span className="text-base sm:text-lg font-bold text-gray-900 mt-0.5 block">
                  {t.contactPage.address}
                </span>
              </div>
            </div>

            {/* Email Address */}
            <a
              href={`mailto:${t.contactPage.email}`}
              className="p-6 bg-white border border-gray-200 rounded-sm shadow-xs flex items-center gap-5 text-start hover:border-[#00A3A6] transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-[#00A3A6]/10 text-[#00A3A6] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t.contactPage.emailLabel}
                </span>
                <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#00A3A6] transition-colors mt-0.5 block">
                  {t.contactPage.email}
                </span>
              </div>
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}