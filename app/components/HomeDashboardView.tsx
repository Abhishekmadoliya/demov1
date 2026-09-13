"use client";

import React, { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  FilePlus,
  UploadCloud,
  CreditCard,
  FolderArchive,
  IndianRupee,
  FileSpreadsheet,
  Calculator,
  ShieldCheck,
  Store,
  Home,
  Briefcase,
  FileText,
  Folder,
  User,
} from "lucide-react";

interface HomeDashboardViewProps {
  onNavigateTab?: (tab: string) => void;
  onLogout?: () => void;
}

export default function HomeDashboardView({
  onNavigateTab,
  onLogout,
}: HomeDashboardViewProps) {
  const [activeBottomTab, setActiveBottomTab] = useState("home");
  const [notificationCount, setNotificationCount] = useState(2);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="relative w-full h-full min-h-full flex flex-col justify-between bg-[#f4f7fc] select-none overflow-hidden">
      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Top Header Bar (Royal Blue) */}
        <div
          className="w-full px-5 pt-5 pb-8 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #0052cc 0%, #0747a6 100%)",
          }}
        >
          <div className="space-y-0.5">
            <p className="text-[13px] font-normal text-blue-100">
              Good Morning,
            </p>
            <h1 className="text-[19px] sm:text-[20px] font-bold text-white flex items-center gap-1.5 tracking-tight">
              ABC Traders
            </h1>
          </div>

          {/* Notification Bell */}
          <button
            onClick={() => showToast("You have 2 pending compliance alerts")}
            className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-[#0747a6]" />
            )}
          </button>
        </div>

        {/* Content Container - Pulls up slightly over blue header */}
        <div className="px-4 -mt-4 space-y-3.5">
          {/* 1. YOUR COMPLIANCE OVERVIEW CARD */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-50">
              <h2 className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 tracking-tight">
                Your Compliance Overview
              </h2>
              <button
                onClick={() => showToast("Opening full compliance breakdown...")}
                className="text-[12px] font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>

            {/* List of Compliance Statuses */}
            <div className="space-y-3">
              {/* GST */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="font-bold text-slate-800">GST</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-emerald-600 font-medium text-[12.5px] whitespace-nowrap">
                    Up to Date
                  </span>
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100/80" />

              {/* TDS */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="font-bold text-slate-800">TDS</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-amber-500 font-medium text-[12.5px] whitespace-nowrap">
                    Documents Required
                  </span>
                  <div className="w-4.5 h-4.5 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100/80" />

              {/* ITR */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="font-bold text-slate-800">ITR</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-emerald-600 font-medium text-[12.5px] whitespace-nowrap">
                    Filed
                  </span>
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-100/80" />

              {/* PF / ESI */}
              <div className="flex items-center justify-between text-[13px] py-0.5">
                <span className="font-bold text-slate-800">PF / ESI</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-sky-600 font-medium text-[12.5px] whitespace-nowrap">
                    Up to Date
                  </span>
                  <div className="w-4.5 h-4.5 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. QUICK ACTIONS */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            <h2 className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 tracking-tight mb-3">
              Quick Actions
            </h2>

            <div className="grid grid-cols-4 gap-2">
              {/* Request Service */}
              <button
                onClick={() => showToast("Request New Service initiated")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50/80 group-hover:bg-blue-100 group-active:scale-95 transition-all flex items-center justify-center text-blue-600 mb-1.5">
                  <FilePlus className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Request<br />Service
                </span>
              </button>

              {/* Upload Documents */}
              <button
                onClick={() => showToast("Document Upload Vault opened")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-50/80 group-hover:bg-purple-100 group-active:scale-95 transition-all flex items-center justify-center text-purple-600 mb-1.5">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Upload<br />Documents
                </span>
              </button>

              {/* Make Payment */}
              <button
                onClick={() => showToast("Payment Gateway opened")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50/80 group-hover:bg-sky-100 group-active:scale-95 transition-all flex items-center justify-center text-sky-600 mb-1.5">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  Make<br />Payment
                </span>
              </button>

              {/* My Documents */}
              <button
                onClick={() => showToast("Accessing Client Documents Vault...")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 group-hover:bg-indigo-100 group-active:scale-95 transition-all flex items-center justify-center text-indigo-600 mb-1.5">
                  <FolderArchive className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                  My<br />Documents
                </span>
              </button>
            </div>
          </div>

          {/* 3. OUR SERVICES */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 tracking-tight">
                Our Services
              </h2>
              <button
                onClick={() => showToast("Opening full services catalogue...")}
                className="text-[12px] font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>

            {/* 5 Services Icons Row */}
            <div className="grid grid-cols-5 gap-1.5">
              {/* GST */}
              <button
                onClick={() => showToast("GST Filing & Services selected")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all flex items-center justify-center text-blue-600 border border-blue-200/60 mb-1">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700">GST</span>
              </button>

              {/* ITR */}
              <button
                onClick={() => showToast("Income Tax Services selected")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-all flex items-center justify-center text-emerald-600 border border-emerald-200/60 mb-1">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700">ITR</span>
              </button>

              {/* TDS */}
              <button
                onClick={() => showToast("TDS Services selected")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-all flex items-center justify-center text-slate-600 border border-slate-200/60 mb-1">
                  <Calculator className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700">TDS</span>
              </button>

              {/* PF / ESI */}
              <button
                onClick={() => showToast("PF & ESI Compliance selected")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-teal-50 group-hover:bg-teal-100 transition-all flex items-center justify-center text-teal-600 border border-teal-200/60 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 leading-tight">PF/ESI</span>
              </button>

              {/* MSME */}
              <button
                onClick={() => showToast("MSME & Business Registrations selected")}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-rose-50 group-hover:bg-rose-100 transition-all flex items-center justify-center text-rose-600 border border-rose-200/60 mb-1">
                  <Store className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700">MSME</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM NAVIGATION BAR */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200/80 px-2 py-1.5 flex items-center justify-around z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
        {/* 1. Home */}
        <button
          onClick={() => setActiveBottomTab("home")}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 cursor-pointer ${
            activeBottomTab === "home"
              ? "text-[var(--brand-primary)]"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => {
            setActiveBottomTab("services");
            showToast("Services section selected");
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 cursor-pointer ${
            activeBottomTab === "services"
              ? "text-[var(--brand-primary)]"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-medium">Services</span>
        </button>

        {/* 3. Requests */}
        <button
          onClick={() => {
            setActiveBottomTab("requests");
            showToast("Requests tracking selected");
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 cursor-pointer ${
            activeBottomTab === "requests"
              ? "text-[var(--brand-primary)]"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-medium">Requests</span>
        </button>

        {/* 4. Documents */}
        <button
          onClick={() => {
            setActiveBottomTab("documents");
            showToast("My Documents vault selected");
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 cursor-pointer ${
            activeBottomTab === "documents"
              ? "text-[var(--brand-primary)]"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <Folder className="w-5 h-5" />
          <span className="text-[10px] font-medium">Documents</span>
        </button>

        {/* 5. Profile */}
        <button
          onClick={() => {
            setActiveBottomTab("profile");
            if (onLogout) {
              if (confirm("Logout from ABC Traders account?")) onLogout();
            } else {
              showToast("Profile settings selected");
            }
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-3 cursor-pointer ${
            activeBottomTab === "profile"
              ? "text-[var(--brand-primary)]"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>

      {/* Floating Micro-Toast Notification */}
      {toastMessage && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md z-50 flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {toastMessage}
        </div>
      )}
    </div>
  );
}
