"use client";

import React from "react";
import { Translations } from "@/types/content";
import { MapPin, Phone, Mail, Globe, Shield } from "lucide-react";

interface FooterProps {
  t: Translations["footer"];
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-row items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#009698]/20 border border-[#009698]/40 flex items-center justify-center text-[#009698] font-bold">
                <span className="font-mono text-sm font-extrabold">S</span>
              </div>
              <span className="text-2xl font-black tracking-wider text-[#009698] font-mono">
                SICS
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.description}
            </p>

            <div className="mt-5 flex flex-row items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-[#7CB342]" />
                <span>IRATA & Cleanova Standards</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#009698] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#009698] transition-colors">
                  About SICS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#009698] transition-colors">
                  Delivered Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#009698] transition-colors">
                  Contact & RFP
                </a>
              </li>
            </ul>
          </div>

          {/* Service Lines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#009698] transition-colors">
                  Industrial Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#009698] transition-colors">
                  Facade Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#009698] transition-colors">
                  Facade Cleaning (BMU)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#009698] transition-colors">
                  Agriculture Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex flex-row items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7CB342] shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#009698] shrink-0" />
                <span>+966 (11) 480-7799</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#009698] shrink-0" />
                <span>info@shourna.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar - horizontal flex layout on desktop/tablet */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.rights}</p>
          <div className="flex flex-row items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Quality & HSE Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Saudi Vision 2030 Alignment</span>
            <span className="hover:text-slate-400 cursor-pointer">Cleanova Facade Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
