"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Smartphone, Monitor } from "lucide-react";
import SplashScreenView from "./components/SplashScreenView";
import LoginScreenView from "./components/LoginScreenView";
import HomeDashboardView from "./components/HomeDashboardView";
import DesktopSplashView from "./components/DesktopSplashView";
import DesktopLoginView from "./components/DesktopLoginView";
import DesktopHomeDashboard from "./components/DesktopHomeDashboard";
import DeviceFrame from "./components/DeviceFrame";

export default function ShowcaseHub() {
  // Mode: "mobile" | "desktop"
  const [displayMode, setDisplayMode] = useState<"mobile" | "desktop">("mobile");
  // Active screen tab: "all" | "splash" | "login" | "home"
  const [activeTab, setActiveTab] = useState<"all" | "splash" | "login" | "home">("all");
  // Mobile app state (for pure phone view)
  const [mobileScreen, setMobileScreen] = useState<"splash" | "login" | "home">("splash");
  // Theme color state
  const [themeColor, setThemeColor] = useState<"blue" | "indigo" | "teal" | "slate">("blue");

  // Quick theme change handler via CSS custom properties
  const handleThemeChange = (theme: "blue" | "indigo" | "teal" | "slate") => {
    setThemeColor(theme);
    const root = document.documentElement;
    if (theme === "blue") {
      root.style.setProperty("--brand-primary", "#0052cc");
      root.style.setProperty("--brand-primary-hover", "#0747a6");
      root.style.setProperty("--brand-splash-bg", "#073474");
    } else if (theme === "indigo") {
      root.style.setProperty("--brand-primary", "#4f46e5");
      root.style.setProperty("--brand-primary-hover", "#4338ca");
      root.style.setProperty("--brand-splash-bg", "#1e1b4b");
    } else if (theme === "teal") {
      root.style.setProperty("--brand-primary", "#0d9488");
      root.style.setProperty("--brand-primary-hover", "#0f766e");
      root.style.setProperty("--brand-splash-bg", "#134e4a");
    } else if (theme === "slate") {
      root.style.setProperty("--brand-primary", "#0f172a");
      root.style.setProperty("--brand-primary-hover", "#1e293b");
      root.style.setProperty("--brand-splash-bg", "#0f172a");
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. PURE MOBILE VIEW (sm:hidden) - ZERO UPPER BLACK NAVIGATION ON MOBILE   */}
      {/* ========================================================================= */}
      <div className="sm:hidden w-full min-h-[100dvh] flex flex-col bg-white">
        {mobileScreen === "splash" && (
          <div className="w-full h-[100dvh]">
            <SplashScreenView onContinue={() => setMobileScreen("login")} />
          </div>
        )}

        {mobileScreen === "login" && (
          <div className="w-full min-h-[100dvh] flex flex-col bg-white">
            <LoginScreenView
              onBackToSplash={() => setMobileScreen("splash")}
              onSuccess={() => setMobileScreen("home")}
            />
          </div>
        )}

        {mobileScreen === "home" && (
          <div className="w-full h-[100dvh] flex flex-col bg-[#f4f7fc]">
            <HomeDashboardView onLogout={() => setMobileScreen("login")} />
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP & LARGE SCREENS VIEW (hidden sm:flex) - SHOWCASE & TOOLS      */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex min-h-screen bg-slate-950 text-slate-100 flex-col font-sans selection:bg-blue-600 selection:text-white">
        {/* Top Header & Navigation Bar for Desktop */}
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex flex-col xl:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
              TS
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Tax Solutions Design System
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Next.js
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Compare Mobile Frames vs. Desktop Large Screen Layouts
              </p>
            </div>
          </div>

          {/* Central Controls: Mode Switcher & Screen Tabs */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Display Mode (Mobile Frames vs Desktop Large Screens) */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => setDisplayMode("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  displayMode === "mobile"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Frames (1:1)</span>
              </button>
              <button
                onClick={() => setDisplayMode("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  displayMode === "desktop"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop & Large Screens</span>
              </button>
            </div>

            {/* Screen Selection Tabs */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-slate-800 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                All Screens
              </button>
              <button
                onClick={() => setActiveTab("splash")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "splash"
                    ? "bg-slate-800 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                1. Splash
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "login"
                    ? "bg-slate-800 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                2. Login
              </button>
              <button
                onClick={() => setActiveTab("home")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "home"
                    ? "bg-slate-800 text-white shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                3. Home Dashboard
              </button>
            </div>
          </div>

          {/* Theme Switcher & Direct Routes */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => handleThemeChange("blue")}
                title="Royal Blue (Default)"
                className={`w-5 h-5 rounded-full bg-[#0052cc] border-2 transition-transform cursor-pointer ${
                  themeColor === "blue" ? "border-white scale-110" : "border-transparent"
                }`}
              />
              <button
                onClick={() => handleThemeChange("indigo")}
                title="Indigo Theme"
                className={`w-5 h-5 rounded-full bg-[#4f46e5] border-2 transition-transform cursor-pointer ${
                  themeColor === "indigo" ? "border-white scale-110" : "border-transparent"
                }`}
              />
              <button
                onClick={() => handleThemeChange("teal")}
                title="Teal Theme"
                className={`w-5 h-5 rounded-full bg-[#0d9488] border-2 transition-transform cursor-pointer ${
                  themeColor === "teal" ? "border-white scale-110" : "border-transparent"
                }`}
              />
              <button
                onClick={() => handleThemeChange("slate")}
                title="Midnight Slate Theme"
                className={`w-5 h-5 rounded-full bg-[#0f172a] border-2 transition-transform cursor-pointer ${
                  themeColor === "slate" ? "border-white scale-110" : "border-transparent"
                }`}
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Link
                href="/splash"
                className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              >
                /splash
              </Link>
              <Link
                href="/login"
                className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              >
                /login
              </Link>
              <Link
                href="/home"
                className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
              >
                /home
              </Link>
              <Link
                href="/web"
                className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-xs transition-colors flex items-center gap-1"
              >
                <span>/web</span>
                <span className="text-[10px] opacity-80">(Website)</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Showcase Canvas */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 overflow-x-auto">
          {/* ========================================================================= */}
          {/* A. MOBILE FRAMES PRESENTATION MODE                                        */}
          {/* ========================================================================= */}
          {displayMode === "mobile" && (
            <div className="w-full flex flex-col items-center">
              {/* ALL 3 SCREENS (SIDE-BY-SIDE) */}
              {activeTab === "all" && (
                <div className="w-full flex flex-col items-center">
                  <div className="mb-6 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Mobile Application Screens (1:1 Exact Match)
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                      Progression from 1. Splash Screen → 2. Login Screen → 3. Home Dashboard in high-fidelity mobile frames.
                    </p>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-10 w-full overflow-x-auto pb-4">
                    <DeviceFrame
                      title="1. SPLASH SCREEN"
                      theme="dark"
                      timeString="9:41"
                    >
                      <SplashScreenView onContinue={() => setActiveTab("login")} />
                    </DeviceFrame>

                    <DeviceFrame
                      title="2. LOGIN SCREEN"
                      theme="light"
                      timeString="9:41"
                    >
                      <LoginScreenView
                        onBackToSplash={() => setActiveTab("splash")}
                        onSuccess={() => setActiveTab("home")}
                      />
                    </DeviceFrame>

                    <DeviceFrame
                      title="3. HOME DASHBOARD"
                      theme="dark"
                      timeString="9:41"
                    >
                      <HomeDashboardView onLogout={() => setActiveTab("login")} />
                    </DeviceFrame>
                  </div>
                </div>
              )}

              {/* INDIVIDUAL SCREEN PREVIEWS */}
              {activeTab === "splash" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Screen 01</span>
                    <h2 className="text-xl font-bold text-white">Splash Screen (Mobile)</h2>
                  </div>
                  <DeviceFrame title="1. SPLASH SCREEN" theme="dark" timeString="9:41">
                    <SplashScreenView onContinue={() => setActiveTab("login")} />
                  </DeviceFrame>
                </div>
              )}

              {activeTab === "login" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Screen 02</span>
                    <h2 className="text-xl font-bold text-white">Login Screen (Mobile)</h2>
                  </div>
                  <DeviceFrame title="2. LOGIN SCREEN" theme="light" timeString="9:41">
                    <LoginScreenView
                      onBackToSplash={() => setActiveTab("splash")}
                      onSuccess={() => setActiveTab("home")}
                    />
                  </DeviceFrame>
                </div>
              )}

              {activeTab === "home" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Screen 03</span>
                    <h2 className="text-xl font-bold text-white">Home Dashboard (Mobile)</h2>
                  </div>
                  <DeviceFrame title="3. HOME DASHBOARD" theme="dark" timeString="9:41">
                    <HomeDashboardView onLogout={() => setActiveTab("login")} />
                  </DeviceFrame>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* B. DESKTOP & LARGE SCREENS PRESENTATION MODE                              */}
          {/* ========================================================================= */}
          {displayMode === "desktop" && (
            <div className="w-full flex flex-col items-center">
              {/* ALL DESKTOP SCREENS STACKED/OVERVIEW */}
              {activeTab === "all" && (
                <div className="w-full max-w-6xl space-y-16">
                  {/* 1. Desktop Splash */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Desktop View 01</span>
                        <h2 className="text-xl font-bold text-white">1. Splash Screen on Desktop & Large Screens</h2>
                      </div>
                      <button
                        onClick={() => setActiveTab("splash")}
                        className="text-xs font-semibold text-blue-400 hover:underline cursor-pointer"
                      >
                        Focus on this screen →
                      </button>
                    </div>
                    <DesktopSplashView onNavigateLogin={() => setActiveTab("login")} />
                  </div>

                  {/* 2. Desktop Login */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Desktop View 02</span>
                        <h2 className="text-xl font-bold text-white">2. Login Screen on Desktop & Large Screens (Dual-Column SaaS)</h2>
                      </div>
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-xs font-semibold text-emerald-400 hover:underline cursor-pointer"
                      >
                        Focus on this screen →
                      </button>
                    </div>
                    <DesktopLoginView
                      onSuccess={() => setActiveTab("home")}
                      onBackToSplash={() => setActiveTab("splash")}
                    />
                  </div>

                  {/* 3. Desktop Home Dashboard */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Desktop View 03</span>
                        <h2 className="text-xl font-bold text-white">3. Home Dashboard on Desktop & Large Screens (Enterprise Portal)</h2>
                      </div>
                      <button
                        onClick={() => setActiveTab("home")}
                        className="text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
                      >
                        Focus on this screen →
                      </button>
                    </div>
                    <DesktopHomeDashboard onLogout={() => setActiveTab("login")} />
                  </div>
                </div>
              )}

              {/* INDIVIDUAL DESKTOP VIEWS */}
              {activeTab === "splash" && (
                <div className="w-full max-w-5xl space-y-4">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Desktop View 01</span>
                    <h2 className="text-2xl font-bold text-white">Splash Screen on Desktop & Large Screens</h2>
                    <p className="text-xs text-slate-400 mt-1">Immersive wide-screen brand canvas with responsive skyline vector</p>
                  </div>
                  <DesktopSplashView onNavigateLogin={() => setActiveTab("login")} />
                </div>
              )}

              {activeTab === "login" && (
                <div className="w-full max-w-5xl space-y-4">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Desktop View 02</span>
                    <h2 className="text-2xl font-bold text-white">Login Screen on Desktop & Large Screens</h2>
                    <p className="text-xs text-slate-400 mt-1">High-conversion dual-column enterprise split layout</p>
                  </div>
                  <DesktopLoginView
                    onSuccess={() => setActiveTab("home")}
                    onBackToSplash={() => setActiveTab("splash")}
                  />
                </div>
              )}

              {activeTab === "home" && (
                <div className="w-full max-w-6xl space-y-4">
                  <div className="text-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Desktop View 03</span>
                    <h2 className="text-2xl font-bold text-white">Home Dashboard on Desktop & Large Screens</h2>
                    <p className="text-xs text-slate-400 mt-1">Full enterprise compliance command center with sidebar navigation, live metrics & services catalogue</p>
                  </div>
                  <DesktopHomeDashboard onLogout={() => setActiveTab("login")} />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
