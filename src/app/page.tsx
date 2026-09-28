"use client";

import React, { useState } from "react";
import { Language, content } from "@/types/content";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import ServicesOverview from "@/components/ServicesOverview";
import AboutTrustSection from "@/components/AboutTrustSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ProjectInquiryModal from "@/components/ProjectInquiryModal";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("EN");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const t = content[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService("");
  };

  return (
    <div
      dir={lang === "AR" ? "rtl" : "ltr"}
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#009698] selection:text-white"
    >
      {/* 1. Navbar (Sticky Top) */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenModal={() => handleOpenModal()}
        t={t.nav}
      />

      {/* Main Page Content - wrapped inside standard desktop containers within each section */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section (Full-width background image with dark gradient overlay, content left-aligned in max-w-7xl) */}
        <Hero
          t={t.hero}
          onOpenModal={() => handleOpenModal()}
        />

        {/* 3. Stat Strip (Directly below Hero - 3-column grid) */}
        <StatStrip t={t.stats} />

        {/* 4. Services Overview (Grid layout with 4 cards) */}
        <ServicesOverview
          t={t.services}
          onSelectService={(svc) => handleOpenModal(svc)}
        />

        {/* Operational Rigor & Saudi Standards */}
        <AboutTrustSection
          t={t.about}
          onOpenModal={() => handleOpenModal()}
        />

        {/* Delivered Projects Track Record */}
        <ProjectsShowcase
          onOpenModal={() => handleOpenModal()}
        />

        {/* CTA Banner */}
        <CtaBanner
          t={t.ctaSection}
          onOpenModal={() => handleOpenModal()}
        />
      </main>

      {/* Footer */}
      <Footer t={t.footer} />

      {/* Project RFP / Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
        t={t.modal}
      />
    </div>
  );
}
