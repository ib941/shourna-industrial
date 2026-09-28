"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Building, Wrench, Sprout, Factory } from "lucide-react";

interface ProjectsShowcaseProps {
  onOpenModal: () => void;
}

export default function ProjectsShowcase({ onOpenModal }: ProjectsShowcaseProps) {
  const sampleProjects = [
    {
      title: "Riyadh Logistics Logistics Park - Steel Superstructures",
      category: "Industrial Projects",
      location: "Riyadh Industrial City",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      specs: "12,000 sqm heavy structural steel & civil foundation",
      icon: <Factory className="w-4 h-4 text-[#009698]" />,
    },
    {
      title: "Kingdom Commercial Tower - High-Rise Glass Facade",
      category: "Facade Cleaning & BMU",
      location: "Jeddah Corniche",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      specs: "42-storey curtain wall deep wash & sealant renewal",
      icon: <Building className="w-4 h-4 text-[#009698]" />,
    },
    {
      title: "Agricultural Green Corridor & Smart Irrigation",
      category: "Agriculture Services",
      location: "Al-Qassim Region",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      specs: "450,000 sqm laser grading & automated subsurface drip",
      icon: <Sprout className="w-4 h-4 text-[#7CB342]" />,
    },
    {
      title: "Corporate Headquarters - Cladding & Anchor Inspection",
      category: "Facade Maintenance",
      location: "Khobar / Eastern Province",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      specs: "Composite panel repair & structural compliance audit",
      icon: <Wrench className="w-4 h-4 text-[#009698]" />,
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20 lg:py-24 bg-slate-900 text-white">
      {/* Standard desktop container: w-full max-w-7xl mx-auto px-4 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex flex-row items-center gap-2 px-3 py-1 rounded-md bg-[#009698]/20 text-xs font-semibold text-[#009698] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CB342]"></span>
              <span>Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Turnkey Deliveries Across the Kingdom
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Proven execution across industrial facilities, high-rise architectural facades, and commercial agricultural grounds.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="shrink-0 px-5 py-2.5 rounded-md border border-slate-700 bg-slate-800 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:border-[#009698] hover:bg-slate-700/60 transition-colors cursor-pointer"
          >
            Request Full Project Portfolio
          </button>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProjects.map((proj, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-slate-800/80 border border-slate-700/70 hover:border-[#009698] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[11px] font-semibold text-white border border-slate-700">
                      {proj.icon}
                      <span>{proj.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-row items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#7CB342]" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#009698] transition-colors line-clamp-2">
                    {proj.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {proj.specs}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full pt-3 border-t border-slate-700/60 flex flex-row items-center justify-between text-xs font-semibold text-[#009698] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>View Case Metrics</span>
                  <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
