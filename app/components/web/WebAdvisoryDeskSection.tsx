"use client";

import React from "react";
import Link from "next/link";
import TaxLogo from "../TaxLogo";
import CitySkyline from "../CitySkyline";

export default function WebAdvisoryDeskSection() {
  return (
    <section
      id="advisory"
      className="py-20 lg:py-24 relative bg-gradient-to-b from-[#f0f7fe] via-white to-slate-50 border-t border-blue-100 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Centered Content Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center space-y-5">
        {/* Centered Logo */}
        <div className="flex items-center justify-center mb-1">
          <TaxLogo variant="colored" size="lg" />
        </div>

        {/* Centered Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto leading-tight">
          Protect Your Business with Institutional Tax Governance
        </h2>

        {/* Centered Description */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Schedule a confidential 15-minute consultation with our Senior Chartered Accountant team to review your filing status.
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <Link
            href="/login"
            className="w-full sm:w-auto px-7 py-3 rounded-md bg-[#2B7FFF] hover:bg-[#206fe6] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md transition-all text-center"
          >
            Sign In to Client Portal
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-white hover:bg-slate-50 active:scale-95 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-colors shadow-xs text-center"
          >
            View Application Demo
          </Link>
        </div>
      </div>

      {/* Base Skyline Anchored at Bottom */}
      <div className="relative z-0 w-full mt-8 max-w-5xl mx-auto opacity-20 pointer-events-none">
        <CitySkyline opacity={0.2} />
      </div>
    </section>
  );
}

