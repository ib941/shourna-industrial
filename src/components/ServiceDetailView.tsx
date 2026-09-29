"use client";

import React from "react";
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
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useProjectInquiry } from "./ProjectInquiryContext";

interface ServiceDetailViewProps {
  slug: string;
}

export default function ServiceDetailView({ slug }: ServiceDetailViewProps) {
  const { t, isRTL } = useLanguage();
  const { openModal } = useProjectInquiry();

  // Find the requested service by slug (id)
  const currentService = t.servicesPage.items.find((item) => item.id === slug) || t.servicesPage.items[0];

  // Other services in their current reordered sequence
  const otherServices = t.servicesPage.items.filter((item) => item.id !== slug);

  const getServiceIcon = (id: string, className = "w-7 h-7 text-[#00A3A6]") => {
    switch (id) {
      case "facade-cleaning":
        return <Sparkles className={className} />;
      case "industrial":
        return <Factory className={className} />;
      case "facade-maintenance":
        return <Wrench className={className} />;
      case "agriculture":
        return <Sprout className={className} />;
      default:
        return <Factory className={className} />;
    }
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Dedicated Service Hero Section */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0b1720] text-white overflow-hidden border-b border-gray-800">
        {/* Technical Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 163, 166, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient brand glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#74B743]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-start">
            {/* Breadcrumb Navigation */}
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

            {/* Service Number & Icon Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-bold text-gray-200 mb-5 rounded-none">
              <span className="w-2 h-2 rounded-full bg-[#74B743]" />
              <span className="font-mono text-[#00A3A6]">{currentService.num}</span>
              <span className="text-gray-400">·</span>
              <span>{t.servicesPage.breadcrumbCurrent}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {currentService.title}
            </h1>

            {/* Summary Description */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-normal">
              {currentService.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal(currentService.title)}
                className="px-8 py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm sm:text-base rounded-sm inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-[#00A3A6]/25 cursor-pointer"
              >
                <span>{t.servicesPage.ctaCardButton}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
              </button>

              <Link
                href="/services"
                className="px-6 py-4 border border-white/30 bg-white/10 backdrop-blur-xs hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
              >
                {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t.servicesPage.backToServices || (isRTL ? "العودة إلى كافة الخدمات" : "Back to All Services")}</span>
              </Link>
            </div>

            {/* Industrial Compliance Badges */}
            <div className="mt-10 pt-6 border-t border-gray-800 flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.servicesPage.sbcBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#74B743]" />
                <span>{t.servicesPage.irataBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00A3A6]" />
                <span>{t.servicesPage.uptimeBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Technical Scope & Visual Presentation */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50/70 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Media Column */}
              <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full bg-gray-900">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                
                {/* Floating Index Overlay */}
                <div className="absolute top-6 end-6 px-4 py-2 bg-white/95 backdrop-blur-xs border border-gray-200 flex items-center gap-2 font-mono font-black text-xl text-[#00A3A6] shadow-sm">
                  <span>{currentService.num}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs uppercase text-gray-500 font-sans font-bold">
                    {t.nav.brandTag}
                  </span>
                </div>
              </div>

              {/* Technical Scope Breakdown */}
              <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 text-start flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gray-50 border border-gray-200 flex items-center justify-center mb-6">
                    {getServiceIcon(currentService.id, "w-7 h-7 text-[#00A3A6]")}
                  </div>

                  <span className="text-xs font-bold text-[#00A3A6] uppercase tracking-wider mb-2 block">
                    {t.servicesPage.scopeHeading}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
                    {currentService.title}
                  </h2>

                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  {/* Execution Bullets */}
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                      {isRTL ? "مخرجات التنفيذ والاعتماد الميداني:" : "Scope Deliverables & Field Compliance:"}
                    </h3>
                    <ul className="space-y-3.5">
                      {currentService.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                          <CheckCircle2 className="w-5 h-5 text-[#74B743] shrink-0 mt-0.5" />
                          <span className="font-medium leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Instant Site Survey / Contact Trigger */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => openModal(currentService.title)}
                    className="px-7 py-3.5 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-2 rounded-sm"
                  >
                    <span>{t.servicesPage.ctaCardButton}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
                  </button>

                  <Link
                    href="/contact"
                    className="px-6 py-3.5 border border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6] text-sm font-semibold transition-colors inline-flex items-center justify-center rounded-sm"
                  >
                    <span>{t.servicesPage.siteSurveyButton}</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Browse Other Engineering Disciplines (New Order) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-start">
            <div>
              <span className="inline-block px-3 py-1 bg-[#00A3A6]/10 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
                {t.servicesOverview.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00A3A6] tracking-tight">
                {t.servicesPage.otherServicesHeading || (isRTL ? "خدمات تخصصية أخرى" : "Other Engineering Disciplines")}
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00A3A6] hover:text-[#00878a] transition-colors"
            >
              <span>{t.servicesOverview.exploreAll}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Cards for the other 3 services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((svc) => (
              <Link
                key={svc.id}
                href={`/services/${svc.id}`}
                className="group bg-gray-50/60 border border-gray-200 p-7 flex flex-col justify-between hover:bg-white hover:border-[#00A3A6] hover:shadow-lg transition-all duration-300 text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center group-hover:bg-[#00A3A6]/10 group-hover:border-[#00A3A6]/30 transition-colors">
                      {getServiceIcon(svc.id, "w-6 h-6 text-[#00A3A6]")}
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-[#00A3A6] transition-colors">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00A3A6] transition-colors mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs font-bold text-[#00A3A6] group-hover:text-[#00878a]">
                  <span>{t.servicesOverview.detailsLink}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rtl:rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Consultation Strip */}
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
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openModal(currentService.title)}
                className="w-full sm:w-auto px-8 py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-base transition-colors shadow-lg cursor-pointer rounded-sm"
              >
                <span>{t.servicesPage.bottomButton}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
