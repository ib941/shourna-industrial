"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Factory, Building, Sprout, Info, ArrowUpRight, MapPin } from "lucide-react";
import { useProjectInquiry } from "@/components/ProjectInquiryContext";
import { useLanguage } from "@/components/LanguageContext";

export default function ProjectsPage() {
  const { openModal } = useProjectInquiry();
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const getProjectIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case "industrial":
        return <Factory className="w-5 h-5 text-[#00A3A6]" />;
      case "facade":
        return <Building className="w-5 h-5 text-[#00A3A6]" />;
      case "agriculture":
        return <Sprout className="w-5 h-5 text-[#74B743]" />;
      default:
        return <Factory className="w-5 h-5 text-[#00A3A6]" />;
    }
  };

  const filteredProjects = activeFilter === "all"
    ? t.projectsPage.projects
    : t.projectsPage.projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* 1. Industrial Hero Header */}
      <section className="relative w-full py-20 lg:py-28 bg-[#0b1720] text-white overflow-hidden border-b border-gray-800">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0, 163, 166, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 163, 166, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00A3A6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-start">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                {t.projectsPage.breadcrumbHome}
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">{t.projectsPage.breadcrumbCurrent}</span>
            </div>

            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase">
              {t.projectsPage.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              {t.projectsPage.heroHeading}
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed font-normal">
              {t.projectsPage.heroSubheading}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Notice Banner from Copy Document */}
      <section className="bg-gray-100 border-b border-gray-200 py-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 bg-white border border-gray-300 px-4 py-3 rounded-none">
            <Info className="w-4 h-4 text-[#00A3A6] shrink-0" />
            <span className="font-medium">
              {t.projectsPage.placeholderNotice}
            </span>
          </div>
        </div>
      </section>

      {/* 3. Filter tabs & Project Cards Grid */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-200 pb-4">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer rounded-none border ${
                activeFilter === "all"
                  ? "bg-[#00A3A6] border-[#00A3A6] text-white shadow-xs"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6]"
              }`}
            >
              {t.projectsPage.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("industrial")}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer rounded-none border ${
                activeFilter === "industrial"
                  ? "bg-[#00A3A6] border-[#00A3A6] text-white shadow-xs"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6]"
              }`}
            >
              {t.projectsPage.filterIndustrial}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("facade")}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer rounded-none border ${
                activeFilter === "facade"
                  ? "bg-[#00A3A6] border-[#00A3A6] text-white shadow-xs"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6]"
              }`}
            >
              {t.projectsPage.filterFacade}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("agriculture")}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer rounded-none border ${
                activeFilter === "agriculture"
                  ? "bg-[#00A3A6] border-[#00A3A6] text-white shadow-xs"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#00A3A6] hover:text-[#00A3A6]"
              }`}
            >
              {t.projectsPage.filterAgriculture}
            </button>
          </div>

          {/* Project Cards: 3 items as defined in copy document */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden flex flex-col justify-between hover:border-[#00A3A6] hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                    
                    {/* Category Label */}
                    <div className="absolute top-4 end-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs text-xs font-bold text-[#00A3A6] border border-gray-200">
                        {getProjectIcon(project.categoryKey)}
                        <span>{project.tag}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 end-4 flex items-center gap-1.5 text-xs text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-[#74B743]" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 text-start">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00A3A6] transition-colors leading-snug mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                      {project.description}
                    </p>

                    {/* Technical Scope Points */}
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
                        {t.projectsPage.scopeHeading}
                      </h4>
                      <ul className="space-y-2">
                        {project.scopePoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#74B743] shrink-0 mt-1.5"></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => openModal(project.title)}
                    className="w-full pt-4 flex items-center justify-between text-xs font-bold text-[#00A3A6] group-hover:text-[#00878a] transition-colors cursor-pointer"
                  >
                    <span>{t.projectsPage.requestSurveyButton}</span>
                    <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Project Inquiry CTA Banner */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white p-8 sm:p-12 border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
            <div className="text-start">
              <span className="text-[#74B743] font-bold text-xs uppercase tracking-wider">
                {t.projectsPage.bottomBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {t.projectsPage.bottomHeading}
              </h2>
              <p className="mt-2 text-sm text-gray-300 max-w-2xl">
                {t.projectsPage.bottomDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openModal()}
              className="shrink-0 px-8 py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-colors rounded-sm cursor-pointer shadow-lg"
            >
              {t.projectsPage.bottomButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
