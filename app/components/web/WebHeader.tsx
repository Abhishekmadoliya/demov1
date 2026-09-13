"use client";

import React, { useState } from "react";
import Link from "next/link";
import TaxLogo from "../TaxLogo";
import {
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function WebHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "resources" | "corporate" | null>(null);

  // Structured Sublinks matching TaxBuddy 3-Column Mega-Menu layout
  const servicesColumns = [
    // Column 1
    [
      { title: "ITR Filing", desc: "Assisted tax filing by qualified tax experts", href: "#advisory" },
      { title: "FlexiBuddy", badge: "NEW", desc: "Empowering Employers to Maximize Tax Savings with Custom Benefits", href: "#pricing" },
      { title: "Tax Planner", desc: "Plan and reduce your tax liability", href: "#advisory" },
      { title: "Income Tax Notice", desc: "Resolve notices of all types", href: "#advisory" },
      { title: "Appeal", desc: "Navigate tax dispute appeals and resolutions", href: "#advisory" },
      { title: "Lower Deduction Certificate", desc: "Minimize Tax Deductions with form 13", href: "#solutions" },
    ],
    // Column 2
    [
      { title: "Self-Filing", desc: "Do It Yourself- Quick, Easy, and Affordable Tax Filing", href: "/" },
      { title: "Schedule a Call", desc: "Seamless access to consultations with tax experts", href: "#advisory" },
      { title: "MyBizCFO", desc: "Virtual CFO services for small businesses", href: "#pricing" },
      { title: "GST Filing", desc: "GST registration and timely filing", href: "#solutions" },
      { title: "HUF Registration & Filing", desc: "Streamline HUF Filing, Maximize Returns", href: "#solutions" },
      { title: "PF Withdrawal", desc: "Effortless Provident Fund Withdrawals", href: "#solutions" },
    ],
    // Column 3
    [
      { title: "Legal Service", desc: "Expert Legal Support – Anytime, Anywhere", href: "#solutions" },
      { title: "TDS Return Filing", desc: "Seamless TDS Filing Solutions", href: "#solutions" },
      { title: "Accounting Services", desc: "Balancing Books, Maximizing Profits", href: "#solutions" },
      { title: "Business License Registration", desc: "Fast, simple business license registration", href: "#solutions" },
      { title: "Company Registration Online", desc: "Easy online company registration", href: "#solutions" },
      { title: "US Tax Filing", desc: "US tax preparation and filing by experts", href: "#solutions" },
    ],
  ];

  const resourcesColumns = [
    // Column 1
    [
      { title: "Income Tax Calculator", desc: "Compare Old vs New Tax Regime liability", href: "#compliance" },
      { title: "HRA Exemption Calculator", desc: "Calculate Section 10(13A) house rent allowance savings", href: "#compliance" },
      { title: "Statutory Compliance Calendar", desc: "FY 2026-27 mandatory filing deadlines & cycles", href: "#compliance" },
    ],
    // Column 2
    [
      { title: "2B ITC Matcher Tool", desc: "Auto-reconcile purchase register with GSTR-2B credit", href: "#compliance" },
      { title: "Advance Tax Estimator", desc: "Calculate quarterly installments & avoid 234B/C interest", href: "#compliance" },
      { title: "Notice Scrutiny Playbook", desc: "Step-by-step resolution for 143(1), 139(9) & 148 notices", href: "#compliance" },
    ],
  ];

  const corporateColumns = [
    // Column 1
    [
      { title: "FlexiBenefits for Employees", badge: "NEW", desc: "Empowering employers to maximize employee tax savings", href: "#pricing" },
      { title: "Corporate Compliance Retainer", desc: "Dedicated CA desk managing GST, TDS & MCA ROC governance", href: "#pricing" },
      { title: "Employee Group Tax Filing", desc: "Assisted ITR filing & live CA workshops for company staff", href: "#pricing" },
    ],
    // Column 2
    [
      { title: "Multi-State GST Desk", desc: "Centralized compliance & audit across Indian state branches", href: "#pricing" },
      { title: "Virtual CFO for Startups", desc: "Monthly MIS, financial controls & investor cashflows", href: "#pricing" },
      { title: "Statutory Audit Representation", desc: "Direct Chartered Accountant defense during scrutiny", href: "#pricing" },
    ],
  ];

  return (
    <>
      {/* 1. TOP INSTITUTIONAL BAR */}
      <div className="w-full bg-[#1e6ae0] border-b border-blue-400/30 text-xs sm:text-[13px] py-3 px-4 sm:px-6 lg:px-8 text-blue-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              ISO 27001 Certified Financial Data Security
            </span>
            <span className="hidden md:inline text-blue-300">|</span>
            <span className="hidden md:inline text-blue-100 font-normal">
              Statutory Compliance & CA Advisory Desk • FY 2026-27
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-blue-100 font-medium">Helpline: +91 1800 419 8292</span>
            <Link href="/" className="text-white hover:text-blue-100 font-bold flex items-center gap-1">
              <span>App Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Sticky while scrolling like TaxBuddy) */}
      <header className="sticky top-0 z-50 w-full bg-[#2B7FFF] text-white shadow-md shadow-blue-950/10 transition-shadow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/web" className="flex items-center gap-2">
            <TaxLogo variant="white" size="md" />
          </Link>

          {/* Desktop Menu with Sublink Mega Menus */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-wide text-blue-50">
            {/* 1. Services Dropdown Button */}
            <div
              className="py-6 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                className={`hover:text-white transition-colors flex items-center gap-1.5 py-1 ${
                  activeDropdown === "services" ? "text-white font-black" : ""
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-white" : "opacity-80"
                  }`}
                />
              </button>
            </div>

            {/* 2. Resources Dropdown Button */}
            <div
              className="py-6 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                className={`hover:text-white transition-colors flex items-center gap-1.5 py-1 ${
                  activeDropdown === "resources" ? "text-white font-black" : ""
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "resources" ? "rotate-180 text-white" : "opacity-80"
                  }`}
                />
              </button>
            </div>

            {/* 3. Corporate Tie-up Dropdown Button */}
            <div
              className="py-6 cursor-pointer"
              onMouseEnter={() => setActiveDropdown("corporate")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "corporate" ? null : "corporate")}
                className={`hover:text-white transition-colors flex items-center gap-1.5 py-1 ${
                  activeDropdown === "corporate" ? "text-white font-black" : ""
                }`}
              >
                <span>Corporate tie-up</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "corporate" ? "rotate-180 text-white" : "opacity-80"
                  }`}
                />
              </button>
            </div>

            {/* Client App Link */}
            <Link href="/" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1 font-semibold">
              <span>Mobile App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4.5 py-2 rounded-md text-xs font-bold text-[#2B7FFF] bg-white hover:bg-blue-50 shadow-sm transition-all flex items-center gap-1"
            >
              <span>Login</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="#advisory"
              className="px-4.5 py-2 rounded-md bg-[#1354be] hover:bg-[#0f46a0] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Speak with a CA</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Services Mega Menu Card (TaxBuddy 3-Column Structured Dropdown) */}
          {activeDropdown === "services" && (
            <div
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="hidden lg:block absolute top-[72px] left-1/2 -translate-x-1/2 w-[980px] max-w-[96vw] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
            >
              <div className="grid grid-cols-3 gap-x-8 gap-y-5">
                {servicesColumns.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {col.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group block p-1.5 -m-1.5 rounded-lg hover:bg-blue-50/70 transition-all text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#2B7FFF] transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-500 text-white shadow-xs leading-none">
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2B7FFF] group-hover:translate-x-0.5 transition-all inline-block ml-0.5" />
                        </div>
                        <p className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug group-hover:text-slate-700">
                          {item.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Dropdown Card */}
          {activeDropdown === "resources" && (
            <div
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="hidden lg:block absolute top-[72px] left-1/2 -translate-x-1/2 w-[760px] max-w-[95vw] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 p-7 z-50 animate-in fade-in slide-in-from-top-2 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {resourcesColumns.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {col.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group block p-1.5 -m-1.5 rounded-lg hover:bg-blue-50/70 transition-all text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#2B7FFF] transition-colors">
                            {item.title}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2B7FFF] group-hover:translate-x-0.5 transition-all inline-block ml-0.5" />
                        </div>
                        <p className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug group-hover:text-slate-700">
                          {item.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Corporate Tie-up Dropdown Card */}
          {activeDropdown === "corporate" && (
            <div
              onMouseEnter={() => setActiveDropdown("corporate")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="hidden lg:block absolute top-[72px] left-1/2 -translate-x-1/2 w-[760px] max-w-[95vw] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 p-7 z-50 animate-in fade-in slide-in-from-top-2 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {corporateColumns.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {col.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group block p-1.5 -m-1.5 rounded-lg hover:bg-blue-50/70 transition-all text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[14px] font-bold text-slate-900 group-hover:text-[#2B7FFF] transition-colors">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-amber-500 text-white shadow-xs leading-none">
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2B7FFF] group-hover:translate-x-0.5 transition-all inline-block ml-0.5" />
                        </div>
                        <p className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug group-hover:text-slate-700">
                          {item.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-md bg-[#1d6ee6] text-white hover:bg-[#165fc7]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer with Collapsible Submenus */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2473e8] border-t border-blue-400/40 px-6 py-5 space-y-3.5 text-white max-h-[80vh] overflow-y-auto">
            {/* Mobile Services */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "services" ? null : "services")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-1"
              >
                <span>Services & ITR Filing</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenuOpen === "services" && (
                <div className="pl-3 pt-2 space-y-2.5 border-l border-blue-300/40 mt-1">
                  {servicesColumns.flat().map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-blue-100 hover:text-white"
                    >
                      <span className="font-semibold text-white">{item.title}</span> →{" "}
                      <span className="text-[11px] text-blue-200">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "resources" ? null : "resources")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-1"
              >
                <span>Resources & Schedule</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === "resources" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenuOpen === "resources" && (
                <div className="pl-3 pt-2 space-y-2.5 border-l border-blue-300/40 mt-1">
                  {resourcesColumns.flat().map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-blue-100 hover:text-white"
                    >
                      <span className="font-semibold text-white">{item.title}</span> →{" "}
                      <span className="text-[11px] text-blue-200">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Corporate */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "corporate" ? null : "corporate")}
                className="w-full flex items-center justify-between text-sm font-semibold text-white py-1"
              >
                <span>Corporate Tie-up</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === "corporate" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenuOpen === "corporate" && (
                <div className="pl-3 pt-2 space-y-2.5 border-l border-blue-300/40 mt-1">
                  {corporateColumns.flat().map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-blue-100 hover:text-white"
                    >
                      <span className="font-semibold text-white">{item.title}</span> →{" "}
                      <span className="text-[11px] text-blue-200">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-white pt-1">
              Mobile App Showcase →
            </Link>

            <div className="pt-3 border-t border-blue-400/30 flex flex-col gap-2">
              <Link href="/login" className="w-full py-2.5 text-center text-xs font-bold text-[#2B7FFF] bg-white rounded-md">
                Client Portal Login
              </Link>
              <a href="#advisory" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#1354be] rounded-md">
                Speak with a Senior CA
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
