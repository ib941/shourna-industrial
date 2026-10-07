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
                <a
                  href="https://wa.me/966544740936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#25D366] transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-gray-400">
              {/* Highlighted Big Phone & WhatsApp Block */}
              <div className="p-4 bg-gray-800/80 border border-gray-700 rounded-sm space-y-3">
                <span className="text-[11px] font-bold text-[#25D366] block uppercase tracking-wider">
                  {isRTL ? "خدمة العملاء والواتساب 24/7" : "Customer Service & WhatsApp"}
                </span>
                <a
                  href="https://wa.me/966544740936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span dir="ltr" className="text-lg sm:text-xl font-black text-white tracking-widest tabular-nums group-hover:text-[#25D366]">
                    0544740936
                  </span>
                </a>
                <a
                  href="https://wa.me/966544740936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-sm bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <span>{t.footer.requestSurvey}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
                </a>
              </div>

              <div className="flex flex-row items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#74B743] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex flex-row items-center gap-2.5 hover:text-[#00A3A6] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00A3A6] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{t.footer.email}</span>
              </a>
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