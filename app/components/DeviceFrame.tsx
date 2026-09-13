"use client";

import React from "react";

interface DeviceFrameProps {
  children: React.ReactNode;
  title?: string;
  theme?: "dark" | "light";
  className?: string;
  showStatusBar?: boolean;
  timeString?: string;
}

export default function DeviceFrame({
  children,
  title,
  theme = "dark",
  className = "",
  showStatusBar = true,
  timeString = "9:41",
}: DeviceFrameProps) {
  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {title && (
        <div className="mb-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 px-3 py-1 bg-white/80 rounded-full border border-slate-200/80 shadow-xs">
            {title}
          </span>
        </div>
      )}

      {/* Mobile Device Mockup Frame */}
      <div className="relative w-[340px] sm:w-[375px] h-[720px] sm:h-[780px] rounded-[48px] bg-slate-900 p-3 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.1),0_0_0_8px_#0f172a] transition-all duration-300">
        {/* Device Outer Edge Highlights */}
        <div className="absolute inset-0 rounded-[48px] border-[3px] border-slate-700/40 pointer-events-none" />

        {/* Volume & Power buttons simulation */}
        <div className="absolute -left-[11px] top-[120px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[11px] top-[165px] w-[3px] h-[48px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[11px] top-[225px] w-[3px] h-[48px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[11px] top-[160px] w-[3px] h-[64px] bg-slate-700 rounded-r-sm" />

        {/* Screen Container */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden flex flex-col bg-white">
          {/* Status Bar */}
          {showStatusBar && (
            <div
              className={`w-full px-7 pt-3 pb-1 flex items-center justify-between z-30 select-none text-[13px] font-semibold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              <span>{timeString}</span>

              {/* Dynamic Island / Speaker Pill */}
              <div className="w-24 h-4.5 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 -mt-1 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a192f]" />
              </div>

              {/* Status Icons: Cellular, Wifi, Battery */}
              <div className="flex items-center gap-1.5">
                {/* Cellular */}
                <svg className="w-4 h-3 fill-current" viewBox="0 0 16 12">
                  <rect x="1" y="8" width="2" height="4" rx="0.5" />
                  <rect x="5" y="6" width="2" height="6" rx="0.5" />
                  <rect x="9" y="4" width="2" height="8" rx="0.5" />
                  <rect x="13" y="1" width="2" height="11" rx="0.5" />
                </svg>

                {/* Wifi */}
                <svg className="w-3.5 h-3 fill-current" viewBox="0 0 16 12">
                  <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.5-3a6.5 6.5 0 019 0l-1.2 1.2a4.8 4.8 0 00-6.6 0L3.5 6.5zm-3-3a11 11 0 0115 0l-1.2 1.2a9.3 9.3 0 00-12.6 0L.5 3.5z" />
                </svg>

                {/* Battery */}
                <div className="w-5 h-2.5 rounded-[3px] border border-current p-[1px] flex items-center">
                  <div className="h-full w-full bg-current rounded-[1px]" />
                </div>
              </div>
            </div>
          )}

          {/* Screen Content Viewport */}
          <div className="flex-1 w-full overflow-y-auto overflow-x-hidden relative flex flex-col">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-full flex justify-center py-2 z-30 pointer-events-none">
            <div
              className={`w-32 h-1 rounded-full ${
                isDark ? "bg-white/40" : "bg-slate-300"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
