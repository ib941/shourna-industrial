"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Globe,
  ChevronDown,
  Sparkles,
  Factory,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname() || "/";
  const { t, toggleLocale, isRTL } = useLanguage();

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "facade-cleaning":
      case "facade-maintenance":
      case "facade-cleaning-maintenance":
        return <Sparkles className="w-5 h-5 text-[#00A3A6]" />;
      case "industrial":
        return <Factory className="w-5 h-5 text-[#00A3A6]" />;
      case "agriculture":
        return <Sprout className="w-5 h-5 text-[#74B743]" />;
      default:
        return <Factory className="w-5 h-5 text-[#00A3A6]" />;
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isServicesActive = pathname.startsWith("/services");

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

          {/* Navigation Links with Services Dropdown */}
          <nav className="hidden md:flex flex-1 max-w-2xl mx-auto flex-row items-center justify-evenly gap-4 font-medium text-sm">
            {/* Home Link */}
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

            {/* Services Dropdown Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors relative py-1 ${
                  isServicesActive
                    ? "text-[#00A3A6] font-bold after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-100"
                    : "text-gray-800 hover:text-[#00A3A6] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>{t.nav.services}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#00A3A6]" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Desktop Dropdown Card */}
              {servicesDropdownOpen && (
                <div
                  className="absolute top-full start-0 pt-2 w-88 lg:w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="bg-white border border-gray-200 shadow-xl rounded-md p-3 text-start">
                    <div className="px-3 py-1.5 border-b border-gray-100 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {t.nav.servicesDropdownTitle || (isRTL ? "الخدمات التخصصية" : "Engineering Disciplines")}
                      </span>
                      <span className="text-[11px] font-mono text-[#00A3A6] font-semibold">
                        {t.servicesPage.items.length} {isRTL ? "خدمات" : "Services"}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {t.servicesPage.items.map((svc) => {
                        const isUnderConstruction =
                          svc.id === "industrial" ||
                          svc.id === "agriculture" ||
                          svc.title === "تنفيذ متكامل للمنشآت الصناعية" ||
                          svc.title === "الخدمات الزراعية";
                        const href = isUnderConstruction ? "#under-construction" : `/services/${svc.id}`;
                        const isCurrentActive = pathname === href;
                        return (
                          <Link
                            key={svc.id}
                            href={href}
                            className={`group flex items-start gap-3.5 p-2.5 rounded-sm transition-colors ${
                              isUnderConstruction 
                                ? "opacity-50 cursor-not-allowed pointer-events-none" 
                                : isCurrentActive
                                  ? "bg-[#00A3A6]/10 text-[#00A3A6]"
                                  : "hover:bg-gray-50 text-gray-900 hover:text-[#00A3A6]"
                            }`}
                            role="menuitem"
                          >
                            <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-[#00A3A6]/30 transition-colors">
                              {getServiceIcon(svc.id)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-bold truncate group-hover:text-[#00A3A6] transition-colors">
                                  {svc.title}
                                </span>
                                <span className="font-mono text-xs text-gray-400 shrink-0">
                                  {svc.num}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-normal">
                                {svc.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* All Services Overview link at bottom */}
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#00A3A6] hover:bg-[#00A3A6]/10 rounded-sm transition-colors"
                      >
                        <span>{t.nav.allServices || (isRTL ? "استعراض كافة الخدمات" : "Explore All Services")}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-180" : ""}`} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
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

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`py-2 whitespace-nowrap relative transition-colors ${
                isActive("/contact")
                  ? "text-[#00A3A6] font-bold after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-100"
                  : "text-gray-800 hover:text-[#00A3A6] after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#00A3A6] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              }`}
            >
              {t.nav.contact}
            </Link>
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

            {/* Primary CTA link */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#00A3A6] hover:bg-[#00878a] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>{t.nav.discussProject}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#00A3A6] hover:bg-gray-100 rounded-sm transition-colors cursor-pointer"
              aria-label={isRTL ? "القائمة الرئيسية" : "Main Navigation"}
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
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start ${
                isActive("/") ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services with Mobile Submenu */}
            <div className="border border-gray-100 rounded-sm overflow-hidden bg-gray-50/50">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-900 text-start cursor-pointer"
              >
                <span className={isServicesActive ? "text-[#00A3A6] font-bold" : "font-bold text-gray-900"}>
                  {t.nav.services}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[#00A3A6]" : "text-gray-500"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1.5 border-t border-gray-100 pt-2 bg-white">
                  {t.servicesPage.items.map((svc) => {
                    const isUnderConstruction =
                      svc.id === "industrial" ||
                      svc.id === "agriculture" ||
                      svc.title === "تنفيذ متكامل للمنشآت الصناعية" ||
                      svc.title === "الخدمات الزراعية";
                    const href = isUnderConstruction ? "#under-construction" : `/services/${svc.id}`;

                    return (
                      <Link
                        key={svc.id}
                        href={href}
                        onClick={(e) => {
                          if (isUnderConstruction) {
                            e.preventDefault();
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`flex items-center gap-3 p-2 rounded-sm text-sm text-start transition-colors ${
                          isUnderConstruction 
                            ? "opacity-50 cursor-not-allowed pointer-events-none" 
                            : pathname === `/services/${svc.id}`
                              ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-[#00A3A6]"
                        }`}
                      >
                        <div className="w-7 h-7 rounded-xs bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                          {getServiceIcon(svc.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block truncate font-medium">{svc.title}</span>
                        </div>
                        <span className="font-mono text-xs text-gray-400 shrink-0">{svc.num}</span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2 mt-1 text-xs font-bold text-[#00A3A6] hover:bg-[#00A3A6]/10 rounded-sm transition-colors text-start"
                  >
                    <span>{t.nav.allServices || (isRTL ? "استعراض كافة الخدمات" : "Explore All Services")}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-180" : ""}`} />
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start ${
                isActive("/about") ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.nav.about}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 text-base font-medium rounded-sm transition-colors text-start ${
                isActive("/contact") ? "bg-[#00A3A6]/10 text-[#00A3A6] font-bold" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {t.nav.contact}
            </Link>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleLocale}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold text-sm rounded-sm hover:border-[#00A3A6] hover:text-[#00A3A6] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.nav.switchLang}</span>
              </button>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#00A3A6] text-white font-bold text-sm shadow-sm hover:bg-[#00878a] transition-colors"
              >
                <span>{t.nav.discussProject}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}