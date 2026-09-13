"use client";

import React, { useState } from "react";
import TaxLogo from "./TaxLogo";
import CitySkyline from "./CitySkyline";
import PhoneInput from "./PhoneInput";
import { CheckCircle2, Lock, Mail, ArrowRight } from "lucide-react";

interface DesktopLoginViewProps {
  onSuccess?: () => void;
  onBackToSplash?: () => void;
}

export default function DesktopLoginView({
  onSuccess,
  onBackToSplash,
}: DesktopLoginViewProps) {
  const [phoneNumber, setPhoneNumber] = useState("98765 43210");
  const [isLoading, setIsLoading] = useState(false);
  const [loginMode, setLoginMode] = useState<"phone" | "email">("phone");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className="w-full h-full min-h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 bg-white">
      {/* Left Column: Brand Showcase */}
      <div
        className="md:col-span-6 relative flex flex-col justify-between p-10 select-none overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #09377d 0%, #072d67 50%, #041f48 100%)",
        }}
      >
        <div className="space-y-6 relative z-10">
          <TaxLogo variant="white" size="lg" />
          <div className="space-y-2 pt-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Your Business Compliance Partner
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Seamless management for GST Returns, Income Tax Filings, Payroll & TDS, Corporate Registrations, and Legal Compliances in one unified portal.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "Real-time GST & ITR tracking with automated alerts",
              "Automated compliance calendar & statutory deadline manager",
              "Dedicated certified chartered accountant & legal desk",
              "Bank-grade secure cloud document vault",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full mt-auto pt-6">
          <CitySkyline opacity={0.3} />
        </div>
      </div>

      {/* Right Column: Interactive Login Card */}
      <div className="md:col-span-6 flex flex-col justify-center px-8 sm:px-12 py-10 bg-white">
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-sm text-slate-500">Login to your account to manage your compliance</p>
          </div>

          {loginMode === "phone" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Mobile Number
                </label>
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="98765 43210"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-base shadow-[var(--shadow-button)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="relative flex items-center justify-center py-1">
                <div className="w-full border-t border-slate-200" />
                <span className="absolute bg-white px-3 text-xs text-slate-400 lowercase">
                  or
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLoginMode("email")}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Login with Email</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[var(--brand-primary)] outline-none text-slate-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[var(--brand-primary)] outline-none text-slate-800 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-base shadow-[var(--shadow-button)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  "Signing In..."
                ) : (
                  <>
                    <span>Sign In</span>
                    <Lock className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setLoginMode("phone")}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                Use Phone Number instead
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-slate-100 text-center">
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
  );
}
