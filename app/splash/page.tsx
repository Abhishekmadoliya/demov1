"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SplashScreenView from "../components/SplashScreenView";
import DeviceFrame from "../components/DeviceFrame";

export default function SplashPage() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"frame" | "fullscreen">("frame");

  return (
    <div className="min-h-screen bg-[#09377d] sm:bg-slate-900 flex flex-col justify-between">
      {/* Top Navbar / Controls - Hidden on mobile, visible on desktop */}
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
            1. Splash Screen
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Mode toggle for large screens */}
          <div className="hidden sm:flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode("frame")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === "frame"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Mobile Frame
            </button>
            <button
              onClick={() => setViewMode("fullscreen")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                viewMode === "fullscreen"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Immersive Fullscreen
            </button>
          </div>

          <Link
            href="/login"
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            Go to Login →
          </Link>
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-6 md:p-10">
        {/* Mobile: 100% full screen pure app without upper black navigation */}
        <div className="sm:hidden w-full h-[100dvh] flex flex-col">
          <SplashScreenView onContinue={() => router.push("/login")} />
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex items-center justify-center w-full h-full">
          {viewMode === "frame" ? (
            <DeviceFrame
              title="1. SPLASH SCREEN"
              theme="dark"
              timeString="9:41"
            >
              <SplashScreenView onContinue={() => router.push("/login")} />
            </DeviceFrame>
          ) : (
            <div className="w-full max-w-4xl h-[780px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <SplashScreenView onContinue={() => router.push("/login")} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
