"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building, Sprout, Factory } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ProjectsShowcase() {
  const { t, isRTL } = useLanguage();

  const getIcon = (idx: number) => {
    if (idx === 0) return <Factory className="w-4 h-4 text-[#00A3A6]" />;
    if (idx === 1) return <Building className="w-4 h-4 text-[#00A3A6]" />;
    return <Sprout className="w-4 h-4 text-[#74B743]" />;
  };

  return (
    <section id="projects" className="relative w-full py-20 lg:py-28 bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div className="text-start">
            <span className="inline-block px-3 py-1 bg-[#00A3A6]/20 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
              {t.projectsShowcase.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.projectsShowcase.heading}
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
              {t.projectsShowcase.subheading}
            </p>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.projectsShowcase.items.map((proj, idx) => (
            <div
              key={idx}
              className="group rounded-none overflow-hidden bg-gray-800 border border-gray-700 hover:border-[#00A3A6] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 end-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-900/90 backdrop-blur-xs text-xs font-bold text-white border border-gray-700">
                      {getIcon(idx)}
                      <span>{proj.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 text-start">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#74B743]" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00A3A6] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="mt-3 text-xs text-gray-300 leading-relaxed">
                    {proj.specs}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="w-full pt-4 border-t border-gray-700/70 flex items-center justify-between text-xs font-bold text-[#00A3A6] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t.projectsShowcase.requestSimilar}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? "rtl:rotate-[-90deg]" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
