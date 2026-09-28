"use client";

import React, { useState } from "react";
import { Language, Translations } from "@/types/content";
import { Globe, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenModal: () => void;
  t: Translations["nav"];
}

export default function Navbar({
  lang,
  onToggleLang,
  onOpenModal,
  t,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-colors">
      {/* Standard desktop container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal flex layout - explicitly stays flex-row on desktop */}
        <div className="h-20 flex flex-row items-center justify-between gap-4">
          
          {/* Left: Text "SICS" in Deep Teal */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            <a
              href="#"
              className="group flex flex-row items-center gap-2 focus:outline-hidden"
              aria-label="Shourna Industrial Company Home"
            >
              <div className="w-9 h-9 rounded-md bg-[#009698]/10 border border-[#009698]/30 flex items-center justify-center text-[#009698] font-bold group-hover:bg-[#009698] group-hover:text-white transition-colors">
                <span className="font-mono text-base font-extrabold tracking-tighter">S</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#009698] font-mono">
                {t.brand}
              </span>
            </a>
            <div className="hidden sm:flex flex-row items-center gap-2 pl-3 rtl:pl-0 rtl:pr-3 border-l rtl:border-l-0 rtl:border-r border-slate-300">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider line-clamp-1">
                {t.brandTag}
              </span>
            </div>
          </div>

          {/* Center: Links (Services, About, Projects, Contact) - strictly horizontal flex on desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-8 rtl:space-x-reverse font-medium text-sm text-slate-700">
            <a
              href="#services"
              className="py-1 transition-colors hover:text-[#009698] relative after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#009698] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.services}
            </a>
            <a
              href="#about"
              className="py-1 transition-colors hover:text-[#009698] relative after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#009698] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.about}
            </a>
            <a
              href="#projects"
              className="py-1 transition-colors hover:text-[#009698] relative after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#009698] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.projects}
            </a>
            <a
              href="#contact"
              className="py-1 transition-colors hover:text-[#009698] relative after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-[#009698] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {t.contact}
            </a>
          </nav>

          {/* Right: Language toggle button "العربية / EN" + Discuss a project button */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            {/* Language toggle button */}
            <button
              type="button"
              onClick={onToggleLang}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-white hover:border-[#009698] hover:text-[#009698] transition-all cursor-pointer shadow-xs group"
              aria-label="Toggle language between Arabic and English"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#009698] group-hover:rotate-12 transition-transform" />
              <span>العربية / EN</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#009698]/10 text-[#009698] font-mono font-bold uppercase">
                {lang}
              </span>
            </button>

            {/* Quick Action Button for desktop */}
            <button
              type="button"
              onClick={onOpenModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#009698] hover:bg-[#008183] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <span>{t.discussProject}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#009698] hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#009698]"
            >
              {t.services}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#009698]"
            >
              {t.about}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#009698]"
            >
              {t.projects}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#009698]"
            >
              {t.contact}
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#009698] text-white font-medium shadow-sm hover:bg-[#008183] transition-colors"
              >
                <span>{t.discussProject}</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
