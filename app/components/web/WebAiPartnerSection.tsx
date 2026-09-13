"use client";

import React from "react";
import { UserCheck, Clock, Lock, Layers } from "lucide-react";

export default function WebAiPartnerSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Subtitles */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-tight leading-tight">
            TaxSolutions: Your AI–Driven Partner for Online Income Tax Filing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            We simplify your e-filing journey with powerful automation and human expertise.
          </p>
          <p className="text-sm sm:text-base font-bold text-slate-800 pt-1">
            TaxSolutions is your ideal partner for assisted{" "}
            <a href="#solutions" className="text-[#2B7FFF] underline underline-offset-2 hover:text-blue-700">
              Income Tax Filing
            </a>{" "}
            as we offer
          </p>
        </div>

        {/* 4 Feature Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {/* Card 1: Expert-Assisted */}
          <div className="bg-[#def1fc] hover:bg-[#d4ecfa] p-8 sm:p-9 rounded-2xl border border-blue-200/70 transition-all flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 bg-white/40 shadow-xs">
              <UserCheck className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug">
              Expert-Assisted Income Tax eFiling Services
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Get personalized help from our in-house professionals. Whether you&apos;re filing as a salaried employee, freelancer, or managing a business, our team ensures 100% accuracy and maximum savings—backed by one of India&apos;s most trusted online e-tax filing platforms.
            </p>
          </div>

          {/* Card 2: Timely Hassle-Free */}
          <div className="bg-[#def1fc] hover:bg-[#d4ecfa] p-8 sm:p-9 rounded-2xl border border-blue-200/70 transition-all flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 bg-white/40 shadow-xs">
              <Clock className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug">
              Timely, Hassle-Free ITR Filing
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Stay ahead of deadlines with AI-powered reminders and automated updates. Our system ensures smooth, compliant Income Tax Return Filing — always on time.
            </p>
          </div>

          {/* Card 3: Secure Online */}
          <div className="bg-[#def1fc] hover:bg-[#d4ecfa] p-8 sm:p-9 rounded-2xl border border-blue-200/70 transition-all flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 bg-white/40 shadow-xs">
              <Lock className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug">
              Secure Online ITR Filing Platform
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Your data is safe with us. TaxSolutions&apos;s secure e-tax filing services use advanced encryption to keep your personal and financial information private.
            </p>
          </div>

          {/* Card 4: Smart Tools */}
          <div className="bg-[#def1fc] hover:bg-[#d4ecfa] p-8 sm:p-9 rounded-2xl border border-blue-200/70 transition-all flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full border-2 border-slate-800 flex items-center justify-center text-slate-800 bg-white/40 shadow-xs">
              <Layers className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug">
              Seamless Filing with Smart Tools
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Upload Form 16, review Form 26AS, and auto-import income details using our integrated income tax filing tool. Our online incometax filing services cover everything from salary to capital gains and{" "}
              <a href="#solutions" className="text-[#2B7FFF] underline font-semibold hover:text-blue-700">
                house property
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="text-center max-w-2xl mx-auto mt-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Take Control of Your Taxes
          </span>
          <p className="text-sm sm:text-[15px] font-bold text-slate-900 leading-relaxed">
            Join lakhs of Indians using TaxSolutions—India&apos;s most secure and easy-to-use income tax e-filing website for individuals and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
