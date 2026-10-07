"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { t, toggleLocale, isRTL } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand Name */}
          <div className="flex flex-row items-center gap-4 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-hidden group"
              aria-label={t.nav.brand}
            >
              <img
                src="/logo.svg"
                alt={t.nav.brand}
                className="h-14 sm:h-16 w-auto object-contain transition-transform scale-110 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#00A3A6]">
                  {t.nav.brand}
                </span>
                <span className="text-[10px] text-gray-500 font-sans font-medium tracking-wide">
                  {t.nav.brandTag}
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-1 max-w-2xl mx-auto flex-row items-center justify-evenly gap-4 font-medium text-sm">
            <Link
              href="/"
              className={`py-2 whitespace-nowrap relative transition-colors ${
                isActive("/")
                  ? "text-[#00A3A6] font-bold after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-100"
                  : "text-gray-800 hover:text-[#00A3A6] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              }`}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/about"
              className={`py-2 whitespace-nowrap relative transition-colors ${
                isActive("/about")
                  ? "text-[#00A3A6] font-bold after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-100"
                  : "text-gray-800 hover:text-[#00A3A6] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              }`}
            >
              {t.nav.about}
            </Link>

            {/* Direct WhatsApp Link instead of Contact Page */}
            <a
              href="https://wa.me/966544740936"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 whitespace-nowrap relative transition-colors text-gray-800 hover:text-[#25D366] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#25D366] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {isRTL ? "تواصل معنا" : "Contact"}
            </a>
          </nav>

          {/* Language Toggle & Massive Phone CTA Button */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 border border-gray-300 text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:text-[#00A3A6] hover:border-[#00A3A6] transition-colors rounded-sm shadow-xs cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#00A3A6]" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Mobile Immediate Call/WhatsApp Button */}
            <a
              href="https://wa.me/966544740936"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#25D366] hover:bg-[#1ebd5c] text-white font-black text-xs shadow-sm transition-all"
              aria-label="0544740936"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              <span dir="ltr" className="tracking-wider">0544740936</span>
            </a>

            {/* Giant Direct Phone / WhatsApp CTA for Desktop & Tablets */}
            <a
              href="https://wa.me/966544740936"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#1ebd5c] text-white transition-all shadow-md hover:shadow-lg cursor-pointer group ring-2 ring-[#25D366]/40"
            >
              <PhoneCall className="w-5 h-5 group-hover:scale-110 transition-transform animate-pulse" />
              <span className="flex flex-col text-start">
                <span className="text-[10px] font-semibold uppercase opacity-90 leading-tight">
                  {isRTL ? "واتساب واتصال مباشر" : "WhatsApp & Direct Call"}
                </span>
                <span dir="ltr" className="text-base sm:text-lg font-black tracking-widest leading-tight">
                  0544740936
                </span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#00A3A6] hover:bg-gray-100 rounded-sm transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-5 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start ${
                isActive("/") ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start ${
                isActive("/about") ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.nav.about}
            </Link>

            <a
              href="https://wa.me/966544740936"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start text-gray-800 hover:bg-gray-50 hover:text-[#25D366]"
            >
              {isRTL ? "تواصل معنا" : "Contact"}
            </a>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleLocale}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm rounded-sm hover:border-[#00A3A6] hover:text-[#00A3A6] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.nav.switchLang}</span>
              </button>

              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#25D366] text-white shadow-sm hover:bg-[#1ebd5c] transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                <span dir="ltr" className="font-black text-lg tracking-widest">0544740936</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}