"use client";

import React from "react";

export default function WebClientProofBar() {
  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200 text-slate-700 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-slate-800 text-center md:text-left text-xs">
          Trusted by 10,000+ Indian Businesses Across Industries:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-700 font-bold text-xs">
          <span className="px-3 py-1 bg-white rounded-md border border-slate-200 shadow-xs">
            Manufacturing &amp; Export
          </span>
          <span className="px-3 py-1 bg-white rounded-md border border-slate-200 shadow-xs">
            E-Commerce &amp; Retail
          </span>
          <span className="px-3 py-1 bg-white rounded-md border border-slate-200 shadow-xs">
            IT &amp; SaaS Enterprises
          </span>
          <span className="px-3 py-1 bg-white rounded-md border border-slate-200 shadow-xs">
            Healthcare &amp; Pharma
          </span>
        </div>
      </div>
    </section>
  );
}
