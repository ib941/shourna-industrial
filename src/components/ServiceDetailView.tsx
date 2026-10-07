"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Factory,
  Wrench,
  Sprout,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  FileCheck,
  Building2,
  Layers,
  Award,
  Compass,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  HardHat,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ServiceDetailViewProps {
  slug: string;
}

export default function ServiceDetailView({ slug }: ServiceDetailViewProps) {
  const { t, isRTL } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find the requested service by slug (id)
  const currentService =
    t.servicesPage.items.find((item) => item.id === slug) ||
    t.servicesPage.items[0];


  const getServiceIcon = (id: string, className = "w-7 h-7 text-[#00A3A6]") => {
    switch (id) {
      case "facade-cleaning":
      case "facade-maintenance":
      case "facade-cleaning-maintenance":
        return <Sparkles className={className} />;
      case "industrial":
        return <Factory className={className} />;
      case "agriculture":
        return <Sprout className={className} />;
      default:
        return <Factory className={className} />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 scroll-smooth">
      {/* 1. Hero Section */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0a141d] text-white overflow-hidden border-b border-gray-800">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 163, 166, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#74B743]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-start">
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                {t.servicesPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#00A3A6] transition-colors">
                {t.servicesPage.breadcrumbCurrent}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">{currentService.title}</span>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-bold text-gray-200 mb-5 rounded-none">
              <span className="w-2 h-2 rounded-full bg-[#74B743]" />
              <span className="font-mono text-[#00A3A6]">{currentService.num}</span>
              <span className="text-gray-400">·</span>
              <span>{t.servicesPage.breadcrumbCurrent}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {currentService.title}
            </h1>

            {/* Client's Hardcoded Hero Description */}
            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              {isRTL 
                ? "حلول متكاملة لتنظيف وصيانة واجهات المباني بمختلف أنواعها، لضمان استدامتها ومظهرها المتميز."
                : "Integrated solutions for cleaning and maintaining building facades of all types, ensuring their sustainability and distinctive appearance."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold text-sm sm:text-base rounded-sm inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/25 cursor-pointer"
              >
                <span>{t.servicesPage.ctaCardButton}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
              </a>

              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-gray-700 bg-black/40 hover:bg-black/60 text-gray-300 hover:text-white text-sm sm:text-base font-semibold rounded-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.servicesPage.siteSurveyButton}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Sticky Subnav Bar */}
      <nav className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 hidden md:block shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-6 text-xs font-bold tracking-wide uppercase text-gray-600">
            <a href="#overview" className="hover:text-[#00A3A6] transition-colors py-4 border-b-2 border-transparent hover:border-[#00A3A6]">
              {t.servicesPage.quickNavOverview || (isRTL ? "نظرة عامة" : "Overview")}
            </a>
            <a href="#capabilities" className="hover:text-[#00A3A6] transition-colors py-4 border-b-2 border-transparent hover:border-[#00A3A6]">
              {t.servicesPage.quickNavCapabilities || (isRTL ? "القدرات التنفيذية" : "Capabilities")}
            </a>
            <a href="#methodology" className="hover:text-[#00A3A6] transition-colors py-4 border-b-2 border-transparent hover:border-[#00A3A6]">
              {t.servicesPage.quickNavWorkflow || (isRTL ? "منهجية العمل" : "Methodology")}
            </a>
            <a href="#gallery" className="hover:text-[#00A3A6] transition-colors py-4 border-b-2 border-transparent hover:border-[#00A3A6]">
              {t.servicesPage.quickNavGallery || (isRTL ? "معرض الأعمال" : "Field Showcase")}
            </a>
          </div>

          <a
            href="https://wa.me/966544740936"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#25D366] hover:bg-[#1ebd5c] text-white text-xs font-bold rounded-xs transition-colors cursor-pointer inline-flex items-center"
          >
            {t.servicesPage.ctaCardButton}
          </a>
        </div>
      </nav>

      {/* 3. Detailed Technical Scope & Primary Visual */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24 bg-gray-50/70 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full bg-gray-900 group">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                
                <div className="absolute top-6 end-6 px-4 py-2 bg-white/95 backdrop-blur-xs border border-gray-200 flex items-center gap-2 font-mono font-black text-xl text-[#00A3A6] shadow-sm">
                  <span>{currentService.num}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs uppercase text-gray-500 font-sans font-bold">
                    {t.nav.brandTag}
                  </span>
                </div>

                <div className="absolute bottom-6 start-6 px-3.5 py-1.5 bg-black/75 backdrop-blur-xs border border-white/20 text-xs font-mono text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#74B743]" />
                  <span>{isRTL ? "اعتماد هندسي كامل" : "Field Verified Scope"}</span>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 text-start flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6">
                    {getServiceIcon(currentService.id, "w-7 h-7 text-[#00A3A6]")}
                  </div>

                  <span className="text-xs font-bold text-[#00A3A6] uppercase tracking-wider mb-2 block">
                    {isRTL ? "نطاق الأعمال" : "Scope of Work"}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                    {currentService.title}
                  </h2>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    {isRTL 
                      ? "تقدم شركة شورنا للصيانة والنظافة خدمات نظافة واجهات شاملة تغطي:" 
                      : "Shourna Maintenance & Cleaning Company offers comprehensive facade cleaning services covering:"}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <ul className="space-y-3.5">
                      {[
                        isRTL ? "نظافة الواجهات الزجاجية" : "Glass facade cleaning",
                        isRTL ? "نظافة واجهات المباني والأبراج" : "Building and tower facade cleaning",
                        isRTL ? "نظافة واجهات الكلادينج" : "Cladding facade cleaning",
                        isRTL ? "نظافة واجهات الحجر" : "Stone facade cleaning",
                        isRTL ? "نظافة واجهات الرخام" : "Marble facade cleaning",
                        isRTL ? "تنظيف عميق للمباني السكنية والتجارية" : "Deep cleaning for residential and commercial buildings"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                          <CheckCircle2 className="w-5 h-5 text-[#74B743] shrink-0 mt-0.5" />
                          <span className="font-medium leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="https://wa.me/966544740936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2 rounded-sm"
                  >
                    <span>{t.servicesPage.ctaCardButton}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
                  </a>

                  <a
                    href="https://wa.me/966544740936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-gray-300 text-gray-700 hover:border-[#25D366] hover:text-[#25D366] text-sm font-semibold transition-colors inline-flex items-center justify-center rounded-sm cursor-pointer"
                  >
                    <span>{t.servicesPage.siteSurveyButton}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operational Pillars & Technical Capabilities (Hardcoded to 2 cards only) */}
      <section id="capabilities" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-start">
            <span className="inline-block px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
              {t.servicesPage.pillarsBadge || (isRTL ? "القدرات الهندسية" : "Engineering Capabilities")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t.servicesPage.pillarsHeading || (isRTL ? "الركائز التشغيلية والتنفيذية" : "Operational Pillars & Technical Capabilities")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/70 border border-gray-200 p-8 hover:border-[#00A3A6] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between text-start">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5 text-[#00A3A6]" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold font-mono text-[#00A3A6]">
                    Corporate SLA Tier
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {isRTL ? "عقود صيانة دورية واتفاقيات مستوى الخدمة (SLA)" : "Periodic Maintenance Contracts (SLA)"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {isRTL 
                    ? "برامج لتنظيف وصيانة دورية مجدولة، مع تقارير تصوير رقمية وتوثيق هندسي دوري لسلامة الألواح والواجهات." 
                    : "Scheduled cleaning and maintenance programs with digital photo reports and engineering documentation."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-none bg-[#74B743]" />
                <span>{isRTL ? "معيار تنفيذي معتمد" : "Verified Operational Standard"}</span>
              </div>
            </div>

            <div className="bg-gray-50/70 border border-gray-200 p-8 hover:border-[#00A3A6] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between text-start">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    <Layers className="w-5 h-5 text-[#00A3A6]" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold font-mono text-[#00A3A6]">
                    Spot-Free 100%
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {isRTL ? "الغسيل بالماء النقي المنزوع الأيونات (DI/RO)" : "Deionized Pure Water Washing (DI/RO)"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {isRTL 
                    ? "محطات تحلية وضخ متنقلة تنتج مياهاً خالية من الشوائب تضمن جفاف الزجاج بنقاء بلوري بدون أي علامات أو رواسب." 
                    : "Mobile desalination units producing impurity-free water ensuring crystal clear glass drying without water spots."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-none bg-[#74B743]" />
                <span>{isRTL ? "معيار تنفيذي معتمد" : "Verified Operational Standard"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client's New Methodology Section (Hardcoded) */}
      <section id="methodology" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-start">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {isRTL ? "منهجية العمل" : "Our Methodology"}
            </h2>
            <div className="w-16 h-1 bg-[#00A3A6] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">1.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "المعاينة والتقييم" : "Inspection & Assessment"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "زيارة الموقع ودراسة حالة الواجهة ونوع المادة (زجاج، كلادينج، حجر، رخام)." : "Site visit and study of the facade condition and material type."}
              </p>
            </div>

            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">2.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "تحديد الطريقة" : "Method Selection"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "تحديد أفضل طريقة تنظيف." : "Determining the best cleaning method."}
              </p>
            </div>

            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">3.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "عرض السعر" : "Quotation"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "نقدّم عرض سعر مجاني بعد معاينة الموقع ميدانيًا أو عن طريق الصور." : "Providing a free quotation after site inspection or via photos."}
              </p>
            </div>

            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">4.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "التخطيط والتجهيز" : "Planning & Preparation"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "اختيار المعدات المناسبة (أنظمة الوصول بالحبال) وتجهيز فريق العمل ومواد التنظيف الآمنة." : "Selecting suitable equipment and preparing the team and safe cleaning materials."}
              </p>
            </div>

            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">5.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "التنفيذ" : "Execution"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "تنفيذ أعمال التنظيف وفق معايير السلامة المعتمدة، مع الحفاظ على سلامة المبنى والعاملين والمحيط." : "Executing cleaning operations according to approved safety standards."}
              </p>
            </div>

            <div className="p-6 border border-gray-200 bg-gray-50 hover:border-[#00A3A6] transition-colors rounded-none flex flex-col gap-3 text-start">
              <span className="font-mono text-xs font-bold text-[#00A3A6]">6.</span>
              <h3 className="text-lg font-bold text-[#00A3A6]">{isRTL ? "الفحص والتسليم" : "Inspection & Handover"}</h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {isRTL ? "مراجعة جودة النتيجة النهائية وتسليم الموقع نظيفًا وجاهزًا." : "Reviewing the quality of the final result and handing over the clean site."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Multi-Image Visual Showcase & Field Documentation (Hardcoded for 9 Images - Bilingual) */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gray-50/70 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 text-start">
            <span className="inline-block px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
              {isRTL ? "التوثيق الميداني" : "Field Documentation"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              {isRTL ? "شواهد من بيئة العمل والمعدات المتقدمة" : "Operational Environment & Technical Fleet"}
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              {isRTL 
                ? "لقطات توثيقية حية تبرز جاهزية طواقم شورنا والتقنيات الهندسية المستخدمة في مواقع العمل بالمملكة." 
                : "High-resolution photographic documentation highlighting Shourna's specialized teams and modern equipment across Saudi job sites."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                src: "/images/gallery-1.jpg", 
                title: isRTL ? "تنظيف الواجهات الزجاجية" : "Glass Facade Cleaning", 
                caption: isRTL ? "استخدام أنظمة السقالات الآمنة للوصول الدقيق" : "Using safe scaffolding systems for precise access" 
              },
              { 
                src: "/images/gallery-2.jpg", 
                title: isRTL ? "أعمال التنظيف الليلية" : "Night Cleaning Operations", 
                caption: isRTL ? "مرونة في التنفيذ لعدم إعاقة الحركة التجارية" : "Flexible execution to avoid disrupting commercial activity" 
              },
              { 
                src: "/images/gallery-3.jpg", 
                title: isRTL ? "صيانة الواجهات التجارية" : "Commercial Facade Maintenance", 
                caption: isRTL ? "عمليات التنظيف باستخدام رافعات هيدروليكية متقدمة" : "Cleaning operations using advanced hydraulic lifts" 
              },
              { 
                src: "/images/gallery-4.jpg", 
                title: isRTL ? "تنظيف واجهات المستشفيات" : "Hospital Facade Cleaning", 
                caption: isRTL ? "مستشفى دار الشفاء - دقة ومعايير صحية صارمة" : "Dar Alshefa Hospital - strict health standards and precision" 
              },
              { 
                src: "/images/gallery-5.jpg", 
                title: isRTL ? "تنظيف الأبراج الشاهقة" : "High-Rise Tower Cleaning", 
                caption: isRTL ? "تلميع الواجهات الزجاجية بالكامل للأبراج" : "Complete polishing of glass facades for towers" 
              },
              { 
                src: "/images/gallery-6.jpg", 
                title: isRTL ? "صيانة المجمعات الطبية" : "Medical Complex Maintenance", 
                caption: isRTL ? "مجمع الهنوف الطبي - تنظيف وحماية ألواح الكلادينج" : "Al Hanouf Medical Complex - cladding panel cleaning and protection" 
              },
              { 
                src: "/images/gallery-7.jpg", 
                title: isRTL ? "أنظمة التنظيف المعلقة" : "Suspended Cleaning Systems", 
                caption: isRTL ? "استخدام المنصات المعلقة (Cradles) للوصول الآمن" : "Using suspended platforms (cradles) for safe access" 
              },
              { 
                src: "/images/gallery-8.jpg", 
                title: isRTL ? "معدات الرفع المتقدمة" : "Advanced Lifting Equipment", 
                caption: isRTL ? "استخدام آليات حديثة لضمان كفاءة وسرعة الإنجاز" : "Using modern machinery to ensure efficiency and speed" 
              },
              { 
                src: "/images/gallery-9.jpg", 
                title: isRTL ? "تنظيف دقيق للواجهات" : "Precision Facade Cleaning", 
                caption: isRTL ? "إزالة الرواسب بفعالية مع الحفاظ على المواد الأصلية" : "Effective residue removal while preserving original materials" 
              }
            ].map((img, idx) => (
              <div key={idx} className="bg-white border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col text-start">
                <div className="relative aspect-[4/3] w-full bg-gray-900 overflow-hidden border-b border-gray-200">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white font-mono text-xs">
                    <span className="px-2.5 py-1 bg-[#00A3A6] text-white font-bold rounded-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">{img.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 10. Bottom Consultation Strip */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-start">
              <span className="text-[#74B743] font-bold text-xs tracking-wider uppercase">
                {t.servicesPage.bottomBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {t.servicesPage.bottomHeading}
              </h2>
              <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {t.servicesPage.bottomDesc}
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-gray-300 font-mono">
                <a href="tel:0544740936" className="hover:text-[#00A3A6] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00A3A6]" />
                  <span dir="ltr">0544740936</span>
                </a>
                <a href="mailto:info@shourna.com" className="hover:text-[#00A3A6] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#74B743]" />
                  <span>info@shourna.com</span>
                </a>
              </div>
            </div>
              <a
                href="https://wa.me/966544740936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base transition-colors shadow-lg cursor-pointer rounded-sm inline-flex items-center justify-center gap-2"
              >
                <span>{t.servicesPage.bottomButton}</span>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}