"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Factory, Building, Sprout, Info, ArrowUpRight, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { useProjectInquiry } from "@/components/ProjectInquiryContext";

export default function ProjectsPage() {
  const { openModal } = useProjectInquiry();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "facility-expansion",
      tag: "صناعي",
      categoryKey: "industrial",
      title: "توسعة منشأة — نموذج مبدئي",
      description: "أعمال مدنية وإنشائية لتوسعة منشأة تصنيعية.",
      scopePoints: [
        "الأساسات الخرسانية وتسوية الموقع",
        "تصنيع وتوريد الهياكل الفولاذية",
        "تركيب الأنظمة الميكانيكية والتسليم",
      ],
      location: "المدينة الصناعية، الرياض",
      icon: <Factory className="w-5 h-5 text-[#00A3A6]" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "tower-facade",
      tag: "واجهات",
      categoryKey: "facade",
      title: "برنامج صيانة واجهات برج — نموذج مبدئي",
      description: "عقد استبدال كسوة وتنظيف بالحبال.",
      scopePoints: [
        "استبدال وترميم ألواح الكلادينج والزجاج",
        "تجديد فواصل السيليكون والعوازل المائية",
        "أطقم نزول بالحبال معتمدة من IRATA ووحدات BMU",
      ],
      location: "طريق الملك فهد، الرياض",
      icon: <Building className="w-5 h-5 text-[#00A3A6]" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "estate-irrigation",
      tag: "زراعي",
      categoryKey: "agriculture",
      title: "ري عقار زراعي — نموذج مبدئي",
      description: "تركيب شبكة ري لعقار زراعي تجاري.",
      scopePoints: [
        "تسوية الأراضي بتقنيات الليزر الحديثة",
        "تمديد شبكات الري الذكي والتنقيط",
        "محطات ضخ آلية وبرامج صيانة دورية",
      ],
      location: "منطقة القصيم",
      icon: <Sprout className="w-5 h-5 text-[#74B743]" />,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.categoryKey === activeFilter);

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
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-mono">
              <Link href="/" className="hover:text-[#00A3A6] transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <span className="text-[#00A3A6] font-semibold">المشاريع</span>
            </div>

            <span className="text-[#74B743] font-bold text-xs sm:text-sm tracking-wider uppercase">
              سجل الإنجاز والقدرات الميدانية
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 leading-tight">
              مشاريع شركة شُرنة الصناعية
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed font-normal">
              نماذج توضح نطاق الأعمال والقدرات التنفيذية في مشاريع الإنشاءات الصناعية، وهندسة وصيانة الواجهات، والخدمات الزراعية عبر مناطق المملكة.
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
              ملاحظة: استبدلوا هذه النماذج بأسماء المشاريع الفعلية والصور والأرقام عند الجاهزية.
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
              كافة المشاريع
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
              المشاريع الصناعية
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
              صيانة وتنظيف الواجهات
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
              الخدمات الزراعية
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
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs text-xs font-bold text-[#00A3A6] border border-gray-200">
                        {project.icon}
                        <span>{project.tag}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-[#74B743]" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    {/* Exact Arabic Title Placeholder */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00A3A6] transition-colors leading-snug mb-3">
                      {project.title}
                    </h3>

                    {/* Exact Arabic Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                      {project.description}
                    </p>

                    {/* Technical Scope Points */}
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
                        نطاق التنفيذ المعتمد:
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
                    <span>طلب معاينة أو دراسة لمشروع مماثل</span>
                    <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            <div>
              <span className="text-[#74B743] font-bold text-xs uppercase tracking-wider">
                مشاريع تسليم مفتاح
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                هل تخطط لمشروع صناعي، برج تجاري، أو مشروع زراعي؟
              </h2>
              <p className="mt-2 text-sm text-gray-300 max-w-2xl">
                يقدم مهندسونا عروض أسعار تفصيلية، وجداول زمنية صارمة، وتقارير معاينة فنية متوافقة مع متطلبات كود البناء السعودي.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openModal()}
              className="shrink-0 px-8 py-4 bg-[#00A3A6] hover:bg-[#00878a] text-white font-bold text-sm transition-colors rounded-sm cursor-pointer shadow-lg"
            >
              ابدأ مناقشة مشروعك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
