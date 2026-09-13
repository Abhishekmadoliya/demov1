"use client";

import React, { useState } from "react";

export default function WebComplianceScheduleSection() {
  const [selectedEntity, setSelectedEntity] = useState<"pvtltd" | "llp" | "prop">("pvtltd");

  const complianceSchedule = {
    pvtltd: [
      { code: "GSTR-3B", name: "Monthly Summary GST Return", cycle: "Monthly (20th)", penalty: "Late fee + 18% p.a. interest", status: "Mandatory" },
      { code: "GSTR-1", name: "Outward Supplies Statement", cycle: "Monthly (11th)", penalty: "Blocked E-Way Bill generation", status: "Mandatory" },
      { code: "Form 26Q", name: "Quarterly TDS Return (Non-Salary)", cycle: "Quarterly", penalty: "₹200/day delay fee under Sec 234E", status: "Mandatory" },
      { code: "ITR-6", name: "Corporate Income Tax Return", cycle: "Annual (31 Oct)", penalty: "Sec 234F fee + loss carry-forward lapse", status: "Annual" },
      { code: "AOC-4 & MGT-7", name: "MCA ROC Annual Financials & Return", cycle: "Annual (30 Oct)", penalty: "₹100/day per director disqualification", status: "Annual" },
      { code: "DIR-3 KYC", name: "Director Annual Web-KYC", cycle: "Annual (30 Sep)", penalty: "DIN deactivation + ₹5,000 penalty", status: "Annual" },
    ],
    llp: [
      { code: "GSTR-1 & 3B", name: "GST Outward & Summary Returns", cycle: "Monthly", penalty: "Late fee + blocked billing", status: "Mandatory" },
      { code: "Form 11", name: "LLP Annual Return with ROC", cycle: "Annual (30 May)", penalty: "₹100/day compounding fine", status: "Annual" },
      { code: "Form 8", name: "Statement of Account & Solvency", cycle: "Annual (30 Oct)", penalty: "₹100/day delay penalty", status: "Annual" },
      { code: "ITR-5", name: "Partnership & LLP Tax Return", cycle: "Annual (31 Jul / 31 Oct)", penalty: "Late filing fee under Sec 234F", status: "Annual" },
      { code: "Form 24Q/26Q", name: "Quarterly TDS Statements", cycle: "Quarterly", penalty: "Sec 234E daily late fee", status: "Statutory" },
    ],
    prop: [
      { code: "GSTR-3B / CMP-08", name: "GST Return (Regular / Composition)", cycle: "Monthly / Quarterly", penalty: "Late fees and interest", status: "Mandatory" },
      { code: "ITR-3 / ITR-4", name: "Business Income Tax Return", cycle: "Annual (31 Jul)", penalty: "Sec 234F penalty", status: "Annual" },
      { code: "Advance Tax", name: "Quarterly Advance Tax Installments", cycle: "15 Jun, Sep, Dec, Mar", penalty: "Interest under Sec 234B & 234C", status: "Statutory" },
      { code: "Udyam Renewal", name: "MSME Annual Classification Update", cycle: "Annual", penalty: "Loss of priority banking subsidies", status: "Recommended" },
    ],
  };

  return (
    <section id="compliance" className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2B7FFF]">
            Statutory Schedule
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Regulatory Calendar &amp; Penalty Risk Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select your entity structure to review mandatory statutory deadlines:
          </p>
        </div>

        {/* Entity Selector */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setSelectedEntity("pvtltd")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedEntity === "pvtltd"
                ? "bg-[#2B7FFF] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
            }`}
          >
            Private Limited Company
          </button>
          <button
            onClick={() => setSelectedEntity("llp")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedEntity === "llp"
                ? "bg-[#2B7FFF] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
            }`}
          >
            LLP &amp; Partnership Firm
          </button>
          <button
            onClick={() => setSelectedEntity("prop")}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedEntity === "prop"
                ? "bg-[#2B7FFF] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
            }`}
          >
            Proprietorship &amp; MSME
          </button>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Statutory Filing</th>
                  <th className="py-3 px-4">Filing Cycle</th>
                  <th className="py-3 px-4">Non-Compliance Consequence</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {complianceSchedule[selectedEntity].map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">{item.code}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">{item.name}</p>
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">
                      {item.cycle}
                    </td>
                    <td className="py-3 px-4 text-rose-600 font-medium">
                      {item.penalty}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
            <span>All filings are scheduled and tracked automatically in the Tax Solutions client portal.</span>
            <a href="#advisory" className="text-[#2B7FFF] font-bold hover:underline">
              Get Zero-Penalty Retainer Desk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
