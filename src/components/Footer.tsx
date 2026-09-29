"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-300 text-sm">
      {/* Standard desktop container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Logo */}
          <div className="lg:col-span-2 text-start">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt={t.nav.brand}
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                {t.nav.brand}
              </span>
            </Link>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {t.footer.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-gray-300 px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                {t.footer.sbcBadge}
              </span>
              <span className="text-[11px] font-bold text-[#74B743] px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                {t.footer.irataBadge}
              </span>
              <span className="text-[11px] font-bold text-[#00A3A6] px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                {t.footer.cleanovaBadge}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.projects}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services#industrial" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.service1}
                </Link>
              </li>
              <li>
                <Link href="/services#facade-maintenance" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.service2}
                </Link>
              </li>
              <li>
                <Link href="/services#facade-cleaning" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.service3}
                </Link>
              </li>
              <li>
                <Link href="/services#agriculture" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.service4}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex flex-row items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#74B743] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A3A6] shrink-0" />
                <span dir="ltr" className="tabular-nums">{t.footer.phone}</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A3A6] shrink-0" />
                <span>{t.footer.email}</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#00A3A6]/20 border border-[#00A3A6]/40 text-[#00A3A6] hover:bg-[#00A3A6] hover:text-white transition-all text-xs font-bold cursor-pointer"
                >
                  <span>{t.footer.requestSurvey}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t.footer.rights}</p>
          <div className="flex flex-row items-center gap-6">
            <span>{t.footer.country}</span>
            <span>·</span>
            <span>{t.footer.commercial}</span>
            <span>·</span>
            <span>{t.footer.vision}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
