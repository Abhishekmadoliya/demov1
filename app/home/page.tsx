"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeDashboardView from "../components/HomeDashboardView";
import DeviceFrame from "../components/DeviceFrame";

export default function HomePage() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"frame" | "desktop">("frame");

  return (
    <div className="min-h-screen bg-[#f4f7fc] sm:bg-slate-900 flex flex-col justify-between">
      {/* Top Header - Hidden on mobile, visible on desktop */}
      <header className="hidden sm:flex w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5 items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>←</span> Back to Showcase Hub
          </Link>
          <span className="text-slate-700">|</span>
          <span className="text-xs sm:text-sm font-semibold text-white">
            3. Home Dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode("frame")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === "frame"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Mobile Frame (Exact 1:1)
            </button>
            <button
              onClick={() => setViewMode("desktop")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === "desktop"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Responsive Desktop Layout
            </button>
          </div>

          <Link
            href="/login"
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-all border border-slate-700 shadow-xs"
          >
            ← Login Screen
          </Link>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-6 md:p-10">
        {/* Mobile View: 100% full screen pure app without upper black navigation */}
        <div className="sm:hidden w-full h-[100dvh] flex flex-col bg-[#f4f7fc]">
          <HomeDashboardView onLogout={() => router.push("/login")} />
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex items-center justify-center w-full h-full">
          {viewMode === "frame" ? (
            <DeviceFrame
              title="3. HOME DASHBOARD"
              theme="dark"
              timeString="9:41"
            >
              <HomeDashboardView onLogout={() => router.push("/login")} />
            </DeviceFrame>
          ) : (
            /* Desktop responsive container */
            <div className="w-full max-w-4xl h-[780px] bg-[#f4f7fc] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
              <HomeDashboardView onLogout={() => router.push("/login")} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
