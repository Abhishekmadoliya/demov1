"use client";

import React from "react";
import Link from "next/link";
import TaxLogo from "../TaxLogo";

export default function WebFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <TaxLogo variant="white" size="sm" />
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Institutional corporate tax, indirect taxation, payroll statutory levies, and secretarial compliance partner for Indian enterprises.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5">Compliances</h4>
          <ul className="space-y-1.5">
            <li><a href="#solutions" className="hover:text-white">GST Filing Desk</a></li>
            <li><a href="#solutions" className="hover:text-white">Corporate Income Tax (ITR)</a></li>
            <li><a href="#solutions" className="hover:text-white">TDS &amp; Payroll Withholding</a></li>
            <li><a href="#solutions" className="hover:text-white">MCA ROC Secretarial Audit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5">Registrations</h4>
          <ul className="space-y-1.5">
            <li><a href="#solutions" className="hover:text-white">Private Limited Incorporation</a></li>
            <li><a href="#solutions" className="hover:text-white">LLP Setup &amp; Agreement</a></li>
            <li><a href="#solutions" className="hover:text-white">MSME Udyam Certification</a></li>
            <li><a href="#solutions" className="hover:text-white">Trademark Protection</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2.5">Application Demo</h4>
          <ul className="space-y-1.5">
            <li><Link href="/" className="hover:text-white text-blue-400 font-semibold">Client App Suite</Link></li>
            <li><Link href="/splash" className="hover:text-white">1. Splash Screen</Link></li>
            <li><Link href="/login" className="hover:text-white">2. Login Screen</Link></li>
            <li><Link href="/home" className="hover:text-white">3. Home Dashboard</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
        <p>© 2026 Tax Solutions Technologies Pvt. Ltd. All rights reserved.</p>
        <p>ISO 27001 Certified • Bank-Grade 256-bit Encryption • ICSI &amp; ICAI Compliant</p>
      </div>
    </footer>
  );
}
