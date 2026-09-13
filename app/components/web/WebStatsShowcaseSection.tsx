"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Lightbulb, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function WebStatsShowcaseSection() {
  return (
    <section className="py-12 lg:py-16 bg-[#eef2fc] border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Stats Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-blue-200/60">
          {/* Stat 1: Users */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Users</span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-800 flex items-center justify-center shadow-xs">
                <Users className="w-4.5 h-4.5 text-slate-800" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">20,00,000+</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Users from 2,600+ Indian towns and cities trust Tax Solutions
            </p>
          </div>

          {/* Stat 2: Impact */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Impact</span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-amber-500 flex items-center justify-center shadow-xs">
                <Lightbulb className="w-4.5 h-4.5 text-amber-500" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">94%</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              That&apos;s how many 1st time users maximize their tax savings with Tax Solutions
            </p>
          </div>

          {/* Stat 3: Founded */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Founded</span>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-[#2B7FFF] flex items-center justify-center shadow-xs">
                <Zap className="w-4.5 h-4.5 text-[#2B7FFF]" />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">2017</span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Led by senior ex-IRS consultants and accomplished CAs. India&apos;s highest rated and most trusted assisted filing platform.
            </p>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 3-Phone Showcase Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[540px] group">
              {/* Subtle ambient shadow */}
              <div className="absolute -inset-1 bg-blue-400/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-white group-hover:scale-[1.01] transition-transform duration-500">
                <Image
                  src="/app-phones-showcase.jpg"
                  alt="Tax Solutions Mobile App Platform Showcase"
                  width={720}
                  height={540}
                  priority
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </div>

          {/* Right Column: AI Platform Description & Features */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight">
                India&apos;s First AI-powered Platform for ITR Filing and Tax Compliance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Experience fast, reliable, and secure online ITR filing with automated computation and human expert CA backing.
              </p>
            </div>

            {/* Feature Bullet Points */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#2B7FFF] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Free notice management</strong> with expert-backed e-tax filing and scrutiny defense support.
                </span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#2B7FFF] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Year-round query resolution</strong> with India&apos;s top assisted ITR filing and chartered accountant desk.
                </span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-[#2B7FFF] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Trusted by startups</strong>, corporate enterprises, salaried professionals &amp; freelancers across India.
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/login"
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#00a3c4] hover:bg-[#008ba8] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Start ITR Filing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors text-center"
              >
                View App Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
