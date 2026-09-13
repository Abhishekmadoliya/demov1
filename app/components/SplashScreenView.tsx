"use client";

import React from "react";
import TaxLogo from "./TaxLogo";
import CitySkyline from "./CitySkyline";

interface SplashScreenViewProps {
  onContinue?: () => void;
  isInteractive?: boolean;
}

export default function SplashScreenView({
  onContinue,
  isInteractive = true,
}: SplashScreenViewProps) {
  return (
    <div
      onClick={isInteractive ? onContinue : undefined}
      className={`relative w-full h-full min-h-full flex flex-col justify-between select-none overflow-hidden ${
        isInteractive ? "cursor-pointer group" : ""
      }`}
      style={{
        background: "linear-gradient(180deg, #09377d 0%, #072d67 50%, #041f48 100%)",
      }}
    >
      {/* Subtle background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] h-[180px] bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top spacer for status bar ergonomics */}
      <div className="h-6 sm:h-10 w-full" />

      {/* Center Branding & Tagline Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center space-y-6 sm:space-y-8 my-auto">
        {/* Tax Solutions Logo */}
        <div className="transform transition-transform duration-300 group-hover:scale-105">
          <TaxLogo variant="white" size="lg" />
        </div>

        {/* Tagline */}
        <div className="space-y-1">
          <h2 className="text-white text-[19px] sm:text-[21px] font-semibold leading-tight tracking-tight drop-shadow-xs">
            Your Business
          </h2>
          <h2 className="text-white text-[19px] sm:text-[21px] font-semibold leading-tight tracking-tight drop-shadow-xs">
            Compliance Partner
          </h2>
        </div>

        {/* Service Pillars / Bullets */}
        <div className="space-y-2 pt-2">
          <p className="text-white/95 text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2">
            <span>GST</span>
            <span className="text-sky-300 text-base leading-none">•</span>
            <span>TAX</span>
            <span className="text-sky-300 text-base leading-none">•</span>
            <span>PAYROLL</span>
          </p>
          <p className="text-white/95 text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2">
            <span>REGISTRATIONS</span>
            <span className="text-sky-300 text-base leading-none">•</span>
            <span>LEGAL</span>
          </p>
        </div>

        {/* Micro-hint for interactive preview */}
        {isInteractive && (
          <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[11px] font-medium text-white/90 border border-white/20">
              Tap anywhere to continue
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Bottom Architectural City Skyline Illustration */}
      <div className="relative z-10 w-full mt-auto">
        <CitySkyline opacity={0.32} />
      </div>
    </div>
  );
}
