"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building, Sprout, Factory, ArrowRight } from "lucide-react";
import { useProjectInquiry } from "./ProjectInquiryContext";

export default function ProjectsShowcase() {
  const { openModal } = useProjectInquiry();

  const sampleProjects = [
    {
      title: "توسعة منشأة — نموذج مبدئي",
      category: "صناعي",
      location: "المدينة الصناعية الثانية، الرياض",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      specs: "أعمال مدنية وإنشائية لتوسعة منشأة تصنيعية.",
      icon: <Factory className="w-4 h-4 text-[#00A3A6]" />,
    },
    {
      title: "برنامج صيانة واجهات برج — نموذج مبدئي",
      category: "واجهات",
      location: "طريق الملك فهد، الرياض",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      specs: "عقد استبدال كسوة وتنظيف بالحبال.",
      icon: <Building className="w-4 h-4 text-[#00A3A6]" />,
    },
    {
      title: "ري عقار زراعي — نموذج مبدئي",
      category: "زراعي",
      location: "منطقة القصيم",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      specs: "تركيب شبكة ري لعقار زراعي تجاري.",
      icon: <Sprout className="w-4 h-4 text-[#74B743]" />,
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20 lg:py-28 bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-3 py-1 bg-[#00A3A6]/20 text-xs font-bold text-[#00A3A6] tracking-wider uppercase mb-3">
              سجل الإنجاز الميداني
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              نماذج من مشاريعنا بالمملكة
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl">
              قدرات تنفيذية مثبتة في المنشآت الصناعية، واجهات الأبراج الشاهقة، والمشاريع الزراعية الواسعة.
            </p>
          </div>

          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gray-700 bg-gray-800 text-xs sm:text-sm font-bold text-gray-200 hover:text-white hover:border-[#00A3A6] hover:bg-gray-700 transition-colors"
          >
            <span>استعراض كافة المشاريع</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleProjects.map((proj, idx) => (
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
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-900/90 backdrop-blur-xs text-xs font-bold text-white border border-gray-700">
                      {proj.icon}
                      <span>{proj.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
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
                <button
                  type="button"
                  onClick={() => openModal(proj.title)}
                  className="w-full pt-4 border-t border-gray-700/70 flex items-center justify-between text-xs font-bold text-[#00A3A6] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>طلب معاينة لمشروع مماثل</span>
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
