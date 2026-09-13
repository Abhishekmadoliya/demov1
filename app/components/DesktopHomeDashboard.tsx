"use client";

import React, { useState } from "react";
import TaxLogo from "./TaxLogo";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  FolderLock,
  Calendar,
  Settings,
  Search,
  Bell,
  LogOut,
  MessageSquare,
  FilePlus,
  UploadCloud,
  CreditCard,
  FolderArchive,
  IndianRupee,
  FileSpreadsheet,
  Calculator,
  ShieldCheck,
  Store,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

interface DesktopHomeDashboardProps {
  onLogout?: () => void;
}

export default function DesktopHomeDashboard({
  onLogout,
}: DesktopHomeDashboardProps) {
  const [activeNav, setActiveNav] = useState("home");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const navItems = [
    { id: "home", label: "Dashboard", icon: LayoutDashboard },
    { id: "services", label: "Our Services", icon: Briefcase },
    { id: "requests", label: "Filings & Requests", icon: FileText },
    { id: "documents", label: "Documents Vault", icon: FolderLock },
    { id: "calendar", label: "Compliance Calendar", icon: Calendar },
    { id: "profile", label: "Company Settings", icon: Settings },
  ];

  return (
    <div className="w-full h-full min-h-[750px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex bg-[#f8fafc] text-slate-800 select-none">
      {/* 1. Left Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between p-5 flex-shrink-0 border-r border-slate-800">
        <div className="space-y-6">
          {/* Logo */}
          <div className="py-2">
            <TaxLogo variant="white" size="sm" />
          </div>

          {/* Business Profile Tag */}
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 font-bold text-white flex items-center justify-center flex-shrink-0 text-xs">
              AT
            </div>
            <div className="overflow-hidden">
              <h3 className="text-xs font-bold text-white truncate">ABC Traders</h3>
              <p className="text-[11px] text-slate-400 truncate">GSTIN: 29ABCDE1234F1Z5</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    showToast(`${item.label} section selected`);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeNav === item.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Support & Logout */}
        <div className="pt-4 border-t border-slate-800 space-y-2">
          <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/30">
            <p className="text-[11px] font-bold text-blue-300">Dedicated Tax Advisor</p>
            <p className="text-[10px] text-slate-400 mt-0.5">CA Rajesh Sharma</p>
            <button
              onClick={() => showToast("Connecting to CA Rajesh Sharma via WhatsApp...")}
              className="mt-2 w-full py-1.5 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 text-[10px] font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (onLogout) onLogout();
              else showToast("Logged out successfully");
            }}
            className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Content Viewport */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">Good Morning,</p>
            <h1 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              ABC Traders
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                Active Client
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, filings, GSTIN..."
                className="w-64 pl-9 pr-4 py-2 bg-slate-100/80 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-slate-200"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* Notification Bell */}
            <button
              onClick={() => showToast("You have 2 pending compliance alerts")}
              className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" />
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-8 space-y-6">
          {/* Section 1: Compliance Overview Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Your Compliance Overview</h2>
                <p className="text-xs text-slate-500">Live regulatory filing status for FY 2026-27</p>
              </div>
              <button
                onClick={() => showToast("Opening full compliance ledger...")}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>View Complete Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* GST */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 truncate">
                    GST Filing
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-bold border border-emerald-200 inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Up to Date</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">GSTR-3B & GSTR-1</h3>
                <p className="text-xs text-slate-500 mt-1">Next due date: 20 Sep 2026</p>
              </div>

              {/* TDS */}
              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs hover:shadow-md transition-all bg-amber-50/20">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 truncate">
                    TDS Returns
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10.5px] font-bold border border-amber-300 inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Docs Required</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Form 26Q (Q2)</h3>
                <p className="text-xs text-amber-600 mt-1">Bank statement needed for verification</p>
              </div>

              {/* ITR */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 truncate">
                    Income Tax
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-bold border border-emerald-200 inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Filed</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">ITR-6 (Corporate)</h3>
                <p className="text-xs text-slate-500 mt-1">AY 2026-27 filed successfully</p>
              </div>

              {/* PF / ESI */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 truncate">
                    Payroll Compliance
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[10.5px] font-bold border border-sky-200 inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>Up to Date</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">PF & ESI Monthly</h3>
                <p className="text-xs text-slate-500 mt-1">ECR generated & paid</p>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Actions */}
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-3">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Request Service", desc: "Apply for GST, ITR or Audit", icon: FilePlus, color: "bg-blue-50 text-blue-600" },
                { title: "Upload Documents", desc: "Upload bills, invoices & receipts", icon: UploadCloud, color: "bg-purple-50 text-purple-600" },
                { title: "Make Payment", desc: "Pay tax challans & consultancy", icon: CreditCard, color: "bg-sky-50 text-sky-600" },
                { title: "My Documents Vault", desc: "Access filed certificates & receipts", icon: FolderArchive, color: "bg-indigo-50 text-indigo-600" },
              ].map((item, i) => {
                const ActionIcon = item.icon;
                return (
                  <button
                    key={i}
                    onClick={() => showToast(`${item.title} activated`)}
                    className="bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-blue-500/40 hover:shadow-md transition-all flex items-center gap-4 text-left cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <ActionIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Our Services Catalogue */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Our Services</h2>
                <p className="text-xs text-slate-500">Explore comprehensive taxation & legal compliance packages</p>
              </div>
              <button
                onClick={() => showToast("Opening all services catalog...")}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>View Full Catalogue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { name: "GST Services", desc: "Registration, Filing & Audit", icon: IndianRupee, color: "bg-blue-50 text-blue-600" },
                { name: "Income Tax (ITR)", desc: "Corporate & Individual Returns", icon: FileSpreadsheet, color: "bg-emerald-50 text-emerald-600" },
                { name: "TDS Filings", desc: "Form 24Q, 26Q & 27Q", icon: Calculator, color: "bg-slate-100 text-slate-700" },
                { name: "PF & ESI Compliance", desc: "Payroll, Registers & Returns", icon: ShieldCheck, color: "bg-teal-50 text-teal-600" },
                { name: "MSME & Registrations", desc: "Udyam, Trademark & Private Ltd", icon: Store, color: "bg-rose-50 text-rose-600" },
              ].map((serv, idx) => {
                const ServIcon = serv.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => showToast(`${serv.name} package details opened`)}
                    className="p-4 rounded-xl border border-slate-200/70 hover:border-blue-500 hover:bg-slate-50/50 transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div className={`w-9 h-9 rounded-lg ${serv.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                      <ServIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800">{serv.name}</h3>
                      <p className="text-[10px] text-slate-500 mt-0.5">{serv.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Micro-Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl z-50 flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
