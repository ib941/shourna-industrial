import React from "react";
import Hero from "@/components/Hero";
import CorporateSection from "@/components/CorporateSection";
import CtaBanner from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Landing View - 3-Column Service Card Layout */}
      <Hero />

      {/* 2. Corporate & Engineering Standards Section */}
      <CorporateSection />

      {/* 3. Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}

