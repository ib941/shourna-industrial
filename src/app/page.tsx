import React from "react";
import Hero from "@/components/Hero";
import CorporateSection from "@/components/CorporateSection";
import CtaBanner from "@/components/CtaBanner";
import ServiceDetailView from "@/components/ServiceDetailView";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Landing View */}
      <Hero />

      {/* 2. Facade Cleaning Service Details (Merged) */}
      <ServiceDetailView slug="facade-cleaning-maintenance" />

      {/* 3. Corporate & Engineering Standards Section */}
      <CorporateSection />

      {/* 4. Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
