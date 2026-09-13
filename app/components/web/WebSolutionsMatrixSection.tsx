"use client";

import React from "react";
import { IndianRupee, FileSpreadsheet, Calculator, Building2 } from "lucide-react";

export default function WebSolutionsMatrixSection() {
  return (
    <section id="solutions" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2B7FFF]">
            Corporate Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Institutional Compliance &amp; Tax Management
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Structured advisory and statutory execution managed by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. GST */}
          <div className="bg-[#f0f7fe] hover:bg-[#e4f1fc] p-5 rounded-xl border border-blue-100/90 transition-all space-y-3.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-white text-[#2B7FFF] flex items-center justify-center shadow-xs">
              <IndianRupee className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">GST &amp; Indirect Tax</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Monthly GSTR-1 &amp; 3B, Automated 2B Input Credit Reconciliation, Annual GSTR-9/9C Audit, and Refund Claims.
              </p>
            </div>
            <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-blue-200/50">
              <li className="flex items-center gap-1.5">✓ E-Way Bill &amp; E-Invoicing</li>
              <li className="flex items-center gap-1.5">✓ GST Notice Defense Desk</li>
            </ul>
          </div>

          {/* 2. Direct Tax */}
          <div className="bg-[#f0f7fe] hover:bg-[#e4f1fc] p-5 rounded-xl border border-blue-100/90 transition-all space-y-3.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-white text-emerald-600 flex items-center justify-center shadow-xs">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Corporate Income Tax</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                ITR-6 Corporate Returns, ITR-5 LLPs, Advance Tax Computation, Tax Audit (Sec 44AB), and Scrutiny Representation.
              </p>
            </div>
            <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-blue-200/50">
              <li className="flex items-center gap-1.5">✓ 26AS &amp; AIS Reconciliation</li>
              <li className="flex items-center gap-1.5">✓ Transfer Pricing Compliance</li>
            </ul>
          </div>

          {/* 3. TDS & Payroll */}
          <div className="bg-[#f0f7fe] hover:bg-[#e4f1fc] p-5 rounded-xl border border-blue-100/90 transition-all space-y-3.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-white text-amber-600 flex items-center justify-center shadow-xs">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Payroll, TDS &amp; Labor Laws</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Quarterly TDS Form 24Q, 26Q, Form 16/16A generation, Monthly PF/ESI ECR generation and statutory registers.
              </p>
            </div>
            <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-blue-200/50">
              <li className="flex items-center gap-1.5">✓ Lower TDS Form 13 Support</li>
              <li className="flex items-center gap-1.5">✓ Gratuity &amp; Bonus Compliance</li>
            </ul>
          </div>

          {/* 4. MCA Secretarial */}
          <div className="bg-[#f0f7fe] hover:bg-[#e4f1fc] p-5 rounded-xl border border-blue-100/90 transition-all space-y-3.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-white text-purple-600 flex items-center justify-center shadow-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">MCA ROC Secretarial</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Annual AOC-4 &amp; MGT-7 filings, Director KYC (DIR-3), Board Meeting Minutes, Share Allotment, and Statutory Registers.
              </p>
            </div>
            <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-blue-200/50">
              <li className="flex items-center gap-1.5">✓ Company &amp; LLP Incorporation</li>
              <li className="flex items-center gap-1.5">✓ Trademark &amp; IP Filing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
