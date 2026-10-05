"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    scope: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Industrial Header Section */}
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
                {t.contactPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">{t.contactPage.breadcrumbCurrent}</span>
            </div>

            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase">
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

      {/* 2. Contact Details & Inquiry Form */}
      <section className="py-20 lg:py-28 bg-gray-50/60 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8 text-start mt-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:0544740936"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-200 shadow-xs hover:border-[#00A3A6] transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#00A3A6]/10 transition-colors">
                    <Phone className="w-5 h-5 text-[#00A3A6]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {isRTL ? "الاتصال المباشر" : "Direct Contact"}
                    </span>
                    <span dir="ltr" className="text-lg font-bold text-gray-900 tabular-nums">
                      0544740936
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/966544740936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-200 shadow-xs hover:border-[#74B743] transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#74B743]/15 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#74B743]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {isRTL ? "واتساب" : "WhatsApp"}
                    </span>
                    <span dir="ltr" className="text-lg font-bold text-gray-900 tabular-nums">
                      0544740936
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white border border-gray-200 shadow-md p-8 sm:p-10 lg:p-12 text-start">
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {isRTL ? "تفاصيل واستفسار المشروع" : "Project Details & Inquiry"}
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#74B743]/15 text-[#74B743] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {t.contactPage.successTitle}
                  </h4>
                  <p className="mt-3 text-gray-600 max-w-md text-sm leading-relaxed">
                    {t.contactPage.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        scope: "",
                      });
                    }}
                    className="mt-6 px-8 py-3 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-colors rounded-sm cursor-pointer"
                  >
                    {t.contactPage.another}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        {isRTL ? "الاسم الكامل" : "Full Name"} *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        {isRTL ? "رقم الجوال" : "Phone Number"} *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-gray-300 text-sm text-gray-900 tabular-nums focus:outline-hidden focus:border-[#00A3A6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      {isRTL ? "تفاصيل المشروع" : "Project Details"}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-3 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 rounded-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <span>{t.contactPage.submitting}</span>
                      ) : (
                        <>
                          <Send className={`w-5 h-5 ${isRTL ? "rtl:rotate-180" : ""}`} />
                          <span>{t.contactPage.submit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}