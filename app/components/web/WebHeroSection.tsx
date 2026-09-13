"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

export default function WebHeroSection() {
  const [consultPhone, setConsultPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultPhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        `Consultation request received for +91 ${consultPhone}. Our Senior Chartered Accountant will call you within 15 minutes.`
      );
      setConsultPhone("");
    }, 800);
  };

  return (
    <section className="min-h-[calc(100vh-125px)] flex items-center justify-center relative bg-[#2B7FFF] text-white py-10 lg:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/15 border border-white/30 text-white text-xs font-semibold w-fit mx-auto lg:mx-0 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Enterprise Regulatory Compliance Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18]">
              Corporate Tax, Regulatory &amp; Legal Compliance for Indian Enterprises
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-blue-50 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              End-to-end automation and filing management for GST, Income Tax, Payroll TDS, Corporate Registrations, and MCA Secretarial governance backed by practicing Chartered Accountants.
            </p>

            {/* Phone Lead Capture Form */}
            <form onSubmit={handleConsultSubmit} className="pt-2 max-w-md mx-auto lg:mx-0 flex flex-col sm:flex-row gap-2.5">
              <div className="flex-1 bg-white/15 rounded-md border border-white/40 px-4 py-3 flex items-center gap-2.5 backdrop-blur-xs">
                <span className="text-sm font-bold text-white">+91</span>
                <input
                  type="tel"
                  required
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                  placeholder="Enter corporate mobile"
                  className="w-full bg-transparent text-sm text-white placeholder:text-blue-100 outline-none font-medium"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-md bg-slate-950 hover:bg-black active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Connecting..."
                ) : (
                  <>
                    <span>Schedule Advisory</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Proof Points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-blue-50 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>100% On-Time Filing Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Direct CA Representation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Notice Scrutiny Defense</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Expert CA & Mobile Advisory Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] group">
              {/* Ambient glow effect */}
              <div className="absolute -inset-1.5 bg-white/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

              {/* Main Hero Media Showcase Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/30 bg-[#1e6fe0] shadow-2xl">
                <Image
                  src="/hero-advisor.jpg"
                  alt="Tax Solutions Online CA & ITR Advisory"
                  width={560}
                  height={560}
                  priority
                  className="w-full h-auto object-cover block transform group-hover:scale-[1.01] transition-transform duration-500"
                />

                {/* Sleek bottom overlay banner with quick launch CTA */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/75 to-transparent p-4 sm:p-5 flex items-center justify-between gap-3 text-white">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <p className="text-white font-bold text-xs sm:text-sm">Personalized Tax Advisory</p>
                    </div>
                    <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5">Live CA Assistant &amp; Real-time ITR Filing</p>
                  </div>
                  <Link
                    href="/"
                    className="px-3.5 py-2 rounded-md bg-[#2B7FFF] hover:bg-[#206fe6] active:scale-95 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-md whitespace-nowrap cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Explore App</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
