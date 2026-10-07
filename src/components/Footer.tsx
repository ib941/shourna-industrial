"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-300 text-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
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
                <Link href="/about" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  {t.footer.contact}
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
              <a
                href="tel:0544740936"
                className="flex flex-row items-center gap-2.5 hover:text-[#00A3A6] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00A3A6] shrink-0 group-hover:scale-110 transition-transform" />
                <span dir="ltr" className="tabular-nums">0544740936</span>
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex flex-row items-center gap-2.5 hover:text-[#00A3A6] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00A3A6] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{t.footer.email}</span>
              </a>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#00A3A6]/20 border border-[#00A3A6]/40 text-[#00A3A6] hover:bg-[#00A3A6] hover:text-white transition-all text-xs font-bold cursor-pointer"
                >
                  <span>{t.footer.requestSurvey}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
                </Link>
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