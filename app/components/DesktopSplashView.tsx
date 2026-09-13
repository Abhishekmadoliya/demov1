"use client";

import React from "react";
import Link from "next/link";
import TaxLogo from "./TaxLogo";
import CitySkyline from "./CitySkyline";

interface DesktopSplashViewProps {
  onNavigateLogin?: () => void;
}

export default function DesktopSplashView({
  onNavigateLogin,
}: DesktopSplashViewProps) {
  return (
    <div
      className="w-full h-full min-h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative flex flex-col justify-between select-none"
      style={{
        background:
          "linear-gradient(180deg, #09377d 0%, #072d67 50%, #041f48 100%)",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top subtle bar */}
      <div className="relative z-10 w-full px-8 py-6 flex items-center justify-between">
        <TaxLogo variant="white" size="md" />
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateLogin}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
          >
            Client Portal Login →
          </button>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center space-y-6 my-auto max-w-2xl mx-auto">
        <TaxLogo variant="white" size="lg" />

        <div className="space-y-2 pt-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-sm">
            Your Business Compliance Partner
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Comprehensive financial, taxation, legal, and corporate registration solutions tailored for enterprise and MSME compliance in India.
          </p>
        </div>

        {/* Services Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {["GST", "TAX", "PAYROLL", "REGISTRATIONS", "LEGAL"].map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-xs tracking-wider uppercase border border-white/15"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={onNavigateLogin}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-sm shadow-lg transition-all cursor-pointer"
          >
            Enter Client Application
          </button>
        </div>
      </div>

      {/* Bottom Panoramic City Skyline */}
      <div className="relative z-10 w-full mt-auto">
        <CitySkyline opacity={0.35} />
      </div>
    </div>
  );
}
