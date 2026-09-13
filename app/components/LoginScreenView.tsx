"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TaxLogo from "./TaxLogo";
import PhoneInput from "./PhoneInput";

interface LoginScreenViewProps {
  onBackToSplash?: () => void;
  onSuccess?: () => void;
}

export default function LoginScreenView({
  onBackToSplash,
  onSuccess,
}: LoginScreenViewProps) {
  const router = useRouter();
  // Mode: "phone" | "otp" | "email"
  const [authMode, setAuthMode] = useState<"phone" | "otp" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("98765 43210");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);

  // Handle Send OTP
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthMode("otp");
      setTimer(30);
    }, 600);
  };

  // Handle OTP digit input
  const handleOtpChange = (index: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const newOtp = [...otpDigits];
    newOtp[index] = digit;
    setOtpDigits(newOtp);

    // Auto-focus next input
    if (digit && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/home");
      }
    }, 700);
  };

  return (
    <div className="relative w-full h-full min-h-full flex flex-col justify-between bg-white px-6 sm:px-8 py-6 select-none overflow-y-auto">
      {/* Top Section: Logo & Headings */}
      <div className="flex flex-col items-center w-full pt-4 sm:pt-6">
        {/* Tax Solutions Logo */}
        <div className="mb-6 sm:mb-8">
          <TaxLogo variant="colored" size="md" />
        </div>

        {/* Headings */}
        <div className="text-center space-y-1 mb-6 sm:mb-8">
          <h1 className="text-[20px] sm:text-[22px] font-bold text-slate-900 tracking-tight">
            {authMode === "otp"
              ? "Verify OTP"
              : authMode === "email"
              ? "Welcome Back"
              : "Welcome Back"}
          </h1>
          <p className="text-[13px] sm:text-[14px] text-slate-500 font-normal">
            {authMode === "otp"
              ? `OTP sent to +91 ${phoneNumber}`
              : authMode === "email"
              ? "Login with your email and password"
              : "Login to your account"}
          </p>
        </div>

        {/* MAIN FORM AREA */}
        <div className="w-full max-w-sm space-y-4">
          {/* 1. Standard Phone Login Mode (Exact Match to Design) */}
          {authMode === "phone" && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              {/* Phone Input Box */}
              <div>
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="98765 43210"
                />
              </div>

              {/* Send OTP Primary Button */}
              <button
                type="submit"
                disabled={isLoading || phoneNumber.replace(/\D/g, "").length < 10}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] active:bg-[var(--brand-primary-active)] text-white font-semibold text-[15px] sm:text-[16px] shadow-[var(--shadow-button)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Send OTP"
                )}
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center py-2">
                <div className="w-full border-t border-slate-200" />
                <span className="absolute bg-white px-3 text-[13px] text-slate-400 font-medium lowercase">
                  or
                </span>
              </div>

              {/* Login with Email Secondary Button */}
              <button
                type="button"
                onClick={() => setAuthMode("email")}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-[15px] sm:text-[16px] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs"
              >
                Login with Email
              </button>
            </form>
          )}

          {/* 2. OTP Verification Mode (Interactive extension) */}
          {authMode === "otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              {/* 6-box OTP digits */}
              <div className="flex justify-between gap-1.5 sm:gap-2">
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    className="w-11 h-12 sm:w-12 sm:h-13 text-center text-lg sm:text-xl font-bold text-slate-900 border border-slate-300 rounded-xl focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary-light)] outline-none bg-slate-50/50"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Didn&apos;t receive code?</span>
                <button
                  type="button"
                  onClick={() => setTimer(30)}
                  className="font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
                >
                  Resend OTP
                </button>
              </div>

              {/* Verify OTP Button */}
              <button
                type="submit"
                disabled={isLoading || otpDigits.some((d) => !d)}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-[15px] shadow-[var(--shadow-button)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Verify & Login"
                )}
              </button>

              {/* Back to phone change */}
              <button
                type="button"
                onClick={() => setAuthMode("phone")}
                className="w-full py-2 text-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Change Phone Number
              </button>
            </form>
          )}

          {/* 3. Email Login Mode */}
          {authMode === "email" && (
            <form onSubmit={handleVerifyOtp} className="space-y-3.5">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary-light)] outline-none text-slate-800 text-[14px]"
                />
              </div>

              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary-light)] outline-none text-slate-800 text-[14px]"
                />
              </div>

              <div className="flex justify-end">
                <a href="#forgot" className="text-xs text-[var(--brand-primary)] font-semibold hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-[15px] shadow-[var(--shadow-button)] transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>

              <button
                type="button"
                onClick={() => setAuthMode("phone")}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
              >
                Use Phone Number instead
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full pt-8 pb-2 text-center select-none">
        <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-normal">
          New to Tax Solutions?{" "}
          <button
            type="button"
            onClick={() => alert("Redirecting to Account Registration flow...")}
            className="font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
          >
            Create Account
          </button>
        </p>

        {onBackToSplash && (
          <div className="mt-3">
            <button
              type="button"
              onClick={onBackToSplash}
              className="text-[11px] text-slate-400 hover:text-slate-600 underline"
            >
              View Splash Screen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
