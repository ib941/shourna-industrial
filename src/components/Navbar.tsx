"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { openModal } = useProjectInquiry();
  const { t, toggleLocale, isRTL } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors">
      {/* Standard desktop container */}
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
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#00A3A6]">
                  {t.nav.brand}
                </span>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                  {t.nav.brandTag}
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links: flex container with proper spacing gap-6 lg:gap-8 to ensure clear separation */}
          <nav className="hidden md:flex flex-row items-center gap-6 lg:gap-8 font-medium text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 whitespace-nowrap relative transition-colors ${
                    active
                      ? "text-[#00A3A6] font-bold after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-100"
                      : "text-gray-800 hover:text-[#00A3A6] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right/End: Language Toggle & CTA Button */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            {/* Language Toggle Button: English / العربية */}
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-gray-300 text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:text-[#00A3A6] hover:border-[#00A3A6] transition-colors rounded-sm shadow-xs cursor-pointer"
              aria-label={t.nav.switchLang}
              title={t.nav.switchLang}
            >
              <Globe className="w-3.5 h-3.5 text-[#00A3A6]" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Primary CTA button */}
            <button
              type="button"
              onClick={() => openModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#00A3A6] hover:bg-[#00878a] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>{t.nav.discussProject}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#00A3A6] hover:bg-gray-100 rounded-sm transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-5 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold"
                    : "text-gray-800 hover:bg-gray-50 hover:text-[#00A3A6]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleLocale}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm rounded-sm hover:border-[#00A3A6] hover:text-[#00A3A6] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.nav.switchLang}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#00A3A6] text-white font-bold text-sm shadow-sm hover:bg-[#00878a] transition-colors"
              >
                <span>{t.nav.discussProject}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
