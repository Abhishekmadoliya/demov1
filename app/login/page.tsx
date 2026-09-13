"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginScreenView from "../components/LoginScreenView";
import DeviceFrame from "../components/DeviceFrame";
import TaxLogo from "../components/TaxLogo";
import CitySkyline from "../components/CitySkyline";
import PhoneInput from "../components/PhoneInput";

export default function LoginPage() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"frame" | "desktop">("frame");
  const [desktopPhone, setDesktopPhone] = useState("98765 43210");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white sm:bg-slate-900 flex flex-col justify-between">
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
            2. Login Screen
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
            href="/splash"
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-all border border-slate-700 shadow-xs"
          >
            ← View Splash
          </Link>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 flex items-center justify-center p-0 sm:p-6 md:p-10">
        {/* Mobile View: 100% full screen native app experience without upper black header */}
        <div className="sm:hidden w-full min-h-[100dvh] flex flex-col bg-white">
          <LoginScreenView onBackToSplash={() => router.push("/splash")} />
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex items-center justify-center w-full h-full">
          {viewMode === "frame" ? (
            <DeviceFrame
              title="2. LOGIN SCREEN"
              theme="light"
              timeString="9:41"
            >
              <LoginScreenView onBackToSplash={() => router.push("/splash")} />
            </DeviceFrame>
          ) : (
            /* Optimized Enterprise Split Desktop View */
            <div className="w-full max-w-5xl h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 bg-white">
              {/* Left Column: Brand & Hero Showcase */}
              <div
                className="md:col-span-6 relative flex flex-col justify-between p-10 select-none overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #09377d 0%, #072d67 50%, #041f48 100%)",
                }}
              >
                <div className="space-y-6 relative z-10">
                  <TaxLogo variant="white" size="lg" />
                  <div className="space-y-2 pt-4">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Your Business Compliance Partner
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                      Seamless management for GST, Income Tax, Payroll, Corporate Registrations, and Legal Compliances in one unified portal.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4">
                    {[
                      "Real-time GST & ITR tracking",
                      "Automated compliance calendar & alerts",
                      "Dedicated tax & legal consultation",
                      "Secure bank-grade cloud document vault",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-white/90">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                          ✓
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 w-full mt-auto pt-6">
                  <CitySkyline opacity={0.3} />
                </div>
              </div>

              {/* Right Column: Clean Login Form */}
              <div className="md:col-span-6 flex flex-col justify-center px-12 py-10 bg-white">
                <div className="w-full max-w-md mx-auto space-y-6">
                  <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-sm text-slate-500">Login to your account to manage your compliance</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                        alert("OTP sent to +91 " + desktopPhone);
                      }, 600);
                    }}
                    className="space-y-4 pt-2"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">
                        Mobile Number
                      </label>
                      <PhoneInput
                        value={desktopPhone}
                        onChange={setDesktopPhone}
                        placeholder="98765 43210"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-base shadow-[var(--shadow-button)] transition-all cursor-pointer flex items-center justify-center"
                    >
                      {isLoading ? "Sending..." : "Send OTP"}
                    </button>

                    <div className="relative flex items-center justify-center py-2">
                      <div className="w-full border-t border-slate-200" />
                      <span className="absolute bg-white px-3 text-xs text-slate-400 lowercase">
                        or
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert("Email Login option selected")}
                      className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
                    >
                      Login with Email
                    </button>
                  </form>

                  <div className="pt-4 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-600">
                      New to Tax Solutions?{" "}
                      <button
                        type="button"
                        onClick={() => alert("Redirecting to registration...")}
                        className="font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
