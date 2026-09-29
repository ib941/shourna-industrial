"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { openModal } = useProjectInquiry();

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "الخدمات", href: "/services" },
    { label: "عن الشركة", href: "/about" },
    { label: "المشاريع", href: "/projects" },
    { label: "تواصل معنا", href: "/about#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/about#")) return pathname === "/about";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs transition-colors">
      {/* Standard desktop container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex flex-row items-center justify-between gap-6">
          
          {/* Right (start in RTL): Logo & Brand Name */}
          <div className="flex flex-row items-center gap-4 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-hidden group"
              aria-label="الصفحة الرئيسية لشركة شُرنة الصناعية"
            >
              <img
                src="/logo.svg"
                alt="شعار شركة شُرنة الصناعية"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#00A3A6]">
                  شركة شُرنة الصناعية
                </span>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                  SHOURNA INDUSTRIAL CO.
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Multi-page navigation links */}
          <nav className="hidden md:flex flex-row items-center space-x-8 rtl:space-x-reverse font-medium text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 relative transition-colors ${
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

          {/* Left (end in RTL): Sharp Action Button */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            {/* Primary CTA button */}
            <button
              type="button"
              onClick={() => openModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#00A3A6] hover:bg-[#00878a] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>ناقش مشروعك معنا</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            <div className="pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[#00A3A6] text-white font-bold text-sm shadow-sm hover:bg-[#00878a] transition-colors"
              >
                <span>ناقش مشروعك معنا</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
