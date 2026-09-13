"use client";

import React from "react";
import Link from "next/link";

export default function WebPricingRetainerSection() {
  return (
    <section id="pricing" className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2B7FFF]">
            Retainer Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Institutional Plans with Dedicated CA Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clear scope, fixed monthly pricing, and continuous regulatory protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                Sole Proprietor &amp; Traders
              </span>
              <h3 className="text-lg font-bold text-slate-900">Standard Retainer</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹1,499</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>
              <p className="text-xs text-slate-600">
                Complete GST returns, annual business ITR, and basic credit matching.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-1.5">✓ Monthly GSTR-1 &amp; 3B filing</li>
                <li className="flex items-center gap-1.5">✓ Business ITR-3/ITR-4 filing</li>
                <li className="flex items-center gap-1.5">✓ 2B Input Tax Credit reconciliation</li>
                <li className="flex items-center gap-1.5">✓ Standard notice reply support</li>
              </ul>
            </div>
            <Link
              href="/login"
              className="w-full py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors block border border-slate-300"
            >
              Enroll in Standard
            </Link>
          </div>

          {/* Growth (Featured) */}
          <div className="bg-[#f8fbff] p-6 rounded-xl border-2 border-[#2B7FFF] flex flex-col justify-between space-y-5 relative shadow-lg">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#2B7FFF] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Corporate Standard
            </span>
            <div className="space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#2B7FFF] text-xs font-bold border border-blue-200">
                Pvt Ltd &amp; LLP
              </span>
              <h3 className="text-lg font-bold text-slate-900">Corporate Compliance</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#2B7FFF]">₹3,999</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>
              <p className="text-xs text-slate-600">
                Full indirect tax, direct tax, payroll TDS, and annual MCA ROC secretarial desk.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-blue-100">
                <li className="flex items-center gap-1.5">✓ Everything in Standard</li>
                <li className="flex items-center gap-1.5">✓ Quarterly TDS Returns (24Q &amp; 26Q)</li>
                <li className="flex items-center gap-1.5">✓ Annual ROC Returns (AOC-4 &amp; MGT-7)</li>
                <li className="flex items-center gap-1.5">✓ Director KYC (DIR-3 KYC)</li>
                <li className="flex items-center gap-1.5">✓ Assigned Chartered Accountant Desk</li>
              </ul>
            </div>
            <Link
              href="/login"
              className="w-full py-2.5 rounded-md bg-[#2B7FFF] hover:bg-[#206fe6] text-white text-xs font-bold text-center transition-all shadow-md block"
            >
              Select Corporate Desk →
            </Link>
          </div>

          {/* Virtual CFO */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                Funded &amp; Multi-State
              </span>
              <h3 className="text-lg font-bold text-slate-900">Virtual CFO &amp; Audit</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹9,999</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>
              <p className="text-xs text-slate-600">
                CFO advisory, statutory audit facilitation, and transfer pricing governance.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                <li className="flex items-center gap-1.5">✓ Everything in Corporate</li>
                <li className="flex items-center gap-1.5">✓ Monthly Financial MIS &amp; Cashflows</li>
                <li className="flex items-center gap-1.5">✓ Multi-state GST registrations &amp; audit</li>
                <li className="flex items-center gap-1.5">✓ Statutory Audit representation</li>
                <li className="flex items-center gap-1.5">✓ Partner-level monthly strategy desk</li>
              </ul>
            </div>
            <Link
              href="/login"
              className="w-full py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition-colors block border border-slate-300"
            >
              Contact for Enterprise
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
