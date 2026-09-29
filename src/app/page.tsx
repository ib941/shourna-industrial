import React from "react";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import ServicesOverview from "@/components/ServicesOverview";
import CorporateSection from "@/components/CorporateSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stat Strip */}
      <StatStrip />

      {/* 3. Services Overview Grid */}
      <ServicesOverview />

      {/* 4. Corporate & Engineering Standards Section */}
      <CorporateSection />

      {/* 5. Projects Showcase */}
      <ProjectsShowcase />

      {/* 6. Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
