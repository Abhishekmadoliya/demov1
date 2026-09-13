"use client";

import React from "react";
import WebHeader from "../components/web/WebHeader";
import WebHeroSection from "../components/web/WebHeroSection";
import WebStatsShowcaseSection from "../components/web/WebStatsShowcaseSection";
import WebClientProofBar from "../components/web/WebClientProofBar";
import WebSolutionsMatrixSection from "../components/web/WebSolutionsMatrixSection";
import WebAiPartnerSection from "../components/web/WebAiPartnerSection";
import WebComplianceScheduleSection from "../components/web/WebComplianceScheduleSection";
import WebPricingRetainerSection from "../components/web/WebPricingRetainerSection";
import WebAdvisoryDeskSection from "../components/web/WebAdvisoryDeskSection";
import WebFooter from "../components/web/WebFooter";

export default function WebLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#2B7FFF] selection:text-white">
      {/* 1 & 2. Top Institutional Bar + Sticky Header with Mega Menus */}
      <WebHeader />

      {/* 3. Hero Section (Full Viewport with CA Advisor Media Showcase) */}
      <WebHeroSection />

      {/* 4. AI-Powered Platform & Metric Stats Showcase */}
      <WebStatsShowcaseSection />

      {/* 5. Client Verticals & Industry Proof Strip */}
      <WebClientProofBar />

      {/* 6. Corporate Solutions & Offerings Matrix */}
      <WebSolutionsMatrixSection />

      {/* 7. AI-Driven Partner & 4-Card Feature Matrix */}
      <WebAiPartnerSection />

      {/* 8. Statutory Regulatory Calendar & Penalty Matrix */}
      <WebComplianceScheduleSection />

      {/* 9. Transparent Retainer Pricing Plans */}
      <WebPricingRetainerSection />

      {/* 10. Advisory Consultation Desk Banner */}
      <WebAdvisoryDeskSection />

      {/* 11. Dark Footer */}
      <WebFooter />
    </div>
  );
}
