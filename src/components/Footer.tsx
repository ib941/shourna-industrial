"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function Footer() {
  const { openModal } = useProjectInquiry();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-300 text-sm">
      {/* Standard desktop container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="شعار شركة شُرنة الصناعية"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                شركة شُرنة الصناعية
              </span>
            </Link>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              تقدّم شركة شُرنة الصناعية تنفيذ المشاريع الصناعية، وصيانة وتنظيف الواجهات، والخدمات الزراعية في مختلف مناطق المملكة — بجودة تنفيذ تدوم، وجدولة تحافظ على استمرارية العمل.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-gray-300 px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                كود البناء السعودي (SBC)
              </span>
              <span className="text-[11px] font-bold text-[#74B743] px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                معايير IRATA
              </span>
              <span className="text-[11px] font-bold text-[#00A3A6] px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-none">
                معايير Cleanova للواجهات
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              روابط الموقع
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  خدمات الشركة
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  عن شركة شُرنة
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  المشاريع المنجزة
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              الخدمات التخصصية
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services#industrial" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  تنفيذ متكامل للمنشآت الصناعية
                </Link>
              </li>
              <li>
                <Link href="/services#facade-maintenance" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  صيانة واجهات المباني
                </Link>
              </li>
              <li>
                <Link href="/services#facade-cleaning" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  تنظيف واجهات المباني (IRATA / BMU)
                </Link>
              </li>
              <li>
                <Link href="/services#agriculture" className="text-gray-400 hover:text-[#00A3A6] transition-colors">
                  الخدمات الزراعية وشبكات الري
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              المقر الرئيسي والتواصل
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex flex-row items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#74B743] shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية · المدينة الصناعية الثانية</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A3A6] shrink-0" />
                <span dir="ltr" className="tabular-nums">+966 (11) 480-7799</span>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A3A6] shrink-0" />
                <span>info@shourna.com</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#00A3A6]/20 border border-[#00A3A6]/40 text-[#00A3A6] hover:bg-[#00A3A6] hover:text-white transition-all text-xs font-bold cursor-pointer"
                >
                  <span>طلب معاينة ميدانية</span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 شركة شُرنة الصناعية. جميع الحقوق محفوظة.</p>
          <div className="flex flex-row items-center gap-6">
            <span>المملكة العربية السعودية</span>
            <span>·</span>
            <span>سجل تجاري معتمد</span>
            <span>·</span>
            <span>رؤية المملكة 2030</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
